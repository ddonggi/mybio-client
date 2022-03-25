package com.dglee.service.mybio.client.service;
/*
 * Created by 이동기 on 2022-03-21
 */

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@Service
public class RestService {
    private final Logger logger = LoggerFactory.getLogger(RestService.class);

    public ResponseEntity<String> getResponse(String requestURL) {

        HttpEntity<?> request = initHttpEntity(); // init header, body
        RestTemplate template = initTemplate(); // merge
        ResponseEntity<String> responseEntity = getResponseByGet(requestURL, template, request);
//        JsonObject jsonObject = parsingJsonObject(responseEntity);
//        printJsonObject(responseEntity);

        return responseEntity;
//        return null;
    }

    //테스트용
    private void printJsonObject(ResponseEntity<String> response){
        Object obj =  JsonParser.parseString(Objects.requireNonNull(response.getBody()));
        logger.info("print obj:{}",obj);
        JsonArray JsonArray = (JsonArray) obj;
        logger.info("print jsonObj:{}",JsonArray.toString());
    }

    private JsonObject parsingJsonObject(ResponseEntity<String> response){
        Object obj =  JsonParser.parseString(Objects.requireNonNull(response.getBody()));
        logger.info("obj:{}",obj);
        JsonObject jsonObject = (JsonObject) obj;
        logger.info("jsonObj:{}",jsonObject);
        return jsonObject;
    }

    private ResponseEntity<String> getResponseByGet(String url, RestTemplate template, HttpEntity<?> request) {
        //GET
        return template.exchange(
                url,//요청할 서버 주소
                HttpMethod.GET, //요청 방식
                request,//보낼 데이터
                String.class
        );
    }

    private ResponseEntity<String> getResponseByPost(String url, RestTemplate template, HttpEntity<?> request) {
        //POST
        return template.exchange(
                url,//요청할 서버 주소
                HttpMethod.POST, //요청 방식
                request,//보낼 데이터
                String.class
        );
    }

    private ResponseEntity<String> getResponseByDelete(String url, RestTemplate template, HttpEntity<?> request) {
        //DELETE
        return template.exchange(
                url,//요청할 서버 주소
                HttpMethod.DELETE, //요청 방식
                request,//보낼 데이터
                String.class
        );
    }

    public HttpHeaders getHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return headers;
    }

    private static Map setBody(){
        Map body = new HashMap();
//        body.put("","");
//        System.out.println("request body:"+body);
        return body;
    }

    private HttpEntity<?> initHttpEntity() {
        Optional<Map> body = Optional.of(setBody()); //body
        HttpHeaders headers = getHeaders(); //header
        return new HttpEntity<>(body,headers);
    }

    private RestTemplate initTemplate() {
        HttpComponentsClientHttpRequestFactory factory = initHttpFactory();
        return new RestTemplate(factory);
    }

    private HttpComponentsClientHttpRequestFactory initHttpFactory() {
        HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
        factory.setReadTimeout(5000);// 읽기시간초과, ms
        factory.setConnectTimeout(3000); // 연결시간초과, ms
        HttpClient httpClient = HttpClientBuilder.create()
                .setMaxConnTotal(100) // connection pool 적용
                .setMaxConnPerRoute(5) // connection pool 적용
                .build();
        factory.setHttpClient(httpClient); // 동기실행에 사용될 HttpClient 세팅
        return factory;
    }
}
