import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../cars/entities/car.entity';
import { Tuition } from '../tuitions/entities/tuition.entity';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Tuition])],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
