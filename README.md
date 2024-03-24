<a href="">
  <img alt="Next.js Auth with Prisma" src="./public/thumb/home.png">
  <h1 align="center">Next Auth v5 with Prima | Email Verification | MFA | User Roles</h1>
</a>

Key Features:

- Next-auth v5 (Auth.js)
- Next.js 14 with server actions
- Forgot password functionality
- Email verification
- Two factor verification
- User roles (Admin & User)
- Role Gate
- Protect API Routes for admins only
- Protect Server Actions for admins only
- Change email with new verification in Settings page

### Prerequisites

**Node version 18.7.x**

### Install packages

```shell
yarn i
```

### Setup .env file

```js
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

### Setup Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
yarn dev
```
