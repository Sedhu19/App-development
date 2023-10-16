package com.teamace.sedhu.Model;

import com.teamace.sedhu.Model.enumerate.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="_template")
public class Template {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.UUID)
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
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

	  @Enumerated(EnumType.STRING)
	private Role role;


}
