import { Module } from '@nestjs/common';
import { InventoryKardexService } from './inventory_kardex.service';
import { InventoryKardexController } from './inventory_kardex.controller';

@Module({
  controllers: [InventoryKardexController],
  providers: [InventoryKardexService],
})
export class InventoryKardexModule {}
