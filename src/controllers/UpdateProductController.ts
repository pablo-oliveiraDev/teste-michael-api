import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class UpdateProductController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, price, codCean, description, voltage, facture_id } = request.body;
        const numberPrice = Number(price);
        const numberCodCean = Number(codCean);
        const numberFactureId = Number(facture_id);
        const numberId = Number(id)
        if (!!numberId) {
            try {
                const product = await prismaClient.product.update({
                    where: {
                        id: numberId,
                    },
                    data: {
                        name,
                        price: numberPrice,
                        codCean: numberCodCean,
                        description,
                        voltage,
                        facture_id: numberFactureId
                    }
                })
                if (!!product && product !== null) {
                    return response.status(200).json({ msg: "Update as sucessfull!", product });
                }
                else {
                    return response.status(500).json({ msg: "id does not exist!", product });
                }

            }
            catch (error) {
                return response.status(400).json({ msg: "Update as failure!", error })
            }
        }
        else {
            return response.status(500).json({ msg: "id is not valid!" })
        }

    }
}