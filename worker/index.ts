import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  ASSETS: Fetcher
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())

app.get('/api/store', (c) => {
  return c.json({
    name: '旬菜 つばき',
    nameEn: 'Shunsai Tsubaki',
    phone: '076-000-0000',
    address: '〒920-0000 石川県金沢市本町1丁目2-3',
    businessHours: [
      { day: 'ランチ', time: '11:30 〜 14:30', lastOrder: '14:00' },
      { day: 'ディナー', time: '17:30 〜 22:00', lastOrder: '21:30' },
    ],
    closedDays: '毎週火曜日・第3水曜日',
  })
})

app.get('/api/news', (c) => {
  return c.json([
    {
      date: '2026.05.20',
      tag: 'お知らせ',
      title: '夏の特別コース「夏彩膳」の予約受付を開始しました',
    },
    {
      date: '2026.05.10',
      tag: 'メニュー',
      title: '5月の旬の一品「新玉ねぎと鰹の土佐酢ゼリー」を追加しました',
    },
  ])
})

export default app
