import express from 'express';
const router = express.Router();
import User from './controllers/user'
import Book from './controllers/book'

router.get('/', (req, res) => {
    res.send("coming to america")
})

router.post('/signUp', User.signUp);
router.post('/newBook', Book.createBook);
router.get('/Books', Book.allBooks);
router.get('/Books/:bookId', Book.getBook);
router.put('/updateBook/:bookId', Book.updataeBook);
router.delete('/deleteBook/:bookId', Book.deleteBook);

export default router;