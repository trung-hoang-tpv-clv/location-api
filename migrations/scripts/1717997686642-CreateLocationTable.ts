import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLocationTable1717997686642 implements MigrationInterface {
    name = 'CreateLocationTable1717997686642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`locations\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`location_id\` int NOT NULL AUTO_INCREMENT, \`location_name\` varchar(120) NOT NULL, \`location_number\` varchar(50) NOT NULL, \`building\` varchar(50) NOT NULL, \`area\` float NOT NULL, \`unit\` varchar(20) NOT NULL DEFAULT 'm²', \`parent_location_id\` int NULL, \`mpath\` varchar(255) NULL DEFAULT '', PRIMARY KEY (\`location_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`locations\` ADD CONSTRAINT \`FK_06f770dfdf4e78f67ad08f80cdc\` FOREIGN KEY (\`parent_location_id\`) REFERENCES \`locations\`(\`location_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`locations\` DROP FOREIGN KEY \`FK_06f770dfdf4e78f67ad08f80cdc\``);
        await queryRunner.query(`DROP TABLE \`locations\``);
    }

}
