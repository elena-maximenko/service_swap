package com.example.service.swap.rest;

import com.example.service.swap.entity.Service;
import com.example.service.swap.service.ServiceService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceRestController {

    @Resource
    private ServiceService serviceService;

    @GetMapping(value = "/services")
    public List<Service> getServices(){
        return serviceService.findAll();
    }

    @PostMapping("/delete-service/{id}")
    public List<Service> deleteService(@PathVariable int id){
        serviceService.delete(id);
        return serviceService.findAll();
    }


}
