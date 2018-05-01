package com.example.service.swap.rest;

import com.example.service.swap.entity.Category;
import com.example.service.swap.service.CategoryService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/category")
public class CategoryRestController {

    @Resource
    private CategoryService categoryService;

    @GetMapping(value = "/categories")
    public List<Category> getCategories() {
        System.out.println("get categories");
        return categoryService.findAll();
    }
}
