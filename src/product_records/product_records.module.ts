import { Module } from '@nestjs/common';
import { ProductRecordsService } from './product_records.service';
import { ProductRecordsController } from './product_records.controller';

@Module({
  controllers: [ProductRecordsController],
  providers: [ProductRecordsService],
})
export class ProductRecordsModule {}
