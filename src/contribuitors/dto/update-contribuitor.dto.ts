import { PartialType } from '@nestjs/mapped-types';
import { ListContribuitorDto } from './create-contribuitor.dto';
import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";

export class UpdateContribuitorDto extends PartialType(ListContribuitorDto) {
    @IsString()
    @IsOptional()
    name?:string;
    @IsString()
    @IsOptional()
    gmail?:string;
    @IsDate()
    @IsOptional()
    date?:Date;
    @IsNumber()
    @IsOptional()
    total?:number;
    @IsString()
    @IsOptional()
    url?:string;

}
