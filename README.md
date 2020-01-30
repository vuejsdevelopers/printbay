# Module 11

Code for the case-study app PrintBay from the course [Enterprise Vue](https://vuejsdevelopers.com/courses/enterprise-vue)

## License

The code in this repo is only for students of the [Enterprise Vue](https://vuejsdevelopers.com/courses/enterprise-vue) course. Don't share it, put it on GitHub etc.

## Vagrant

It's recommended that you use this in conjunction with the [PrintBay Vagrant](https://bitbucket.org/vuejsdevelopers/printbay-vagrant) environment.

## Setup

Follow these setup steps to get your code and software in sync. For more details see the Introduction module, video 6.

#### 1. Install node modules

```bash
$ npm i
```

#### 2. Create server environment file

```bash
$ cp .env.server.example .env.server
```

#### 3. Update Postman requests

1. Open Postman
2. File > Import
3. Select `postman.json`

#### 4. Seed database

```bash
$ npm run seed
```
