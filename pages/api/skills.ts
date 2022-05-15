import { NextApiRequest, NextApiResponse } from 'next/types';
import ISkill from '../../data/skill';

export default async function Skills(req: NextApiRequest, res: NextApiResponse<ISkill>) {
   res.statusCode = 200
   res.setHeader('Content-Type', 'application/json')

   const skills = await loadSkills();
   res.end(skills);
}

export async function loadSkills() {
   const skills = await import('../../data/skills.json');

   return skills.default;
}