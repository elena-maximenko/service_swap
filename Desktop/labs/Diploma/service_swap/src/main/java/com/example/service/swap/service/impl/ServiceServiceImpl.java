package com.example.service.swap.service.impl;

import com.example.service.swap.entity.Service;
import com.example.service.swap.entity.User;
import com.example.service.swap.repository.ServiceRepository;
import com.example.service.swap.repository.UserRepository;
import com.example.service.swap.service.ServiceService;

import javax.annotation.Resource;
import java.util.List;

public class ServiceServiceImpl implements ServiceService {

    @Resource
    private ServiceRepository serviceRepository;

    @Override
    public List<Service> findAll() {
        return serviceRepository.findAll();
    }

    @Override
    public Service update(Service service){
        return serviceRepository.saveAndFlush(service);
    }

    @Override
    public Service delete(int id){
        Service deletedService = serviceRepository.getOne(id);
        serviceRepository.delete(deletedService);
        return deletedService;
    }

    @Override
    public Service create(Service service){
        return serviceRepository.save(service);
    }

    @Override
    public Service findOne(int id){
        return serviceRepository.getOne(id);
    }
}