# Файлы проекта
Основные файлы проекта находятся в каталоге `./src`.
Примеры использования Typescript находятся в `./typescript`.

В файл `.vscode/settings.json` добавлены необходимые настройки `VS Code` для интеграции с ESLint и Prettier.
`Prettier` запускается с помощью плагина [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier).

## Плагин для VS Code
Для подсветки ошибок в IDE во время процесса веб-разработки необходимо дополнительно установить расширение [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) для VS Code.

## Установка зависимостей проекта
```sh
npm install
```

## Запуск проекта с помощью сервера
```sh
npm run serve # Development mode only (webpack-dev-server)
```

## Запуск сборки проекта
```sh
npm run dev # Development mode
npm run build # Production mode
```

## Проверка форматирования кода проекта
```sh
npm run prettier
```

## Исправление форматирования кода с помощью Prettier
```sh
npm run prettier:fix
```

## Проверка качества кода с помощью ESLint
```sh
npm run lint
```

## Исправление кода с использованием ESLint и Prettier
```sh
npm run lint:fix
```

## Лицензия
![GitHub](https://img.shields.io/github/license/iwebexpert/js-middle-typescript)