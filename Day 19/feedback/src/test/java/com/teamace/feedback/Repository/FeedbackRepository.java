package com.teamace.feedback.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.feedback.Model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    Optional<Feedback> findByUsernameAndUseremail(String uname, String uemail);

}