# DevGru Nuxt Starterpack

## install

Let's try and get the latest packages so we'll do a fresh install without package.json.

NOTE: as of right now, latest sass loader errors with latest nuxt so we need sass-loader 10.2.1.. this is due to nuxt using an older version of webpack.. this might be fixed with future versions of nuxt

```
npm i @nuxt/babel-preset-app @nuxtjs/style-resources core-js graphql nuxt nuxt-graphql-request sass vue-flickity vue-scrollto
npm i sass-loader@10.2.1 --save-dev
```

If this still does not work, paste the contents of package.json.back into package.json and start from scratch

## Environment Variables:

crete a local .env file with the following and configure for current project:

```
WP_GRAPHQL_ENDPOINT=https://graphqlendpoint
SITE_NAME=site name
```

## Nuxt

```bash
# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).
