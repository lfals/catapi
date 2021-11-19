import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CatsEntity {


    @PrimaryGeneratedColumn('uuid')
    id:string
}   