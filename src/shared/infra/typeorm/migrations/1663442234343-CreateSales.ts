import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSales1663442234343 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sales",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },

          {
            name: "course_name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "seller",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "value",
            type: "decimal",
          },
          {
            name: "retained_value",
            type: "decimal",
          },
          {
            name: "date_sale",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("sales");
  }
}
