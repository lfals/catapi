import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CatsEntity } from "../models/cats.entity";


@Injectable()
export class CatsService {

    constructor(
        @InjectRepository(CatsEntity)
        private catsRepository: Repository<CatsEntity>
    ) {}

    async getAllCats() {
        const allCats = await this.catsRepository.find()

        return allCats
    }

    async getAllBreeds() {
        const allCats = await this.catsRepository.find()

        const breed = allCats.map(cat => {
            return cat.breed

        })

        return breed


    }

    async getBreedDetail(param) {
        console.log(param);
        
        const breed = await this.catsRepository.find({
            where: { breed: param.id}
        })

        return breed
    }
    
}