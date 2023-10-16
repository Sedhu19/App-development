package com.teamace.sedhu.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamace.sedhu.Model.SaveTemplate;
import com.teamace.sedhu.Model.Template;
import com.teamace.sedhu.Service.SaveTemplateService;
import com.teamace.sedhu.dto.request.SaveTemplateRequest;
import com.teamace.sedhu.dto.request.TemplateRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/save")	
@CrossOrigin("*")
@RequiredArgsConstructor
public class SaveTemplateController {
	
	private final SaveTemplateService saveTemplateService;
	
	@PostMapping("/post")
	  public ResponseEntity<String> savepost(
	      @RequestBody SaveTemplateRequest request
	  ) {
	      boolean isSaved = saveTemplateService.savepost(request);
	        return isSaved ? ResponseEntity.status(201).body("Template added successfully!")
	                : ResponseEntity.badRequest().build();
//	    return ResponseEntity.ok(templateService.register(request));
	  }
	
	@GetMapping("/get")
	 public ResponseEntity<List<SaveTemplate>> saveget() {
       List<SaveTemplate> productList = saveTemplateService.saveget();
       return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
               : ResponseEntity.noContent().build();
   }
	
	@GetMapping("/get/{sid}")
	 public ResponseEntity<Optional<SaveTemplate>> savegetbyid(@PathVariable("sid") Long sid) {
      Optional<SaveTemplate> productList = saveTemplateService.savegetbyid(sid);
      return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
              : ResponseEntity.noContent().build();
  }

}
