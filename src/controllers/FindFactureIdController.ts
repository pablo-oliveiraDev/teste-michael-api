import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class FindFactureIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const numberId = Number(id);
        if (numberId !== undefined && !!numberId) {
            try {
                const facture = await prismaClient.facture.findFirst({
                    where: {
                        id: numberId,
                    },
                });
                if (!!facture) {
                    return response.status(200).json({ msg: "Request as sucessful!", facture });
                } else {
                    return response.status(500).json({ msg: "This id does not exist!" });
                }

            }
            catch (error) {
                return response.status(400).json({ msg: "Request as failure!", error })
            }
        } else {
            return response.status(500).json({ msg: "id is not valid!" });
        }



    }
}