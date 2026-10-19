--[[
CurseStone Lua API 1.0.2 - LuaLS type definitions
Generated for CurseStone, MCPE 0.15.x server (protocol 84).
Place inside your plugin folder (e.g. plugins/MyPlugin/definition/)
or point "workspace.library" at this file. See README.md.

References:
  https://github.com/CurseStoneTeam/CurseStone.readthedocs.io (docs/plugins/)
]]

---@alias CurseStoneEventName
---| '"PlayerJoin"'
---| '"PlayerQuit"'
---| '"PlayerChat"'
---| '"PlayerDeath"'
---| '"PlayerRespawn"'
---| '"PlayerMove"'
---| '"PlayerInteract"'
---| '"PlayerBedEnter"' # "PlayerSleepInBed" is an accepted alias
---| '"PlayerBedLeave"'
---| '"PlayerDropItem"'
---| '"PlayerItemHeld"'
---| '"BlockBreak"'
---| '"BlockPlace"'
---| '"DoorToggle"'
---| '"EntityDamage"'
---| '"EntityDamageByEntity"'

---@alias CurseStoneInteractAction
---| '"left_click_block"'
---| '"right_click_block"'
---| '"right_click_air"'
---| '"left_click_air"'
---| '"physical"'

---@alias CurseStoneDamageCause
---| '"entity_attack"'
---| '"contact"'
---| '"fall"'
---| '"lava"'
---| '"fire"'
---| '"fire_tick"'
---| '"drowning"'
---| '"cactus"'
---| '"starvation"'
---| '"void"'
---| '"projectile"'
---| '"magic"'
---| '"custom"'

---@alias CurseStoneWorldGenerator
---| '"normal"'
---| '"flat"'
---| '"Nether"'
---| '"void"'

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
---@field cancel fun() Cancels the event (harmless no-op on non-cancellable events)

---@class CurseStone.JoinQuitEvent : CurseStone.CancelableEvent
---@field message string Writable: join/quit message. "" suppresses it

---@class CurseStone.ChatEvent : CurseStone.CancelableEvent
---@field message string Writable: chat message. "" silences it

---@class CurseStone.DeathEvent : CurseStone.CancelableEvent
---@field message string Writable: death broadcast message. "" suppresses it

---@class CurseStone.RespawnEvent
---@field player string Player name
---@field x number Respawn point
---@field y number
---@field z number

---@class CurseStone.MoveEvent : CurseStone.CancelableEvent
---@field player string
---@field fromX number
---@field fromY number
---@field fromZ number
---@field toX number
---@field toY number
---@field toZ number

---@class CurseStone.InteractEvent : CurseStone.CancelableEvent
---@field player string
---@field x number
---@field y number
---@field z number
---@field face integer
---@field action CurseStoneInteractAction
---@field item_id integer
---@field item_meta integer
---@field item_count integer

---@class CurseStone.BedEvent : CurseStone.CancelableEvent
---@field player string
---@field x number Bed position
---@field y number
---@field z number

---@class CurseStone.ItemEvent : CurseStone.CancelableEvent
---@field player string
---@field item_id integer
---@field item_meta integer
---@field item_count integer
---@field slot integer Only PlayerItemHeld

---@class CurseStone.BlockEvent : CurseStone.CancelableEvent
---@field player string
---@field x number
---@field y number
---@field z number
---@field block_id integer

---@class CurseStone.DamageEvent : CurseStone.CancelableEvent
---@field entity string Player name, "eid:<id>" for other entities, or "unknown"
---@field amount number Writable: damage applied (clamped to >= 0)
---@field cause CurseStoneDamageCause

---@class CurseStone.DamageByEntityEvent : CurseStone.DamageEvent
---@field damager string Player name, "eid:<id>" or "unknown"

--==============================================================================
-- plugin: info about the plugin itself
--==============================================================================

---@class CurseStone.Plugin
---@field api string Server plugin API version (e.g. "1.0.2")
---@field name string Plugin name from the manifest
---@field author string Author from the manifest
---@field version string Plugin version
---@field include fun(path: string): table Loads a Lua file by exact path (with extension, relative to the plugin folder, cached). No ".." or absolute paths
---@field getResource fun(name: string): string|nil, string|nil Contents of resources/<name> (binary safe), or nil + error
---@field saveResource fun(name: string, replace: boolean): boolean|nil, string Copies resources/<name> into your data folder. With replace=false an existing file is kept. true, or false + reason
---@field listResources fun(): string[] Relative paths of everything inside resources/ (recursive)

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
---@field getPlayer fun(name: string): CurseStone.PlayerHandle|nil Player handle, or nil if not online
---@field worlds fun(): string[] Names of the currently loaded worlds
---@field getWorld fun(name: string): CurseStone.WorldHandle|nil World handle, or nil if not loaded
---@field loadWorld fun(name: string, gen?: CurseStoneWorldGenerator): CurseStone.WorldHandle Loads (creating if needed) a world and returns its handle
---@field defaultWorld fun(): CurseStone.WorldHandle Handle of the default (spawn) world

--==============================================================================
-- player (everything goes by player name; there are no Player objects)
--==============================================================================

---@class CurseStone.Player
---@field message fun(name: string, msg: string): boolean Private chat message. false if the player is not online
---@field tip fun(name: string, msg: string): boolean Floating tip. false if not online
---@field popup fun(name: string, msg: string): boolean Popup above the hotbar. false if not online
---@field kick fun(name: string, reason?: string): boolean Kicks the player (default reason: "Expulsado"). false if not online
---@field teleport fun(name: string, x: number, y: number, z: number): boolean Teleports within the player's world. false if not online
---@field teleportWorld fun(name: string, world: string, x: number, y: number, z: number): boolean Cross-world teleport by world name. false if the player or world does not exist
---@field getWorld fun(name: string): CurseStone.WorldHandle|nil World handle the player is in
---@field getHealth fun(name: string): number Current health (0 when offline)
---@field setHealth fun(name: string, hp: number): boolean Sets health, clamped to [0, max]. 0 kills through the normal damage pipeline
---@field kill fun(name: string): boolean Kills through the normal death pipeline (death screen, drops, event). false if not found or already dead
---@field getPosition fun(name: string): number|nil, number, number Returns x, y, z (feet), or nil if not online
---@field getRotation fun(name: string): number|nil, number Returns yaw, pitch, or nil if not online
---@field setRotation fun(name: string, yaw: number, pitch: number): boolean Turns the camera and re-syncs the client. false if not online
---@field setMotion fun(name: string, x: number, y: number, z: number): boolean Motion impulse (knockback, launch pads). false if not online
---@field giveItem fun(name: string, id: integer, count?: integer, meta?: integer, customName?: string): boolean Adds an item stack (count defaults to 1, meta to 0). customName supports section-sign codes. true if the stack fit
---@field setNameTag fun(name: string, tag: string) Name above the head + tab list (section-sign codes allowed)
---@field getNameTag fun(name: string): string|nil Current nametag, or nil if not online
---@field setDisplayName fun(name: string, dn: string) Name shown only in chat
---@field getDisplayName fun(name: string): string|nil Current display name, or nil if not online
---@field isOp fun(name: string): boolean true if the player is op
---@field setPermission fun(name: string, node: string, v: boolean): boolean Grants (true) or denies (false) a node. In memory only. false if not online
---@field hasPermission fun(name: string, node: string): boolean Does the player have that node? (false if not online)

--==============================================================================
-- commands
--==============================================================================

---@class CurseStone.CommandOptions
---@field description? string Shown in /help
---@field usage? string Usage string, e.g. "/hello <text>"
---@field permission? CurseStonePermission Who may run the command (default: everyone)
---@field override? boolean Replaces an existing (built-in) command. The original is restored automatically when the plugin is disabled or reloaded

---@class CurseStone.Commands
---@field register fun(name: string, opts: CurseStone.CommandOptions, fn: fun(sender: CurseStone.CommandSender, args: string[])): boolean Registers a command. true on success, false if the name was already taken (and override is not set). The name is lowercased
---@field reply fun(sender: CurseStone.CommandSender, msg: string) Replies to whoever ran the command (player or console)

--==============================================================================
-- events
--==============================================================================

---@class CurseStone.Events
---@field on fun(name: CurseStoneEventName, fn: fun(e: table): any) Listens to an event. See the CurseStone.* event classes for the fields of e
---@field CAUSE table Numeric damage-cause constants: events.CAUSE.FALL, events.CAUSE.LAVA, events.CAUSE.ENTITY_ATTACK, ...

--==============================================================================
-- scheduler (20 ticks = 1 second)
--==============================================================================

---@class CurseStone.Scheduler
---@field later fun(ticks: integer, fn: fun()): integer Runs fn once, ticks from now. Returns a task id
---@field every fun(ticks: integer, fn: fun()): integer Runs fn every ticks. Returns a task id
---@field cancel fun(id: integer) Cancels a task by id

--==============================================================================
-- data: sandboxed to data_pl/<PluginFolder>/ at the server root
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
-- Handles (new in 1.0.2): lightweight, name-only, re-resolved per call
--==============================================================================

---Player handle from server.getPlayer(name). Every player.* function is a
---method here with the name argument removed. Methods return nil/false after
---the player leaves; a stale handle can never crash the server.
---@class CurseStone.PlayerHandle
---@field getName fun(self: CurseStone.PlayerHandle): string Player name
---@field isOnline fun(self: CurseStone.PlayerHandle): boolean
---@field message fun(self: CurseStone.PlayerHandle, msg: string)
---@field tip fun(self: CurseStone.PlayerHandle, msg: string)
---@field popup fun(self: CurseStone.PlayerHandle, msg: string)
---@field kick fun(self: CurseStone.PlayerHandle, reason?: string)
---@field teleport fun(self: CurseStone.PlayerHandle, x: number, y: number, z: number)
---@field teleportWorld fun(self: CurseStone.PlayerHandle, world: string, x: number, y: number, z: number)
---@field getWorld fun(self: CurseStone.PlayerHandle): CurseStone.WorldHandle
---@field isOp fun(self: CurseStone.PlayerHandle): boolean
---@field getHealth fun(self: CurseStone.PlayerHandle): number
---@field setHealth fun(self: CurseStone.PlayerHandle, hp: number)
---@field setPermission fun(self: CurseStone.PlayerHandle, node: string, v: boolean)
---@field hasPermission fun(self: CurseStone.PlayerHandle, node: string): boolean
---@field giveItem fun(self: CurseStone.PlayerHandle, id: integer, count?: integer, meta?: integer, customName?: string): boolean
---@field setNameTag fun(self: CurseStone.PlayerHandle, tag: string)
---@field getNameTag fun(self: CurseStone.PlayerHandle): string|nil
---@field setDisplayName fun(self: CurseStone.PlayerHandle, dn: string)
---@field getDisplayName fun(self: CurseStone.PlayerHandle): string|nil
---@field getPosition fun(self: CurseStone.PlayerHandle): number|nil, number, number
---@field getRotation fun(self: CurseStone.PlayerHandle): number|nil, number
---@field setRotation fun(self: CurseStone.PlayerHandle, yaw: number, pitch: number)
---@field setMotion fun(self: CurseStone.PlayerHandle, x: number, y: number, z: number)
---@field kill fun(self: CurseStone.PlayerHandle): boolean

---World handle from server.getWorld / server.loadWorld / server.defaultWorld /
---player.getWorld. tostring(handle) reads "world(name)". Methods return
---nil/false after the world unloads; they never error.
---@class CurseStone.WorldHandle
---@field name fun(self: CurseStone.WorldHandle): string World name
---@field seed fun(self: CurseStone.WorldHandle): integer World seed
---@field dimension fun(self: CurseStone.WorldHandle): integer 0 = Overworld, 1 = Nether
---@field getTime fun(self: CurseStone.WorldHandle): integer World time, 0..24000
---@field setTime fun(self: CurseStone.WorldHandle, t: integer) Sets the world time
---@field getBlock fun(self: CurseStone.WorldHandle, x: number, y: number, z: number): integer Block id (0 if the chunk is not loaded or y is out of range)
---@field setBlock fun(self: CurseStone.WorldHandle, x: number, y: number, z: number, id: integer, data?: integer): boolean Writes a block (data defaults to 0; y 0..255, id 0..255, data 0..15). Forces the chunk to load
---@field getSpawn fun(self: CurseStone.WorldHandle): number, number, number Spawn coordinates x, y, z
---@field getPlayers fun(self: CurseStone.WorldHandle): string[] Names of the players inside the world
---@field unload fun(self: CurseStone.WorldHandle): boolean Unloads the world. false if it is the default world or the unload is cancelled

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