import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("sales")
class Sale {
  @PrimaryColumn()
  id?: string;

  @Column()
  course_name: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    nullable: true,
  })
  seller: string;

  @Column()
  value: number;

  @Column({
    nullable: true,
  })
  retained_value: number;

  @Column({
    nullable: true,
  })
  date_sale: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Sale };
