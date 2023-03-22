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
exports.FindFactureIdController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class FindFactureIdController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const numberId = Number(id);
            if (numberId !== undefined && !!numberId) {
                try {
                    const facture = yield prismaClient_1.prismaClient.facture.findFirst({
                        where: {
                            id: numberId,
                        },
                    });
                    if (!!facture) {
                        return response.status(200).json({ msg: "Request as sucessful!", facture });
                    }
                    else {
                        return response.status(500).json({ msg: "This id does not exist!" });
                    }
                }
                catch (error) {
                    return response.status(400).json({ msg: "Request as failure!", error });
                }
            }
            else {
                return response.status(500).json({ msg: "id is not valid!" });
            }
        });
    }
}
exports.FindFactureIdController = FindFactureIdController;
