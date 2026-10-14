--[[
CurseStone Lua API 1.0.1 - LuaLS type definitions
Generated for CurseStone, MCPE 0.15.x server (protocol 84).
Place inside your plugin folder (e.g. plugins/MyPlugin/definition/)
or point "workspace.library" at this file. See README.md.

References:
  https://github.com/CurseStoneTeam/CurseStoneTeam.github.io/blob/main/plugins/plugin.md
  https://github.com/CurseStoneTeam/CurseStoneTeam.github.io/blob/main/plugins/plugin-es.md
]]

---@alias CurseStoneEventName
---| '"PlayerJoin"'
---| '"PlayerQuit"'
---| '"PlayerChat"'
---| '"BlockBreak"'
---| '"BlockPlace"'

---@alias CurseStonePermission
---| '"default"' # everyone (also "all", "public", "everyone", "todos")
---| '"op"' # ops and console (also "admin")
---| string # custom permission node, e.g. "myperm.vip"

--==============================================================================
-- Command sender
--==============================================================================

---@class CurseStone.CommandSender
---@field name string Player name, or "CONSOLE" for the console
---@field isConsole boolean true if the command came from the console
---@field isOp boolean true if the sender is an operator

--==============================================================================
-- Events
--==============================================================================

---@class CurseStone.CancelableEvent
---@field player string Player name (never an object)
---@field cancel fun() Cancels the event

---@class CurseStone.JoinQuitEvent : CurseStone.CancelableEvent
---@field message string Writable: join/quit message. "" suppresses it

---@class CurseStone.ChatEvent : CurseStone.CancelableEvent
---@field message string Writable: chat message. "" silences it

---@class CurseStone.BlockEvent : CurseStone.CancelableEvent
---@field x integer
---@field y integer
---@field z integer
---@field block_id integer

--==============================================================================
-- plugin: info about the plugin itself
--==============================================================================

---@class CurseStone.Plugin
---@field api string Server plugin API version (e.g. "1.0.1")
---@field name string Plugin name from the manifest
---@field author string Author from the manifest
---@field version string Plugin version
---@field include fun(path: string): table Loads a Lua file by exact path (with extension, relative to the plugin folder, cached). No ".." or absolute paths.

--==============================================================================
-- log
--==============================================================================

---@class CurseStone.Log
---@field info fun(msg: string) Writes to the log with the [PluginName] prefix
---@field warn fun(msg: string) Same, as a warning
---@field error fun(msg: string) Same, as an error

--==============================================================================
-- server
--==============================================================================

---@class CurseStone.Server
---@field broadcast fun(msg: string) Sends a message to every player
---@field players fun(): string[] Returns the list of online player names

--==============================================================================
-- player (everything goes by player name; there are no Player objects)
--==============================================================================

---@class CurseStone.Player
---@field message fun(name: string, msg: string): boolean Private chat message. false if the player is not online
---@field tip fun(name: string, msg: string): boolean Floating tip. false if not online
---@field popup fun(name: string, msg: string): boolean Popup above the hotbar. false if not online
---@field kick fun(name: string, reason?: string) Kicks the player (default reason: "Expulsado")
---@field teleport fun(name: string, x: number, y: number, z: number) Teleports the player
---@field isOp fun(name: string): boolean true if the player is op
---@field setPermission fun(name: string, node: string, v: boolean) Grants (true) or denies (false) a permission node. In memory only
---@field hasPermission fun(name: string, node: string): boolean Does the player have that node?

--==============================================================================
-- commands
--==============================================================================

---@class CurseStone.CommandOptions
---@field description? string Shown in /help
---@field usage? string Usage string, e.g. "/hello <text>"
---@field permission? CurseStonePermission Who may run the command (default: everyone)

---@class CurseStone.Commands
---@field register fun(name: string, opts: CurseStone.CommandOptions, fn: fun(sender: CurseStone.CommandSender, args: string[])): boolean Registers a command. true on success, false if the name was already taken. The name is lowercased
---@field reply fun(sender: CurseStone.CommandSender, msg: string) Replies to whoever ran the command (player or console)

--==============================================================================
-- events
--==============================================================================

---@class CurseStone.Events
---@field on fun(name: CurseStoneEventName, fn: fun(e: table): any) Listens to an event. See the CurseStone.* event classes for the fields of e

--==============================================================================
-- scheduler (20 ticks = 1 second)
--==============================================================================

---@class CurseStone.Scheduler
---@field later fun(ticks: integer, fn: fun()): integer Runs fn once after ticks. Returns a task id
---@field every fun(ticks: integer, fn: fun()): integer Runs fn every ticks. Returns a task id
---@field cancel fun(id: integer) Cancels a task by id

--==============================================================================
-- data: sandboxed to plugins/data_pl/<PluginFolder>/
--==============================================================================

---@class CurseStone.Data
---@field folder string Path of your data folder
---@field read fun(file: string): string|nil, string|nil Raw contents, or nil + error
---@field write fun(file: string, contents: string): boolean|nil, string|nil Raw binary-safe write. true, or nil + error
---@field exists fun(file: string): boolean Does the file exist?
---@field delete fun(file: string): boolean Deletes the file. false if it did not exist
---@field list fun(): string[] Names of the files in your data folder
---@field loadYml fun(file: string): table|nil, string|nil YAML -> table, or nil + error
---@field saveYml fun(file: string, t: table): boolean|nil, string|nil table -> YAML. true, or nil + error
---@field loadJson fun(file: string): table|nil, string|nil JSON -> table, or nil + error
---@field saveJson fun(file: string, t: table): boolean|nil, string|nil table -> JSON. true, or nil + error

--==============================================================================
-- plugin table (returned by the entry script)
--==============================================================================

---@class CurseStone.PluginTable
---@field onEnable? fun() Called when the plugin is enabled. Register commands, events and tasks here
---@field onDisable? fun() Called when the plugin is disabled or reloaded

--==============================================================================
-- Global definitions
--==============================================================================

---@type CurseStone.Plugin
plugin = {}

---@type CurseStone.Log
log = {}

---@type CurseStone.Server
server = {}

---@type CurseStone.Player
player = {}

---@type CurseStone.Commands
commands = {}

---@type CurseStone.Events
events = {}

---@type CurseStone.Scheduler
scheduler = {}

---@type CurseStone.Data
data = {}

---Loads a module from src/ (extension optional, dots or slashes, cached).
---Example: import("core.Example") loads src/core/Example.lua.
---@param module string Module path
---@return table # the table returned by the module (always the same table on later calls)
function import(module) end