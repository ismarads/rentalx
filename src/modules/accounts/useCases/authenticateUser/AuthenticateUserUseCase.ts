import { compare} from "bcryptjs"
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/erros/AppError";
import { IUsersRepository } from "../../repositories/IUsersReposotory";

interface IRequest{
    email:string;
    password: string;
}

interface IResponse {
    user:{
        name:string;
        email:string;
    },
    token:string;
}


@injectable()
class AuthenticateUserUseCase{
    constructor (
        @inject("UsersRepository") 
       private usersRepository:IUsersRepository
    ){}
    async execute ({email,password}:IRequest): Promise<IResponse>{
       const user =  await this.usersRepository.findByEmail(email);
       if(!user) {
           throw new AppError ( "Email or password invorrect!");
       }

       const passwordMatch = await compare(password, user.password);

       if(!passwordMatch){
        throw new AppError ( "Email or password invorrect!");
       }

       const token = sign({}, "a35dd4661a61d89a7ed4e89a14554ef7",{
           subject: user.id,
           expiresIn:"1d"
       });

       const tokenReturn:IResponse = {
           token,
           user:{
               name: user.name,
               email:user.email
           }
       }

       return tokenReturn
    }
}

export { AuthenticateUserUseCase}