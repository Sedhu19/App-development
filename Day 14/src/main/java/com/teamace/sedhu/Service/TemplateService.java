package com.teamace.sedhu.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.teamace.sedhu.Model.Template;
import com.teamace.sedhu.Model.enumerate.Role;
import com.teamace.sedhu.Repository.TemplateRepositorys;
import com.teamace.sedhu.dto.request.TemplateRequest;
import com.teamace.sedhu.dto.response.TemplateResponse;

import jakarta.persistence.EntityNotFoundException;



@Service
public class TemplateService {

    private final TemplateRepositorys repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public TemplateService(TemplateRepositorys repository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public boolean registertemp(TemplateRequest request) {
        Template template = Template.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .phoneno(request.getPhoneno())
                .education(request.getEducation())
                .cgpa(request.getCgpa())
                .role(Role.USER)
                .build();

    
        repository.save(template);

        return true;
    }

    public List<Template> getAllProducts() {
        List<Template> productList = repository.findAll();
        return productList;
    }

    public boolean updateProduct(TemplateRequest request, Long pid) {
        
        Optional<Template> optionalTemplate = repository.findById(pid);

        if (optionalTemplate.isPresent()) {
            Template template = optionalTemplate.get();
            template.setFirstname(request.getFirstname());
            template.setLastname(request.getLastname());
            template.setEmail(request.getEmail());
            template.setPhoneno(request.getPhoneno());
            template.setEducation(request.getEducation());
            template.setCgpa(request.getCgpa());
            repository.save(template);

            return true;
        } else {
            throw new EntityNotFoundException("Template with pid " + pid + " not found");
        }
    }

    public boolean delete(Long pid) {
        repository.deleteById(pid);
        return true;
    }
}
