# klasse.cloud Landing Page

Static landing page built with [Hugo](https://gohugo.io/)

# Setup

- install [Hugo](https://gohugo.io/) if you haven't. So far built with v0.69.2.
- clone repo and `git checkout dev`
- run `(cd themes/theme-landing && npm install)`
- start dev server with `hugo server`

# Staging & Production

The staging build mirrors production, but does not use an absolute URL to allow deploying anywhere for development/preview purposes. In both environments drafts and expired/future content is ignored and CSS gets purged.

The staging build process can be run with `hugo --environment staging` and outputs to `build/staging/`.

For the production build, just run `hugo`, the output can be found in `public/`.

# Resources

The theme is built with [Tailwind](https://tailwindcss.com/) and based on the [Tailwind Starter](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter) Theme for Hugo.

**Quick links:**
- [Hugo docs](https://gohugo.io/documentation/)
- [Tailwind docs](https://tailwindcss.com/docs/)
- [Tailwind config stub](https://github.com/tailwindcss/tailwindcss/blob/20348ae914d4f2c8ab731d79c8f8cc5e308d43cd/stubs/defaultConfig.stub.js)
