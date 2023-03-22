import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class CreateEmployeeController {
    async handle(request: Request, response: Response) {
        const { name, cpf, email, senha } = request.body;

        if (name === "" || cpf === "" || email === "" || senha === "") {
            return response.status(500).json({ msg: "Fields cannot be empty!" })
        }
        try {
            const haveEmployee = await prismaClient.employee.findFirst({
                where: {
                    cpf,
                },
            })
            const haveEmployeeEmail = await prismaClient.employee.findFirst({
                where: {
                    email,
                },
            })

            if (!!haveEmployee || !!haveEmployeeEmail) {
                return response.status(500).json({ msg: "Employee has been exists!", haveEmployee, haveEmployeeEmail });
            } else {
                const employee = await prismaClient.employee.create({
                    data: {
                        name,
                        cpf,
                        email,
                        senha
                    }
                })
                return response.status(200).json({ msg: "colaborator created successfully!", employee });
            }

        }
        catch (error) {
            return response.status(400).json({ msg: "colaborator created failure!", error });
        }
    }
} 