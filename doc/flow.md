11.01.2025

- use all base setting from presentation project

---

use Context

based on Михаил https://www.youtube.com/watch?v=zmAL9revylc&t=269s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

---

fix error in Eslint: Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'eslint-plugin-react' imported from D:\R\p5.todos\eslint.config.js

```
yarn add eslint-plugin-react --dev
yarn add eslint eslint-config-react-app eslint-plugin-react-hooks --dev

yarn cache clean
//delete node_modules
yarn
```

yarn add -D eslint-config-prettier eslint-plugin-prettier

copy script commands from old p4.uazdao:

"scripts": {
"dev": "vite",
"build": "vite build",
"lint": "eslint .",
"stylelint": "stylelint \"\*_/_.scss\"",
"preview": "vite preview",
"start": "yarn dev",
"format": "prettier --write ."
},

---

fix error: Delete CR prettier/prettier
yarn format

-----
повторно - настройка Eslint:

Откройте командную палитру Ctrl + Shift + P.
Введите "ESLint: Enable".
вызывается мастер настройки Eslint
- НО ОТМЕНИЛ ВСЕ ЕГО ПРАВКИ, вернуд назад vite.config.js, а то вообще сплошные ошибки пошли
