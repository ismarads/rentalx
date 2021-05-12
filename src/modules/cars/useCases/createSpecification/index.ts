import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationConteoller } from "./CreateSpecificationConteoller";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";




const specificationsRepository = new  SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationConteoller = new CreateSpecificationConteoller(createSpecificationUseCase)


export { createSpecificationConteoller}