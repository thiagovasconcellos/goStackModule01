## GoStack9 Challenges -> #1

This is my version of the very first challenge from GoStack9 Bootcamp!

## Getting started

### `yarn dev`

Runs the app in the development mode with nodemon.
This allows you to change something on the project and it instatly affects on how.

By default the server will run on port 3000.
Once the server is running, you should add some data to it.

/projects expects a JSON body like this:

```json
{
  "id": 1,
  "title": "Just messing around"
}
```
You can also add a array of tasks to the project (Method POST/projects/id/tasks)
```json
{
  "tasks":[
    "Woke up", "Drink coofe", "Have fun coding"
  ]
}
```

Maybe you want to update the project title (Method PUT/projects/id)
```json
{
  "title": "This is a serious project right now"
}
```
Finally you can get rid of all that by deleting the project (Method DELETE/projects/id)

**No body required.**

## Built with

* [Express](https://expressjs.com) - A web framework that let's you structure a web application to handle multiple different http requests at a specific url.

## Authors

* **Thiago Vasconcellos**

## Acknowledgments

* This project was developed for studies only.
