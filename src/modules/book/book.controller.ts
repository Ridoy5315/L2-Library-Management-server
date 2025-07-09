import { Request, Response } from "express";
import Book from "./book.model";

//book create/post
const createBook = async (req: Request, res: Response) => {
  try {

    const book = new Book(req.body);
    await book.save();

    res.status(201).send({
      success: true,
      message: "Book created successfully",
      book: book,
    });
  } catch (error : any) {
    res.status(404).send({
      success: false,
      message: "The book not successfully created",
      error: error.message || error,
    });
  }
};

//get all books
const getAllBooks = async (req: Request, res: Response) => {
  try {
    // const { filter, sortBy, sort, limit=10, page=1 } = req.query;
    const page = Number(req.query.page) || 1;

    //filtering
    // const filterValue: any = {};
    // if (filter) {
    //   filterValue.genre = filter;
    // }

    //sorting
    // const sortingOption: any = {};
    // if (sortBy) {
    //   const sortValue = sort === "asc" ? 1 : -1;
    //   sortingOption[String(sortBy)] = sortValue;
    // }

    const limit = 10;
    const skip = (page - 1) * limit;

    //limiting
    // const limitValue = Number(limit);
    // const pageValue = Number(page);
    // const skipValue = (pageValue - 1) * limitValue;

    const total = await Book.countDocuments();
    const books = await Book.find()
      .skip(skip)
      .limit(limit);
      
    res.status(201).send({
      success: true,
      message: "Books retrieved successfully",
      data: {
        total,
      },
      books,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Books not successfully retrieved",
      error,
    });
  }
};
//get book by id
const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    res.status(201).send({
      success: true,
      message: "Book retrieved successfully",
      book,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Book not successfully retrieved",
      error,
    });
  }
};

//update book
const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).send({
      success: true,
      message: "Book updated successfully",
      book,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Book not successfully updated",
      error,
    });
  }
};

//delete book
const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;

    const book = await Book.findByIdAndDelete(bookId);

    if (!book) {
      res.status(404).send({
        success: false,
        message: "Book not found or already deleted",
      });
      return ;
    }

    res.status(201).send({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Book not deleted successfully",
      error: error.message || error,
    });
  }
};

const bookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
}

export default bookController;