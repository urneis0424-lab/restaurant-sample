import PlaceholderImage from './PlaceholderImage'
import { storeData } from '../data/store'

export default function Parking() {
  return (
    <section id="parking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <p className="section-subtitle">PARKING</p>
        <h2 className="section-title">駐車場</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="card overflow-hidden">
            <PlaceholderImage
              label="駐車場・店舗周辺の写真"
              aspectRatio="video"
            />
            <div className="p-4 bg-stone-50 border-t border-stone-100">
              <p className="text-xs text-stone-400 text-center">店舗裏手の無料駐車場</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-stone-800 mb-1">
                  無料駐車場あり
                  <span className="ml-2 text-primary-700">（{storeData.parking.spaces}台）</span>
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {storeData.parking.note}
                </p>
              </div>
            </div>

            <div className="bg-warm-50 rounded-lg p-4 border border-stone-100">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-bold text-stone-700">近隣コインパーキング</p>
              </div>
              <p className="text-sm text-stone-500">
                満車の場合は徒歩2〜3分圏内にコインパーキングがございます。
                お気軽にスタッフへお声がけください。
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-stone-800 mb-1">公共交通機関でのアクセス</p>
                <p className="text-sm text-stone-500">
                  金沢駅より路線バス「本町一丁目」下車 徒歩3分
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
