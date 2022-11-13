export interface Skill {
    name:string;
    proficiency:number;
}

export interface SkillsData{
    title:string;
    skills:Skill[]
}