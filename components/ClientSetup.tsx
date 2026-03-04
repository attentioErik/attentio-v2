'use client'

import { useEffect } from 'react'

export default function ClientSetup() {
  useEffect(() => {
    // ── Scroll Reveal ──────────────────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    // ── Custom Cursor ──────────────────────────
    const cr = document.getElementById('cursor-dot')
    const crr = document.getElementById('cursor-ring')

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (cr) {
        cr.style.left = mx + 'px'
        cr.style.top = my + 'px'
      }
    }

    const loop = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      if (crr) {
        crr.style.left = rx + 'px'
        crr.style.top = ry + 'px'
      }
      rafId = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    loop()

    // Hover effect on interactive elements
    const addHov = () => crr?.classList.add('hov')
    const removeHov = () => crr?.classList.remove('hov')
    const hovEls = document.querySelectorAll('a, button, [data-cursor="hover"]')
    hovEls.forEach((el) => {
      el.addEventListener('mouseenter', addHov)
      el.addEventListener('mouseleave', removeHov)
    })

    // ── Nav scroll enhancement ─────────────────
    const nav = document.querySelector('nav')
    const onScroll = () => {
      if (!nav) return
      nav.style.backdropFilter =
        window.scrollY > 40 ? 'blur(28px) saturate(2)' : 'blur(20px) saturate(1.5)'
      ;(nav.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter =
        nav.style.backdropFilter
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
      hovEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHov)
        el.removeEventListener('mouseleave', removeHov)
      })
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" className="cursor" aria-hidden="true" />
      <div id="cursor-ring" className="cursor-ring" aria-hidden="true" />
    </>
  )
}
