import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";

export interface ListCommits{
    name:string,
    description:string,
    user:string,
    date:Date,
}


export class ListCommitDto {
    total:number;
    commits:Array<ListCommits>;
    constructor(total:number,commits:Array<ListCommits>){
        this.total=total;
        this.commits=commits;
    }

}
