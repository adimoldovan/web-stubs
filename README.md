# Web-stubs

Collection of isolated web components for test automation practice.

| Github pages | Heroku | Vercel | Netlify | Render |
| --- | --- | --- | --- | --- |
| [![Github pages status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fadimoldovan.github.io%2Fweb-stubs%2F%23%2F)](https://adimoldovan.github.io/web-stubs) | [![Heroku status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fweb-stubs.herokuapp.com)](https://web-stubs.herokuapp.com) | [![Vercel status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fweb-stubs.vercel.app%2F%23%2F)](https://web-stubs.vercel.app/#/) |  [![Netlify status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fweb-stubs.netlify.app%2F)](https://web-stubs.netlify.app/) | [![Render status](https://img.shields.io/website?down_color=grey&down_message=Offline&style=for-the-badge&up_color=green&up_message=Online&url=https%3A%2F%2Fweb-stubs.onrender.com%2F%23%2F)](https://web-stubs.onrender.com/#/) |


## Run locally

Install NodeJs

```sh
npm start
```

# Using Docker

### Public image

```sh
docker run -d --name web-stubs -p 4999:80 adimoldovan/web-stubs
```

### Build your own image

```sh
docker build -t web-stubs .
docker run -d -p 4999:80 --name web-stubs web-stubs
```