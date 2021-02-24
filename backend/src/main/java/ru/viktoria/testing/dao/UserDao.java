package ru.viktoria.testing.dao;

import ru.viktoria.testing.model.Cocktail;
import ru.viktoria.testing.model.User;

import java.util.List;

public interface UserDao {
    int addUser(User user);
    List<User> getUser(String login);
    int addCocktail(String login, Cocktail cocktail);
    List<Cocktail> getCocktails(String login);
}
