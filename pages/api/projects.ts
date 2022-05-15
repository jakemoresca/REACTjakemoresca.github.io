import { NextApiRequest, NextApiResponse } from 'next/types';
import { IPersonalProject } from '../data/project';

export default async (req: NextApiRequest, res: NextApiResponse<IPersonalProject>) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    const projects = await loadProjects();
    res.end(projects);
 }

 export async function loadProjects() {
    const projects = await import('../data/projects.json');
  
    return projects.default;
  }