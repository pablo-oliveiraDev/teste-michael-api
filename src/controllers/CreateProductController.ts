import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, price, codCean, description, voltage ,facture_id} = request.body;
        const numberPrice = Number(price);
        const numberCodCean = Number(codCean);
        const numberFactureId = Number(facture_id);
        try {
            const product = await prismaClient.product.create({
                data: {
                    name,
                    price:numberPrice,
                    codCean:numberCodCean,
                    description,
                    voltage,
                    facture_id: numberFactureId                 
                },
                             
            });
            return response.status(200).json(product);
        }
        catch (error) {
            response.status(400).json({ msg: error });
        };



    }
}