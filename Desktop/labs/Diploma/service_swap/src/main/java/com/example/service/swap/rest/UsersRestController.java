package com.example.service.swap.rest;

import com.example.service.swap.entity.User;
import com.example.service.swap.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class UsersRestController {
    @Resource
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.findAll();
    }

}
