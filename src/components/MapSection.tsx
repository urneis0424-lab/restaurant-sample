import { storeData } from '../data/store'

export default function MapSection() {
  return (
    <section id="access" className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4">
        <p className="section-subtitle">ACCESS</p>
        <h2 className="section-title">アクセス</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-xs tracking-widest text-stone-400 mb-2">住所</p>
              <address className="not-italic font-medium text-stone-800 leading-relaxed">
                {storeData.address}
              </address>
            </div>

            <div>
              <p className="text-xs tracking-widest text-stone-400 mb-2">電話番号</p>
              <a
                href={`tel:${storeData.phone.replace(/-/g, '')}`}
                className="text-xl font-bold text-primary-700 hover:text-primary-800 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {storeData.phone}
              </a>
            </div>

            <div>
              <p className="text-xs tracking-widest text-stone-400 mb-2">最寄り交通</p>
              <p className="text-stone-700 text-sm leading-relaxed">
                金沢駅より路線バス「本町一丁目」下車 徒歩3分
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  storeData.addressMapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Google マップで開く
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-lg overflow-hidden shadow-md border border-stone-200 h-80 md:h-96">
              <iframe
                src="https://maps.google.com/maps?q=36.5798944,136.6113942&z=17&output=embed&hl=ja"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="炭火やきとり どっかん。 地図"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
