import Bundlr from '@bundlr-network/client'
import logger from '@lib/logger'
import {
  API_ORIGINS,
  APP_NAME,
  BUNDLR_CURRENCY,
  BUNDLR_METADATA_UPLOAD_URL,
  IS_MAINNET
} from '@utils/constants'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url: string | null
  id: string | null
  success: boolean
}

const PRIVATE_KEY = process.env.BUNDLR_PRIVATE_KEY

const upload = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const origin = req.headers.origin
  if (IS_MAINNET) {
    if (!origin || !API_ORIGINS.includes(origin))
      return res.status(403).json({ url: null, id: null, success: false })
  }
  if (req.method !== 'POST' || !req.body)
    return res.status(400).json({ url: null, id: null, success: false })

  const payload = JSON.stringify(req.body)
  try {
    const bundlr = new Bundlr(
      BUNDLR_METADATA_UPLOAD_URL,
      BUNDLR_CURRENCY,
      PRIVATE_KEY
    )
    const tags = [
      { name: 'Content-Type', value: 'application/json' },
      { name: 'App-Name', value: APP_NAME }
    ]
    const { data } = await bundlr.upload(payload, {
      tags
    })
    return res.status(200).json({
      success: true,
      url: `https://arweave.net/${data?.id}`,
      id: data?.id
    })
  } catch (error) {
    logger.error('[API Error Upload to Arweave]', error)
    return res.status(200).json({ success: false, url: null, id: null })
  }
}

export default upload
