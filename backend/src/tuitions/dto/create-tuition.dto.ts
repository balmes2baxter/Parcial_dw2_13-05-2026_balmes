import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateTuitionDto {
  @IsDateString()
  dateMatricula: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  city: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  paymentAmount: number;

  @IsInt()
  @Min(1)
  carId: number;
}
