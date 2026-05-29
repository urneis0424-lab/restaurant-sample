import { useEffect } from 'react'

type SEOProps = {
  title: string
  description: string
}

/**
 * ページごとに <title> と <meta name="description"> を動的に切り替える
 */
export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = description
  }, [title, description])
}
