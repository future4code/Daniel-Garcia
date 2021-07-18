import { Request, Response } from "express"
import { countries } from "../data"

export const getAllCountries = (
   req: Request,
   res: Response
): void => {

   res.statusMessage = "Mensagem customizada no cabeçalho da resposta"
   const mappedCountries = countries.map((country) =>  {
      const {name, id} = country
      return {id, name}
   })
   res.send(mappedCountries)
}