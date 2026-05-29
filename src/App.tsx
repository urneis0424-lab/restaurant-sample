import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSEO } from './hooks/useSEO'
import { useStructuredData } from './hooks/useStructuredData'
import { storeData } from './data/store'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import BusinessHours from './components/BusinessHours'
import News from './components/News'
import Reservation from './components/Reservation'
import Smoking from './components/Smoking'
import Gallery from './components/Gallery'
import Parking from './components/Parking'
import Menu from './components/Menu'
import Payment from './components/Payment'
import MapSection from './components/MapSection'
import SNSLinks from './components/SNSLinks'
import Footer from './components/Footer'
import NewsDetail from './components/NewsDetail'
import NewsListPage from './components/NewsListPage'

type Tab = '基本情報' | 'メニュー'

function MainPage() {
  const [activeTab, setActiveTab] = useState<Tab>('基本情報')

  useSEO({
    title: `${storeData.name} | ${storeData.catchcopy}`,
    description: `${storeData.catchcopy} ${storeData.description.replace(/\n/g, ' ')}`.slice(0, 120),
  })

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: storeData.name,
    description: storeData.description.replace(/\n/g, ' '),
    telephone: storeData.phone,
    servesCuisine: storeData.genre,
    address: {
      '@type': 'PostalAddress',
      streetAddress: storeData.address,
      addressCountry: 'JP',
    },
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: Object.values(storeData.sns).filter((v) => v && v !== '#'),
  })

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* ページタブ */}
        <div className="sticky top-16 z-40 bg-white border-b border-stone-200 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <div className="flex">
              {(['基本情報', 'メニュー'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={`flex-1 py-4 text-center font-bold text-sm tracking-widest transition-all duration-200 border-b-2 ${
                    activeTab === tab
                      ? 'border-primary-700 text-primary-700'
                      : 'border-transparent text-stone-400 hover:text-stone-600 hover:border-stone-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === '基本情報' ? (
          <>
            <About />
            <BusinessHours />
            <News />
            <Reservation />
            <Smoking />
            <Gallery />
            <Parking />
            <Payment />
            <MapSection />
            <SNSLinks />
          </>
        ) : (
          <Menu />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsListPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
