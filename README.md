# Build Your Own: React, ProseMirror, and Redux

This repository contains learning materials originally sourced and written for
the Oak team at The New York Times. The courses within focus on developing an
understanding of how the three tools that the Oak collaborative rich text editor
relies on, React, ProseMirror, and Redux, actually work.

The content is deployed with GitHub Pages, and can be viewed at
[https://nytimes.github.io/oak-byo-react-prosemirror-redux/](https://nytimes.github.io/oak-byo-react-prosemirror-redux/).

If you want to learn more about why we built this, and the kinds of problems it
helped us solve, check out our NYT Open blog post [link TK].

## Inspiration and credit

This educational project is heavily inspired by Rodrigo Pombo's excellent
[Build your own React](https://pomb.us/build-your-own-react/), and relies
heavily on the [Code Hike remark plugin](https://codehike.org/) he developed.

Rodrigo's **Build your own React** is also directly linked as the "Build Your
Own..." course for the React section of the syllabus.

## How it works

This website is powered by [Next.js](https://nextjs.org/). We use Next.js's
[Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export)
feature to build out static web pages, which are hosted with
[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

The posts are authored as MDX files in the `/posts/` directory.
[Code Hike](https://codehike.org/) is used to augment the code snippets, and
[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) allows us to
load the MDX in `getStaticProps`. Check out the `getStaticProps` method in
`/pages/post/[[...slug]].js` to see how we wire together MDX, Code Hike, and
Nextjs using next-mdx-remote.

## Local development

### Prerequisites

You'll need Node.js installed, as well as the Yarn CLI. If you're using
Node.js >= 16.9.0, you can install Yarn by simply running `corepack enable`. See
the [Node.js docs](https://nodejs.dev/en/api/v18/corepack/) for more information
about Corepack.

Alternatively, if you use VS Code, you can use the dev container configuration
in this repo alongside the VS Code Dev Containers extension to develop in a
Docker/Podman container.

### Running the development server

Run `yarn` to install dependencies. Then run `yarn dev` to start the development
server on port 3000. Any changes to the `pages/` or `posts/` directories will
trigger a rebuild and rerender.
