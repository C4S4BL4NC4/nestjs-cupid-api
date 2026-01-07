# NestJS Cupid API

A small NestJS REST API project showcasing a simple **Profiles** resource (CRUD) with request validation and UUID parameter parsing.

## Features

- Profiles CRUD endpoints under `/profiles`
- In-memory data store seeded with a few sample profiles (resets on restart)
- DTO validation via `class-validator` / `class-transformer`
- UUID route params validated using Nest's `ParseUUIDPipe`
- Example route guard applied to profile deletion

## Tech stack

- NestJS (TypeScript)
- Validation: `class-validator`, `class-transformer`
- Testing: Jest + Supertest

## Getting started

### Install

```bash
npm install
```

### Run

```bash
# start
npm run start

# watch mode (recommended for development)
npm run start:dev

# production build + run
npm run build
npm run start:prod
```

The app listens on `PORT` if set, otherwise `3000`.

## Scripts

- `npm run start` - start the app
- `npm run start:dev` - start in watch mode
- `npm run build` - compile TypeScript to `dist/`
- `npm run lint` - run ESLint (with `--fix`)
- `npm run format` - run Prettier
- `npm run test` - unit tests
- `npm run test:e2e` - end-to-end tests
- `npm run test:cov` - coverage

## API

Base URL (local): `http://localhost:3000`

### Health / hello

- `GET /` → returns `"Hello World!"`

### Profiles

#### List profiles

- `GET /profiles`

#### Get a single profile

- `GET /profiles/:id`
- `:id` must be a valid UUID

#### Create a profile

- `POST /profiles`
- Body:

```json
{
  "name": "Jane Doe",
  "description": "Short bio or description..."
}
```

Validation rules:

- `name`: string, length 3–20
- `description`: string, length 10–100

Example:

```bash
curl -X POST http://localhost:3000/profiles \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","description":"A short but valid description."}'
```

#### Update a profile

- `PUT /profiles/:id`
- `:id` must be a valid UUID
- Body uses the same validation rules as create

#### Delete a profile

- `DELETE /profiles/:id`
- `:id` must be a valid UUID
- Returns `204 No Content`
- Route is protected by a guard (currently allows all requests; it’s a placeholder for real auth logic)

## Notes / limitations

- This API stores profiles in-memory only; data is lost when the process restarts.
- There is no authentication/authorization implementation yet (guard is a scaffold).

## Disclaimer

This README was generated/edited with the help of AI tools.
