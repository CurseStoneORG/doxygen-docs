# CurseStone Documentation

Official documentation for CurseStone, server software for Minecraft: Pocket Edition 0.15.x (protocol 84). Read the docs in this order:

1. Installation guide: [English](installation/installation.md) | [Español](installation/installation.es.md)
2. Plugin guide (Lua API 1.0.1): [English](plugins/plugin.md) | [Español](plugins/plugin.es.md)
3. Example plugin: [plugins/ExamplePlugin](plugins/ExamplePlugin)

## Documentación de CurseStone

Documentación oficial de CurseStone, software de servidor para Minecraft: Pocket Edition 0.15.x (protocolo 84). Lee los docs en este orden:

1. Guía de instalación: [English](installation/installation.md) | [Español](installation/installation.es.md)
2. Guía de plugins (API Lua 1.0.1): [English](plugins/plugin.md) | [Español](plugins/plugin.es.md)
3. Plugin de ejemplo: [plugins/ExamplePlugin](plugins/ExamplePlugin)

---

## Purpose of this repository

This repository is named **`CurseStoneTeam.github.io`**, so it publishes the
organization website at the root domain **https://cursestoneteam.github.io/**.
It owns:

- the manually written guides (installation, plugins, example plugin),
- the GitHub Pages configuration (`.nojekyll` plus the root redirect),
- the `api/` directory that receives **generated Doxygen HTML** from the software
  repository.

The website **is only the Doxygen API reference** — there is no landing page.
The root `index.html` is a redirect that sends every visitor straight to the
generated Doxygen start page at `api/`.

The C++ sources, the Doxyfile, the comment conventions and the workflow that
generates and publishes the API reference live in the **software repository**.
Nothing in this repository can build documentation from source code it does not
have.

## Repository layout

| Path | Content | Maintained |
|---|---|---|
| `README.md` | Repository overview and these maintenance instructions | Manual |
| `index.html` | Root redirect to `api/` (no landing page) | Manual |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (required for Doxygen HTML) | Manual |
| `installation/` | Installation guide (English + Español) | Manual |
| `plugins/` | Plugin guide (English + Español) and `ExamplePlugin/` | Manual |
| `api/` | **Generated Doxygen HTML** (`index.html`, `doxygen.css`, `tabs.css`, `jquery/`, `search/`, ~3,100 pages) | **Generated — do not edit** |
| `.github/workflows/` | *(does not exist)* — this repository has no workflows | — |

Only `api/` is generated. Everything else is written by hand and must survive
every publication, so the publisher may replace `api/` but nothing else.

## Generated API documentation

- **Destination:** `api/` directory of this repository, branch `main`.
- **Source of the HTML:** Doxygen run in the software repository
  (`CurseStoneTeam/CurseStone`), published with the `DOCS_REPO_TOKEN` secret.
- **Site entry point:** the root `index.html` redirects to `api/`, so
  https://cursestoneteam.github.io/ opens the Doxygen start page.
- **Status: published.** Publications `85e43f3` and `b3d7881`
  ("docs: update generated Doxygen HTML from … CurseStoneTeam/CurseStone@…")
  are on `main`, and https://cursestoneteam.github.io/api/ serves the reference.

## How GitHub Pages publication works

**Deployment from a branch**, with no workflow in this repository:

1. GitHub Pages is enabled for this repository with source **branch `main`,
   folder `/ (root)`** (legacy build, status `built`).
2. `.nojekyll` makes Pages copy every file byte-for-byte, so Doxygen's HTML, CSS,
   JavaScript and search data are served exactly as generated.
3. The software repository's workflow, after Doxygen generation succeeds, commits
   the generated HTML into **`api/`** on `main` using the `DOCS_REPO_TOKEN`
   secret that lives in the software repository.
4. Pages redeploys automatically on the new commit.

This repository needs **no token, no secret and no workflow of its own** merely to
host HTML that someone else pushes.

### Publishing rules the software workflow must follow

- **Touch only `api/`** (for example `rm -rf api && mkdir api && cp -r html/. api/`,
  then stage `api/`). Never `rm -rf .`, `git rm -r .`, a hard reset or a forced
  push: that would delete `README.md`, `index.html`, `.nojekyll`,
  `installation/` and `plugins/`.
- Publish **only after Doxygen generation succeeds** (the publish job must `needs:`
  the generate job, or run as a later step of the same job so a failure stops it).
- Commit to `main` on this repository; do not rewrite history.
- Do not add a second Pages workflow here: a workflow that also pushes to Pages
  would conflict with branch deployment.
- The root `index.html` belongs to this repository; the workflow must not overwrite
  it with the Doxygen `index.html` (that one belongs in `api/`).

## Editing the manual guides

1. Edit the Markdown files in `installation/` or `plugins/` (English file and its
   `.es.md` sibling should be kept in sync).
2. Keep links relative (`../plugins/plugin.md`), so they work both on GitHub and
   if they are ever rendered on the website.
3. Preview the diff, then commit and push (Freebuff Changes panel, or a PR). Never
   hand-edit generated Doxygen files inside `api/`.
4. New top-level guides get a link in the reading order above.

## Troubleshooting publication failures

| Symptom | Likely cause | What to check |
|---|---|---|
| Root does not open the API docs | The redirect `index.html` was overwritten (for example by a workflow copying Doxygen output to the root) | Restore this repository's root `index.html`; fix the workflow's target directory |
| `/api/` 404 | No publication received, or the software workflow failed | Actions runs in the **software** repository; the publish job must succeed before anything lands here |
| `/api/` shows old API docs | Latest publication did not run or did not push | Last "docs: update generated Doxygen HTML" commit on `main` |
| API pages missing styles/search | `.nojekyll` removed or Pages source changed | `.nojekyll` present at the root; Pages source still `main` / `(root)` |
| Guides render as plain text on the site | Markdown files are served raw by design (the site itself is only the API reference) | Read guides on GitHub (links above) |
| `README.md` or the guides disappeared after publication | The workflow wiped the root instead of replacing `api/` | Fix the workflow in the software repository; restore from history here |
| Two deployments fight each other | A Pages workflow was added to this repository | Keep exactly one publishing mechanism: branch `main` / `(root)` |

## Changes that belong to the software repository

- Doxygen configuration (`Doxyfile`) and generated HTML.
- Source comments, comment lint/inventory scripts and documentation conventions.
- The workflow that generates HTML and publishes it here with `DOCS_REPO_TOKEN`.
- Any fix for a publish step that deletes manual content (`README.md`,
  `index.html`, `.nojekyll`, `installation/`, `plugins/`).

## Integration status with the software repository

The publishing workflow **exists and works**: two publications have landed on
`main` (`85e43f3`, `b3d7881`), each naming its source revision
(`CurseStoneTeam/CurseStone@bd919dfc…`, `@913e809f…`), and the published site
serves the result. Still open for the maintainer:

1. The workflow's file name and trigger (push, tag, schedule or dispatch) in the
   software repository — not visible from here.
2. Whether the workflow clears `api/` before copying (it must not clear anything
   outside `api/`).
3. Confirmation that future publications keep targeting `api/` on branch `main`
   of this repository, and that the root redirect stays untouched.

## Repository notes

- The repository was renamed from `cursestone-docs` to `CurseStoneTeam.github.io`;
  GitHub redirects the old URLs, but new links should use the new name.
- The site is served at **https://cursestoneteam.github.io/** (root domain), not
  under a `/cursestone-docs/` subpath.

**Status: verified.** Pages is enabled and built, `main` holds the generated
Doxygen HTML under `api/`, and after the change above was pushed the deployment
for that commit reported `built` and both `https://cursestoneteam.github.io/`
(the redirect) and `https://cursestoneteam.github.io/api/` answered HTTP 200 with
the expected content.
