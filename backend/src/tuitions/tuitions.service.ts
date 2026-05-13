import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tuition } from './entities/tuition.entity';
import { Car } from '../cars/entities/car.entity';
import { CreateTuitionDto } from './dto/create-tuition.dto';
import { UpdateTuitionDto } from './dto/update-tuition.dto';

@Injectable()
export class TuitionsService {
  constructor(
    @InjectRepository(Tuition)
    private readonly tuitionsRepository: Repository<Tuition>,
    @InjectRepository(Car)
    private readonly carsRepository: Repository<Car>,
  ) {}

  async create(createTuitionDto: CreateTuitionDto): Promise<Tuition> {
    const car = await this.carsRepository.findOneBy({
      id: createTuitionDto.carId,
    });

    if (!car) {
      throw new NotFoundException(`Car with id ${createTuitionDto.carId} not found`);
    }

    const tuition = this.tuitionsRepository.create({
      dateMatricula: createTuitionDto.dateMatricula,
      city: createTuitionDto.city,
      paymentAmount: createTuitionDto.paymentAmount,
      car,
    });

    return this.tuitionsRepository.save(tuition);
  }

  async findAll(): Promise<Tuition[]> {
    return this.tuitionsRepository.find({
      relations: {
        car: true,
      },
      order: {
        id: 'ASC',
      },
    });
  }

  async findOne(id: number): Promise<Tuition> {
    const tuition = await this.tuitionsRepository.findOne({
      where: { id },
      relations: {
        car: true,
      },
    });

    if (!tuition) {
      throw new NotFoundException(`Tuition with id ${id} not found`);
    }

    return tuition;
  }

  async update(id: number, updateTuitionDto: UpdateTuitionDto): Promise<Tuition> {
    const tuition = await this.findOne(id);

    if (updateTuitionDto.carId !== undefined) {
      const car = await this.carsRepository.findOneBy({
        id: updateTuitionDto.carId,
      });

      if (!car) {
        throw new NotFoundException(`Car with id ${updateTuitionDto.carId} not found`);
      }

      tuition.car = car;
    }

    if (updateTuitionDto.dateMatricula !== undefined) {
      tuition.dateMatricula = updateTuitionDto.dateMatricula;
    }

    if (updateTuitionDto.city !== undefined) {
      tuition.city = updateTuitionDto.city;
    }

    if (updateTuitionDto.paymentAmount !== undefined) {
      tuition.paymentAmount = updateTuitionDto.paymentAmount;
    }

    return this.tuitionsRepository.save(tuition);
  }

  async remove(id: number): Promise<{ message: string }> {
    const tuition = await this.findOne(id);

    await this.tuitionsRepository.remove(tuition);

    return {
      message: `Tuition with id ${id} deleted successfully`,
    };
  }
}
