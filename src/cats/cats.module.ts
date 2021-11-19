import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports: [
        TypeOrmModule.forFeature([CatsEntity])
    ],
    providers: [CatsService],
    controllers: [CatsController]
})

export class CatsModule {}