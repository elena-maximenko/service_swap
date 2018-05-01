package com.example.service.swap.service;

import java.util.List;
import com.example.service.swap.entity.Category;

public interface CategoryService {
    List<Category> findAll();
    Category create(Category category);
    Category update(Category category);
    Category delete(int id);
    Category findOne(int id);
}