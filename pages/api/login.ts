import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { pwd } = JSON.parse(req.body || '{}')

  if (pwd === process.env.ADMIN_PASSWORD) {
    res.status(200).end()
  } else {
    res.status(401).end()
  }
}
