import { Injectable } from '@nestjs/common';
import { ListBranchGitDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import axios from 'axios';
import { Branches } from './dto/create-branch.dto';



export interface GitBranchesProject{
  name:string,
  protected:boolean,
}



@Injectable()
export class BranchesService {
  create(ListBranchGitDto: ListBranchGitDto) {
    return 'This action adds a new branch';
  }

  async findAll(owner:string, repository:string) {

    console.log(" Primero");
    const response= await axios.get<Array<GitBranchesProject>>(`https://api.github.com/repos/${owner}/${repository}/branches`,{
      headers:{
        Authorization:`Bearer ${process.env.GITHUB_API_KEY}` 
      }
    });
    
    const branches:Array<Branches>=[];

    response.data.forEach((item)=>{
      const branch:Branches={
        name:item.name,
        date:new Date,
        protected:item.protected,
      }
      console.log(branch);
      branches.push(branch);
    })

    console.log(" Segundo");  
    const myBranches:ListBranchGitDto=new ListBranchGitDto(branches.length,branches)
    //console.log(response);
    return myBranches ;
  }

  findOne(id: number) {
    return `This action returns a #${id} branch`;
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return `This action updates a #${id} branch`;
  }

  remove(id: number) {
    return `This action removes a #${id} branch`;
  }
}
