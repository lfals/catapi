import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatsController } from "./controller/cats.controller";
import { CatsEntity } from "./models/cats.entity";
import { CatsService } from "./service/cats.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([CatsEntity])
    ],
    providers: [CatsService],
    controllers: [CatsController]
})

export class CatsModule {}