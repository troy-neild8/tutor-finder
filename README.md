# tutor-finder

## Tech stack

CRUD app built with

1. [Kysely](https://kysely.dev/) for database management, including migrations, seeding, and type-safe querying.
2. [Express](https://expressjs.com/) for our application server.

## Getting started

### Setting up developer environment

Install devbox

```sh
curl -fsSL https://get.jetify.com/devbox | bash
```

We reccomend installing the devbox VS Code extension. [link](https://marketplace.visualstudio.com/items?itemName=jetpack-io.devbox)

If you have the debox vscode extension, your terminal should be in the dev shell automatically. \*\*Otherwise, run

```sh
devbox shell
```

at the beginning of your development session.\*\*

## Setting up the database

You may need to do if you pull in new changes, which have updates to the database schema.
Run the database migrations.

```sh
yarn migrate
```

Optionally, seed the database with sample data.

```sh
yarn seed
```

## Run the application server

```sh
yarn dev
```

## Publish your application

We do not currently deploy this application anywhere. Local development only
