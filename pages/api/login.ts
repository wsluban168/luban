import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed')
    return
  }

  const { pwd } = JSON.parse(req.body || '{}')

  if (pwd === process.env.ADMIN_PASSWORD) {
    res.status(200).end()
  } else {
    res.status(401).end()
  }
}
