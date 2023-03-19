import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class FindAllProductController {
    async handle(request: Request, response: Response) {
          
        try{
            const product = await prismaClient.product.findMany({
                orderBy: {
                    id: "asc",
                }
            })

            return response.status(200).json({msg:"Request sucessfull!",product});
        }
        catch(error){
            return response.status(400).json({ msg: "Request failure!", error });  
        }
        
    }
}