import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";

export enum StatusRepository{
    PUBLIC="public",
    PRIVATE="private"
}

//type StatusRepositoryDos="private"|"public"

//const x = StatusRepository.PUBLIC;
//const y:StatusRepositoryDos="public";

export interface Repository{ 
    title:string,
    description:string,
    date:Date,
    status:StatusRepository,
}

export class ListRepositoryResponseDto {
    total:number;
    //repositories:Repository[]
    repositories:Array<Repository>;

    constructor(total:number,repositories:Array<Repository>){
        this.total=total;
        this.repositories=repositories;
    }
}
