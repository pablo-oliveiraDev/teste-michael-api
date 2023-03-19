import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class CreateProductFactureController {
    async handle(request: Request, response: Response) {
        const { name, price, codCean, description, voltage, facture_id } = request.body;
        const numberPrice = Number(price);
        const numberCodCean = Number(codCean);
        const numberFactureId = Number(facture_id);
        
        try {
            const product = await prismaClient.productFacture.create({
                data: {
                    product: {
                        create: {
                            name,
                            price: numberPrice,
                            codCean: numberCodCean,
                            description,
                            voltage,
                            facture_id:numberFactureId
                        },
                    },
                    facture: {
                        connect: {
                         id:numberFactureId,
                        },
                       
                    },
                },

            });
            return response.status(200).json(product);
        } catch (error) {
            response.status(400).json({ msg: "error", error });

        };



    }
}