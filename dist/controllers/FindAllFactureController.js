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
exports.FindAllFactureController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class FindAllFactureController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const facture = yield prismaClient_1.prismaClient.facture.findMany({
                    orderBy: {
                        id: "asc",
                    }
                });
                return response.status(200).json({ msg: "Request sucessfull!", facture });
            }
            catch (error) {
                return response.status(400).json({ msg: "Request failure!", error });
            }
        });
    }
}
exports.FindAllFactureController = FindAllFactureController;
