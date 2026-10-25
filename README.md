# James Panugaling – Portfolio

React + Vite + Tailwind CSS + React Router + Framer Motion + Lucide icons.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm test           # routing and project rendering tests
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Files you edit
| To change | Edit |
|---|---|
| Name, bio, email, links, education, skills, goals | `src/data/profile.js` |
| The six projects (text, tech, links, screenshots) | `src/data/projects.js` |
| Portrait | replace `public/images/portrait.png` (or change `photo` in `profile.js`) |
| Project screenshots | put files in `public/images/projects/` and set `image: '/images/projects/name.png'` |
| Resume | edit the DATA block in `scripts/make_resume.py`, then `pip install reportlab` and `python3 scripts/make_resume.py`; or just replace `public/resume.pdf` |
| Colors and fonts | `tailwind.config.js`, `index.html` (font link) |

Text in `[square brackets]` is a placeholder and shows in italics on the site. Search for `[Add` and `[ADD` to find them all.

## Deploy (GitHub + Vercel)
1. `git init && git add . && git commit -m "Initial portfolio"`
2. Create an empty GitHub repository and push (`git remote add origin <url>`, `git push -u origin main`).
3. On vercel.com choose **Add New → Project**, import the repository. Vercel detects Vite (build `npm run build`, output `dist`).
4. Click **Deploy**. `vercel.json` rewrites all paths to `index.html`, so URLs like `/projects/cineflix` work on refresh.
5. After deploying, open the HTTPS URL and check every page. Then set an absolute `og:image` URL in `index.html` (e.g. `https://your-site.vercel.app/images/portrait.png`) so link previews show your photo.

No environment variables or secrets are needed.
