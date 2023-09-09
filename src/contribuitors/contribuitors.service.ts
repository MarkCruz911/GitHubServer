import { Injectable } from '@nestjs/common';
import { ListContribuitorDto,ListContribuitor } from './dto/create-contribuitor.dto';
import { UpdateContribuitorDto } from './dto/update-contribuitor.dto';
import axios from 'axios';

export interface ListContribuitorGitDto{
  login:string,
  avatar_url:string,
  html_url:string,
}

@Injectable()
export class ContribuitorsService {
  create(createContribuitorDto: ListContribuitorDto) {
    return 'This action adds a new contribuitor';
  }


  async findAll(owner:string,repository:string) {
    console.log('antes del axios');
    const response = await axios.get<Array<ListContribuitorGitDto>>(`https://api.github.com/repos/${owner}/${repository}/contributors`,{
      headers:{
        Authorization:`Bearer ${process.env.GITHUB_API_KEY}`
      }
    });
    console.log('despues del axios');
    console.log(response);

    const contribuitors:Array<ListContribuitor>=[];

    response.data.forEach((item)=>{
      const contribuitor:ListContribuitor={
        login:item.login,
        avatar_url:item.avatar_url,
        html_url:item.html_url,
      };
      console.log(contribuitor);
      contribuitors.push(contribuitor);
    });

    const allContribuitors:ListContribuitorDto=new ListContribuitorDto(contribuitors.length,contribuitors);

    return allContribuitors;
  }

  findOne(id: number) {
    return `This action returns a #${id} contribuitor`;
  }

  update(id: number, updateContribuitorDto: UpdateContribuitorDto) {
    return `This action updates a #${id} contribuitor`;
  }

  remove(id: number) {
    return `This action removes a #${id} contribuitor`;
  }
}
