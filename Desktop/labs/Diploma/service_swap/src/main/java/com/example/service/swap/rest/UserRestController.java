package com.example.service.swap.rest;

import com.example.service.swap.entity.User;
import com.example.service.swap.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserRestController {
    @Resource
    private UserService userService;

    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> getUsers(){
        return userService.findAll();
    }

    @PostMapping("/delete-user/{id}")
    public List<User> deleteUser(@PathVariable int id){
        User user = userService.delete(id);
        return userService.findAll();
    }
}