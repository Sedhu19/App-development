package com.teamace.sedhu.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.sedhu.Model.User;

public interface UserRepositorys extends JpaRepository<User,Long> {

	Optional<User>findByEmail(String email);
}
