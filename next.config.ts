import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'static.www.nfl.com',
      pathname: '/**',
    }],
  },
}

export default config