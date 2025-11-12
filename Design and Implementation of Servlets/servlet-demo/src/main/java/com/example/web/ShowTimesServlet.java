package com.example.web;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.concurrent.atomic.AtomicLong;

@WebServlet(name = "ShowTimesServlet", urlPatterns = "/times")
public class ShowTimesServlet extends HttpServlet {

    private static final String ATTR = "visitCount";

    @Override
    public void init() throws ServletException {
        // Initialize the counter once per webapp
        ServletContext ctx = getServletContext();
        synchronized (ctx) {
            if (ctx.getAttribute(ATTR) == null) {
                ctx.setAttribute(ATTR, new AtomicLong(0));
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Delegate to doGet
        doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        response.setContentType("text/html; charset=UTF-8");
        response.setCharacterEncoding("UTF-8");

        ServletContext ctx = getServletContext();
        AtomicLong counter;
        synchronized (ctx) {
            counter = (AtomicLong) ctx.getAttribute(ATTR);
            if (counter == null) { // safety in case the context was reloaded
                counter = new AtomicLong(0);
                ctx.setAttribute(ATTR, counter);
            }
        }

        long visits = counter.incrementAndGet(); // increase by 1 each request

        try (PrintWriter out = response.getWriter()) {
            String html = "<!DOCTYPE html>\n" +
                    "<html lang='en'>\n" +
                    "<head>\n" +
                    "    <meta charset='UTF-8'>\n" +
                    "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n" +
                    "    <title>Visit Counter</title>\n" +
                    "    <style>\n" +
                    "        * { margin: 0; padding: 0; box-sizing: border-box; }\n" +
                    "        body {\n" +
                    "            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n" +
                    "            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n" +
                    "            min-height: 100vh;\n" +
                    "            display: flex;\n" +
                    "            justify-content: center;\n" +
                    "            align-items: center;\n" +
                    "            padding: 20px;\n" +
                    "        }\n" +
                    "        .container {\n" +
                    "            background: white;\n" +
                    "            border-radius: 12px;\n" +
                    "            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n" +
                    "            padding: 60px 40px;\n" +
                    "            text-align: center;\n" +
                    "            max-width: 500px;\n" +
                    "        }\n" +
                    "        h1 {\n" +
                    "            color: #333;\n" +
                    "            font-size: 2.5em;\n" +
                    "            margin-bottom: 10px;\n" +
                    "        }\n" +
                    "        .visit-count {\n" +
                    "            font-size: 3.5em;\n" +
                    "            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n" +
                    "            -webkit-background-clip: text;\n" +
                    "            -webkit-text-fill-color: transparent;\n" +
                    "            background-clip: text;\n" +
                    "            font-weight: bold;\n" +
                    "            margin: 20px 0;\n" +
                    "        }\n" +
                    "        p {\n" +
                    "            color: #666;\n" +
                    "            font-size: 1.1em;\n" +
                    "            margin-bottom: 30px;\n" +
                    "            line-height: 1.6;\n" +
                    "        }\n" +
                    "        .button-group {\n" +
                    "            display: flex;\n" +
                    "            gap: 15px;\n" +
                    "            justify-content: center;\n" +
                    "        }\n" +
                    "        button {\n" +
                    "            padding: 12px 30px;\n" +
                    "            font-size: 1em;\n" +
                    "            border: none;\n" +
                    "            border-radius: 50px;\n" +
                    "            cursor: pointer;\n" +
                    "            font-weight: bold;\n" +
                    "            transition: all 0.3s ease;\n" +
                    "        }\n" +
                    "        .btn-refresh {\n" +
                    "            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n" +
                    "            color: white;\n" +
                    "        }\n" +
                    "        .btn-refresh:hover {\n" +
                    "            transform: translateY(-2px);\n" +
                    "            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);\n" +
                    "        }\n" +
                    "        .btn-post {\n" +
                    "            background: #f0f0f0;\n" +
                    "            color: #333;\n" +
                    "            border: 2px solid #667eea;\n" +
                    "        }\n" +
                    "        .btn-post:hover {\n" +
                    "            background: #667eea;\n" +
                    "            color: white;\n" +
                    "            transform: translateY(-2px);\n" +
                    "        }\n" +
                    "    </style>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "    <div class='container'>\n" +
                    "        <h1>📊 Website Visits</h1>\n" +
                    "        <div class='visit-count'>" + visits + "</div>\n" +
                    "        <p>Click the button below to increase the visit counter</p>\n" +
                    "        <div class='button-group'>\n" +
                    "            <button class='btn-refresh' onclick='location.reload()'>🔄 Refresh</button>\n" +
                    "            <form method='POST' style='display: inline;'>\n" +
                    "                <button type='submit' class='btn-post'>📤 Submit (POST)</button>\n" +
                    "            </form>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</body>\n" +
                    "</html>";
            out.print(html);
        }
    }
}
