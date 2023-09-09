import { PartialType } from '@nestjs/mapped-types';
import { ListCommitDto } from './create-commit.dto';
import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";


export class UpdateCommitDto extends PartialType(ListCommitDto) {
    @IsString()
    @IsOptional()
    title?:string;
    @IsString()
    @IsOptional()
    description?:string;
    @IsString()
    @IsOptional()
    nameuser?:string;
    @IsDate()
    @IsOptional()
    date?:Date;
    @IsNumber()
    @IsOptional()
    total?:number;
    @IsString()
    @IsOptional()
    project?:string;

}
