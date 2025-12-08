package com.example.sweetdelights.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SimplePageController {

    @GetMapping("/about")
    public String about() {
        // Renders templates/about.html
        return "about";
    }

    @GetMapping("/contact")
    public String contact() {
        // Renders templates/contact.html
        return "contact";
    }
}
