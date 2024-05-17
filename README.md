# Table of contents

- [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)

## General info

> The objective of the project is to practice separation of concern in
> JavaScript and work with an API.

## Screenshots

![screenshot](./assets/pokemon-screen.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

clone the repo and start using the website.

## Code Examples

```js
export const getPokemonHandler = async () => {
    const value = Number(dom.input.value);
    if (data.oldId === value) {
        return;
    }
    const isValidId = value > 0 && value < 1280;
    if (!isValidId) {
        dom.error.className = 'error';
        dom.error.innerText = 'please enter a valid id';
        dom.root.append(dom.error);
        return;
    }
```

## Features

List of features ready and Todos for future development

-
-
-

To-do list:

-
-

## Status

Project is: _finished_

## Inspiration

## Contact

- [Emrah](https://github.com/emrahhko)
