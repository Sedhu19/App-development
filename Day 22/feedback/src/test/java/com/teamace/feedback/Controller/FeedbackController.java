package com.teamace.feedback.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamace.feedback.Constant.Api;
import com.teamace.feedback.dto.request.FeedbackRequest;
import com.teamace.feedback.dto.response.FeedbackResponse;
import com.teamace.feedback.Service.impl.FeedbackService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.FEEDBACK)
@RequiredArgsConstructor
public class FeedbackController {
    private final FeedbackService feedbackService;

    @PostMapping("/add")
    public ResponseEntity<String> saveFeedback(@RequestBody FeedbackRequest request) {
        boolean isSaved = feedbackService.saveFeedback(request);
        return isSaved ? ResponseEntity.ok().body("Feedback Saved") : ResponseEntity.badRequest().build();
    }

    @GetMapping("/get")
    public ResponseEntity<List<FeedbackResponse>> getFeedbacks() {
        List<FeedbackResponse> feedbackList = feedbackService.getFeedbacks();
        return !feedbackList.isEmpty() ? ResponseEntity.ok(feedbackList) : ResponseEntity.noContent().build();
    }
}