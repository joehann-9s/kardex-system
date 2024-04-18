import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn('increment')
    id : string;

    @Column('text', { unique : true })
    department_name : string;

    @Column('text', { unique : true })
    description : string;

}


