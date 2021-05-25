import { AppError } from './../erros/AppError';
import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken"
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


interface IPayload {
    sub: string;
}


export async function ensureAuthenticated(
    request:Request,
    response:Response, 
    next:NextFunction
){

    const authHeaher = request.headers.authorization;


    if (!authHeaher){
        throw new AppError ("Token missing", 401)
    }

    const [, token] = authHeaher.split(" ")

    try {
       const {sub: user_id }= verify (token,"a35dd4661a61d89a7ed4e89a14554ef7") as IPayload;

       const usersRepository = new UsersRepository(); 
      const user = await usersRepository.findById(user_id );

        if (!user){
            throw new AppError("User does note exists", 401)
        }

        request.user = {
            id:user_id
        }
     next(); 
    }catch{
        throw new AppError("Invalid token", 401)
    }
} 