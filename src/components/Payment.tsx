import { storeData } from '../data/store'

export default function Payment() {
  return (
    <section id="payment" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <p className="section-subtitle">PAYMENT</p>
        <h2 className="section-title">お支払い方法</h2>
        <div className="section-divider" />

        <div className="flex flex-wrap gap-2">
          {storeData.payment.map((method) => (
            <span
              key={method.name}
              className="bg-warm-50 border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700 font-medium"
            >
              {method.name}
            </span>
          ))}
        </div>

        <p className="text-center text-xs text-stone-400 mt-6">
          ※ ご不明な点はお気軽にスタッフまでお申し付けください
        </p>
      </div>
    </section>
  )
}
