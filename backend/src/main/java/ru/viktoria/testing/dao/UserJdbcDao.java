package ru.viktoria.testing.dao;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import ru.viktoria.testing.model.Cocktail;
import ru.viktoria.testing.model.User;

import javax.sql.DataSource;
import java.util.List;

public class UserJdbcDao extends JdbcDaoSupport implements UserDao {
    public UserJdbcDao(DataSource dataSource) {
        super();
        setDataSource(dataSource);
        String initSqlUsers = "CREATE TABLE IF NOT EXISTS USERS " +
                "( NAME VARCHAR(50) not null, " +
                "LOGIN VARCHAR(50) not null primary key);";
        String initSqlCocktails =
                "CREATE TABLE IF NOT EXISTS CocktailS " +
                "(COCKTAIL VARCHAR(50) not null, " +
                "LOGIN VARCHAR (50) not null, " +
                "foreign key (LOGIN) references USERS (LOGIN));\n";
        getJdbcTemplate().update(initSqlUsers);
        getJdbcTemplate().update(initSqlCocktails);
    }

    @Override
    public int addUser(User user) {
        String sql = "INSERT INTO USERS (NAME, LOGIN) VALUES (" +
                "'" + user.getName() + "'" +
                ", " +
                "'" +user.getLogin() + "'" +
                ");";
        return getJdbcTemplate().update(sql);
    }

    @Override
    public List<User> getUser(String login) {
        String sql = "SELECT * " +
                "FROM USERS " +
                "WHERE USERS.LOGIN = \"" +
                login +
                "\";";
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(User.class));
    }

    @Override
    public int addCocktail(String login, Cocktail cocktail) {
        String sql = "INSERT INTO COCKTAILS (COCKTAIL, LOGIN) VALUES (?, ?);";
        return getJdbcTemplate().update(sql, cocktail.getValue(), login);

    }

    @Override
    public List<Cocktail> getCocktails(String login) {
        String sql = "SELECT * " +
                "FROM COCKTAILS " +
                "WHERE COCKTAILS.LOGIN = \"" +
                login +
                "\";";
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(Cocktail.class));
    }
}
