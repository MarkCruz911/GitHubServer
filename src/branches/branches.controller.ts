import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { ListBranchGitDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

//const repository="httpsbackend-canciones-con-express-Node";
//const owner="MarkCruz911";


@Controller('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Post()
  create(@Body() ListBranchGitDto: ListBranchGitDto) {
    return this.branchesService.create(ListBranchGitDto);
  }
  
  @Get()
  findAll(@Query('owner') owner, @Query('repository') repository):Promise<ListBranchGitDto> {
    return this.branchesService.findAll(owner,repository);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.branchesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchDto) {
    return this.branchesService.update(+id, updateBranchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.branchesService.remove(+id);
  }
}
