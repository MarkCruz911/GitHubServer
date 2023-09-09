import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { BranchesModule } from './branches/branches.module';
import { CommitsModule } from './commits/commits.module';
import { ContribuitorsModule } from './contribuitors/contribuitors.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),RepositoriesModule, BranchesModule, CommitsModule, ContribuitorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
