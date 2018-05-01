package com.example.service.swap.rest;

import com.example.service.swap.entity.Category;
import com.example.service.swap.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryRestController {

    @Resource
    private CategoryService categoryService;

    @GetMapping(value = "/categories")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Category> getCategories() {
        return categoryService.findAll();
    }

    @PostMapping("/delete-category/{id}")
    public List<Category> deleteCategory(@PathVariable int id){
        categoryService.delete(id);
        return categoryService.findAll();
    }
}