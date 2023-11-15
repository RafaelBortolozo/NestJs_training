import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./tags.entity"
import { randomUUID } from "crypto"

// Alteração do nome (opcional)
@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @JoinTable() //define qual é a principal entidade da relação
    @ManyToMany(() => Tag, tag => tag.courses, {
        cascade: true
    })
    tags: Tag[]

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date

    @BeforeInsert() //antes de inserir, execute essa função
    generatedId() {
        this.id = this.id || randomUUID()
    }
}