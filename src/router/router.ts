import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { CreateFactureController } from "../controllers/CreateFactureController";
import { FindProductIdController } from "../controllers/FindProductIdController";
import { FindAllProductController } from "../controllers/FindAllProductController";
import { FindAllFactureController } from "../controllers/FindAllFactureController";
import { CreateProductFactureController } from "../controllers/CreateProductFactureController";
import { FindFactureIdController } from "../controllers/FindFactureIdController";
import { DeleteProductController } from "../controllers/DeleteProductController";
import { UpdateProductController } from "../controllers/UpdateProductController";
import { UpdateFactureController } from "../controllers/UpdateFactureController";

const router = Router();
const createProduct = new CreateProductController();
const createProductFacture = new CreateProductFactureController();
const createFacture = new CreateFactureController();
const findProductId = new FindProductIdController();
const findFactureId = new FindFactureIdController();
const findAllProduct = new FindAllProductController();
const findAllFacture = new FindAllFactureController();
const deleteProduct = new DeleteProductController();
const updateProduct = new UpdateProductController();
const updateFacture = new UpdateFactureController();


router.post("/product", createProduct.handle);
router.post("/productFacture", createProductFacture.handle);
router.post("/facture", createFacture.handle);
router.get("/facture", findAllFacture.handle);
router.get("/product/:id", findProductId.handle);
router.get("/facture/:id", findFactureId.handle);
router.get("/product", findAllProduct.handle);
router.delete("/product/:id", deleteProduct.handle);
router.delete("/product/:id", deleteProduct.handle);
router.patch("/product/:id", updateProduct.handle);
router.patch("/facture/:id", updateFacture.handle);

export { router };