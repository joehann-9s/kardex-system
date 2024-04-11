import { Test, TestingModule } from '@nestjs/testing';
import { ProductRecordsController } from './product_records.controller';
import { ProductRecordsService } from './product_records.service';

describe('ProductRecordsController', () => {
  let controller: ProductRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductRecordsController],
      providers: [ProductRecordsService],
    }).compile();

    controller = module.get<ProductRecordsController>(ProductRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
