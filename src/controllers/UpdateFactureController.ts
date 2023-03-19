import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class UpdateFactureController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name } = request.body;
        const numberId = Number(id);
        if (!!numberId) {
            try {
                const facture = await prismaClient.facture.update({
                    where: {
                        id: numberId,
                    },
                    data: {
                        name,
                    }
                })
                if (!!facture.name) {
                    return response.status(200).json({ msg: "Update as sucessful!", facture });
                } else {
                    return response.status(500).json({ msg: "This id does not exist!", facture });
                }
            }
            catch (error) {
                return response.status(400).json({ msg: "Request as failure!", error, numberId });
            }
        } else {
            return response.status(500).json({ msg: "id is not valid!" });
        };

    }
}