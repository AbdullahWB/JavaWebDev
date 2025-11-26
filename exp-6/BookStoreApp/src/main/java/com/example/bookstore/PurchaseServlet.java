package com.example.bookstore;

import com.example.bookstore.Book;
import com.example.bookstore.BookDB;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

import jakarta.servlet.annotation.WebServlet;

@WebServlet("/purchase")
public class PurchaseServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.sendRedirect("listBooks");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String id = req.getParameter("id");
        Book book = BookDB.getBook(id);
        req.setAttribute("book", book);
        req.getRequestDispatcher("/pages/success.jsp").forward(req, resp);
    }
}
