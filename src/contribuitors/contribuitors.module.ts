import { Module } from '@nestjs/common';
import { ContribuitorsService } from './contribuitors.service';
import { ContribuitorsController } from './contribuitors.controller';

@Module({
  controllers: [ContribuitorsController],
  providers: [ContribuitorsService],
})
export class ContribuitorsModule {}
