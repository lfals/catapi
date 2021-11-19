import { Controller, Get, Param } from "@nestjs/common";
import { CatsService } from "../service/cats.service";

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Get()
    getAllCats() {
        return this.catsService.getAllCats()
    }

    @Get('breeds')
    getAllBreeds() {
        return this.catsService.getAllBreeds()
    }

    @Get('breeds/:id')
    getBreedInfo(@Param() param) {
        return this.catsService.getBreedDetail(param)
    }





    
}