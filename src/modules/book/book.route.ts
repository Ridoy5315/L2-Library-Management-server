import { Router } from 'express';
import bookController from './book.controller';

const bookRoute = Router();

bookRoute.post("/", bookController.createBook);
bookRoute.get("/:bookId", bookController.getBookById);
bookRoute.patch("/edit-book/:id", bookController.updateBook);
bookRoute.delete("/delete-book/:id", bookController.deleteBook);
bookRoute.get("/", bookController.getAllBooks);

export default bookRoute;