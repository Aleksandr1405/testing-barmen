package config;

import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import ru.viktoria.testing.dao.UserDao;
import ru.viktoria.testing.dao.UserJdbcDao;

import javax.sql.DataSource;

@TestConfiguration
public class JdbcDaoContextTestConfiguration {
    @Bean
    public UserDao userDao(DataSource dS) {
        return new UserJdbcDao(dS);
    }
    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.sqlite.JDBC");
        dataSource.setUrl("jdbc:sqlite:test.db");
        dataSource.setUsername("");
        dataSource.setPassword("");
        return dataSource;
    }
}
