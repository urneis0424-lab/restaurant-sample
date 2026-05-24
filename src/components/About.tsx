import { storeData } from '../data/store'

export default function About() {
  return (
    <section id="about" className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle">ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 leading-tight mb-2">
              炭火の旨さを、一串に。
            </h2>
            <div className="w-12 h-0.5 bg-primary-700 mb-8" />
            <div className="space-y-4 text-stone-600 leading-relaxed">
              {storeData.description.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { value: '2002', unit: '年創業', label: '平成14年から地域に根ざす' },
                { value: '30万', unit: '本突破', label: '名物つくね累計販売数' },
                { value: '20', unit: '種以上', label: '豊富なやきとりメニュー' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-4 shadow-sm border border-stone-100">
                  <div className="text-xl font-bold font-serif text-primary-700 leading-tight">
                    {stat.value}
                    <span className="text-xs ml-0.5">{stat.unit}</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/about.png"
              alt="炭火やきとり どっかん。外観"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-700 rounded-lg opacity-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary-700 rounded-lg opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
