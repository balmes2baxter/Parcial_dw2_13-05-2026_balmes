import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { faker } from '@faker-js/faker';
import { Repository } from 'typeorm';
import { Car } from '../cars/entities/car.entity';
import { Tuition } from '../tuitions/entities/tuition.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Car)
    private readonly carsRepository: Repository<Car>,
    @InjectRepository(Tuition)
    private readonly tuitionsRepository: Repository<Tuition>,
  ) {}

  async run(): Promise<{ cars: number; tuitions: number }> {
    await this.tuitionsRepository.createQueryBuilder().delete().execute();
    await this.carsRepository.createQueryBuilder().delete().execute();

    const cars = Array.from({ length: 20 }, () =>
      this.carsRepository.create({
        brand: faker.vehicle.manufacturer(),
        vehicleClass: faker.helpers.arrayElement([
          'Sedan',
          'SUV',
          'Pickup',
          'Hatchback',
          'Van',
        ]),
        model: faker.vehicle.model(),
        engineCapacity: faker.number.int({ min: 800, max: 5000 }),
        passengerCapacity: faker.number.int({ min: 2, max: 7 }),
      }),
    );

    const savedCars = await this.carsRepository.save(cars);

    const tuitions = Array.from({ length: 20 }, () =>
      this.tuitionsRepository.create({
        dateMatricula: faker.date.recent({ days: 365 }).toISOString().split('T')[0],
        city: faker.location.city(),
        paymentAmount: Number(faker.finance.amount({ min: 100, max: 1500, dec: 2 })),
        car: faker.helpers.arrayElement(savedCars),
      }),
    );

    await this.tuitionsRepository.save(tuitions);

    return {
      cars: savedCars.length,
      tuitions: tuitions.length,
    };
  }
}
