# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
1. npm install laravel-mix --save-dev
2. cp node_modules/laravel-mix/setup/webpack.mix.js ./

add scripts to package.json

  "scripts": {
    "dev": "NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "hot": "NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "production": "NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
  }

  # Installation steps, by Ayanle

# System Requirements
The only dependencies of the framework are Node.js and npm. Required versions:

> Node.js >= 8.0.0
> npm >= 3.0.0

# Backend steps: 
run this
> npm install
update the .env file with correct environmental values
> 
Set up a MySQL server

# Developer steps:


## Step: 1
AdonisJs CLI is a command line tool to help you install AdonisJs.

Install it globally via npm like so:

> npm i -g @adonisjs/cli

## Step: 2
To create a new application, simply run:

> adonis new appNameHere

## Step: 3
After completion, issue the following commands:

> cd appNameHere



## Step: 4
Install mysql:

> adonis install mysql

## Step: 5
Visit the /.env file and change DB_CONNECTION to mysql: along with setting the database to appNameHere:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=appNameHere


## Step: 6
Call the adonis make:migration command to create a schema file:

> adonis make:migration tableName

When prompted, choose the Create table option and press Enter:
> Choose an action Create table
√ create  database\migrations\1536680712439_tableName_schema.js


## Step: 7
Run migration command to push tables to the DB
> adonis migration:run


## Step: 8
Run command to run app
> adonis serve --dev


## Creating a Model
Use the Adonis CLI to create a new model for newTableName data:

> adonis make:model newTableName

## Creating Controllers
To create a new controller, use the make:controller command:

for HTTP Controller
> adonis make:controller ControllerNameHere --type http


