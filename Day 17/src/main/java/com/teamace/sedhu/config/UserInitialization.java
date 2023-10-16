//package com.teamace.sedhu.config;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import com.teamace.sedhu.Repository.UserRepositorys;
//
//import lombok.RequiredArgsConstructor;
//
//
//@Component
//@RequiredArgsConstructor
//public class UserInitialization implements CommandLineRunner{
//	private final UserRepositorys userRepository;
//	private final PasswordEncoder passwordEncoder;
//	
//	@Override
//	public void run(String...args) throws Exception{
//		try {
//			if(userRepository.count()==0) {
//				User user=createUser();
//				userRepository.save(user);
//			}
//		} catch 
//		
//	}
//	
//}
