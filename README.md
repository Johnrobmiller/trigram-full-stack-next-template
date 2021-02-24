Run this command to install (replace "dir" with the name you want for your new directory):

--> npx create-next-app --example https://github.com/Johnrobmiller/trigram-full-stack-next-template dir

This is the total Trigram stack using Next.js. I installed many packages and organized the folders and files a bit. There should be a "components" folder for React components, a "util" folder for utilities, and a "states" folder for Recoil states. Also, I included examples of each of the packages being used in the project since I thought that might be helpful.

The following packages were installed and verified to be working correctly. NOTE: if you all think of anything else you want added in this, just let me know and I'll push it to the github.
 - Frontend
   - React
   - Tailwind (NOTE: PurgeCss is configured in the tailwind.config.js file)
   - Recoil (WARNING: There is a peer-dependency problem with recoil and the newest version of react (i.e., the current version of recoil uses a version of React older than the one installed here). We will want to update recoil when they to release the update that fixes this.)
   - Lodash
   - some sort of form library (to be added in the future)
 - Backend
   - Next.js (NOTE: this is set up for SSR, not SSG)
   - TODO: add Firebase (I will do this later in the future once learn how to use Firebase)
 - Developer tools:
   - Typescript
   - Webpack (building automatically handled by Next.js)
   - use Yarn to install new packages.

Happy coding!!!

(Below this line is the original README.md created using "create-next-app")

------------------------------------------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
