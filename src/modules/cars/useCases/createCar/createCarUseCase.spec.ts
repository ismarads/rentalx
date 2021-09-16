import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe ("Create new car", () =>{
    beforeEach(() =>{
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);  
    })

    it ("Should be able to create a new car", async() =>{ 
        await createCarUseCase.execute({
            name:"Name car",
        description: "Description car",
        daily_rate: 100,
        license_plate: "abc -1234",
        fine_amount: 60,
        brand:"brand",
        category_id:"category"
        });
    })
})


