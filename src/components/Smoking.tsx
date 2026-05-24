import { storeData } from '../data/store'

export default function Smoking() {
  const { allowed, note } = storeData.smoking

  return (
    <section className="py-12 bg-stone-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
              allowed ? 'bg-stone-600' : 'bg-white/10'
            }`}
          >
            {allowed ? (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zM18.85 4C17.23 4 16 5.26 16 6.9c0 2.21 1.71 3.02 2.44 3.77.61.61 1.56 1.6 1.56 2.83V14h2v-.5c0-1.15-.95-2.12-1.6-2.77C19.67 10 18 9.15 18 6.9c0-.5.38-.9.85-.9s.85.4.85.9V8h2V6.9C21.7 5.26 20.47 4 18.85 4z" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            )}
          </div>
          <div>
            <p className="text-white/60 text-xs tracking-widest mb-1">SMOKING</p>
            <p className="text-white font-serif text-xl font-bold mb-1">
              {allowed ? '喫煙可能' : '禁煙'}
            </p>
            <p className="text-white/70 text-sm">{note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
