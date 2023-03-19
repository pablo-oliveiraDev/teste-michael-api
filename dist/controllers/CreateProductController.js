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
exports.CreateProductController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class CreateProductController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, codCean, description, voltage, facture_id } = request.body;
            try {
                const product = yield prismaClient_1.prismaClient.product.create({
                    data: {
                        name,
                        price,
                        codCean,
                        description,
                        voltage,
                        facture: {
                            connect: {
                                id: facture_id
                            },
                        },
                    },
                });
                return response.status(200).json(product);
            }
            catch (error) {
                response.status(400).json({ msg: error });
            }
            ;
        });
    }
}
exports.CreateProductController = CreateProductController;
