const defaultMeta = {
  pageTitle: 'Title of website',
  description: 'Description of website',
  siteName: 'Name of website',
  contentType: 'website',
  url: 'https://www.dominio.com',
  socialBanner: 'https://www.dominio.com/social_banner.jpg', //Image on public
  bannerWidth: '740',
  bannerHeight: '300',
  twitterCardType: 'summary_large_image'
}

export const generateMeta = (metaOverrides = {}) => {
  const generateMeta = {...defaultMeta, ...metaOverrides}
  
  return [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: generateMeta.description },

    // Open Graph
    { property: 'og:site_name', content: generateMeta.siteName },
    { property: 'og:type', content: generateMeta.contentType },
    { property: 'og:url', content: generateMeta.url },
    { property: 'og:title', content: generateMeta.pageTitle },
    { property: 'og:description', content: generateMeta.description },
    { property: 'og:image', content: generateMeta.socialBanner },
    { property: 'og:image:width', content:generateMeta.bannerWidth  },
    { property: 'og:image:height', content: generateMeta.bannerHeight },

    // Twitter
    { name: 'twitter:site', content: generateMeta.siteName  },
    { name: 'twitter:card', content: generateMeta.twitterCardType },
    { name: 'twitter:url', content: generateMeta.url },
    { name: 'twitter:title', content: generateMeta.pageTitle },
    { name: 'twitter:description', content: generateMeta.description },
    { name: 'twitter:image', content: generateMeta.socialBanner },
  ]
}