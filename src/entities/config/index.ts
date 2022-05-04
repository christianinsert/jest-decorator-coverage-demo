import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("my_config_entity")
export class MyConfigEntity extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	readonly id: string

	@Column("varchar", { nullable: true })
	metadata?: string
}
