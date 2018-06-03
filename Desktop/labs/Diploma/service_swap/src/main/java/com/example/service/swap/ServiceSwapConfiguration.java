package com.example.service.swap;

import com.example.service.swap.service.ServiceService;
import com.example.service.swap.service.UserService;
import com.example.service.swap.service.impl.ServiceServiceImpl;
import com.example.service.swap.service.impl.UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServiceSwapConfiguration {
    @Bean
    public UserService getUserServiceConfig(){
        return new UserServiceImpl();
    }

    @Bean
    public ServiceService getServiceServiceConfig(){
        return new ServiceServiceImpl();
    }
}
