import {container}from "tsyringe";
import { UsersRepository } from "modules/accounts/infra/typeorm/repositories/UsersRepository";
import { CategoriesRepository } from "modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersReposotory";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
 "CategoriesRepository",   
 CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",   
    SpecificationsRepository
   )

 container.registerSingleton<IUsersRepository>(
     "UsersRepository",
     UsersRepository
 )  