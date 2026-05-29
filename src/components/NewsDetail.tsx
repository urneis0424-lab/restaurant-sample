import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

type NewsDetailItem = {
  id: string
  date: string
  tag: string
  title: string
  body: string
}

const tagColors: Record<string, string> = {
  お知らせ: 'bg-stone-100 text-stone-600',
  メニュー: 'bg-amber-50 text-amber-700',
  メディア: 'bg-blue-50 text-blue-700',
  イベント: 'bg-green-50 text-green-700',
}

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>()
  const [item, setItem] = useState<NewsDetailItem | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!id) return
    fetch(`/api/news/${id}`)
      .then((r) => {
        if (r.status === 404) { setNotFound(true); return null }
        return r.json()
      })
      .then((data: NewsDetailItem | null) => {
        if (data) setItem(data)
      })
      .catch(() => setNotFound(true))
  }, [id])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-primary-700 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            お知らせ一覧に戻る
          </Link>

          {notFound && (
            <div className="text-center py-20 text-stone-400">
              <p className="text-lg">記事が見つかりませんでした。</p>
            </div>
          )}

          {!notFound && !item && (
            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-stone-200 rounded w-24" />
              <div className="h-8 bg-stone-200 rounded w-3/4" />
              <div className="h-4 bg-stone-200 rounded" />
              <div className="h-4 bg-stone-200 rounded w-5/6" />
            </div>
          )}

          {item && (
            <article className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden">
              <div className="px-6 py-8 sm:px-10 sm:py-10 border-b border-stone-100">
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-sm text-stone-400 font-mono">{item.date}</time>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      tagColors[item.tag] ?? 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-800 leading-snug">
                  {item.title}
                </h1>
              </div>
              <div
                className="cms-body px-6 py-8 sm:px-10 sm:py-10"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
