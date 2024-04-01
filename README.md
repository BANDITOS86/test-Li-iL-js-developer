# Тестовое задание (Js разработчик)
### Условия:

###### Построить и вывести в виде web-страницы дерева n-ой вложенности. Референс дерева подобно дереву директорий проводника Windows (каждый следующий слой смещать вправо). 
![Пример дерава Windows](https://github.com/sashadev86/my-img/blob/main/windows-tree.png?raw=true "Пример дерава Windows")

###### Состав строк: название (стоимость)
###### Данные: Приходят по rest api стек данных в формате json.
###### Описание состава данных:

```javascript
{
    "services": [
        {
            "id": int,
            "head": int,
            "name": str,
            "node": int,
            "price": float,
            "sorthead": int
        }
    ]
}
```

###### head = id вышележащего узла (null означает, что услуга находится в корневом узле)
###### node = флаг “узел дерева” (1-узел, 0-лист)
###### В рамках одного слоя нужно выводить строки в порядке возрастания показателя sorthead.
###### Для проверки использовать пример ответа api:

```javascript
{
    "services": [
        {
            "id": 1,
            "head": null,
            "name": "Проф.осмотр",
            "node": 0,
            "price": 100.0,
            "sorthead": 20
        },
        {
            "id": 2,
            "head": null,
            "name": "Хирургия",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 3,
            "head": 2,
            "name": "Удаление зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 4,
            "head": 3,
            "name": "Удаление зуба",
            "node": 0,
            "price": 800.0,
            "sorthead": 10
        },
        {
            "id": 5,
            "head": 3,
            "name": "Удаление 8ого зуба",
            "node": 0,
            "price": 1000.0,
            "sorthead": 30
        },
        {
            "id": 6,
            "head": 3,
            "name": "Удаление осколка зуба",
            "node": 0,
            "price": 2000.0,
            "sorthead": 20
        },
        {
            "id": 7,
            "head": 2,
            "name": "Хирургические вмешательство",
            "node": 0,
            "price": 200.0,
            "sorthead": 10
        },
        {
            "id": 8,
            "head": 2,
            "name": "Имплантация зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 20
        },
        {
            "id": 9,
            "head": 8,
            "name": "Коронка",
            "node": 0,
            "price": 3000.0,
            "sorthead": 10
        },
        {
            "id": 10,
            "head": 8,
            "name": "Слепок челюсти",
            "node": 0,
            "price": 500.0,
            "sorthead": 20
        }
    ]
}
```
### Deploy задания:
#### [Deploy задания](https://sashadev86.github.io/test-LiaiL-js-developer/ "Deploy задания")

### Результат задания:
[![My cv](https://github.com/BANDITOS86/my-img/blob/main/result.png?raw=true)](https://sashadev86.github.io/test-LiaiL-js-developer/)
