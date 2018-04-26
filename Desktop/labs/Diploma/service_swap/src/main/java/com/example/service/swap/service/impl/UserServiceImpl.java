package com.example.service.swap.service.impl;


import com.example.service.swap.entity.User;
import com.example.service.swap.repository.UserRepository;
import com.example.service.swap.service.UserService;

import javax.annotation.Resource;
import java.util.List;

public class UserServiceImpl implements UserService {

    @Resource
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findUserByLogin(String login){
        return userRepository.findUserByLogin(login);
    }

    @Override
    public User update(User user){
        return userRepository.saveAndFlush(user);
    }

    @Override
    public User delete(int id){
        User deletedUser = userRepository.getOne(id);
        userRepository.delete(deletedUser);
        return deletedUser;
    }

    @Override
    public User create(User user){
        return userRepository.save(user);
    }

    @Override
    public User findOne(int id){
        return userRepository.getOne(id);
    }
}