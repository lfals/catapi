import { Controller, Get } from "@nestjs/common";
import { CatsService } from "../service/cats.service";

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Get()
    getAllCats() {
        return "todos os gatos e informações"
    }

    @Get('breeds')
    getAllBreeds() {
        return "Todas as raças"
    }

    @Get('breeds/:id')
    getBreedInfo() {
        return "Informações sobre a raça específica"
    }





    
}