# DSP Terms

Digital signal processing (DSP) terminology.

*A fork of [sudara/dspjargon](https://github.com/sudara/dspjargon), built into the webpage.*

## Vercel

### Skipping deploys

There's an ability to skip deployment to Vercel by including `[skip deploy]` text into the commit message.

To configure it in Vercel project, go to "Settings" -> "Git" -> "Ignored Build Step" and add this line:

```sh
git log -1 --pretty=oneline --abbrev-commit | grep -w "\[skip deploy\]" && exit 0 || exit 1
```

## Local development

Switch to required Node.js version:

```sh
nvm use
```

Install Node.js modules:

```sh
npm ci
```

Start local development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.
