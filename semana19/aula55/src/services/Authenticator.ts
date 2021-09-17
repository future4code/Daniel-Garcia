import { AuthenticationData } from "../types";
import * as jwt from "jsonwebtoken";

export class Authenticator {

    generateToken(info: AuthenticationData): string{

        const token = jwt.sign(
            {id: info.id},
            "toCansado",
            {expiresIn: "1h"}
        )
        return token;
    }

    getTokenData(token: string): AuthenticationData {

        const payload = jwt.verify(token, "toCansado");

        return payload as AuthenticationData

    }
}