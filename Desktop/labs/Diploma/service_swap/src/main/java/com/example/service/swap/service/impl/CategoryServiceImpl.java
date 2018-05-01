package com.example.service.swap.service.impl;

import com.example.service.swap.entity.Category;
import com.example.service.swap.repository.CategoryRepository;
import com.example.service.swap.service.CategoryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Resource
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category update(Category category){
        return categoryRepository.saveAndFlush(category);
    }



    @Override
    public Category delete(int id){
        Category deletedCategory = categoryRepository.getOne(id);
        categoryRepository.delete(deletedCategory);
        return deletedCategory;
    }

    @Override
    public Category create(Category category){
        return categoryRepository.save(category);
    }

    @Override
    public Category findOne(int id){
        return categoryRepository.getOne(id);
    }
}