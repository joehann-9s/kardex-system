import { Test, TestingModule } from '@nestjs/testing';
import { ProductRecordsService } from './product_records.service';

describe('ProductRecordsService', () => {
  let service: ProductRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRecordsService],
    }).compile();

    service = module.get<ProductRecordsService>(ProductRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
