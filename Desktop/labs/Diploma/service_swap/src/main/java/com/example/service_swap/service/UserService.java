package com.example.service_swap.service;

import com.example.service_swap.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    User findUserByLogin(String login);
    User update(User user);
    User findOne(int id);
    User delete(int id);
    User create(User user);
}