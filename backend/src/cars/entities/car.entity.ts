import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tuition } from '../../tuitions/entities/tuition.entity';

@Entity({ name: 'cars' })
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, name: 'brand' })
  brand: string;

  @Column({ type: 'varchar', length: 100, name: 'vehicle_class' })
  vehicleClass: string;

  @Column({ type: 'varchar', length: 100, name: 'model' })
  model: string;

  @Column({ type: 'int', name: 'engine_capacity' })
  engineCapacity: number;

  @Column({ type: 'int', name: 'passenger_capacity' })
  passengerCapacity: number;

  @OneToMany(() => Tuition, (tuition) => tuition.car)
  tuitions: Tuition[];
}
