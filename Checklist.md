# Чеклист по заданиям

## 1. Frontend
Main
- [x] создать папку `client`
- [x] создать приложение на React
- [x] несколько страниц с роутингом
- [x] сервис, общающийся с Node.js бекендом
- [x] unit, component, e2e тесты

Advanced
- [x] авторизация
- [x] тесты для проверки авторизации
- [x] несколько наборов тестов

Bonus
- [x] рассмотреть 2 фреймворка: Mocha и Jest
- [x] написать примеры с каждым для своего приложения
- [x] короткие заметки об отличиях
- [x] GitHub статья

## 2. E2E Tests
Main
- [x] тесты на Playwright
- [x] тесты на Cypress

Advanced
- [x] тесты без логина

Bonus
- [x] скриншот-тестирование и запись видео
- [x] статья в блог

## 3. Backend. Unit testing. Component testing
Main
- [x] сервис Java + Spring + DB
- [x] как минимум 1 контроллер
- [x] unit tests
- [x] component tests
- [x] TestContainers для теста с DB
- [x] Mockito
- [ ] README про ненаписанные тесты

Advanced
- [x] взаимодействие сервиса и Frontend приложения
- [x] тесты на авторизацию
- [ ] Spring Test Configuration, которые можно переключать при помощи флага при запуске тестов
- [x] генерация тестовой документации через Asci Doctor(Spring Rest Docs)

Bonus
- [ ] функциональность с Kafka/RabbitMQ streams
- [ ] компонентные тесты на эту функциональность

## 4. CI/CD
Main
- [x] GitHub action для запуска тестов на UI и Backend по пушу из master в ветку

Advanced
- [ ] GitHub action для деплоя приложения UI+BE на Azure/Vercel/Яндекс Облако

Bonus
- [ ] Kubernetes в Azure/Яндекс Облаке для разворачивания среды

## Reporting
Bonus
- [ ]  Allure reporting для написанных тестов

## Contract tests
Bonus
- [ ]  Pact-тесты к сервису.

## A11Y
Bonus
- [ ]  протестировать сайт на а11y с помощью инструментов от Mozilla и Lighthouse
- [ ]  пофиксить проблемы
- [ ]  сделать автоматический тест с axe

## 5. Selenium
Main
- [x] e2e тесты, используя Selenide

Advanced
- [ ] настроить запуск тестов с Selenoid

Bonus
- [ ] настроить генерацию отчетов с Allure report, сделав полный сетап в GitHub: e2e тесты с selenide запускаются с использованием Selenoid на разных окружениях(браузерах) параллельно и собирают отчет с помощью Allure Report.
- [ ] написать статью про сетап

## 6.Performance
Main
- [x] пройти воркшоп

  https://gitlab.com/performance_workshop

Advanced
- [ ] настроить CI с Github actions

Bonus
- [ ] настроить генерацию отчетов с Allure report