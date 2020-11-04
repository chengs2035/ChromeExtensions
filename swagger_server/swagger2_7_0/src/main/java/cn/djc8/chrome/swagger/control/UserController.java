package cn.djc8.chrome.swagger.control;


import cn.djc8.chrome.swagger.vo.TaoZi;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String hello() {
        return "hello";
    }

    @RequestMapping(value = "/GetTaoZi", method = RequestMethod.POST)
    public TaoZi getTaoZi() {
        TaoZi taozi = new TaoZi();
        taozi.setAge(18);
        taozi.setHeight(170);
        taozi.setName("桃子");
        return taozi;
    }

}
