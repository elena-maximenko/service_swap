package com.example.service.swap.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.service.swap.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
