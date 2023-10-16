package com.teamace.sedhu.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.sedhu.Model.Template;


public interface TemplateRepositorys extends JpaRepository<Template,Long> {
	
	  Template findBypid(Long id);
//	  Template deleteBypid(Long id);

}
