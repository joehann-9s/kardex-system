import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductRecordsService } from './product_records.service';
import { CreateProductRecordDto } from './dto/create-product_record.dto';
import { UpdateProductRecordDto } from './dto/update-product_record.dto';

@Controller('product-records')
export class ProductRecordsController {
  constructor(private readonly productRecordsService: ProductRecordsService) {}

  @Post()
  create(@Body() createProductRecordDto: CreateProductRecordDto) {
    return this.productRecordsService.create(createProductRecordDto);
  }

  @Get()
  findAll() {
    return this.productRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductRecordDto: UpdateProductRecordDto) {
    return this.productRecordsService.update(+id, updateProductRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productRecordsService.remove(+id);
  }
}
