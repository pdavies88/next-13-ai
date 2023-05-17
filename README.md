This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Local Next Auth Google Authentication
* [Google Cloud](https://console.cloud.google.com/)
* Create a new project
* Project Name can be anything you'd like
* Location can be anything you'd like but `No organization` is easiest
* Select the new project then APIs & Services in the sidebar
* Choose OAuth Consent Screen and then Create
* App Name can be anything you'd like
* Choose your email and also use your email for the Developer contact information
* Save and Continue then click on the Credentials in the sidebar
* Create Credentials
* Application type - Web application
* Authorized Javascript origins - http://localhost:3000
* Authorized Redirect URIs - http://localhost:3000 and http://localhost:3000/api/auth/callback/google
* Click Create
* Copy the Google Client ID and Goolge Client Secret and use those in a local .env file

## Local MongoDB Atlas
* [MongoDB Atlas](https://www.mongodb.com/atlas/database)
* Create an account
* Create a new Cluster
* Use Shared (it's free) and then Create Cluster
* For database access create a username and password and save that information to connect to the DB via an environment variable
* Within Network Access allow for your current IP address to be utilized or 0.0.0.0 for access via any IP
* In the Database tab click "Connect" then "Drivers" copy the MongoDB URI connection string that will be used within this application
* Place the copied string into the local .env file and replace the `<password>` within the string with the password you created earlier to access your DB

## Local Next Auth Local URL and Secret
* Values to use in your .env
* NEXTAUTH_URL=http://localhost:3000
* NEXTAUTH_URL_INTERNAL=http://localhost:3000
* NEXTAUTH_SECRET - In your terminal run `openssl rand -base64 32` and copy that string

## Deployed App
* [https://next-13-ai.vercel.app/](https://next-13-ai.vercel.app/)