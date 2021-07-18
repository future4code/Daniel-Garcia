import { Request, Response } from "express"

export const verifyBalance = (
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