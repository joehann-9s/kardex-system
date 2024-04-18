import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column('text')
    name : string;

    @Column({ type: 'varchar', length: 30, unique : true })
    username : string;

    @Column('text')
    password : string;

    @Column('text')
    role : string;

}


