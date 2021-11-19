import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatsEntity {


    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    breed: string

    @Column()
    name: string

    @Column()
    origin: string

    @Column()
    fur: string

    @Column()
    description: string
    
}   