import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TuitionsService } from './tuitions.service';
import { CreateTuitionDto } from './dto/create-tuition.dto';
import { UpdateTuitionDto } from './dto/update-tuition.dto';

@Controller('tuitions')
export class TuitionsController {
  constructor(private readonly tuitionsService: TuitionsService) {}

  @Post()
  create(@Body() createTuitionDto: CreateTuitionDto) {
    return this.tuitionsService.create(createTuitionDto);
  }

  @Get()
  findAll() {
    return this.tuitionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tuitionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTuitionDto: UpdateTuitionDto,
  ) {
    return this.tuitionsService.update(id, updateTuitionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tuitionsService.remove(id);
  }
}
