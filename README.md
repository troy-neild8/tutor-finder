# tutor-finder

## Tech stack

CRUD app built with

1. [Kysely](https://kysely.dev/) for database management, including migrations, seeding, and type-safe querying.
2. [Express](https://expressjs.com/) for our application server.

## Getting started

Install devbox

```sh
curl -fsSL https://get.jetify.com/devbox | bash
```

We reccomend installing the devbox VS Code extension. [link](https://marketplace.visualstudio.com/items?itemName=jetpack-io.devbox)

## Enter the devbox shell

If you have the debox vscode extension, your terminal should be in the dev shell automatically. Otherwise, run

```sh
devbox shell
```

Run the database migrations

```sh
yarn migrate
```

Seed the database

```sh
yarn seed
```

## Run the application server

```sh
yarn dev
```

## Publish your application

We do not currently deploy this application anywhere. Local development only
