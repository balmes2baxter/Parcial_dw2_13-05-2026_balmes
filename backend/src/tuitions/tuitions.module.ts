import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tuition } from './entities/tuition.entity';
import { Car } from '../cars/entities/car.entity';
import { TuitionsService } from './tuitions.service';
import { TuitionsController } from './tuitions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tuition, Car])],
  controllers: [TuitionsController],
  providers: [TuitionsService],
  exports: [TypeOrmModule, TuitionsService],
})
export class TuitionsModule {}
