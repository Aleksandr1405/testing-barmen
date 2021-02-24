package ru.viktoria.testing.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.viktoria.testing.dao.UserDao;
import ru.viktoria.testing.model.Cocktail;
import ru.viktoria.testing.model.User;


@Controller
public class UserController {
    private final UserDao userDao;

    private final ObjectMapper mapper = new ObjectMapper();

    @Autowired
    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping("/api/authorize")
    @ResponseBody
    public String getUser(@RequestParam("login") String login) throws JsonProcessingException {
        return mapper.writeValueAsString(userDao.getUser(login).get(0));
    }

    @PostMapping("/api/barmen")
    @ResponseBody
    public String addCocktail(@RequestParam("userLogin") String login,
                              @RequestParam("cocktail") String cocktail) throws JsonProcessingException {
        userDao.addCocktail(login, new Cocktail (cocktail));
        return mapper.writeValueAsString(userDao.getCocktails(login));
    }

    @PostMapping("/api/register")
    @ResponseBody
    public String addUser(@RequestParam("login") String login,
                          @RequestParam("name") String name) throws JsonProcessingException {
        userDao.addUser(new User(login, name));
        return mapper.writeValueAsString(userDao.getUser(login).get(0));
    }

    @GetMapping("/api/barmen")
    @ResponseBody
    public String getCocktails(@RequestParam("userLogin") String login) throws JsonProcessingException {
        return mapper.writeValueAsString(userDao.getCocktails(login));
    }
}
