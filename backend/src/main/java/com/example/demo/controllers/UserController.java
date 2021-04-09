package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.UserEntity;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	
	@GetMapping
	public List<UserEntity> list() {
		UserEntity user1 = new UserEntity(1, "Henrique");
		UserEntity user2 = new UserEntity(2, "Ricador");
		
		List<UserEntity> list = new ArrayList<>();
		list.add(user1);
		list.add(user2);
		
		return list;
	}
}
