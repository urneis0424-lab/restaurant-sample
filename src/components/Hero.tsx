import { storeData } from '../data/store'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-stone-800">
        <img
          src="/images/hero.png"
          alt="炭火やきとり どっかん。"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/50 to-stone-900/70" />
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <p className="text-white/80 text-sm tracking-[0.3em] mb-4 font-sans">
          {storeData.nameEn.toUpperCase()}
        </p>
        <h1 className="text-white font-serif text-5xl md:text-7xl font-bold tracking-widest mb-6 leading-tight">
          {storeData.name}
        </h1>
        <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
        <p className="text-white/90 text-lg md:text-xl font-serif tracking-wider leading-relaxed">
          累計30万本突破！<br />金沢名物の本格やきとり
        </p>
        <div className="mt-10 flex justify-center">
          <a href="#reservation" className="btn-primary shadow-lg">
            ご予約はこちら
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        aria-label="下にスクロール"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
