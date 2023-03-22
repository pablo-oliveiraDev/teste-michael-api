"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateColaboratorController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class CreateColaboratorController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, cpf, email, senha } = request.body;
            try {
                const colaborator = yield prismaClient_1.prismaClient.colaborator.create({
                    data: {
                        name,
                        cpf,
                        email,
                        senha
                    }
                });
                return response.status(200).json({ msg: "coalborator created successfully!", colaborator });
            }
            catch (error) {
                return response.status(400).json({ msg: "coalborator created failure!", error });
            }
        });
    }
}
exports.CreateColaboratorController = CreateColaboratorController;
