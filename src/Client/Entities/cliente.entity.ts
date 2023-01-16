/* eslint-disable prettier/prettier */
import { Column,Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    idCliente:number
    @Column()
    nombreCompleto:string
    @Column()
    direccion:string
    @Column()
    fechaNacimiento:Date
    @Column()
    telefono:string;
    @Column()
    correo:string;
}