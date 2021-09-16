import { ICreateCarDTO } from "../../dtos/ICreateCarDTO{";
import { Car } from "../../infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";



class CarsRepositoryInMemory implements ICarsRepository{
    cars: Car [] = [];
    async create({
       brand,
       category_id,
       daily_rate,
       description,
       fine_amount,
       name,
       license_plate, 
    } :ICreateCarDTO): Promise<void> {
        const car = new Car();

        Object.assign(car,{
            brand,
       category_id,
       daily_rate,
       description,
       fine_amount,
       name,
       license_plate, 
        })

        this.cars.push(car)
    }

    
}

export{CarsRepositoryInMemory}