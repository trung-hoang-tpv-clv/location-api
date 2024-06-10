import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLocationTable1718015080055 implements MigrationInterface {
    name = 'AddLocationTable1718015080055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "locations" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "location_id" SERIAL NOT NULL, "location_name" character varying(120) NOT NULL, "location_number" character varying(50) NOT NULL, "building" character varying(50) NOT NULL, "area" double precision NOT NULL, "unit" character varying(20) NOT NULL DEFAULT 'm²', "parent_location_id" integer, "mpath" character varying DEFAULT '', CONSTRAINT "PK_582bb9b1865f02814bd7c2c9650" PRIMARY KEY ("location_id"))`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_06f770dfdf4e78f67ad08f80cdc" FOREIGN KEY ("parent_location_id") REFERENCES "locations"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_06f770dfdf4e78f67ad08f80cdc"`);
        await queryRunner.query(`DROP TABLE "locations"`);
    }

}
