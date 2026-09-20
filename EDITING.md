# Editing this portfolio

This website is on `portfolio-v1`. All personal content is in `data/`.

## Your content

- `data/profile.ts`: name, biography, email, social URLs, technologies and interests.
- `data/projects.ts`: project title, description, stack, optional local image and real case-study URL.
- `data/journey.ts`: timeline year, title, description, optional milestone and local image.

The example projects, timeline and skills are clearly labeled as placeholders. Replace them with confirmed information, then update their explanatory labels in the matching components. No project counts or years of experience are asserted.

## Your portrait

Place your final, real portrait at `public/images/dung-portrait.png`. The website URL is `/images/dung-portrait.png`. Refresh after replacing the file. A fixed-size teal placeholder is displayed if it is missing or cannot load. There is no generated person or substitute face. Use your final logo-free image; the website does not alter faces or clothing.

## Links

Empty social URLs display “Coming soon” without a fake link. Add the real URL to enable them. Projects without a case-study URL open an accessible disclosure identifying the example content. No CV download is shown until a real CV is supplied.

## Local development

```sh
pnpm install --frozen-lockfile
pnpm dev --hostname 127.0.0.1 --port 3001
pnpm exec tsc --noEmit
pnpm build
```

Development and production outputs use separate directories, so building does not overwrite the running preview.

## Design

`app/globals.css` contains colors, spacing and responsive layouts. Components are under `components/`. Animations use CSS and browser observers with reduced-motion support. The design uses system fonts and requires no API keys or external font requests.
