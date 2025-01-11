yarn create vite project-presentation --template react-ts
yarn create vite . --template react-ts

corepack enable
yarn config set nodeLinker node-modules
yarn set version stable

 
yarn add react-router-dom@6
yarn
yarn dev

--======================
yarn cache clean
yarn
--======================


git init
git add -A
git commit -m "setup"
git branch -M main
git remote add origin https://github.com/abratsiuk/projects-presentation.git
git push -u origin main

--=======================

yarn add -D stylelint
yarn add stylelint stylelint-config-standard-scss --dev
yarn add -D stylelint-selector-bem-pattern
yarn add sass --dev
yarn add normalize.css
yarn add postcss-scss --dev
yarn add -D prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier
yarn add -D eslint-config-prettier eslint-plugin-prettier

https://fontawesome.com/
<script src="https://kit.fontawesome.com/bd4e968d26.js" crossorigin="anonymous"></script>

copy files with setting from p4.uazdao

--========================

## set github Actions


 Михаил Непомнящий [Используем GitHub Actions для публикации на GitHub Pages](https://www.youtube.com/watch?v=KQimnN1xMqY&t=39s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9)

[Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy.html)


![](_md_img/flow_images/flow%202025-01-02-14-40-12.png)

![](_md_img/flow_images/flow%202025-01-02-14-41-39.png)

![](_md_img/flow_images/flow%202025-01-02-14-42-47.png)

change to yarn:
![](_md_img/flow_images/flow%202025-01-02-14-46-04.png)
yarn

![](_md_img/flow_images/flow%202025-01-02-15-06-04.png)
![](_md_img/flow_images/flow%202025-01-02-15-12-43.png)
![](_md_img/flow_images/flow%202025-01-02-15-16-44.png)
      - name: Enable Corepack
        run: corepack enable

      - name: Set Yarn version to stable
        run: yarn set version stable
      - name: Set Yarn nodeLinker to node-modules
        run: yarn config set nodeLinker node-modules

Искин: чтобы было как npm ci:
- name: Clean node_modules
  run: rm -rf node_modules

![](_md_img/flow_images/flow%202025-01-02-14-49-02.png)
yarn install --frozen-lockfile

![](_md_img/flow_images/flow%202025-01-02-14-50-51.png)
yarn build

```
// deploy.yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
    # Runs on pushes targeting the default branch
    push:
        branches: ['main']

    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
    contents: read
    pages: write
    id-token: write

# Allow one concurrent deployment
concurrency:
    group: 'pages'
    cancel-in-progress: true

jobs:
    # Single deploy job since we're just deploying
    deploy:
        environment:
            name: github-pages
            url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v4
            - name: Enable Corepack
              run: corepack enable
            - name: Set up Node
              uses: actions/setup-node@v4
              with:
                  node-version: 20
                  cache: 'yarn'
            - name: Set Yarn version to stable
              run: yarn set version stable
            - name: Set Yarn nodeLinker to node-modules
              run: yarn config set nodeLinker node-modules
            - name: Clean node_modules
              run: rm -rf node_modules
            - name: Install dependencies
              run: yarn install --frozen-lockfile
            - name: Build
              run: yarn build
            - name: Setup Pages
              uses: actions/configure-pages@v4
            - name: Upload artifact
              uses: actions/upload-pages-artifact@v3
              with:
                  # Upload dist folder
                  path: './dist'
            - name: Deploy to GitHub Pages
              id: deployment
              uses: actions/deploy-pages@v4


```

```
    <Router basename="/projects-presentation">
    ...
    </Router>
```

```
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/project-presentation/',
});

```

change images location and add base path to scss:

**all images and statics in  public folder**

1) jsx
```
      <img
        className="Person__photo"
        src={`${import.meta.env.BASE_URL}${person.photo}`}
        alt="person photo"
      />
```
1) scss

vite.config.js
```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/projects-presentation/',
  server: {
    open: '/projects-presentation/', // Автоматически открывать правильный URL
  },  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $base-path: '/projects-presentation/';
        @use '/src/styles/variables.scss' as *;`,
      },
    },
  },
});
```

```
    &::before {
      content: '';
      position: absolute;
      top: 0.5rem;
      left: 2rem;
      width: 6rem;
      height: 6rem;
      background: $Header-color url('#{$base-path}images/logo_mini.webp')
        no-repeat;
      background-position: center;
      border-radius: 50%;
    }
```

======================
ico files
https://icon-icons.com/search/icons/?filtro=car&page=3

edit pictures
https://www.photopea.com/

