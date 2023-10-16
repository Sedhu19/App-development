package com.teamace.feedback.Service.impl;

import java.util.List;

import com.teamace.feedback.dto.request.FeedbackRequest;
import com.teamace.feedback.dto.response.FeedbackResponse;

public interface FeedbackService {

    boolean saveFeedback(FeedbackRequest request);

    List<FeedbackResponse> getFeedbacks();

}