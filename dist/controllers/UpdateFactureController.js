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
exports.UpdateFactureController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class UpdateFactureController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { name } = request.body;
            const numberId = Number(id);
            if (!!numberId) {
                try {
                    const facture = yield prismaClient_1.prismaClient.facture.update({
                        where: {
                            id: numberId,
                        },
                        data: {
                            name,
                        }
                    });
                    if (!!facture.name) {
                        return response.status(200).json({ msg: "Update as sucessful!", facture });
                    }
                    else {
                        return response.status(500).json({ msg: "This id does not exist!", facture });
                    }
                }
                catch (error) {
                    return response.status(400).json({ msg: "Request as failure!", error, numberId });
                }
            }
            else {
                return response.status(500).json({ msg: "id is not valid!" });
            }
            ;
        });
    }
}
exports.UpdateFactureController = UpdateFactureController;
