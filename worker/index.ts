/// <reference types="@cloudflare/workers-types" />
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { storeData } from '../src/data/store'

type Bindings = {
  ASSETS: unknown
  MICROCMS_SERVICE_DOMAIN: string | undefined
  MICROCMS_API_KEY: string | undefined
}

type MicroCMSNewsItem = {
  id: string
  date?: string
  publishedAt: string
  tag: string
  title: string
  body?: string
}

type MicroCMSMenuItem = {
  id: string
  name: string
  description: string
  category: string
  image?: { url: string }
}

type MicroCMSHoursSlot = {
  id: string
  day: string
  time: string
  lastOrder?: string
}

type MicroCMSClosedDays = {
  text: string
}

async function fetchMicroCMS<T>(
  serviceDomain: string,
  apiKey: string,
  endpoint: string
): Promise<{ contents: T[] }> {
  const res = await fetch(
    `https://${serviceDomain}.microcms.io/api/v1/${endpoint}?limit=100`,
    { headers: { 'X-MICROCMS-API-KEY': apiKey } }
  )
  if (!res.ok) throw new Error(`microCMS ${endpoint}: ${res.status}`)
  return res.json() as Promise<{ contents: T[] }>
}

async function fetchMicroCMSObject<T>(
  serviceDomain: string,
  apiKey: string,
  endpoint: string
): Promise<T> {
  const res = await fetch(
    `https://${serviceDomain}.microcms.io/api/v1/${endpoint}`,
    { headers: { 'X-MICROCMS-API-KEY': apiKey } }
  )
  if (!res.ok) throw new Error(`microCMS ${endpoint}: ${res.status}`)
  return res.json() as Promise<T>
}

async function fetchMicroCMSSingle<T>(
  serviceDomain: string,
  apiKey: string,
  endpoint: string,
  id: string
): Promise<T> {
  const res = await fetch(
    `https://${serviceDomain}.microcms.io/api/v1/${endpoint}/${id}`,
    { headers: { 'X-MICROCMS-API-KEY': apiKey } }
  )
  if (!res.ok) throw new Error(`microCMS ${endpoint}/${id}: ${res.status}`)
  return res.json() as Promise<T>
}

function formatDate(isoOrText: string): string {
  if (/^\d{4}-\d{2}-\d{2}/.test(isoOrText)) {
    return new Date(isoOrText)
      .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
      .replace(/\//g, '.')
  }
  return isoOrText
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())

app.get('/api/news', async (c) => {
  const domain = c.env.MICROCMS_SERVICE_DOMAIN
  const key = c.env.MICROCMS_API_KEY

  if (domain && key) {
    try {
      const data = await fetchMicroCMS<MicroCMSNewsItem>(domain, key, 'news')
      return c.json(
        data.contents.map((item) => ({
          id: item.id,
          date: formatDate(item.date ?? item.publishedAt),
          tag: item.tag,
          title: item.title,
        }))
      )
    } catch (e) {
      console.error('microCMS news fetch failed:', e)
    }
  }

  return c.json(storeData.news.map(({ id, date, tag, title }) => ({ id, date, tag, title })))
})

app.get('/api/news/:id', async (c) => {
  const id = c.req.param('id')
  const domain = c.env.MICROCMS_SERVICE_DOMAIN
  const key = c.env.MICROCMS_API_KEY

  if (domain && key) {
    try {
      const item = await fetchMicroCMSSingle<MicroCMSNewsItem>(domain, key, 'news', id)
      return c.json({
        id: item.id,
        date: formatDate(item.date ?? item.publishedAt),
        tag: item.tag,
        title: item.title,
        body: item.body ?? '',
      })
    } catch (e) {
      console.error('microCMS news/:id fetch failed:', e)
      return c.json({ error: 'not found' }, 404)
    }
  }

  const item = storeData.news.find((n) => n.id === id)
  if (!item) return c.json({ error: 'not found' }, 404)
  return c.json(item)
})

app.get('/api/menu', async (c) => {
  const domain = c.env.MICROCMS_SERVICE_DOMAIN
  const key = c.env.MICROCMS_API_KEY

  if (domain && key) {
    try {
      const data = await fetchMicroCMS<MicroCMSMenuItem>(domain, key, 'menu')
      return c.json(
        data.contents.map((item) => ({
          name: item.name,
          description: item.description,
          category: item.category,
          image: item.image?.url ?? null,
        }))
      )
    } catch (e) {
      console.error('microCMS menu fetch failed:', e)
    }
  }

  return c.json(storeData.menu)
})

app.get('/api/businesshours', async (c) => {
  const domain = c.env.MICROCMS_SERVICE_DOMAIN
  const key = c.env.MICROCMS_API_KEY

  if (domain && key) {
    try {
      const data = await fetchMicroCMS<MicroCMSHoursSlot>(domain, key, 'businesshours')
      return c.json(
        data.contents.map((item) => ({
          day: item.day,
          time: item.time,
          lastOrder: item.lastOrder ?? null,
        }))
      )
    } catch (e) {
      console.error('microCMS businesshours fetch failed:', e)
    }
  }

  return c.json(storeData.businessHours)
})

app.get('/api/closeddays', async (c) => {
  const domain = c.env.MICROCMS_SERVICE_DOMAIN
  const key = c.env.MICROCMS_API_KEY

  if (domain && key) {
    try {
      const data = await fetchMicroCMSObject<MicroCMSClosedDays>(domain, key, 'closeddays')
      return c.json({ text: data.text })
    } catch (e) {
      console.error('microCMS closeddays fetch failed:', e)
    }
  }

  return c.json({ text: storeData.closedDays })
})

// API以外のルートはすべてアセット（index.html）に渡す → React RouterのSPAルーティングが機能する
app.all('*', (c) => (c.env.ASSETS as Fetcher).fetch(c.req.raw))

export default app
