import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class FindAllFactureController {
    async handle(request: Request, response: Response) {
               
        try {
            const facture = await prismaClient.facture.findMany({
                orderBy: {
                    id: "asc",
                }
            })

            return response.status(200).json({ msg: "Request sucessfull!", facture });
        }
        catch (error) {
            return response.status(400).json({ msg: "Request failure!", error });
        }
    }
}