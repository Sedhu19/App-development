package com.teamace.sedhu.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.teamace.sedhu.Model.SaveTemplate;
import com.teamace.sedhu.Model.Template;
import com.teamace.sedhu.Model.enumerate.Role;
import com.teamace.sedhu.Repository.SaveTemplateRepository;
import com.teamace.sedhu.Repository.TemplateRepositorys;
import com.teamace.sedhu.dto.request.SaveTemplateRequest;
import com.teamace.sedhu.dto.request.TemplateRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SaveTemplateService {
	
	private final SaveTemplateRepository saveTemplateRepository;
	
	public boolean savepost(SaveTemplateRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = SaveTemplate.builder()
	    		.sid(request.getSid())
	    		.email(request.getEmail())
	            .tid(request.getTid())
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
	    saveTemplateRepository.save(user);
//	    var jwtToken = jwtservice.generateToken(user);
	    
		return true;
	}
	 public List<SaveTemplate> saveget() {
	        List<SaveTemplate> productList = saveTemplateRepository.findAll();

	        return productList;
	    }
	public Optional<SaveTemplate> savegetbyid(Long sid) {
		Optional<SaveTemplate> prolist = saveTemplateRepository.findById(sid);
		return prolist;
	}

}
