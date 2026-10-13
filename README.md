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
- the website landing page and its configuration,
- the directory that receives **generated Doxygen HTML** from the software repository,
- the GitHub Pages setup that serves all of the above.

The C++ sources, the Doxyfile, the comment conventions and the workflow that generates
and publishes the API reference live in the **software repository**. Nothing in this
repository can build documentation from source code it does not have.

## Repository layout

| Path | Content | Maintained |
|---|---|---|
| `README.md` | Repository overview and these maintenance instructions | Manual |
| `index.html` | Website landing page (served at the site root) | Manual |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (required for Doxygen HTML) | Manual |
| `installation/` | Installation guide (English + Español) | Manual |
| `plugins/` | Plugin guide (English + Español) and `ExamplePlugin/` | Manual |
| `api/` | **Destination for generated Doxygen HTML** | **Generated — do not edit** |
| `.github/workflows/` | *(does not exist)* — this repository has no workflows | — |

`api/` currently contains only a placeholder `README.md`. Once the software
repository publishes its first Doxygen run, everything under `api/` is machine
generated and **must not be edited by hand**; the placeholder may be removed by
that publication, which is expected.

Manual documentation is never stored under `api/`, so a publication that replaces
`api/` cannot delete any guide.

## Generated API documentation

- **Destination:** `api/` directory of this repository, branch `main`.
- **Source of the HTML:** Doxygen run in the software repository.
- **Expected site path:** `/api/` (for example `…/api/index.html`).
- **Current status: not published yet.** No generated API documentation exists in
  this repository, and no publication has been received or verified. The landing
  page shows this status until the first real run arrives.

## How GitHub Pages publication works

The intended setup is **deployment from a branch**, which requires no workflow in
this repository:

1. GitHub Pages is enabled for this repository with source **branch `main`,
   folder `/ (root)`**. *(Not enabled yet — see "Remaining steps".)*
2. `.nojekyll` makes Pages copy every file byte-for-byte, so Doxygen's HTML, CSS,
   JavaScript and search data are served exactly as generated and Jekyll cannot
   drop or fail on them.
3. The software repository's workflow, after Doxygen generation succeeds, commits
   the generated HTML into `api/` on `main` using the `DOCS_REPO_TOKEN` secret
   that already exists **in the software repository**.
4. Pages redeploys automatically on the new commit.

This repository needs **no token, no secret and no workflow of its own** merely to
host HTML that someone else pushes.

### Publishing rules the software workflow must follow

- Replace **only** `api/` (for example `rm -rf api && mkdir -p api && cp -r html/. api/`,
  then `git add -A api/`). Never `git add -A`, `git rm -r .` or a forced push:
  that would delete `README.md`, `index.html`, `.nojekyll` and the guides.
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
   PR). Do not place manual content inside `api/`.
4. New top-level guides get a link in the reading order above and, if they should
   be featured, a card in `index.html`.

## Troubleshooting publication failures

| Symptom | Likely cause | What to check |
|---|---|---|
| Site root 404 | Pages not enabled, or deployment still running | Repository **Settings → Pages**; **Actions** tab for the Pages build |
| `/api/` 404 | No publication received yet, or the software workflow failed | Actions runs in the **software** repository; the publish job must succeed before anything lands here |
| `/api/` shows old API docs | Latest publication did not run or did not push | Last successful run of the publishing workflow and its commit message |
| API pages missing styles/search | `.nojekyll` removed or Pages source changed | `.nojekyll` present at the repository root; Pages source still `main` / `(root)` |
| Guides render as plain text on the site | Markdown files are served raw by design | Read guides on GitHub (links above) or add a rendering step later |
| Guides or landing page disappeared after publication | The workflow overwrote more than `api/` | Fix the workflow's `git add` scope in the software repository; restore from history here |
| Two deployments fight each other | A Pages workflow was added to this repository | Keep exactly one publishing mechanism: branch `main` / `(root)` |

## Changes that belong to the software repository

- Doxygen configuration (`Doxyfile`) and generated HTML.
- Source comments, comment lint/inventory scripts and documentation conventions.
- The workflow that generates HTML and publishes it here with `DOCS_REPO_TOKEN`.
- Any fix for a publish step that deletes content outside `api/`.

## Integration details still required from the software repository

The publishing workflow does **not exist yet** in the software repository (it has
only `Build.yml` and `release.yml`; there is no `Doxyfile` and no `docs/` folder).
This repository is prepared to receive the HTML, but these facts must be confirmed
by the maintainer rather than assumed:

1. Exact source repository and the branch the workflow runs from (the docs link to
   `https://github.com/CurseStoneTeam/CurseStone`, whose default branch is `stable`).
2. Name and trigger of the publishing workflow (push, tag, schedule or dispatch).
3. Confirmation that the destination is **branch `main`, directory `api/`** of
   `CurseStoneTeam/cursestone-docs`.
4. Whether the workflow commits directly or opens a pull request (direct commit is
   simplest; a PR needs someone to merge it).
5. That the GitHub App/token behind `DOCS_REPO_TOKEN` has **Contents: write** on
   this repository and is installed with access to it.

## Remaining deployment steps

Not completed from this repository, in order:

1. Review and save these changes (Freebuff Changes panel), then push to `main`.
2. Enable GitHub Pages: **Settings → Pages → Deploy from a branch → `main` /
   `(root)`**. This is an administrator action — the current credential has no
   admin rights on this repository, and the Pages API reports *not configured*.
3. Confirm the organization allows "Deploy from a branch" (organization
   **Settings → Actions → General → Pages**, if restricted).
4. Let the software repository add the Doxygen generation + publish workflow using
   its existing `DOCS_REPO_TOKEN`.
5. Verify the first real publication: a successful run in the software repository,
   files present under `api/` here, and the published site checked in a browser.

**Status: not verified.** No deployment has run and no generated HTML has been
received, so the website and the API integration must be treated as unconfirmed
until step 5 is done. The expected site URL, derived from the owner and repository
name (not yet verified in a browser), is `https://cursestoneteam.github.io/cursestone-docs/`.
