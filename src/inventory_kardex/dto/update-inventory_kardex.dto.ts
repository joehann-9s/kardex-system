import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryKardexDto } from './create-inventory_kardex.dto';

export class UpdateInventoryKardexDto extends PartialType(CreateInventoryKardexDto) {}
