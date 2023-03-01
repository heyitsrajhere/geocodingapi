import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";
import { logging } from "./log.entity";
export const dbConnection = [
  {
    provide: "DataSource",
    useFactory: async () => {
      const configService = new ConfigService();
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: true,
        entities: [logging],
        logging: true,
      });
      return await dataSource.initialize();
    },
  },
];
