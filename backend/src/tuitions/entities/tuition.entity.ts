import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Car } from '../../cars/entities/car.entity';

@Entity({ name: 'tuitions' })
export class Tuition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', name: 'date_matricula' })
  dateMatricula: string;

  @Column({ type: 'varchar', length: 100, name: 'city' })
  city: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'payment_amount' })
  paymentAmount: number;

  @ManyToOne(() => Car, (car) => car.tuitions, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'car_id' })
  car: Car;
}
