import { storeData } from '../data/store'

const footerLinks = [
  { label: 'お店について', href: '#about' },
  { label: '営業時間', href: '#hours' },
  { label: 'メニュー', href: '#menu' },
  { label: 'お知らせ', href: '#news' },
  { label: 'ご予約', href: '#reservation' },
  { label: 'アクセス', href: '#access' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-stone-700">
          <div>
            <p className="font-serif text-white text-2xl font-bold tracking-wider mb-1">
              {storeData.name}
            </p>
            <p className="text-primary-400 text-xs tracking-widest mb-4">
              {storeData.nameEn.toUpperCase()}
            </p>
            <p className="text-stone-400 text-sm leading-relaxed">
              旬の素材と丁寧な仕事が生む、ほっこり和食。
              <br />
              金沢の食文化を大切に、心のこもった料理をお届けします。
            </p>
          </div>

          <div>
            <p className="text-white text-sm font-bold tracking-widest mb-4">MENU</p>
            <nav className="grid grid-cols-2 gap-1">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-stone-400 text-sm hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-white text-sm font-bold tracking-widest mb-4">CONTACT</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-stone-500 text-xs mb-1">住所</p>
                <address className="not-italic text-stone-300 leading-relaxed">
                  {storeData.address}
                </address>
              </div>
              <div>
                <p className="text-stone-500 text-xs mb-1">電話</p>
                <a
                  href={`tel:${storeData.phone.replace(/-/g, '')}`}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  {storeData.phone}
                </a>
              </div>
              <div>
                <p className="text-stone-500 text-xs mb-1">定休日</p>
                <p className="text-stone-300">{storeData.closedDays}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-xs">
            © {year} {storeData.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-stone-500">
            <a href="#" className="hover:text-stone-300 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-stone-300 transition-colors">特定商取引法</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
