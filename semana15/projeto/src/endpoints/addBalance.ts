import { Request, Response } from "express"


export const addBalance = (
   req: Request,
   res: Response
): void => {

   try {
 

      res.status(204).end()
   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      } else {
         res.statusMessage = error.message
         res.end()
      }
   }

}