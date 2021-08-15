import { Request, Response } from "express";
import { UserDabatabase } from "../data/UserDatabase";
import { Athenticator } from "../services/Authenticator";

export async function getUser(res: any, req: any ){
    try{
        const token = req.req.headers.authorization
        
        if(!token){
            res.res.status(422).send("Você precisa estar logado!")
        }

        const authenticator = new Athenticator();
        const tokenData = authenticator.getTokenData(token as string);

        const userDatabase = new UserDabatabase();
        let user = await userDatabase.getUserbyId(tokenData.id);
        res.res.status(200).send(user)
    }
    catch(error){
        res.res.status(400).send(error.message)
    }
}