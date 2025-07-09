import { Router } from "express";
import { borrowController } from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post("/borrow", borrowController.createBorrow);
borrowRoute.get("/borrow-summary", borrowController.borrowedBooks);

export default borrowRoute;