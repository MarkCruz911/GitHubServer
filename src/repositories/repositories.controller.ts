import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { ListRepositoryResponseDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { RepositoryGitHubResponseDto } from './repositories.service';

@Controller('repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Post()
  create(@Body() createRepositoryDto: ListRepositoryResponseDto) {
    return this.repositoriesService.create(createRepositoryDto);
  }

  @Get()
  findAll(@Query('owner')owner): Promise<ListRepositoryResponseDto> {
    return this.repositoriesService.findAll(owner);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repositoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepositoryDto: UpdateRepositoryDto) {
    return this.repositoriesService.update(+id, updateRepositoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repositoriesService.remove(+id);
  }
}
