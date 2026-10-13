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

This repository owns the **CurseStone documentation website**:

- the manually written guides (installation, plugins, example plugin),
- the GitHub Pages configuration (`.nojekyll`) that serves the site,
- the repository root that receives **generated Doxygen HTML** from the software
  repository and acts as the website's front page.

The website is **only the Doxygen API reference**: there is no landing page. When
the site is opened, the root serves the generated Doxygen `index.html` directly.

The C++ sources, the Doxyfile, the comment conventions and the workflow that generates
and publishes the API reference live in the **software repository**. Nothing in this
repository can build documentation from source code it does not have.

## Repository layout

| Path | Content | Maintained |
|---|---|---|
| `README.md` | Repository overview and these maintenance instructions | Manual |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (required for Doxygen HTML) | Manual |
| `installation/` | Installation guide (English + Español) | Manual |
| `plugins/` | Plugin guide (English + Español) and `ExamplePlugin/` | Manual |
| Doxygen output at the root | `index.html`, `doxygen.css`, `tabs.css`, `jquery/`, `search/`, generated pages | **Generated — do not edit** |
| `.github/workflows/` | *(does not exist)* — this repository has no workflows | — |

**Destination: the repository root.** The generated Doxygen `index.html` *is* the
website's front page, so there is no landing page in this repository. Until the
software repository publishes its first run, the site root returns 404 — that is
expected, not a fault.

Generated and manual files share the root, so the publisher must **merge** its
output and must never wipe the directory: `README.md`, `installation/`, `plugins/`
and `.nojekyll` have to survive every publication.

## Generated API documentation

- **Destination:** repository root (`/`) of this repository, branch `main`.
- **Source of the HTML:** Doxygen run in the software repository.
- **Site entry point:** `/index.html` — the Doxygen start page, served directly.
- **Current status: not published yet.** No generated API documentation exists in
  this repository, and no publication has been received or verified. The site root
  stays 404 until the first real run arrives.

## How GitHub Pages publication works

The intended setup is **deployment from a branch**, which requires no workflow in
this repository:

1. GitHub Pages is enabled for this repository with source **branch `main`,
   folder `/ (root)`**. *(Not enabled yet — see "Remaining steps".)*
2. `.nojekyll` makes Pages copy every file byte-for-byte, so Doxygen's HTML, CSS,
   JavaScript and search data are served exactly as generated and Jekyll cannot
   drop or fail on them.
3. The software repository's workflow, after Doxygen generation succeeds, commits
   the generated HTML into the **repository root** on `main` using the
   `DOCS_REPO_TOKEN` secret that already exists **in the software repository**.
4. Pages redeploys automatically on the new commit.

This repository needs **no token, no secret and no workflow of its own** merely to
host HTML that someone else pushes.

### Publishing rules the software workflow must follow

- **Merge, never wipe.** Copy the Doxygen output over the root
  (for example `cp -r html/. .`, then check `git status` and stage only the
  generated files). Never run `rm -rf .`, `git rm -r .`, a hard reset or a forced
  push: that would delete `README.md`, `installation/`, `plugins/` and `.nojekyll`.
- **Only Doxygen output may be written.** Do not touch `README.md`,
  `installation/`, `plugins/` or `.nojekyll`.
- Publish **only after Doxygen generation succeeds** (the publish job must `needs:`
  the generate job, or run as a later step of the same job so a failure stops it).
- Commit to `main` on this repository; do not rewrite history.
- Do not add a second Pages workflow here: a workflow that also pushes to Pages
  would conflict with branch deployment.

## Editing the manual guides

1. Edit the Markdown files in `installation/` or `plugins/` (English file and its
   `.es.md` sibling should be kept in sync).
2. Keep links relative (`../plugins/plugin.md`), so they work both on GitHub and
   if they are ever rendered on the website.
3. Preview the diff, then let the Freebuff Changes panel commit and push (or open a
   PR). Never hand-edit generated Doxygen files at the root.
4. New top-level guides get a link in the reading order above.

## Troubleshooting publication failures

| Symptom | Likely cause | What to check |
|---|---|---|
| Site root 404 | Pages not enabled, or deployment still running | Repository **Settings → Pages**; **Actions** tab for the Pages build |
| Site root 404 although Pages is enabled | No publication received yet, or the software workflow failed | Actions runs in the **software** repository; the publish job must succeed before anything lands here |
| Root shows old API docs | Latest publication did not run or did not push | Last successful run of the publishing workflow and its commit message |
| API pages missing styles/search | `.nojekyll` removed or Pages source changed | `.nojekyll` present at the repository root; Pages source still `main` / `(root)` |
| Guides render as plain text on the site | Markdown files are served raw by design (the site itself is only the API reference) | Read guides on GitHub (links above) |
| `README.md` or the guides disappeared after publication | The workflow wiped the root instead of merging | Fix the workflow in the software repository; restore from history here |
| Two deployments fight each other | A Pages workflow was added to this repository | Keep exactly one publishing mechanism: branch `main` / `(root)` |

## Changes that belong to the software repository

- Doxygen configuration (`Doxyfile`) and generated HTML.
- Source comments, comment lint/inventory scripts and documentation conventions.
- The workflow that generates HTML and publishes it here with `DOCS_REPO_TOKEN`.
- Any fix for a publish step that deletes manual content (`README.md`,
  `installation/`, `plugins/`, `.nojekyll`) instead of merging Doxygen output.

## Integration details still required from the software repository

The publishing workflow does **not exist yet** in the software repository (it has
only `Build.yml` and `release.yml`; there is no `Doxyfile` and no `docs/` folder).
This repository is prepared to receive the HTML, but these facts must be confirmed
by the maintainer rather than assumed:

1. Exact source repository and the branch the workflow runs from (the docs link to
   `https://github.com/CurseStoneTeam/CurseStone`, whose default branch is `stable`).
2. Name and trigger of the publishing workflow (push, tag, schedule or dispatch).
3. Confirmation that the destination is **branch `main`, repository root** of
   `CurseStoneTeam/cursestone-docs`, merged over the existing files.
4. Whether the workflow commits directly or opens a pull request (direct commit is
   simplest; a PR needs someone to merge it).
5. That the GitHub App/token behind `DOCS_REPO_TOKEN` has **Contents: write** on
   this repository and is installed with access to it.

## Remaining deployment steps

Not completed from this repository, in order:

1. ~~Push the repository changes to `main`.~~ **Done** — the layout, `.nojekyll`
   and these instructions are on `main`.
2. Enable GitHub Pages: **Settings → Pages → Deploy from a branch → `main` /
   `(root)`**. This is an administrator action — the current credential has no
   admin rights on this repository, and the Pages API reports *not configured*.
3. Confirm the organization allows "Deploy from a branch" (organization
   **Settings → Actions → General → Pages**, if restricted).
4. Let the software repository add the Doxygen generation + publish workflow using
   its existing `DOCS_REPO_TOKEN`.
5. Verify the first real publication: a successful run in the software repository,
   Doxygen files present at the repository root here, the guides still intact, and
   the published site checked in a browser.

**Status: not verified.** No deployment has run and no generated HTML has been
received, so the website and the API integration must be treated as unconfirmed
until step 5 is done. The expected site URL, derived from the owner and repository
name (not yet verified in a browser), is `https://cursestoneteam.github.io/cursestone-docs/`.
