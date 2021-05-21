import {Router} from'express';
import { CreateSpecificationConteoller, } from '../modules/cars/useCases/createSpecification/CreateSpecificationConteoller';

const specificationsRoutes = Router();

const createSpecificationConteoller = new CreateSpecificationConteoller


specificationsRoutes.post('/', createSpecificationConteoller.handle )

export { specificationsRoutes};