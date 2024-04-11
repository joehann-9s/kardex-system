import { Test, TestingModule } from '@nestjs/testing';
import { InventoryKardexService } from './inventory_kardex.service';

describe('InventoryKardexService', () => {
  let service: InventoryKardexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryKardexService],
    }).compile();

    service = module.get<InventoryKardexService>(InventoryKardexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
