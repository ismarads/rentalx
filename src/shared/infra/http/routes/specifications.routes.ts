import {Router} from'express';
import { CreateSpecificationConteoller } from 'modules/cars/useCases/createSpecification/CreateSpecificationConteoller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationsRoutes = Router();

const createSpecificationConteoller = new CreateSpecificationConteoller

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post('/', createSpecificationConteoller.handle )

export { specificationsRoutes};