package ru.viktoria.testing.model;

import javax.validation.constraints.NotNull;

public class User {
    public User() {

    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    String name;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    String login;

    public User(String login, String name) {
        this.login = login;
        this.name = name;
    }

}
