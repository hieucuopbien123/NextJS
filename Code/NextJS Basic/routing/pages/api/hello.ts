// # Typescript

import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.status(200).json({ name: 'John Doe' })
}
