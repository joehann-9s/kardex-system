import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('text',{ unique: true })
    product_number: string;

    @Column('text',{
        unique: true,
    })
    name: string;

    @Column('text',{ nullable: true})
    description: string;

    @Column('text')
    type : string;

    @Column('int',{ default: 0})
    stock : number;

    @Column('text')
    location : string;


}
