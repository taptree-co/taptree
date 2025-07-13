export function normalizeDomain(raw: string) {
  // if it’s a Preview deployment, fall back to your real domain…
  if (raw.endsWith('.vercel.app') && process.env.VERCEL_ENV !== 'production') {
    return process.env.NEXT_PUBLIC_ROOT_DOMAIN!;
  }
  return raw;
}