import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";


export interface Branches{
    name:string,
    date:Date,
    protected:boolean,
}

export class ListBranchGitDto {
    
    total:number;
    branches:Array<Branches>;
    constructor(total:number,branches:Array<Branches>){
        this.total=total;
        this.branches=branches;
    }
}
