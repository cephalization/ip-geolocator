# IPv4 Geolocator

Small fullstack web application that converts IPv4 Addresses to Latitude/Longitude coordinates

## Built with

---

- Simple typescript monorepo managed with docker/docker-compose

- Node.js/typescript + express backend

- React.js/typescript + chakra ui frontend

## Development

---

### Frontend

- `cd web`
- `npm install`
- `npm start`
- Access interface via http://localhost:3000

### Backend

- `cd api`
- `npm install`
- `npm run dev`
- Access API via http://localhost:8001/coordinates?ip=

## Deployment

---

- Install Docker + Docker Compose
- `docker-compose up`
- Access interface via http://localhost:3000
- Access API via http://localhost:8001/coordinates?ip=

## Notes

---

- Docker configuration could be optimized with development and production scripts

  - Development would utilize local src and node_modules to allow for hot-reloading and faster builds while iterating

  - Production would be pretty similar to the current Dockerfiles, I would convert both of them to use multi-stage builds however.
    This would split each file into a build step and a serve step.

- End to End testing could be setup with something like [Cypress](https://www.cypress.io/features)
  - This would plug known IP addresses into the interface like Google or Cloudflare DNS and read the resulting coordinates to verify full stack functionality.

## Testing

---

### Happy Path

- `docker-compose up`

- Wait until both `web` and `api` services report serving urls

- Access http://localhost:3000 in browser

- Enter valid IP Address such as `0.0.0.0` into field

- Hit submit button

- View coordinates

### Error State

- `docker-compose up`

- Wait until both `web` and `api` services report serving urls

- Access http://localhost:3000 in browser

- Enter invalid IP Address such as `999.999.999.999` into field

- Hit submit button

- View error message `Coordinates not found for requested ip address.`
