package com;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.HashMap;

@RestController
public class MyController {
    @RequestMapping(value = "/greeting", method = RequestMethod.GET)
    public String greeting() {
        return "hello vehas!";
    }

    @RequestMapping(value = "/login2", method = RequestMethod.GET)
    public HashMap<String, String> loginMethod(HttpServletRequest request){
        System.out.println("login!");
        Principal principal = request.getUserPrincipal();
        GrantedAuthority grantedAuthority = ((UsernamePasswordAuthenticationToken) principal).getAuthorities().iterator().next();
        HashMap<String, String> map = new HashMap<String, String>();
        if(grantedAuthority.getAuthority().equals("ROLE_USER")){
            map.put("redirectSide","/userHome");
            return map;
        }
        /*else if(grantedAuthority.getAuthority().equals("ROLE_ADMIN")){
            map.put("redirectSide","../view/employee.html");
            return map;
        }*/
        return map;
    }
}
