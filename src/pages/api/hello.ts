// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { continents } from "./_continents";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(continents.map(continent => ({
    uid: continent.uid,
    name: continent.name,
    message: continent.message,
    imageUrl: continent.imageUrl
  })))
}
