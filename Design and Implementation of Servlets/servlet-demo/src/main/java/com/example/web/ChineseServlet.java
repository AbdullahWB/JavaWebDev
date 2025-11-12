package com.example.web;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

@WebServlet(name = "ChineseServlet", urlPatterns = "/chinese")
public class ChineseServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Set browser encoding to UTF-8
        response.setContentType("text/html; charset=UTF-8");
        response.setCharacterEncoding("UTF-8");

        String text = "JavaWeb程序设计任务教程";

        // Use output stream and write UTF-8 bytes
        try (ServletOutputStream out = response.getOutputStream()) {
            String html = "<!DOCTYPE html>\n" +
                    "<html lang='zh-CN'>\n" +
                    "<head>\n" +
                    "    <meta charset='UTF-8'>\n" +
                    "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n" +
                    "    <title>中文输出 - JavaWeb程序设计</title>\n" +
                    "    <style>\n" +
                    "        * { margin: 0; padding: 0; box-sizing: border-box; }\n" +
                    "        body {\n" +
                    "            font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;\n" +
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
                    "            margin-bottom: 20px;\n" +
                    "            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n" +
                    "        }\n" +
                    "        .badge {\n" +
                    "            display: inline-block;\n" +
                    "            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n" +
                    "            color: white;\n" +
                    "            padding: 10px 20px;\n" +
                    "            border-radius: 50px;\n" +
                    "            font-size: 0.9em;\n" +
                    "            margin-top: 15px;\n" +
                    "        }\n" +
                    "    </style>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "    <div class='container'>\n" +
                    "        <h1>" + text + "</h1>\n" +
                    "        <div class='badge'>中文测试页面</div>\n" +
                    "    </div>\n" +
                    "</body>\n" +
                    "</html>";
            out.write(html.getBytes(StandardCharsets.UTF_8));
        }
    }
}
