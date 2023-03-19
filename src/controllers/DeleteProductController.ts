import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class DeleteProductController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        

        const product = await prismaClient.product.delete({
           where:{
            id:Number(id),
           },         
        })

        return response.json(product);
    }
}