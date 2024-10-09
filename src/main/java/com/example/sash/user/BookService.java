package com.example.sash.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;

    // Getting all books
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // Getting single boks
    public Optional<Book> getBookById(String id) {
        return bookRepository.findById(id);
    }

    // Creating new data in repository

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    // Updating the book

    public Book updateBook(String id, Book bookDetails) {
        Optional<Book> bookOpt = bookRepository.findById(id);
        if (bookOpt.isPresent()) {

            // Get from database

            Book book = bookOpt.get();
            book.setTitle(bookDetails.getTitle());
            book.setAuthor(bookDetails.getAuthor());
            book.setIsbn(bookDetails.getIsbn());
            book.setAvailable(bookDetails.isAvailable());
            return bookRepository.save(book);
        }
        return null;
    }

    // Deleting
    
    public void deleteBook(String id) {
        bookRepository.deleteById(id);
    }
}