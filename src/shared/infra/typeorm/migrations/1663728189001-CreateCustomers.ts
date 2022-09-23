import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCustomers1663728189001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "customers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "document",
            type: "varchar",
          },
          {
            name: "profession",
            type: "varchar",
          },
          {
            name: "age",
            type: "integer",
          },
          {
            name: "zip_code",
            type: "varchar",
          },
          {
            name: "street",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "neighborhood",
            type: "varchar",
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
    await queryRunner.dropTable("customers");
  }
}
