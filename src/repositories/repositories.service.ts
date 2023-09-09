import { Injectable } from '@nestjs/common';
import { ListRepositoryResponseDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import axios from 'axios';
import { Repository } from './dto/create-repository.dto';
import { StatusRepository } from './dto/create-repository.dto';


export interface RepositoryGitHubResponseDto{
        id: number,
        node_id: string,
        name: string,
        description:string,
        full_name: string,
        created_at:Date,
        private: boolean,
}




@Injectable()
export class RepositoriesService {
  create(createRepositoryDto: ListRepositoryResponseDto) {
    return 'This action adds a new repository';
  }
  
  async findAll(owner:string) {
    
    const response = await axios.get<Array<RepositoryGitHubResponseDto>>(`https://api.github.com/users/${owner}/repos`,{
    headers:{
      Authorization:`Bearer ${process.env.GITHUB_API_KEY}`
    }  
    });
    const responseDos = await axios.get(`https://api.github.com/users/${owner}/repos`,{
    headers:{
      Authorization:`Bearer ${process.env.GITHUB_API_KEY}`
    }  
    });
    console.log(responseDos);



    const repositorieDto:Array<Repository>=[]
  
    response.data.forEach((item)=>{
      const repository:Repository= {
        title:item.name,
        description:item.description,
        date:item.created_at,
        status:item.private ? StatusRepository.PRIVATE:StatusRepository.PUBLIC,
      }
      console.log(repository);
      repositorieDto.push(repository);
    })
    const myResponse:ListRepositoryResponseDto = new ListRepositoryResponseDto(repositorieDto.length,repositorieDto);

    return myResponse;
  }

  findOne(id: number) {
    return `This action returns a #${id} repository`;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }
}
