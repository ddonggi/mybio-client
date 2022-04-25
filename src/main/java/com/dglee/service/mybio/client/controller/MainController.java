package com.dglee.service.mybio.client.controller;
/*
 * Created by 이동기 on 2022-03-21
 */

import com.dglee.service.mybio.client.service.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class MainController {
    private final Logger logger = LoggerFactory.getLogger(MainController.class);

    private final MemberService memberService;

    @Autowired
    public MainController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/")
    public String intro(){
        logger.info("intro page >>");
        //세션 정보 Model에 담아 넘김
//        httpRequest.getSession();
//        model.addAttribute("request",httpRequest);
        logger.info(" <<<<< end intro");
        return "intro"; //인트로 페이지
    }
    @RequestMapping("/favicon.ico")
    public String favicon(){
        return "forward:/resources/static/img/favicon.ico";
    }

    @GetMapping("/test/{userId}")
    public String test(){
        logger.info("test page >>");
        //세션 정보 Model에 담아 넘김
//        httpRequest.getSession();
//        model.addAttribute("request",httpRequest);
        logger.info(" <<<<< end intro");
        return "test"; //인트로 페이지
    }
    @GetMapping("/login")
    public String login(){
        logger.info("login page >>");
        //세션 정보 Model에 담아 넘김
//        httpRequest.getSession();
//        model.addAttribute("request",httpRequest);
        logger.info(" <<<<< login");
        return "login"; //로그인 페이지
    }
    // 최종 방문자가 보는 페이지
    @GetMapping("/{userId}")
    public String getVisitorPage(@PathVariable String userId, Model model){
        logger.info(" >>>>> visitor page");
        logger.info("userid:{}",userId);
        // 유저 정보 조회
/*
        if(userId is not exist in DB)) { //유저 정보가 없을 경우
            return "redirect:/";
        }
*/
        // TODO : REST http 요청으로 data 받아오기
        // EXAMINE : Controller 에서 요청할지, JS 에서 비동기통신으로 받아올지
        Map<String,String> pageInfo = memberService.getUserPageInfo(userId);
        logger.info("pageInfo:{}",pageInfo.toString());

        model.addAttribute("userId",userId);
        model.addAttribute("pageInfo",pageInfo);

        logger.info(" <<<<< end visitor");
        /*
        * 페이지 테스트용
        * */
        if(userId.equals("dglee")){
            return "dgleeTest";
        }else {
            return "visitor"; //방문자 페이지
        }
    }

    @GetMapping("/{userId}/admin")
    public String getAdminPage(@PathVariable String userId, Model model){
        logger.info(" >>>>> admin page");
        logger.info("userid:{}",userId);
        model.addAttribute("userId",userId);
        // TODO : REST http 요청으로 data 받아오기
        // EXAMINE : Controller 에서 요청할지, JS 에서 비동기통신으로 받아올지

        /* fallback page? userId 정보가 DB 에 없을 경우 intro or fallback 페이지
        if(userId is not exist in DB)) { 유저 정보가 있을 경우
            return "redirect:/";
        }
        */
        logger.info("<<<<< end admin");
        return "members/mainEdit"; // view 구조는 visitor와 같으나 , input 창 등 구성요소 조금씩 다름
    }

    @GetMapping("/join")
    public String getJoinPage(){

//        return "members/join"; // view 구조는 visitor와 같으나 , input 창 등 구성요소 조금씩 다름
        return "test/join_ws"; // view 구조는 visitor와 같으나 , input 창 등 구성요소 조금씩 다름
    }
}
