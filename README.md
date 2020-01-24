# Module 4

Code for the case-study app PrintBay from the course [Enterprise Vue](https://vuejsdevelopers.com/courses/enterprise-vue)

## License

The code in this repo is only for students of the [Enterprise Vue](https://vuejsdevelopers.com/courses/enterprise-vue) course. Don't share it, put it on GitHub etc.

## Vagrant

It's recommended that you use this in conjunction with the [PrintBay Vagrant](https://bitbucket.org/vuejsdevelopers/printbay-vagrant) environment.

## Setup

Before beginning, follow the following setup steps to get your code and software in sync. For more details see video 6.

#### 1. NPM

```bash
$ npm i
```

#### 2. Environment variables

```bash
$ cp .env.server.example .env.server
```

#### 3. Database seed

```bash
$ npm run seed
```

#### 4. Postman

1. Open Postman
2. File > Import
3. Select postman.json

#### 5. Run server

```bash
$ npm run serve:server
````