# next-js-api-basics
next api

`$ npx create-next-app@latest next-js-api-basics`

## getting started

run the development server:

```bash
npm run dev
```

open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

you can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

or 

All routes inside `app/api/**` map to `API Routes`, 
e.g.:
    - `app/api/tasks/route.ts` → `GET/api/tasks`, `POST/api/tasks`
    - `app/api/tasks/[id]/route.ts` → `GET, PUT, DELETE /api/tasks/:id`
    - `route.ts` is the new convention for defining API logic in App Router.



this project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## learn more
to learn more about Next.js, take a look at the following resources:
- [next.js documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [learn next.js](https://nextjs.org/learn) - an interactive next.js tutorial.


integrate this with a database SQLite
- install Prisma + SQLite
```bash
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
npm install @prisma/client
```
this creates:⬆️⬇️
`/prisma/schema.prisma`

- configure prisma schema
    - define task model in `schema.prisma`


- generate prisma client
    - `npx prisma migrate dev --name init`
    - create dev.db in /prisma
    - generate your Prisma client

- replace in-memory storage with DB operations in your API routes

use postman or curl to:
    - POST /tasks – create a task
    - GET /tasks – list all tasks
    - GET /tasks/:id – get one task
    - PUT /tasks/:id – update a task
    - DELETE /tasks/:id – delete a tas