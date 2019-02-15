import model from '../models';

const { Book } = model;

class Books {

    static createBook (req, res) {
        const { title, author, description, quantity} = req.body;
        const { UserId } = req.params;
        return Book
        .create({
            title,
            author,
            description,
            quantity,
            UserId
        })
        .then(data => res.status(201).send({
            message: "book has been created successfully",
            data
        }))
    }

    static allBooks (req, res) {
        return Book
        .findAll()
        .then(data => res.status(200).send(
            data
        ))
        .catch(err => console.log(err)) 
    }

    static updataeBook(req, res) {
        const { title, author, description, quantity } = req.body;

        return Book
        .findById(req.params.bookId)
        .then((book) => {
            book.update({
            title: title || book.title,
            author: author || book.author,
            description: description || book.description,
            quantity: quantity || book.quantity
            })
        .then((data) => {
            res.status(200).send({
                message: "update successful",
                data
            })
        })
        .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    static deleteBook (req, res) {
        return Book
        .findById(req.params.bookId)
        .then(book => {
            if(!book) {
               return res.status(400).send({
                    message: "Book Not Found"
                })
            }
            return book
            .destroy()
            .then(() => res.status(200).send({
                message: "Delete Successful"
            }))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
    }
    
    static getBook (req, res){
        return Book
        .findOne({ where: {id: req.params.bookId} })
        .then(data => res.status(200).send({
            data
        }))
        .catch(error => res.send(error))
    }
}

export default Books