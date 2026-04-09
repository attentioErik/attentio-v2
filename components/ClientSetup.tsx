'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientSetup() {
  const pathname = usePathname()

  // Scroll reveal — reinitialize on every route change
  // Once an element is revealed, leave it visible (no flicker on scroll back)
  useEffect(() => {
    document.querySelectorAll('.reveal.in').forEach((el) => {
      el.classList.remove('in')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const raf = requestAnimationFrame(() => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach((el) => {
        // Immediately mark in-viewport elements as revealed
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in')
        } else {
          observer.observe(el)
        }
      })
    })

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [pathname])

  useEffect(() => {
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
    // Toggle a data attribute (CSS handles styles) and only when state changes
    // to avoid style recalculation on every scroll tick
    const nav = document.querySelector('nav')
    let isScrolled = false
    const onScroll = () => {
      if (!nav) return
      const shouldBeScrolled = window.scrollY > 40
      if (shouldBeScrolled !== isScrolled) {
        isScrolled = shouldBeScrolled
        nav.setAttribute('data-scrolled', shouldBeScrolled ? 'true' : 'false')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
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
