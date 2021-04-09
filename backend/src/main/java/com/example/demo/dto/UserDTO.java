package com.example.demo.dto;

import java.io.Serializable;

import com.example.demo.entities.UserEntity;

public class UserDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String name;
	
	public UserDTO() {
	}

	public UserDTO(String name) {
		super();
		this.name = name;
	}
	
	public UserDTO(UserEntity user) {
		super();
		this.name = user.getName();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
