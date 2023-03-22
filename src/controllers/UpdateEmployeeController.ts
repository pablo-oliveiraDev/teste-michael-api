import { PrismaClient } from "@prisma/client";
import { Response, Request } from 'express';
import { prismaClient } from "../database/prismaClient";

export class UpdateEmployeeController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, cpf, email, senha } = request.body;
        const numberId = Number(id);
        if(name === ""||cpf === ""||email === ""||senha === ""){
            return response.status(500).json({msg:"Fields can't empty!"})
        }
        try {
            const employee = await prismaClient.employee.update({
                where: {
                    id: numberId,
                },
                data: {
                    name,
                    cpf,
                    email,
                    senha,
                }
            })
            return response.status(200).json({ msg: "Updated as successfully!", employee })
        }
        catch (error) {

        }

    }
}