package com.example.service.swap.service;

import com.example.service.swap.entity.Service;
import com.example.service.swap.entity.User;

import java.util.List;

public interface ServiceService {
    List<Service> findAll();
    Service update(Service service);
    Service findOne(int id);
    Service delete(int id);
    Service create(Service service);
}
