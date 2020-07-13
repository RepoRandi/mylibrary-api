# LibraryApps-API

![Build Project](https://github.com/vuejs-id/blog/workflows/Build%20Project/badge.svg) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fblog.vuejs.id%2F) ![Dependencies](https://img.shields.io/david/vuejs-id/blog.svg)

> Create API For Library Applications
## :memo: Table Of Content
* [Built-With](https://github.com/RepoRandi/LibraryApps-API#Built-With)
* [Features](https://github.com/RepoRandi/LibraryApps-API#Features)
* [Prerequisites](https://github.com/RepoRandi/LibraryApps-API#Prerequisites)
* [Development](https://github.com/RepoRandi/LibraryApps-API#Development)
* [Live](https://github.com/RepoRandi/LibraryApps-API#Live)
* [HTTP-Verbs](https://github.com/RepoRandi/LibraryApps-API#HTTP-Verbs)
* [Endpoint](https://github.com/RepoRandi/LibraryApps-API#Endpoint)
* [Author](https://github.com/RepoRandi/LibraryApps-API#Author)
* [License](https://github.com/RepoRandi/LibraryApps-API#License)

## Built-With
- [Node.js](http://nodejs.org/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Web framework
- [MySQL](https://www.mysql.com/) - Database
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Password Hashing
- [JWT](https://jwt.io/) - Login/Register authentication

## Features
- [x] Login/Register AUTH With JWT
- [x] Password hashing With Bcript
- [x] CRUD
- [x] Search
- [x] Sort
- [x] Pagination
- [x] Cors

## Prerequisites
- Node.js installed on the local machine
- MySQL intalled on the local machine (ex. XAMPP)

## Development
> Clone Repo And Install Package
1. Clone this repository:
    `git clone https://https://github.com/RepoRandi/LibraryApps-API`
2. Install depedencies:
    - `cd LibraryApps` 
    - `npm install`
3. Start XAMPP
4. Database configuration:
    * Open http://localhost/phpmyadmin in the browser
    * Create a new table with the name `LibraryApss`
    * Import database to current table, select `libraryapps.sql` file from project folder
5. Start the server:
    * Open Terminal `npm start`

## Live
- [https://localhost:3000](https://localhost:3000)

### HTTP-Verbs

| Verbs    | Description                                           |
| -------- | ----------------------------------------------------- |
| `GET`    | Request data from the server                          |
| `POST`   | Sending data to the server                            |
| `PUT`    | Change all data that is already on the server         |
| `PATCH`  | Change Most of the data already exists on the server  |
| `DELETE` | Delete data that is already on the server             |

### Endpoint
| Verbs     | Description      |
| --------- | -----------------|
| `/book`  | Book             |
| `/auth`   | Auth             |
| `/author`| Author           |
| `/genre` | Genre            |
| `/user`  | User             |

## Author
- [Randi Maulana Akbar](https://www.linkedin.com/in/randi-maulana-akbar/)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/RepoRandi/LibraryApps/blob/master/LICENSE) file for details

##
Copyright © 2020 By Randi Maulana Akbar


