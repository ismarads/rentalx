import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";




const categoriesRepository = CategoriesRepository.getIndtance();///singleton
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController}