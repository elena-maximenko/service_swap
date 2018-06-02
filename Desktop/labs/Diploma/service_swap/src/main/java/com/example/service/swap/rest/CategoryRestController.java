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
    public List<Category> getCategories() {
        return categoryService.findAll();
    }

    @PostMapping("/delete-category/{id}")
    public List<Category> deleteCategory(@PathVariable int id){
        categoryService.delete(id);
        return categoryService.findAll();
    }

    @PostMapping("/create-category/{name}")
    public List<Category> createCategory(@PathVariable String name){
        categoryService.create(new Category(name));
        return categoryService.findAll();
    }

    @PostMapping("/edit-category/{id}/{name}")
    public List<Category> editCategory(@PathVariable int id, @PathVariable String name){
        Category editedCategory = categoryService.findOne(id);
        editedCategory.setName(name);
        categoryService.update(editedCategory);
        System.out.println("categories = " + getCategories());
        return categoryService.findAll();
    }
}
