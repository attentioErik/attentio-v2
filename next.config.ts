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
      { source: '/apputvikling', destination: '/tjenester/apputvikling', permanent: true },
      { source: '/nettbutikk', destination: '/tjenester/nettbutikk', permanent: true },
      { source: '/ui-ux-design', destination: '/tjenester/ui-ux-design', permanent: true },
      { source: '/videograf', destination: '/tjenester/videograf', permanent: true },
      { source: '/fotograf', destination: '/tjenester/fotograf', permanent: true },
      { source: '/dronefilm', destination: '/tjenester/dronefilm', permanent: true },
      { source: '/reklamefilm', destination: '/tjenester/reklamefilm', permanent: true },
      { source: '/grafisk-design', destination: '/tjenester/grafisk-design', permanent: true },
      { source: '/branding-logodesign', destination: '/tjenester/branding-logodesign', permanent: true },
      { source: '/firmabil-design', destination: '/tjenester/firmabil-design', permanent: true },
      { source: '/3d-visualisering', destination: '/tjenester/3d-visualisering', permanent: true },
      { source: '/digital-twin', destination: '/tjenester/digital-twin', permanent: true },
      { source: '/eiendom-3d', destination: '/tjenester/eiendom-3d', permanent: true },
      { source: '/bygg-anlegg-3d', destination: '/tjenester/bygg-anlegg-3d', permanent: true },

      // Legacy sub-service name redirects
      { source: '/ai-markedsforing', destination: '/tjenester/ai-automatisering', permanent: true },
      { source: '/automatisering', destination: '/tjenester/ai-automatisering', permanent: true },
      { source: '/systemintegrasjoner', destination: '/tjenester/ai-automatisering', permanent: true },
      { source: '/ai-automatisering', destination: '/tjenester/ai-automatisering', permanent: true },
      { source: '/hosting-vedlikehold', destination: '/tjenester/web-app-nettsid', permanent: true },
      { source: '/web-app', destination: '/tjenester/web-app-nettsid', permanent: true },
      { source: '/produktfoto', destination: '/tjenester/video-foto', permanent: true },
      { source: '/portrettfoto', destination: '/tjenester/video-foto', permanent: true },
      { source: '/foto-video', destination: '/tjenester/video-foto', permanent: true },
      { source: '/digital-markedsforing', destination: '/tjenester/digital-markedsforing', permanent: true },
      { source: '/design', destination: '/tjenester/branding-design', permanent: true },
      { source: '/3d-scanning', destination: '/tjenester/3d-scanning', permanent: true },

      // Legacy Attentio Explore 3D scanning redirects
      { source: '/attentioexplore-3dscanning', destination: '/tjenester/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/:path*', destination: '/tjenester/3d-scanning', permanent: true },
    ]
  },
}

export default nextConfig
