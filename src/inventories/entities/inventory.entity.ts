import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn('increment')
    id : string;

    @Column('text', { unique : true })
    inventory_name : string;

    @Column('text', { unique : true })
    description : string;

}


