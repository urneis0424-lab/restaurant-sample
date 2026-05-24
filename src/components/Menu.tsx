import PlaceholderImage from './PlaceholderImage'
import { storeData } from '../data/store'

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto">
        <div className="px-4">
          <p className="section-subtitle">MENU</p>
          <h2 className="section-title">メニュー</h2>
          <div className="section-divider" />
        </div>

        <div
          className="
            flex md:grid md:grid-cols-2 lg:grid-cols-3
            gap-4 md:gap-6
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            pb-4 md:pb-0
            px-4
            scrollbar-hide
          "
        >
          {storeData.menu.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 md:flex-shrink w-[78vw] max-w-[300px] md:w-auto md:max-w-none snap-start card group"
            >
              <div className="relative overflow-hidden aspect-video">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <PlaceholderImage
                    label={item.name}
                    aspectRatio="video"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-serif font-bold text-base md:text-lg text-stone-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center gap-1.5 mt-4">
          {storeData.menu.map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-stone-300" />
          ))}
        </div>

        <div className="text-center mt-10 px-4">
          <p className="text-sm text-stone-400 mb-4">
            ※ メニューは仕入れ状況により変更になる場合がございます
          </p>
          <a href="#" className="btn-outline">
            全メニューを見る
          </a>
        </div>
      </div>
    </section>
  )
}
