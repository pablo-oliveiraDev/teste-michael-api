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
exports.CreateProductFactureController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class CreateProductFactureController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, codCean, description, voltage, facture_id } = request.body;
            const numberPrice = Number(price);
            const numberCodCean = Number(codCean);
            const numberFactureId = Number(facture_id);
            try {
                const product = yield prismaClient_1.prismaClient.productFacture.create({
                    data: {
                        product: {
                            create: {
                                name,
                                price: numberPrice,
                                codCean: numberCodCean,
                                description,
                                voltage,
                                facture_id: numberFactureId
                            },
                        },
                        facture: {
                            connect: {
                                id: numberFactureId,
                            },
                        },
                    },
                });
                return response.status(200).json(product);
            }
            catch (error) {
                response.status(400).json({ msg: "error", error });
            }
            ;
        });
    }
}
exports.CreateProductFactureController = CreateProductFactureController;
