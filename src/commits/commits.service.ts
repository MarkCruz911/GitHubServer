import { Injectable } from '@nestjs/common';
import { ListCommitDto, ListCommits } from './dto/create-commit.dto';
import { UpdateCommitDto } from './dto/update-commit.dto';
import axios from 'axios';



export interface ListCommitsGitDto{
  commit:object,
  author:object,
}



@Injectable()
export class CommitsService {
  create(createCommitDto: ListCommitDto) {
    return 'This action adds a new commit';
  }
  
  async findAll(owner:string,repository:string) {
    console.log("antes");
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repository}/commits`,{
      headers:{
        Authorization:`Bearer ${process.env.GITHUB_API_KEY}`
      }
    });
    console.log("despues");
    console.log(response.data);

    const commits:Array<ListCommits>=[];

    /*for(let i=0;i<response.data.length;i++){
      let commit:ListCommits={
        name:response.data[i].commit.message,
        description:response.data[i].commit.message,
        user:response.data[i].commit.author.name,
        date:response.data[i].commit.author.date,
      }
      console.log(commit);
      commits.push(commit);
    }
    */

    response.data.forEach((item)=>{ 
      let commit:ListCommits={
        name:item.commit.message,
        description:item.commit.message,
        user:item.commit.author.name,
        date:item.commit.author.date,
      }
      console.log(commit);
      commits.push(commit);
    });


    const myListCommitDto = new ListCommitDto(commits.length,commits);
    return myListCommitDto;
    



    /*const i:number=0;
    response.data.forEach((item)=>{
      console.log("mapeo")
      const commit:ListCommits={
        name:item[i].commit.message,
        description:item[i].commit.message,
        user:"hola",//item[i].commit.author.name,
        date:new Date,
      }
      console.log("despues mapeo")
      console.log(commit);
      commits.push(commit);
    })*/
  
    
  }

  findOne(id: number) {
    return `This action returns a #${id} commit`;
  }

  update(id: number, updateCommitDto: UpdateCommitDto) {
    return `This action updates a #${id} commit`;
  }

  remove(id: number) {
    return `This action removes a #${id} commit`;
  }
}
