# Personal site of Tyrel Hiebert
Written in JavaScript with React and React-Router.

## Install dependencies
```shell script
npm install
```

## Setup Remotes
Change homepage in `package.json` if necessary.

For Github Pages, setup your website git repo as `origin`, and this source repo as something else.
```shell script
git remote set-url origin https://github.com/tyrelh/tyrelh.github.io.git
git remote add source https://github.com/tyrelh/personal-site.git
git remote -v # view list of remotes
```

## Deploy
```shell script
npm run deploy
```

## Todo
* Limit text size of header so long single words don't overflow.
* Permalinks on section headers
* reCAPTCHA v3 article
* Article overview image size on mobile increase