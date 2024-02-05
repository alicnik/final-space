# Final Space App

## About

A small side project to explore Remix, vitest, and prisma. Seeds the database using the Final Space API.

## Development

- Clone and run `npm i`
- Create a postgres db locally `createdb final_space_db` and add a `.env` with a `DATABASE_URL` value set to the postrgresql connection string, e.g. `postgresql://username:password@localhost:5432/final_space_db`
- Run `npx prisma db push && npx prisma db seed`
- Run `npm run dev`
