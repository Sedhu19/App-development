package com.teamace.sedhu.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TemplateRequest {
	
	private Long pid;
	private String firstname;
	private String lastname;
	private String roles;
	private String language1;
	private String language2;
	private String skill1;
	private String skill2;
	private String skill3;
	private String date1;
	private String date2;
	private String date3;
	private String des1;
	private String des2;
	private String des3;
	private String job1;
	private String job2;
	private String job3;
	private String education;

}
