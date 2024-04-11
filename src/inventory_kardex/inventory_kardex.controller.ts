import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryKardexService } from './inventory_kardex.service';
import { CreateInventoryKardexDto } from './dto/create-inventory_kardex.dto';
import { UpdateInventoryKardexDto } from './dto/update-inventory_kardex.dto';

@Controller('inventory-kardex')
export class InventoryKardexController {
  constructor(private readonly inventoryKardexService: InventoryKardexService) {}

  @Post()
  create(@Body() createInventoryKardexDto: CreateInventoryKardexDto) {
    return this.inventoryKardexService.create(createInventoryKardexDto);
  }

  @Get()
  findAll() {
    return this.inventoryKardexService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryKardexService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventoryKardexDto: UpdateInventoryKardexDto) {
    return this.inventoryKardexService.update(+id, updateInventoryKardexDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryKardexService.remove(+id);
  }
}
