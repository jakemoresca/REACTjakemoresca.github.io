export interface ISkill
{
    icons: ISkillIcon[],
    skills: string[]
}

export interface ISkillIcon
{
    name: string;
    css: string;
    colored: boolean;
}