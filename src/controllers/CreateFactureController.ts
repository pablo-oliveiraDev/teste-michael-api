import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class CreateFactureController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        try {
            const product = await prismaClient.facture.create({
                data: {
                    name
                }
            })
            return response.status(200).json({msg:'Post facture as sucessful!',product});
        }
        catch(error){
            return response.status(400).json({ msg:'Post facture failure', error });
        }
       
    }
}