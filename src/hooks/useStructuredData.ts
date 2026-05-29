import { useEffect } from 'react'

/**
 * JSON-LD 形式の構造化データを <head> に注入・クリーンアップする
 * data が null の場合は何もしない（データ取得中の待機に使う）
 */
export function useStructuredData(data: object | null) {
  const json = data ? JSON.stringify(data) : null

  useEffect(() => {
    if (!json) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = json
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [json])
}
