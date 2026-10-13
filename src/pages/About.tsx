import { useState } from 'react'
import { profile, socials, wallets, type Social, type Wallet } from '../data/socials'
import Loader from '../components/Loader'

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 9l6-6M4 3h5v5" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.1">
      <rect x="1.5" y="3" width="13" height="10" rx="1" />
      <path d="M2 4l6 5 6-5" />
    </svg>
  )
}

function SocialCard({ social }: { social: Social }) {
  const cardCls =
    'flex items-center justify-between border border-white/15 p-4 transition-colors'
  const inner = (
    <>
      <div>
        <p className="font-display text-sm font-semibold text-white">{social.name}</p>
        <p className="mt-1 text-[11px] text-neutral-500">{social.handle}</p>
      </div>
      <span className="text-neutral-500 transition-colors group-hover:text-white">
        <ArrowIcon />
      </span>
    </>
  )

  if (!social.url) {
    return <div className={`${cardCls} opacity-40`}>{inner}</div>
  }
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noreferrer noopener"
      className={`${cardCls} group hover:border-white/40 hover:bg-white/[0.03]`}
    >
      {inner}
    </a>
  )
}

const shorten = (address: string) =>
  address.length > 20 ? `${address.slice(0, 10)}...${address.slice(-6)}` : address

function WalletRow({ wallet }: { wallet: Wallet }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(wallet.address)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard indisponível */
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 px-4 py-3.5 last:border-b-0">
      <p className="font-display text-sm font-semibold text-white">
        {wallet.name}
        <span className="ml-2 text-[10px] font-bold tracking-wider text-accent">{wallet.ticker}</span>
      </p>
      <button
        type="button"
        onClick={copy}
        title={wallet.address}
        aria-label={`Copy ${wallet.name} address`}
        className="flex items-center gap-2.5 border border-white/15 px-2.5 py-1.5 text-[11px] text-neutral-300 transition-colors hover:border-white/40"
      >
        <span>{shorten(wallet.address)}</span>
        <span className="text-[10px] text-neutral-500">{copied ? 'copied' : 'copy'}</span>
      </button>
    </div>
  )
}

export default function About() {
  const [loading, setLoading] = useState(true)
  const [imgOk, setImgOk] = useState(true)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard indisponível */
    }
  }

  if (loading) return <Loader onDone={() => setLoading(false)} />
  return (
    <section className="mx-auto w-full max-w-[880px] px-6 pb-20 pt-28 sm:pt-32">
      <div className="flex flex-col items-start gap-8 sm:flex-row">
        {imgOk ? (
          <img
            src={profile.avatar}
            alt={profile.name}
            onError={() => setImgOk(false)}
            className="h-[120px] w-[120px] border border-white/15 object-cover grayscale"
          />
        ) : (
          <div className="flex h-[120px] w-[120px] items-center justify-center border border-white/15 font-display text-5xl font-extrabold text-white/80">
            {profile.name.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h1 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-sm text-neutral-400">{profile.role}</p>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-5 inline-flex items-center gap-3 border border-white/15 px-4 py-2.5 text-xs text-white transition-colors hover:border-white/40"
          >
            <span className="text-neutral-400">
              <MailIcon />
            </span>
            {profile.email}
            <span className="text-[10px] text-neutral-500">{copied ? 'copied' : 'copy'}</span>
          </button>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        <div>
          <p className="mb-4 text-[10px] tracking-[0.3em] text-neutral-500">SOCIAL</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {socials.map((s) => (
              <SocialCard key={s.name} social={s} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-[0.3em] text-neutral-500">DONATE</p>
          <div className="border border-white/15">
            {wallets.map((w) => (
              <WalletRow key={w.ticker} wallet={w} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}