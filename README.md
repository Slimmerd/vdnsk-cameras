## Контент

- [База](#База)
- [Установка](#Установка)
- [Тестирование](#Тестирование)
- [Развертывание](#Развертывание)
    - [Обычный](#Обычный)
    - [Статический](#Статический)
- [Добавление новых камер](#Добавление-новых-камер)
- [Добавление новых картинок](#Добавление-новых-картинок)
- [Изменения стилей](#Изменения-стилей)
    - [Нужно изменить затемнение картинки карточек](#Нужно-изменить-затемнение-картинки-карточек)

## База

Сайт написан на Next.js вся информация по нему есть здесь:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## Установка

Перед тестированием или развертыванием нужно установить зависимости

```bash
npm install
# Или
yarn install
```

## Тестирование

Запуск:

```bash
npm run dev
# Или
yarn dev
```

Просмотр будет доступен по адресу: [http://localhost:3000](http://localhost:3000)

## Развертывание

> При добавлении записей в `cameras.ts` нужно проводить каждый раз ребилд

### Обычный

Вам нужно собрать сборку для этого запустите команду `yarn build` или `npm run build`

Запустить готовый сервер с этой сборкой `yarn start` или `npm run start`

### Статический

Подразумевает экспорт HTML и CSS

Подробнее описано тут:

- https://nextjs.org/docs/advanced-features/static-html-export
- https://blog.logrocket.com/understanding-static-html-export-next-js/

> В package.json уже прописан скрипт для этого вам достаточно написать `yarn build:static` или `npm run build:static`

> После использование команды все содержимое находится в папке `out`

## Добавление новых камер

Добавлять новые камеры нужно в файле расположенном в `utils/cameras.ts`

В конец массива `cameras` нужно добавить объект данного формата:

```
{
street: 'Набережная 2',
url: 'https://cam.vdonsk.ru/embed/s.9c13c89472520aef38e8ae03e25af9650583f6ff1',
coordinates: [47.542799, 42.1856008],
imageFile: 'camera21.webp'
},
```

#### Где:

`street` - Название улицы или камеры (будет отображаться на главной и на странице с камерой)

`url` - Ссылка на плеер камеры, находиться внутри iframe, который экспортируется из вашего плеера

`coordinates` - Координаты места нахождения камеры (можно брать например из Яндекс Карт)

`imageFile` - Название картинки + формат ее

## Добавление новых картинок

> РЕКОМЕНДУЮ! Добавлять картинки в формате webp

Папка куда нужно добавлять картинки называется `public`

> Рекомендую придерживаться стиля названия картинок в формате `camera[Номер камеры].формат`

## Изменения стилей

> Большинство стилей находится в папке `styles`

Home.module.css - стиль главной страницы, включает себя также стиль карточек

Map.module.css - стиль карты на главной странице

Camera.module.css - стиль страницы камеры с плеером

### Нужно изменить затемнение картинки карточек

Файл `components/main/camera/CameraCard.tsx` в нем на 14 строчке можно изменить затемнение, где первая часть отвечает за
верх, а вторая за низ.

`linear-gradient(rgba(0, 0, 0, 0.75) - верх, rgba(0, 0, 0, 0.1) - низ)`
