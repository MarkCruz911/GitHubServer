import { PartialType } from '@nestjs/mapped-types';
import { ListRepositoryResponseDto } from './create-repository.dto';
import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";
export class UpdateRepositoryDto extends PartialType(ListRepositoryResponseDto) {
    @IsString()
    @IsOptional()
    title?:string;
    @IsDate()
    @IsOptional()
    date?:Date;
    @IsNumber()
    @IsOptional()
    total?:number;
    @IsString()
    @IsOptional()
    status?:string;

}
