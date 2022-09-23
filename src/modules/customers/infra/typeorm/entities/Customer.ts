import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("customers")
class Customer {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  document: string;

  @Column({
    nullable: true,
  })
  profession: string;

  @Column()
  age: number;

  @Column()
  zip_code: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Customer };
