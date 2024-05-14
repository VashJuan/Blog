# Astro landing-page

```
yarn create astro --template eocOnline/astro-landing-page
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── insightsPostCard.tsx
│   │   ├── CTA.tsx
│   │   ├── Card.astro
│   │   ├── Data.tsx
│   │   ├── Feature.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Price.tsx
│   │   ├── Signin.tsx
│   │   └── Stats.tsx
│   ├── env.d.ts
│   ├── layouts
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.astro
│   └── pages
│       ├── 404.astro
│       ├── insights
│       │   ├── [id].astro
│       │   └── index.astro
│       ├── contact.astro
│       ├── index.astro
│       ├── price.astro
│       └── signin.astro
├── tailwind.config.cjs
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

old:
| Command | Action |
| :------------------ | :----------------------------------------------- |
| `yarn` | Installs dependencies |
| `yarn dev` | Starts local dev server at `localhost:3000` |
| `yarn build` | Build your production site to `./dist/` |
| `yarn preview` | Preview your build locally, before deploying |
| `yarn astro ...` | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help` | Get help using the Astro CLI |
| `yarn prettier` | Formate and beautify your code |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Demo

[astro-landing-page demo](https://astro-landing-page-jet.vercel.app)

## Deploy

Possible EOC online home page.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FVashJuan8%2Fastro-landing-page)

## ToDo

- https://tailwindui.com/templates & https://headlessui.com/ & https://www.tailwindtoolbox.com/
- https://accessible-astro.netlify.app/accessible-components/
- consider using aspects of https://tailus.gumroad.com/l/astls-premium
- tailgrids... https://play-astro.tailgrids.com/ and https://tailgrids.com/components
- CubeCSS? variant of BEM: https://astro.build/themes/details/astro-cube/
- https://astro.new
- Hosting: https://vercel.com/products/managed-infrastructure
- design aspects: https://every-layout.dev/
- https://astro.build/themes/details/welcome-to-astro/
- JSON based website: https://github.com/JimmyCamus/luna-landing & https://luna-landing-rust.vercel.app/
- themes: https://lexingtonthemes.com/pricing/#features w/ discount code: LEXINGTON30
- https://astro.build/themes/details/atom/
- Tailus tailwindcss components: https://preview.tailus.io/atom/ https://tailus.io/ https://beta.tailus.iohttps://tailwindcss.com/docs/themer/plugin/
- https://astro-moon-landing.netlify.app/
- https://ev0.gndx.dev/
- https://astromax.vercel.app/
- https://www.tailwindresources.com/popular/free/
- http://jekyllthemes.org/
- https://astro.build/integrations/5/
- original code mostly from: https://tailwindui.com/components/marketing/page-examples/landing-pages

npm install -g npm@latest
nvm install node

yarn dev
