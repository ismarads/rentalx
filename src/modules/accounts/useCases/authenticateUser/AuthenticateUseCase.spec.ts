import { AppError } from '../../../../shared/erros/AppError';

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory : UsersRepositoryInMemory;
let createUsersUseCase: CreateUserUseCase;


describe ("Authenticate User", () =>{
    beforeEach(()=>{
        usersRepositoryInMemory= new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUsersUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    });

    it("Should be able to authenticate an user", async ()=>{
        const user: ICreateUserDTO = {
            driver_license:"213132132",
            email:"email@email.com",
            password:"9876",
            name:"User Test"

        };
        await createUsersUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

       expect(result).toHaveProperty("token")
    })

    it("should not be able to athenticate an none existent user", ()=>{
      expect(async() =>{
        await authenticateUserUseCase.execute({
            email: "false@email.com",
            password: "654"
        });
      }).rejects.toBeInstanceOf(AppError)  
    })

    it("should not be able to authenticate eith incorrect password",() =>{
        expect (async() =>{
            const user:ICreateUserDTO = {
                driver_license:"0000",
                email:"user@email.com",
                password:"987",
                name:"user test"
            }

            await createUsersUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email:user.email,
                password:"incorrectPSW"
            });
        }).rejects.toBeInstanceOf(AppError);
    })

})