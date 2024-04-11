import { Injectable } from '@nestjs/common';
import { CreateInventoryKardexDto } from './dto/create-inventory_kardex.dto';
import { UpdateInventoryKardexDto } from './dto/update-inventory_kardex.dto';

@Injectable()
export class InventoryKardexService {
  create(createInventoryKardexDto: CreateInventoryKardexDto) {
    return 'This action adds a new inventoryKardex';
  }

  findAll() {
    return `This action returns all inventoryKardex`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryKardex`;
  }

  update(id: number, updateInventoryKardexDto: UpdateInventoryKardexDto) {
    return `This action updates a #${id} inventoryKardex`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryKardex`;
  }
}
