# nuxt-firebase-pwa

[Nuxt.js](https://nuxtjs.org)  *  [Firebase](https://firebase.google.com)


## Description

Run the Nuxt.js application on Firebase.

## Start

### Install dependencies

``` bash
$ npm install # Or yarn install
$ cd /nuxt-firebase-pwa/src && npm install
$ cd /nuxt-firebase-pwa/functions && npm install
```

### Launch development server

```bash
$ cd /path/to/nuxt-firebase-pwa/src
$ npm run dev
```

Open [http://localhost:3000]()


## Build and Deploy to Firebase

### Build

Build Nuxt.js app.

```bash
$ cd /path/to/nuxt-firebase-pwa/src
$ npm run build
```

Copy assets and static files.

```bash
$ cd /path/to/nuxt-firebase-pwa
$ npm run setup

set up => copy items in 'functions/nuxt/dist/' to 'public/assets'
      and copy items in 'src/static/*' to 'public/'
```

### Firebase Project Setup

Create a Firebase Project using the [Firebase Console](https://console.firebase.google.com/).

Install Firebase CLI.

```bash
$ npm install -g firebase-tools
```

Login to Firebase.

```bash
$ firebase login
```

Edit `.firebaserc`

```json
{
  "projects": {
    "default": "<your-firebase-project-id>"
  }
}
```

### Emulate Firebase on local

```bash
$ npm run serve
```

Open [http://localhost:5000]()

### Deploy

```bash
$ npm run deploy
```


### Git Command

```bash
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/F9Uf/nuxt-firebase-ssr-auth.git
git push -u origin master
```
