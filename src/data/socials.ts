// ─────────────────────────────────────────────────────────────
//  Edite aqui: perfil e redes sociais.
//  Deixe a URL vazia ('') enquanto não tiver o link — o card
//  aparece apagado e sem clique até você preencher.
// ─────────────────────────────────────────────────────────────

// Links (cole as URLs completas aqui)
export const GITHUB_URL = 'https://github.com/keseyf'
export const INSTAGRAM_URL = 'https://www.instagram.com/iwardean/'
export const TWITTER_URL = 'https://x.com/seufilipi'
export const YOUTUBE_URL = 'https://www.youtube.com/@fallhaha'
export const TIKTOK_URL = 'https://www.tiktok.com/@iwardeann'
export const DISCORD_URL = 'https://discord.gg/U2aq9GvG'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/felipe-silva-b02919271?utm_source=share_via&utm_content=profile&utm_medium=member_android'

// Handles exibidos embaixo do nome de cada rede
export const GITHUB_HANDLE = '@keseyf'
export const INSTAGRAM_HANDLE = '@iwardean'
export const TWITTER_HANDLE = '@seufilipi'
export const YOUTUBE_HANDLE = '@fallhaha'
export const TIKTOK_HANDLE = '@iwardeann'
export const DISCORD_HANDLE = 'deffectusx#0001'
export const LINKEDIN_HANDLE = 'iwardean'

// Perfil (página About)
export const profile = {
  name: 'iwardean, Felipe',
  role: 'Developer, Analist & Designer',
  email: 'felipedeev@gmail.com',
  // Coloque sua foto em public/avatar.jpg (se não existir, aparece um placeholder)
  avatar: '/avatar.jpg',
}

export interface Social {
  name: string
  handle: string
  url: string
}

export const socials: Social[] = [
  { name: 'GitHub', handle: GITHUB_HANDLE, url: GITHUB_URL },
  { name: 'Instagram', handle: INSTAGRAM_HANDLE, url: INSTAGRAM_URL },
  { name: 'Twitter / X', handle: TWITTER_HANDLE, url: TWITTER_URL },
  { name: 'YouTube', handle: YOUTUBE_HANDLE, url: YOUTUBE_URL },
  { name: 'TikTok', handle: TIKTOK_HANDLE, url: TIKTOK_URL },
  { name: 'Discord', handle: DISCORD_HANDLE, url: DISCORD_URL },
  { name: 'LinkedIn', handle: LINKEDIN_HANDLE, url: LINKEDIN_URL },
]


// ─────────────────────────────────────────────────────────────
//  Carteiras (seção DONATE da página About)
// ─────────────────────────────────────────────────────────────
export const BTC_ADDRESS = 'bc1q9r7xnrl7qtyxhsvwmpn63g6l0wja2rmudyltpe'
export const ETH_ADDRESS = '0x2238C552b408Ed1756EFa89A1f242eF5A44dde1D'
export const XMR_ADDRESS = '49aAcqiKYpD9nJJFeMWQ1SPzniFNppcWYbxXhHQwuJYX'
 
export interface Wallet {
  name: string
  ticker: string
  address: string
}
 
export const wallets: Wallet[] = [
  { name: 'Bitcoin', ticker: 'BTC', address: BTC_ADDRESS },
  { name: 'Ethereum', ticker: 'ETH', address: ETH_ADDRESS },
  { name: 'Monero', ticker: 'XMR', address: XMR_ADDRESS },
]