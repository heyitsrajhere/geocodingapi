import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class logging {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    method: string;

    @Column()
    body: string;
}