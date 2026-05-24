import { storeData } from '../data/store'

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto">
        <div className="px-4">
          <p className="section-subtitle">GALLERY</p>
          <h2 className="section-title">店内のご紹介</h2>
          <div className="section-divider" />
        </div>

        <div
          className="
            flex md:grid md:grid-cols-2 lg:grid-cols-4
            gap-4
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            pb-4 md:pb-0
            px-4
            scrollbar-hide
          "
        >
          {storeData.gallery.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 md:flex-shrink w-[72vw] max-w-[320px] md:w-auto md:max-w-none snap-start card group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-stone-700 text-center">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center gap-1.5 mt-4">
          {storeData.gallery.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-stone-300" />
          ))}
        </div>

        <p className="text-center text-sm text-stone-400 mt-6 px-4">
          ※ テーブル席・カウンター席・半個室など、各種シーンに合わせてご案内いたします
        </p>
      </div>
    </section>
  )
}
