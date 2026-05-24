type Props = {
  label?: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait'
}

const aspectClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[4/1]',
  portrait: 'aspect-[3/4]',
}

export default function PlaceholderImage({
  label,
  className = '',
  aspectRatio = 'video',
}: Props) {
  return (
    <div
      className={`${aspectClasses[aspectRatio]} bg-stone-200 flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <svg
        className="w-10 h-10 text-stone-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      {label && (
        <span className="text-sm text-stone-400 font-sans px-2 text-center">
          {label}
        </span>
      )}
    </div>
  )
}
