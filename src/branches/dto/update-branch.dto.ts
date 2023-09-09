import { PartialType } from '@nestjs/mapped-types';
import { ListBranchGitDto } from './create-branch.dto';
import { IsString, IsBoolean,IsOptional, IsNotEmpty, IsDate, IsNumber } from "class-validator";

export class UpdateBranchDto extends PartialType(ListBranchGitDto) {
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
    project?:string;

}
