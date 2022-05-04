import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { MyConfigEntity } from "../config"

@Entity("my_main_entity")
export class MyMainEntity extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	readonly id: string

	@Column({ type: "uuid", nullable: false, update: false })
	readonly configId: string
	@ManyToOne(() => MyConfigEntity, { nullable: false })
	@JoinColumn({ name: "configId" })
	readonly config: MyConfigEntity
}
