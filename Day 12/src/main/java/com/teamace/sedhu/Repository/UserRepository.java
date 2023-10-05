package com.teamace.sedhu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.sedhu.Model.User;

public interface UserRepository extends JpaRepository<User,String>{
    
}
