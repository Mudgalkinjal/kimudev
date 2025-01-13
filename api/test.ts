import { VercelRequest, VercelResponse } from '@vercel/node'

const handler = async (req: VercelRequest, res: VercelResponse) => {
  res.status(200).json({ message: 'Test endpoint working!' })
}

export default handler
