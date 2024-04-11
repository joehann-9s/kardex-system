import { Test, TestingModule } from '@nestjs/testing';
import { InventoryKardexController } from './inventory_kardex.controller';
import { InventoryKardexService } from './inventory_kardex.service';

describe('InventoryKardexController', () => {
  let controller: InventoryKardexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryKardexController],
      providers: [InventoryKardexService],
    }).compile();

    controller = module.get<InventoryKardexController>(InventoryKardexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
