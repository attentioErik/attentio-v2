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

      // AI Automatisering sub-service redirects
      { source: '/ai-markedsforing', destination: '/ai-automatisering', permanent: true },
      { source: '/automatisering', destination: '/ai-automatisering', permanent: true },
      { source: '/systemintegrasjoner', destination: '/ai-automatisering', permanent: true },

      // Web & App sub-service redirects
      { source: '/hosting-vedlikehold', destination: '/web-app', permanent: true },

      // Foto & Video sub-service redirects
      { source: '/produktfoto', destination: '/foto-video', permanent: true },
      { source: '/portrettfoto', destination: '/foto-video', permanent: true },

      // Legacy Attentio Explore 3D scanning project redirects
      { source: '/attentioexplore-3dscanning/endelig-120', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/endelig-98-2', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/endelig-76', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/panorama-view-3d-scan', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/utedesign-oslo-showroom', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/suite-panorama-hotell', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/tidevann', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/utestue', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/utedesign-stavanger-3d-scan', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/nesfjellet-oversikt', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/rorbusuite-3d-scan', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/panoramasalen-3d-scan', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/showroom-utedesign-straume', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/kawa-drammen', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/ibiza', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/flo-fjaere', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/foyn', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/enebolig-vinterbro', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/endelig-98', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/austefjordstunet', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/enebolig-abc-hus', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/bryggkjeller-phr', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/endeli-76', destination: '/3d-scanning', permanent: true },
      { source: '/attentioexplore-3dscanning/360-bilde', destination: '/3d-scanning', permanent: true },
    ]
  },
}

export default nextConfig
