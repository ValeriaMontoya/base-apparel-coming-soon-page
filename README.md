# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [![FrontEndMentor](https://img.shields.io/badge/-Frontend%20Mentor-05122A?style=flat&logo=FrontEndMentor&logoColor=63D9F9)](https://www.frontendmentor.io/solutions/responsive-base-apparel-coming-soon-page-ky0hG2K70L)

- Live Site URL: [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white)](https://valeriamontoya.github.io/base-apparel-coming-soon-page/)

## My process

### Built with

- [x] Semantic HTML5 markup
- [x] Flexbox
- [x] CSS Grid
- [x] [Syntactically Awesome Style Sheets](https://sass-lang.com/)
- [x] Mobile-first workflow
- [x] JavaScript

### What I learned

I decided to give regular expressions a try to tackle this challenge. You can check out how I used RegEx in the code below:

```js
const validateEmail = () => {
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegExp.test(email.value);
};
```

## Author

- Frontend Mentor - [@ValeriaMontoya](https://www.frontendmentor.io/profile/ValeriaMontoya)
- Twitter - [@val_smf](https://twitter.com/val_smf)
