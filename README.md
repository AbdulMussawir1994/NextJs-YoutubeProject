# Employee CRUD

A small Next.js CRUD app with Bootstrap styling and four pages. Delete employees from the list.

## Run locally

Start the ASP.NET Core backend at `https://localhost:7047`, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000/employees.

The API defaults to `https://localhost:7047`. Override it with `NEXT_PUBLIC_API_BASE_URL` in `.env.local`. The backend needs CORS access for the frontend and a trusted HTTPS certificate.

## Structure

| Page | Route |
| --- | --- |
| List | `/employees` |
| Add | `/employees/add` |
| Edit | `/employees/{id}/edit` |
| View | `/employees/{id}` |

API calls stay in the employee components. Add and Edit share one form. Bootstrap is imported directly in the root layout; there is no custom CSS.

## Production

```bash
npm run build
npm start
```
