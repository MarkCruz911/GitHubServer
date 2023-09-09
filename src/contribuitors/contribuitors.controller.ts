import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { ContribuitorsService } from './contribuitors.service';
import { ListContribuitorDto } from './dto/create-contribuitor.dto';
import { UpdateContribuitorDto } from './dto/update-contribuitor.dto';

@Controller('contribuitors')
export class ContribuitorsController {
  constructor(private readonly contribuitorsService: ContribuitorsService) {}

  @Post()
  create(@Body() createContribuitorDto: ListContribuitorDto) {
    return this.contribuitorsService.create(createContribuitorDto);
  }

  @Get()
  findAll(@Query('owner') owner , @Query('repository') repository):Promise<ListContribuitorDto> {
    return this.contribuitorsService.findAll(owner,repository);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contribuitorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContribuitorDto: UpdateContribuitorDto) {
    return this.contribuitorsService.update(+id, updateContribuitorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contribuitorsService.remove(+id);
  }
}
