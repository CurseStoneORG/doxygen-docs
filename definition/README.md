# CurseStone Lua type definitions

Type definitions ([LuaLS / lua-language-server](https://github.com/LuaLS/lua-language-server) annotations) for the **CurseStone plugin Lua API 1.0.2**, so your editor gives you autocomplete, signatures and type checking while you write plugins.

These files describe the plugin API documented in the plugin guide:

| Global | Contents |
|---|---|
| `plugin`, `import` | Plugin metadata, module loading and the `resources/` API (`getResource`, `saveResource`, `listResources`) |
| `log` | `info`, `warn`, `error` |
| `server` | `broadcast`, `players`, `getPlayer`, world management (`worlds`, `getWorld`, `loadWorld`, `defaultWorld`) |
| `player` | Messages, health, movement, items, nametags, permissions, cross-world teleports |
| `commands` | `register` (with `override`), `reply` |
| `events` | `on` + all 1.0.2 events, `events.CAUSE.*` damage-cause constants |
| `scheduler` | `later`, `every`, `cancel` (20 ticks = 1 s) |
| `data` | Sandboxed file, YAML and JSON API (`data_pl/` at the server root) |

New in API **1.0.2** (and covered by these definitions): world handles and `server.loadWorld`, the player handle (`server.getPlayer`), `player.teleportWorld` / positions / health / items / nametags, plugin resources, command overrides, and the new events (`PlayerDeath`, `PlayerRespawn`, `PlayerMove`, `PlayerInteract`, bed, door and damage events).

## What's in this folder

| File | Purpose |
|---|---|
| `cursestone.lua` | The type definitions. Never `require` it; LuaLS just reads it |
| `.luarc.json` | Example workspace configuration for LuaLS |
| `README.md` | This file |

## How to use

### Option A: copy into your plugin (recommended)

Copy this folder into your plugin so every contributor gets types for free:

```
plugins/MyPlugin/
├── plugin.yml
├── .luarc.json        <- from this folder
├── definition/
│   └── cursestone.lua
├── resources/         <- read-only shipped files (plugin.getResource...)
└── src/
    └── main.lua
```

The bundled `.luarc.json` adds `./definition` to `workspace.library` and declares `import` as a known global. Open the plugin folder as the workspace root of your editor and you are done.

> The `definition/` folder and `.luarc.json` are inert for the server: CurseStone only loads what `plugin.yml` points to.

### Option B: reference it globally

Keep one copy of `cursestone.lua` anywhere on disk and add its folder to `workspace.library` in your editor's LuaLS settings (see the editor sections below). Use this if you have many plugins and do not want a copy in each.

## Editor setup

All of the editors below use the same engine, **lua-language-server** (LuaLS), which reads the annotations in `cursestone.lua` automatically once it is on the library path.

### VS Code

1. Install the [Lua (LuaLS)](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) extension.
2. Open your plugin folder (`File > Open Folder`) — the bundled `.luarc.json` is picked up automatically.
3. Or set it globally in settings:

```jsonc
"Lua.workspace.library": { "/path/to/definition": true },
"Lua.diagnostics.globals": ["import"],
"Lua.runtime.version": "Lua 5.4"
```

### Neovim

With `nvim-lspconfig`:

```lua
require("lspconfig").lua_ls.setup({
  settings = {
    Lua = {
      runtime = { version = "Lua 5.4" },
      diagnostics = { globals = { "import" } },
      workspace = { library = { "/path/to/definition" } },
    },
  },
})
```

Or, if you use `lazydev`/`neodev`, add the path to `library` the same way.

### Zed

Zed ships Lua support through LuaLS. In `~/.config/zed/settings.json` (or `.zed/settings.json` in the project):

```json
{
  "languages": {
    "Lua": {
      "language_servers": ["lua-language-server"],
      "lsp": {
        "Lua": {
          "runtime.version": "Lua 5.4",
          "diagnostics.globals": ["import"],
          "workspace.library": ["/absolute/path/to/definition"]
        }
      }
    }
  }
}
```

Alternatively, install the Lua extension from Zed extensions and rely on the project `.luarc.json`.

### Helix

Helix uses lua-language-server from your `PATH` (`languages.toml` only needed if it is not found). Workspace configuration is read from the project's `.luarc.json`, so the bundled file is enough:

```
# .helix/languages.toml (only if not auto-detected)
[language-server.lua-language-server]
command = "lua-language-server"
```

Open the plugin folder (which contains `.luarc.json`), edit `src/main.lua`, and completions for `commands.`, `player.`, `data.` etc. appear.

## Notes and caveats

- **Lua 5.4**: set `runtime.version` accordingly; the server embeds Lua 5.4.
- **`import` is a custom global**: declare it (`diagnostics.globals`) or you get an "undefined global" warning; the bundled `.luarc.json` already does this.
- **Restricted environment**: the sandbox has no `io`, `os`, `package`, `debug`, `load`, `loadfile` or `dofile`. The only ways to touch files are `data.*` and the `resources/` API (`plugin.getResource` etc.).
- **Handles, not objects**: `server.getPlayer` and `server.getWorld` return lightweight handles that only carry a name and re-resolve the live object on every call; after the player leaves or the world unloads, their methods return `nil`/`false` instead of erroring.
- **`e.player` and event identifiers are strings**, never objects; other entities appear as `eid:<id>`.
- **Execution limits** (1.0.2): plugin calls have per-call time limits and a plugin is disabled automatically after 10 consecutive errors. Keep event handlers light (`PlayerMove` fires on every accepted movement packet).
- When the Lua API changes (new events, new functions), update `cursestone.lua` in the same PR as the plugin guide so types and docs never drift apart.

## Autor

Definitions are officially maintained by [mateocollar](https://github.com/mateocollar) but contributions are fully accepted!

## License

Same as CurseStone: LGPL-3.0-or-later.