// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { continents } from "../_continents";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query.slug);

  const continent = continents.find(continent => continent.uid === req.query.slug);
  if (!continent) return res.status(404).json({ message: 'data not found' });
  return res.status(200).json(continent);
}
