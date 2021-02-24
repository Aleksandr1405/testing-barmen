package ru.viktoria.testing.model;

public class Cocktail {
    public Cocktail() {

    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    String value;

    public Cocktail(String value) {
        this.value = value;
    }
}
