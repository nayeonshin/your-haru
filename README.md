# [your haru](https://your-haru.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e527141c-e916-4040-a16e-4fa4993a999a/deploy-status)](https://app.netlify.com/sites/your-haru/deploys)

your haru is a productivity web app built in HTML, CSS, and Vanilla JS only.

"haru" is pronounced hah-roo and means "day" in Korean.

![Desktop](/img/docs/desktop.jpg)
![Mobile](/img/docs/mobile.jpg)
![Tablet](/img/docs/tablet.jpg)

## Features

### Date & Clock

![Date and Clock](img/docs/date-and-clock.png)

### To-Do List

![To-Do List](img/docs/to-do-list.png)

### Settings

![Settings](img/docs/settings.png)

### Fade transitions

I implemented the fade in and out transitions in pure CSS and Vailla JS.

See:

- [CSS](/css/transition.css)
- [JavaScript](/js/transition.js)

Example:

```js
function showGreeting(username) {
  setTimeout(() => {
    fadeOut(GREETING);

    setTimeout(() => {
      GREETING.innerText = `Hello, ${username}!`;
      fadeIn(GREETING, { isAfterOut: true });
    }, TRANSITION_DURATION);
  }, TRANSITION_DURATION);
}
```

## Tip

If you press F11 (Windows) or Control + Command + F (Mac), you can go full-screen.

## Notes

Thanks to this project, I learned that I'm not a fan of CSS.

![CSS Meme](https://img-9gag-fun.9cache.com/photo/a1rQGo8_460s.jpg)
