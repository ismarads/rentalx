import {Router} from'express';
import { createSpecificationConteoller } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();


specificationsRoutes.post('/', ( request, response)=>{

    return createSpecificationConteoller.handle(request, response);
})

export { specificationsRoutes};