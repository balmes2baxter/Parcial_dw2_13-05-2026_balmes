import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  brand?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  vehicleClass?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  model?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  engineCapacity?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  passengerCapacity?: number;
}
