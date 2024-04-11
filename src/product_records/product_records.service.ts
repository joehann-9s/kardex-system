import { Injectable } from '@nestjs/common';
import { CreateProductRecordDto } from './dto/create-product_record.dto';
import { UpdateProductRecordDto } from './dto/update-product_record.dto';

@Injectable()
export class ProductRecordsService {
  create(createProductRecordDto: CreateProductRecordDto) {
    return 'This action adds a new productRecord';
  }

  findAll() {
    return `This action returns all productRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productRecord`;
  }

  update(id: number, updateProductRecordDto: UpdateProductRecordDto) {
    return `This action updates a #${id} productRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} productRecord`;
  }
}
