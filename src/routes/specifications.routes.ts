import {Router} from'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationConteoller, } from '../modules/cars/useCases/createSpecification/CreateSpecificationConteoller';

const specificationsRoutes = Router();

const createSpecificationConteoller = new CreateSpecificationConteoller

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post('/', createSpecificationConteoller.handle )

export { specificationsRoutes};