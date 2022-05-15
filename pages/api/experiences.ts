import { NextApiRequest, NextApiResponse } from 'next/types';
import { IWorkExperience } from '../data/experience';

export default async (req: NextApiRequest, res: NextApiResponse<IWorkExperience>) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    const experiences = await loadExperiences();
    res.end(experiences);
 }

 export async function loadExperiences() {
    const experiences = await import('../data/experiences.json');
  
    return experiences.default;
  }