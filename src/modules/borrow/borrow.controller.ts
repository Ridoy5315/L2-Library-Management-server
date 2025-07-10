import { Request, Response } from "express";
import Book from "../book/book.model";
import Borrow from "./borrow.model";

const createBorrow = async (req : Request, res : Response) => {
     try {
          const  {book, quantity, dueDate} = req.body;

          //update data from books collection
          await Book.borrowBook(book, quantity);

          //insert data into the borrows collection
          const borrowInformation = await Borrow.create({
               book,
               quantity,
               dueDate,
          });

          res.status(201).send({
               success : true,
               message : 'Book borrowed successfully',
               borrowInformation
          })
     } catch (error : any) {
          res.status(400).send({
               success : false,
               message : 'Book not successfully borrowed',
               error : error.message || error
          })
     }
}


const borrowedBooks = async (req : Request, res : Response) => {
     try {
          //aggregation
          const borrowedBooks = await Borrow.aggregate([
               { $group : {
                    _id : '$book',
                    totalQuantity : { $sum : '$quantity'} 
               }},
               { $lookup : {
                    from : 'books',
                    localField : '_id',
                    foreignField : '_id',
                    as : 'bookSummary'
               }},
               { $unwind : '$bookSummary'},
               { $project : {
                    _id : 0,
                    book : {
                         title : '$bookSummary.title',
                         isbn : '$bookSummary.isbn'
                    },
                    totalQuantity : '$totalQuantity'
               }}

          ])

          res.status(201).send({
               success : true,
               message : 'Borrowed books summary retrieved successfully',
               borrowedBooks
          })
     } catch (error : any) {
          res.status(400).send({
               success : false,
               message : 'Borrowed books summary not successfully retrieved',
               error : error.message || error
          })
     }
}


export const borrowController = {
     createBorrow,
     borrowedBooks
}