import { useEffect, useState } from 'react'
import { storeData } from '../data/store'

const navLinks = [
  { label: 'お店について', href: '#about' },
  { label: '営業時間', href: '#hours' },
  { label: 'メニュー', href: '#menu' },
  { label: 'お知らせ', href: '#news' },
  { label: 'アクセス', href: '#access' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span
            className={`font-serif text-xl font-bold tracking-wider transition-colors duration-300 ${
              scrolled ? 'text-stone-800' : 'text-white'
            }`}
          >
            {storeData.name}
          </span>
          <span
            className={`text-xs tracking-widest transition-colors duration-300 ${
              scrolled ? 'text-primary-700' : 'text-white/80'
            }`}
          >
            {storeData.nameEn.toUpperCase()}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary-700 ${
                scrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${storeData.phone.replace(/-/g, '')}`}
            className={`flex items-center gap-1.5 text-sm font-bold ml-2 transition-colors duration-200 ${
              scrolled ? 'text-primary-700' : 'text-white'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {storeData.phone}
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 transition-colors duration-200 ${
            scrolled ? 'text-stone-700' : 'text-white'
          }`}
          aria-label="メニューを開く"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-stone-100">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 text-sm font-medium text-stone-700 hover:bg-warm-50 hover:text-primary-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${storeData.phone.replace(/-/g, '')}`}
              className="px-6 py-3 text-sm font-bold text-primary-700 flex items-center gap-2 hover:bg-warm-50"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {storeData.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
