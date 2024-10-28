# language: ru
Функционал: Поиск фурлы (desktop)

  Контекст:
    Допустим Я открываю вебсайт на macbook-13

  Сценарий: Проверка поля поиска
    Допустим Я на главной странице google.com
    Тогда Я вижу поле для поиска

  Шаблон сценария: Ввод поискового запроса: "<запрос>"
    Допустим Я на главной странице google.com
    И ввожу "<запрос>" в поле для поиска

    Примеры:
      | запрос            |
      | Фурла купить СПБ  |
      | Фурла купить озон |
      | Фурла оригинал    |