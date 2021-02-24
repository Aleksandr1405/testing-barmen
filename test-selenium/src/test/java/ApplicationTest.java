import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.CollectionCondition.*;
import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selectors.*;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Selenide.open;

public class ApplicationTest {
    @BeforeEach
    public void auth() {
        open("http://localhost:3000/authorize");
        $("#authorization-login").setValue("tester");
        $("#authorization-button").click();
    }

    @Test
    public void shouldGreet() {
        $("#greeting").shouldHave(text("ПРИВЕТ, TESTER!"));
    }
    @Test
    public void linkToHomePage() {
        $("#App-header-link").click();
        $("#home-greeting").shouldHave(text("ПРИВЕТ, TESTER!"));
        $("#link-to-barmen").shouldHave(text("МОЙ РЕЙТИНГ"));
    }

    @Test
    public void barmenCheckPoints() {
        $("#App-header-link").click();
        $("#home-greeting").shouldHave(text("ПРИВЕТ, TESTER!"));
        $("#link-to-barmen").click();
        $("#barmen-amount").shouldHave(text("0 / 30"));
    }
}
