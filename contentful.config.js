const url = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  contentful: {
    space_id: process.env.CONTENTFUL_SPACE_ID || '',
    cda_token: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    cpa_token: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  },
  meta: {
    title: 'AI Content Planning and Optimization Software - MarketMuse',
    description: 'AI content strategy and planning software that shows you what to write and why. Build content plans in minutes based on insights from your site and search',
    url,
    image:
      'https://images.ctfassets.net/w8vf7dk7f259/4bucno7z1xAyVI5MOkU6Pu/ded83d0ec1eb732ae3a81ddab7a18877/fallback-image-03.jpg',
  },
  icon: {
    light:
      'https://images.ctfassets.net/9bidivd5skba/ALGiF5ckkV5PNSpU1vkmT/7914262025c14b30c64f7d2bb57ad7a5/marketmuse-logo.svg',
    dark: 'https://images.ctfassets.net/9bidivd5skba/ALGiF5ckkV5PNSpU1vkmT/7914262025c14b30c64f7d2bb57ad7a5/marketmuse-logo.svg',
    width: 66,
    height: 64,
  },
};
