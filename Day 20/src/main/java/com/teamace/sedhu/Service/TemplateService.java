package com.teamace.sedhu.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.teamace.sedhu.Model.Template;
import com.teamace.sedhu.Model.User;
import com.teamace.sedhu.Model.enumerate.Role;
import com.teamace.sedhu.Repository.TemplateRepositorys;
import com.teamace.sedhu.Repository.UserRepositorys;
import com.teamace.sedhu.dto.request.RegisterRequest;
import com.teamace.sedhu.dto.request.TemplateRequest;
import com.teamace.sedhu.dto.response.AuthenticationResponse;
import com.teamace.sedhu.dto.response.TemplateResponse;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class TemplateService {
	
	private final TemplateRepositorys repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
//	 private final AuthenticationManager authenticationManager;
	public boolean registertemp(TemplateRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = Template.builder()
	            .pid(request.getPid())
	            .firstname(request.getFirstname())
	            .lastname(request.getLastname())
	            .roles(request.getRoles())
	        	.language1(request.getLanguage1())
	        	.language2(request.getLanguage2())
	        	.skill1(request.getSkill1())
	        	.skill2(request.getSkill2())
	        	.skill3(request.getSkill3())
	        	.date1(request.getDate1())
	        	.date2(request.getDate2())
	        	.date3(request.getDate3())
	        	.des1(request.getDes1())
	        	.des2(request.getDes2())
	        	.des3(request.getDes3())
	        	.job1(request.getJob1())
	        	.job2(request.getJob2())
	        	.job3(request.getJob3())
	        	.education(request.getEducation())
	            .role(Role.USER)
	            .build();
	    repository.save(user);
//	    var jwtToken = jwtservice.generateToken(user);
	    
		return true;
	}
	 public List<Template> getAllProducts() {
	        List<Template> productList = repository.findAll();

	        return productList;
	    }
	public boolean updateProduct(TemplateRequest request, Long pid) {
		Template product = repository.findBypid(pid);

	        if (product != null) {
	            product.setPid(request.getPid());  
	            product.setFirstname(request.getFirstname());
	            product.setLastname(request.getLastname());
	            product.setRoles(request.getRoles());
	            product.setLanguage1(request.getLanguage1());
	            product.setLanguage2(request.getLanguage2());
	            product.setSkill1(request.getSkill1());
	            product.setSkill2(request.getSkill2());
	            product.setSkill3(request.getSkill3());
	            product.setDate1(request.getDate1());
	            product.setDate2(request.getDate2());
	            product.setDate3(request.getDate3());
	            product.setDes1(request.getDes1());
	            product.setDes2(request.getDes2());
	            product.setDes3(request.getDes3());
	            product.setJob1(request.getJob1());
	            product.setJob2(request.getJob2());
	            product.setJob3(request.getJob3());
	            product.setEducation(request.getEducation());
	     
	            repository.save(product);

	            return true;
	        } else {
	            throw new EntityNotFoundException("Product with pid " + pid + " not found");
	        }
	} 
	public boolean delete(Long pid) {
		repository.deleteById(pid);
		return true;
	}

}
