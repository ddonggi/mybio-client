package com.dglee.service.mybio.client.service;
/*
 * Created by 이동기 on 2022-03-21
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MemberService {

    private final RestService restService;
    //for local test
    private final String TEMPLATE_URL = "http://localhost:8081/template/";
    private final String CARD_URL = "http://localhost:8081/card/";

    @Autowired
    public MemberService(RestService restService) {
        this.restService = restService;
    }

    public Map<String,String> getUserPageInfo(String userId) {
        Map<String,String> pageInfo = new HashMap<>();

        ResponseEntity<String> templateResponse = restService.getResponse(TEMPLATE_URL + userId);
        ResponseEntity<String> cardResponse = restService.getResponse(CARD_URL + userId);
        String cardList = cardResponse.getBody();
//        String template = templateResponse.getBody();
        pageInfo.put("cardList",cardList);
//        pageInfo.put("template",template);
        return pageInfo;
    }
}
