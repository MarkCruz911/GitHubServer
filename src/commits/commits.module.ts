import { Module } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitsController } from './commits.controller';

@Module({
  controllers: [CommitsController],
  providers: [CommitsService],
})
export class CommitsModule {}
