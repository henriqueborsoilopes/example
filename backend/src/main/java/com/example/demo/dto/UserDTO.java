package com.example.demo.dto;

import java.io.Serializable;

import com.example.demo.entities.UserEntity;

public class UserDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String name;
	private String email;
	private String password;
	
	public UserDTO() {
	}
	
	public UserDTO(String name, String email, String password) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public UserDTO(UserEntity user) {
		super();
		this.name = user.getName();
		this.email = user.getEmail();
		this.password = user.getPassword();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
