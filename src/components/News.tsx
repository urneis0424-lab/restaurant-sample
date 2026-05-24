import { storeData } from '../data/store'

const tagColors: Record<string, string> = {
  お知らせ: 'bg-stone-100 text-stone-600',
  メニュー: 'bg-amber-50 text-amber-700',
  メディア: 'bg-blue-50 text-blue-700',
  イベント: 'bg-green-50 text-green-700',
}

export default function News() {
  return (
    <section id="news" className="py-20 bg-warm-50">
      <div className="max-w-3xl mx-auto px-4">
        <p className="section-subtitle">NEWS</p>
        <h2 className="section-title">お知らせ</h2>
        <div className="section-divider" />

        <ul className="divide-y divide-stone-100 bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden">
          {storeData.news.map((item, i) => (
            <li key={i} className="hover:bg-warm-50 transition-colors">
              <a href="#" className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 py-4">
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
              </a>
            </li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <a href="#" className="btn-outline text-sm">
            お知らせ一覧を見る
          </a>
        </div>
      </div>
    </section>
  )
}
