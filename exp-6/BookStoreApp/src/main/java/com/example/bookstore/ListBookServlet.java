package com.example.bookstore;

import com.example.bookstore.Book;
import com.example.bookstore.BookDB;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.util.Collection;

import jakarta.servlet.annotation.WebServlet;

@WebServlet("/listBooks")
public class ListBookServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        Collection<Book> books = BookDB.getAll();
        req.setAttribute("books", books);
        req.getRequestDispatcher("/pages/list.jsp").forward(req, resp);
    }
}
