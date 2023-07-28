This is the frontend for my simple password manager application, it provides a web based system accessed by browser that comunicates with the spm-back.

## Getting Started

### Stack:

The application runs on [NodeJS](https://nodejs.org/en) 20.4.5 using the [React](https://react.dev/) framework with [NextJS](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/).  
For this project I'm using the following dependencies:

- [Axios](https://github.com/axios/axios) - for communicating with my REST API
- [React Query](https://github.com/TanStack/query) - for state management of my queries and mutations for all my API calls
- [Tailwind](https://tailwindcss.com/) - CSS framework
  I've also created a Dockerfile to run the project.

### Running:

Locally:

```bash
# download dependencies
npm i
# or
yarn

# and run
npm run dev
# or
yarn dev
# or
pnpm dev
```

Docker:

```bash
# build
docker build -t spm-front .
# and run
docker run -p 3000:3000 spm-front
```

The web page will run on [http://localhost:3000](http://localhost:3000) you can access it on any browser.

## Approach

I built a simple application using the framework I'm most accustomed to React. I created only a main page because I understood it the project to be a very simple MVP. For this instance there's no account management and users, you store the passwords and see them all on the same page.
I've also did the project the same way I normally work, I like to do very base components that can than receive children for my different needs. In this case I build a simple modal and passed to it my password form when rendering on screen. I also created a simple Header where I added my Create password button.
I also used React Query a lib that I use in a lot of my projects it's a very easy way to manage all your queries and mutations giving a lot of simple possibilities.
