package com.pfe.kounouz.travel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;






import com.pfe.kounouz.travel.service.CategoryService;
import com.pfe.kounouz.travel.entitie.Category;


@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping
@RestController
public class CategoryController {

	@Autowired
	private CategoryService  CategoryService;

	@RequestMapping(value = "/Category/CategoryManager", method = RequestMethod.GET)
	public List<Category> findAll() {
		return CategoryService.findAllCategory();
	}
	
	
	
	
	
	

	@RequestMapping(value = "/Category/CategoryById/{id}", method = RequestMethod.GET)
	public Category getCategoryById(@PathVariable("id") Long id) {
		return CategoryService.findOneCategory(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/Category/deleteCategory")
	public void deleteCategory(@RequestBody (required = false) Category category) {
		System.err.println(category.getId());
		CategoryService.deleteCategory(category);

	}

	@RequestMapping(method = RequestMethod.POST, value = "/Category/saveCategory")
	public void saveCategory(@RequestBody Category Category) {
		 CategoryService.saveCategory(Category);

	}
	
	@GetMapping("/Category/get")
	public Page<Category> getCategoryPage(@RequestParam("page") int page ,@RequestParam("size")int size){
		Pageable pageable = PageRequest.of(page, size, Sort.by(Order.desc("id")));
		return CategoryService.findAllCategory(pageable);
		
	}
}
