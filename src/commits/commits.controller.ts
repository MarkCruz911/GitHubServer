import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { ListCommitDto } from './dto/create-commit.dto';
import { UpdateCommitDto } from './dto/update-commit.dto';
import { query } from 'express';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Post()
  create(@Body() createCommitDto: ListCommitDto) {
    return this.commitsService.create(createCommitDto);
  }

  @Get()
  findAll(@Query('owner') owner,@Query('repository') repository ):Promise<ListCommitDto> {
    return this.commitsService.findAll(owner,repository);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommitDto: UpdateCommitDto) {
    return this.commitsService.update(+id, updateCommitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commitsService.remove(+id);
  }
}
