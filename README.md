## Note

Having been long thinking about creating my personal website, and wanting to play with next.js for already quite a long time, I created this over the Easter weekend in 2022. In the week before, a rough design idea came up to me and, on Thursday evening and despite my usual working flow, I just started creating the web with no particular plans, leaving the design - and content - come to me on the way. My idea was to create a minimal website with strong personal touch in its design, that should also be easily scalable in case I wanted or needed to.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

##  Read more

- <https://www.sanity.io/guides/sanity-nextjs-tailwindcss>
- <https://gist.github.com/kocisov/2a9567eb51b83dfef48efce02ef3ab06>

## How to run repo from scratch

```sh
echo "NEXT_PUBLIC_SANITY_PROJECT_ID={project_id}" > .env.local
```

Project_id can be found in admin/sanity.json.

```sh
# run in two separate terminals
yarn dev
yarn sanity
```
