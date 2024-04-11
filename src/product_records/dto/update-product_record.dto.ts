import { PartialType } from '@nestjs/mapped-types';
import { CreateProductRecordDto } from './create-product_record.dto';

export class UpdateProductRecordDto extends PartialType(CreateProductRecordDto) {}
