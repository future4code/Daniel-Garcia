import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

export const getFilteredCountry = (
   req: Request,
   res: Response
): void => {

console.log( req.query)

   let result: country[] = countries
   if (req.query.name) {
      result = result.filter(
         country => country.name.toLocaleLowerCase().includes(String(req.query.name).toLocaleLowerCase())
      )
   }
   
   if (req.query.capital) {
      result = result.filter(
         country => country.capital.toLocaleLowerCase().includes(String(req.query.capital).toLocaleLowerCase())
      )
   }
   
   if (req.query.continent) {
      result = result.filter(
         country => country.continent.toLocaleLowerCase().includes(String(req.query.continent).toLocaleLowerCase())
      )
   }
   if (result.length >= 1) {
      res.send(result )
   } else {
      res.statusCode = 404
      res.statusMessage = "nenhuma correspondencia"
      res.end()
   }

}