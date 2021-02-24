package controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import ru.viktoria.testing.controller.UserController;
import ru.viktoria.testing.dao.UserDao;
import ru.viktoria.testing.model.Cocktail;
import ru.viktoria.testing.model.User;

import java.util.Collections;

import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = UserController.class)
@AutoConfigureMockMvc
@AutoConfigureRestDocs(outputDir = "target/snippets")
//@WebMvcTest(UserController.class)
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserDao userDao;

    private final ObjectMapper mapper = new ObjectMapper();

    @Test
    public void testGetUser() throws Exception {
        String testerLogin = "tester";
        String testerName = "Tester";
        User tester = new User(testerLogin, testerName);

        when(userDao.getUser(testerLogin)).thenReturn(Collections.singletonList(tester));

        String expectedContent =
                mapper.writeValueAsString(tester);
        mockMvc.perform(get("/api/authorize?login=" + testerLogin))
                .andExpect(status().isOk())
                .andExpect(content().string(expectedContent))
                .andDo(document("auth"));
    }

    @Test
    public void testGetCocktails() throws Exception {
        String testerLogin = "tester";
        String testerName = "Tester";
        User tester = new User(testerLogin, testerName);
        Cocktail testerCocktail = new Cocktail("cocktail");

        when(userDao.getCocktails(testerLogin)).thenReturn(Collections.singletonList(testerCocktail));

        String expectedContent =
                mapper.writeValueAsString(Collections.singletonList(testerCocktail));
        mockMvc.perform(get("/api/barmen?userLogin=" + testerLogin))
                .andExpect(status().isOk())
                .andExpect(content().string(expectedContent))
                .andDo(document("getCocktails"));
    }
}
