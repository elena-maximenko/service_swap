package com.example.service.swap.rest;

import com.example.service.swap.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UsersRestRepository extends JpaRepository<User, Long>{
}
