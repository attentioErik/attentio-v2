import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
    ],
  },
  async redirects() {
    return [
      // Old /services/ → /tjenester/ redirects
      { source: '/services', destination: '/tjenester', permanent: true },
      { source: '/services/:path*', destination: '/tjenester/:path*', permanent: true },

      // Sub-service pages moved to /tjenester/
      { source: '/ai-chatbot', destination: '/tjenester/ai-chatbot', permanent: true },
      { source: '/ai-automation', destination: '/tjenester/ai-automation', permanent: true },
      { source: '/seo', destination: '/tjenester/seo', permanent: true },
      { source: '/google-ads', destination: '/tjenester/google-ads', permanent: true },
      { source: '/sosiale-medier', destination: '/tjenester/sosiale-medier', permanent: true },
      { source: '/innholdsproduksjon', destination: '/tjenester/innholdsproduksjon', permanent: true },
      { source: '/apputvikling', destination: '/tjenester/web-app-nettside', permanent: true },
      { source: '/nettbutikk', destination: '/tjenester/nettbutikk', permanent: true },
      { source: '/ui-ux-design', destination: '/tjenester/web-app-nettside', permanent: true },
      { source: '/videograf', destination: '/tjenester/videograf', permanent: true },
      { source: '/fotograf', destination: '/tjenester/video-foto', permanent: true },
      { source: '/dronefilm', destination: '/tjenester/dronefilm', permanent: true },
      { source: '/reklamefilm', destination: '/tjenester/video-foto', permanent: true },
      { source: '/grafisk-design', destination: '/tjenester/grafisk-design', permanent: true },
      { source: '/branding-logodesign', destination: '/tjenester/branding-logodesign', permanent: true },
      { source: '/firmabil-design', destination: '/tjenester/branding-design', permanent: true },
      { source: '/3d-visualisering', destination: '/tjenester/3d-visualisering', permanent: true },
      { source: '/digital-twin', destination: '/tjenester/digital-twin', permanent: true },
      { source: '/eiendom-3d', destination: '/tjenester/eiendom-3d', permanent: true },
      { source: '/bygg-anlegg-3d', destination: '/tjenester/bygg-anlegg-3d', permanent: true },

      // Legacy sub-service name redirects (root-level)
      { source: '/ai-markedsforing', destination: '/tjenester/ai-automation', permanent: true },
      { source: '/automatisering', destination: '/tjenester/ai-automation', permanent: true },
      { source: '/systemintegrasjoner', destination: '/tjenester/ai-automation', permanent: true },
      { source: '/ai-automatisering', destination: '/tjenester/ai-automation', permanent: true },
      { source: '/hosting-vedlikehold', destination: '/tjenester/web-app-nettside', permanent: true },
      { source: '/web-app', destination: '/tjenester/web-app-nettside', permanent: true },
      { source: '/produktfoto', destination: '/tjenester/video-foto', permanent: true },
      { source: '/portrettfoto', destination: '/tjenester/video-foto', permanent: true },
      { source: '/foto-video', destination: '/tjenester/video-foto', permanent: true },
      { source: '/digital-markedsforing', destination: '/tjenester/digital-markedsforing', permanent: true },
      { source: '/design', destination: '/tjenester/branding-design', permanent: true },
      { source: '/3d-scanning', destination: '/tjenester/3d-scanning', permanent: true },

      // Old /tjenester/ slug redirects (Google-indexed URLs)
      { source: '/tjenester/markedsforing', destination: '/tjenester/digital-markedsforing', permanent: true },
      { source: '/tjenester/nettside', destination: '/tjenester/web-app-nettside', permanent: true },
      { source: '/tjenester/medieproduksjon', destination: '/tjenester/video-foto', permanent: true },
      { source: '/tjenester/seo-sokemotoroptimalisering', destination: '/tjenester/seo', permanent: true },
      { source: '/tjenester/automatisering', destination: '/tjenester/ai-automation', permanent: true },
      { source: '/tjenester/hosting-og-vedlikehold', destination: '/tjenester/web-app-nettside', permanent: true },
      { source: '/tjenester/logodesign-branding', destination: '/tjenester/branding-design', permanent: true },
      { source: '/tjenester/ai-content-skap-innhold-raskere-med-ai', destination: '/tjenester/ai-chatbot', permanent: true },
      { source: '/tjenester/ai-automatisering', destination: '/tjenester/ai-automation', permanent: true },
      { source: '/tjenester/fotograf', destination: '/tjenester/video-foto', permanent: true },
      { source: '/tjenester/reklamefilm', destination: '/tjenester/video-foto', permanent: true },
      { source: '/tjenester/apputvikling', destination: '/tjenester/web-app-nettside', permanent: true },
      { source: '/tjenester/sosiale-medier-some', destination: '/tjenester/digital-markedsforing', permanent: true },
      { source: '/tjenester/firmabil-design', destination: '/tjenester/branding-design', permanent: true },
      { source: '/tjenester/datadrevet-markedsforing-med-kunstig-intelligens', destination: '/tjenester/digital-markedsforing', permanent: true },
      { source: '/tjenester/ui-ux-design', destination: '/tjenester/web-app-nettside', permanent: true },
      { source: '/tjenester/web-app-nettsid', destination: '/tjenester/web-app-nettside', permanent: true },

      // Other redirects
      { source: '/om-attentio', destination: '/om-oss', permanent: true },

      // Legacy Attentio Explore 3D scanning redirects
      { source: '/attentioexplore-3dscanning', destination: '/tjenester/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/:path*', destination: '/tjenester/3d-scanning', permanent: true },
    ]
  },
}

export default nextConfig
