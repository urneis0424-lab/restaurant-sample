import { storeData } from '../data/store'

export default function Reservation() {
  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <p className="section-subtitle">RESERVATION</p>
        <h2 className="section-title">ご予約</h2>
        <div className="section-divider" />

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-warm-50 rounded-lg p-6 border border-stone-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-800 mb-2">お電話でのご予約</h3>
            <a
              href={`tel:${storeData.reservation.phone.replace(/-/g, '')}`}
              className="text-2xl font-bold text-primary-700 hover:text-primary-800 transition-colors mb-2"
            >
              {storeData.reservation.phone}
            </a>
            <p className="text-sm text-stone-500">受付時間：{storeData.reservation.hours}</p>
          </div>

          <div className="bg-warm-50 rounded-lg p-6 border border-stone-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-stone-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-800 mb-2">ネット予約</h3>
            <p className="text-sm text-stone-500 mb-4">24時間いつでもご予約いただけます</p>
            <a href={storeData.reservation.onlineUrl} className="btn-primary text-sm w-full">
              ネット予約はこちら
            </a>
          </div>
        </div>

        <div className="bg-stone-50 rounded-lg p-6 border border-stone-100">
          <h4 className="font-bold text-stone-700 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ご予約に関するご案内
          </h4>
          <div className="text-sm text-stone-600 space-y-1.5 leading-relaxed">
            {storeData.reservation.note.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
