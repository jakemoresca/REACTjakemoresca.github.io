export default interface IExperience
{
    workExperience: IWorkExperience[]
}

export interface IWorkExperience
{
    position: string;
    company: string;
    from: string;
    to: string;
    responsibilities: string[];
}