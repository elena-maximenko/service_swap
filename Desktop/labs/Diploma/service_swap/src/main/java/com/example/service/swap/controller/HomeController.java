package com.example.service.swap.controller;

import com.example.service.swap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/welcome")
    public String index() {
        return "index";
    }
}
