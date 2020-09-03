package com.pfe.kounouz.travel.srviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.kounouz.travel.entitie.Users;
import com.pfe.kounouz.travel.service.UsersService;
import com.pfe.kounouz.travel.repository.UsersRepository;

@Service
public class UsersServiceImpl  implements UsersService  {
	
	@Autowired
	UsersRepository  UsersRepository ;

	
	public void deleteUsers(Users users) {
		 UsersRepository.delete(users);
		
	}

	
	public List<Users> findAllUsers() {
		return UsersRepository.findAll();
	}

	
	public Users findOneUsers(Long id) {
		return UsersRepository.findUsersById(id);
	}

	
	public Users saveUsers(Users users) {
		return UsersRepository.save(users);
	}

	



}
