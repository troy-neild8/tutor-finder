# tutor-finder

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

## Setting up the database

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
