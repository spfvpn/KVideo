'use client'
import { useEffect } from 'react'

export default function AdSide() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, [])

  return (
    <aside className="w-[300px] sticky top-4 ml-4 hidden lg:block">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-xxx"
        data-ad-slot="xxx"
        data-ad-format="vertical"
      ></ins>
    </aside>
  )
}