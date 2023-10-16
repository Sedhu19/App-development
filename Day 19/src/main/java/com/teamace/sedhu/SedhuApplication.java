package com.teamace.sedhu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class SedhuApplication {

	public static void main(String[] args) {
		SpringApplication.run(SedhuApplication.class, args);
	}
	
	

}
