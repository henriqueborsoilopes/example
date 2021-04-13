package com.example.demo.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.UserDTO;
import com.example.demo.entities.UserEntity;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public List<UserDTO> list() {
		List<UserEntity> users = userRepository.findAll();
		return users.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public UserDTO insert(UserDTO dto){
		UserEntity user = new UserEntity(null, dto.getName(), dto.getEmail(), dto.getPassword());
		user = userRepository.save(user);
		return null;
	}

}
