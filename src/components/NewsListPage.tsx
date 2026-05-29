import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { useStructuredData } from '../hooks/useStructuredData'
import { storeData } from '../data/store'
import Header from './Header'
import Footer from './Footer'

type NewsItem = {
  id: string
  date: string
  tag: string
  title: string
}

const tagColors: Record<string, string> = {
  お知らせ: 'bg-stone-100 text-stone-600',
  メニュー: 'bg-amber-50 text-amber-700',
  メディア: 'bg-blue-50 text-blue-700',
  イベント: 'bg-green-50 text-green-700',
}

const fallback: NewsItem[] = storeData.news.map(({ id, date, tag, title }) => ({ id, date, tag, title }))

export default function NewsListPage() {
  const [items, setItems] = useState<NewsItem[]>(fallback)

  useSEO({
    title: `お知らせ一覧 | ${storeData.name}`,
    description: `${storeData.name}からのお知らせ一覧です。`,
  })

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: typeof window !== 'undefined' ? window.location.origin : '' },
      { '@type': 'ListItem', position: 2, name: 'お知らせ一覧', item: typeof window !== 'undefined' ? `${window.location.origin}/news` : '' },
    ],
  })

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data: NewsItem[]) => setItems(data))
      .catch(() => {})
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4">

          {/* パンくず */}
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
            <Link to="/" className="hover:text-primary-700 transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-stone-600">お知らせ一覧</span>
          </nav>

          <p className="section-subtitle">NEWS</p>
          <h1 className="section-title">お知らせ一覧</h1>
          <div className="section-divider" />

          <ul className="divide-y divide-stone-100 bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden">
            {items.map((item) => (
              <li key={item.id} className="hover:bg-warm-50 transition-colors">
                <Link
                  to={`/news/${item.id}`}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 py-5"
                >
                  <time className="text-sm text-stone-400 flex-shrink-0 font-mono">
                    {item.date}
                  </time>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex-shrink-0 w-fit ${
                      tagColors[item.tag] ?? 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-stone-700 text-sm hover:text-primary-700 transition-colors leading-relaxed">
                    {item.title}
                  </span>
                  <svg className="w-4 h-4 text-stone-300 flex-shrink-0 hidden sm:block ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <Link to="/" className="btn-outline text-sm">
              トップに戻る
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
