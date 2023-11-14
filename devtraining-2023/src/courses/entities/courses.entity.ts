import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./tags.entity"

// Alteração do nome (opcional)
@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @JoinTable() //define qual é a principal entidade da relação
    @ManyToMany(() => Tag, tag => tag.courses, {
        cascade: true
    })
    tags: Tag[]
}