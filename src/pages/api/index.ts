// @ts-nocheck

import { NextApiResponse, NextApiRequest } from 'next';
import { getRepository } from 'typeorm';
import { Globaluser } from '../../../server/model/mmo_account/entities/Globaluser';

export default async function handler(_req: NextApiRequest, res: NextApiResponse<any[]>) {
  const blogRepository = getRepository(Globaluser, 'account');
  const user = await blogRepository.findOne({ userid: 222 });
  return res.status(200).json([{ a: user }]);
}
