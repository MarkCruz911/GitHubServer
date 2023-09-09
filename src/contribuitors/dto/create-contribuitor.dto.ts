import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";


export interface ListContribuitor{
    login:string,
    avatar_url:string,
    html_url:string,
}

export class ListContribuitorDto {
    total:number;
    colaborators:Array<ListContribuitor>;

    constructor(total:number, colaborators:Array<ListContribuitor>){
        this.total=total;
        this.colaborators=colaborators;
    }
}
