export default interface IPersonalProject
{
    projects: IProject[]
}

export interface IProject
{
    name: string;
    description: string;
    url: string;
    imageSrc: string;
    containerClassName: string;
}