import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { DepartmentsModule } from './departments/departments.module';
import { InventoriesModule } from './inventories/inventories.module';
import { ProductRecordsModule } from './product_records/product_records.module';
import { InventoryKardexModule } from './inventory_kardex/inventory_kardex.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      autoLoadEntities: true,
      synchronize: true, //PROD: false
    }),
    ProductsModule,
    UsersModule,
    CompaniesModule,
    DepartmentsModule,
    InventoriesModule,
    ProductRecordsModule,
    InventoryKardexModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
