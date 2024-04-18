import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 

@Entity()
export class Company {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('text', { unique : true })
    ruc: string;

    @Column('text', { unique : true})
    company_name : string;

    @Column('text', { nullable : true })
    description : string;




}
