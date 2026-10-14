/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "CurseStone", "index.html", [
    [ "Contributing to CurseStone", "md_CONTRIBUTING.html", [
      [ "Table of contents", "index.html#autotoc_md0", null ],
      [ "Features", "index.html#autotoc_md1", null ],
      [ "Quick start", "index.html#autotoc_md2", null ],
      [ "Building", "index.html#autotoc_md3", [
        [ "Requirements", "index.html#autotoc_md4", null ],
        [ "Linux (Debian/Ubuntu)", "index.html#autotoc_md5", null ],
        [ "Android (Termux)", "index.html#autotoc_md6", null ],
        [ "Presets", "index.html#autotoc_md7", null ],
        [ "Prebuilt binaries", "index.html#autotoc_md8", null ]
      ] ],
      [ "Configuration", "index.html#autotoc_md9", null ],
      [ "Console and in-game commands", "index.html#autotoc_md10", null ],
      [ "World storage", "index.html#autotoc_md11", null ],
      [ "Plugins", "index.html#autotoc_md12", null ],
      [ "Diagnostics", "index.html#autotoc_md13", null ],
      [ "Project layout", "index.html#autotoc_md14", null ],
      [ "Contributing", "index.html#autotoc_md15", null ],
      [ "License", "index.html#autotoc_md16", null ],
      [ "1. Ways to contribute", "md_CONTRIBUTING.html#autotoc_md19", null ],
      [ "2. Setting up", "md_CONTRIBUTING.html#autotoc_md21", null ],
      [ "3. Architecture rules: the C / C++ split", "md_CONTRIBUTING.html#autotoc_md23", [
        [ "Rule 1: C files never depend on C++", "md_CONTRIBUTING.html#autotoc_md24", null ],
        [ "Rule 2: C headers are C++-safe, so C++ includes them directly", "md_CONTRIBUTING.html#autotoc_md25", null ],
        [ "Rule 3: never inherit from a C struct", "md_CONTRIBUTING.html#autotoc_md26", null ],
        [ "C++ wrappers for C headers", "md_CONTRIBUTING.html#autotoc_md27", null ]
      ] ],
      [ "4. Naming and style", "md_CONTRIBUTING.html#autotoc_md29", [
        [ "Items and blocks", "md_CONTRIBUTING.html#autotoc_md30", null ],
        [ "General", "md_CONTRIBUTING.html#autotoc_md31", null ],
        [ "Comments and documentation", "md_CONTRIBUTING.html#autotoc_md32", null ]
      ] ],
      [ "5. Protocol 84 notes", "md_CONTRIBUTING.html#autotoc_md34", null ],
      [ "6. Where things go", "md_CONTRIBUTING.html#autotoc_md36", null ],
      [ "7. Testing your change", "md_CONTRIBUTING.html#autotoc_md38", null ],
      [ "8. Commits and pull requests", "md_CONTRIBUTING.html#autotoc_md40", null ],
      [ "9. Reporting bugs", "md_CONTRIBUTING.html#autotoc_md42", null ],
      [ "10. Plugins", "md_CONTRIBUTING.html#autotoc_md44", null ],
      [ "11. License", "md_CONTRIBUTING.html#autotoc_md46", null ]
    ] ],
    [ "Cómo compilar CurseStone", "md_BUILDING.html", [
      [ "Opción 1 — GitHub Actions (recomendado)", "md_BUILDING.html#autotoc_md48", null ],
      [ "Opción 1.5 — Release personalizado (versión y descripción custom)", "md_BUILDING.html#autotoc_md50", null ],
      [ "</blockquote>", "md_BUILDING.html#autotoc_md51", null ],
      [ "Opción 2 — Linux x86_64 (VPS / PC)", "md_BUILDING.html#autotoc_md52", null ],
      [ "Opción 3 — Android ARM64 desde Termux (en tu celular)", "md_BUILDING.html#autotoc_md54", null ],
      [ "</blockquote>", "md_BUILDING.html#autotoc_md55", null ],
      [ "Opción 4 — Cross-compile ARM64 desde Linux (con NDK)", "md_BUILDING.html#autotoc_md56", null ],
      [ "Variables CMake útiles", "md_BUILDING.html#autotoc_md58", null ]
    ] ],
    [ "CurseStone Comment and Documentation Style Guide", "md_docs_STYLE_COMMENTS.html", [
      [ "1. Language", "md_docs_STYLE_COMMENTS.html#autotoc_md60", null ],
      [ "2. What deserves a comment", "md_docs_STYLE_COMMENTS.html#autotoc_md61", null ],
      [ "3. Doxygen conventions", "md_docs_STYLE_COMMENTS.html#autotoc_md62", null ],
      [ "4. What to remove or rewrite", "md_docs_STYLE_COMMENTS.html#autotoc_md63", null ],
      [ "5. Prohibited or restricted changes", "md_docs_STYLE_COMMENTS.html#autotoc_md64", null ],
      [ "6. File headers", "md_docs_STYLE_COMMENTS.html#autotoc_md65", null ],
      [ "7. Tooling workflow (per migration batch)", "md_docs_STYLE_COMMENTS.html#autotoc_md66", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"ACK_8h_source.html",
"BlockIds_8h.html#afffd59fac8da24da79a88bfd701003d4a6adc065e0e1371a047110539908614cd",
"ChunkPopulateEvent_8h_source.html",
"Info_8h.html#a0fcd5ee2613322608f188e1af4bfa426",
"ItemConstants_8h.html#a68cfb0146b496c29bececdfedf2cf55b",
"ItemConstants_8h.html#afa31ef19ce5728daf4697328f4df2a94",
"Normal_8h_source.html",
"TerrainShape_8cpp.html#afa20821c7c0ddd39f6b74574b4ada529",
"classcursestone_1_1KickCommand.html#a5e3b0ccf002bf86385e7e7d7d0c20ebf",
"classcursestone_1_1Server.html#aeec85379ed82b8ff1d6440308a36a954",
"classcursestone_1_1block_1_1BlockFlower.html#afde632c39e5a52738a9d511535a934cb",
"classcursestone_1_1block_1_1BlockStairsBirch.html#a431e94bd812cfc3f54563b2fd82ab1c5",
"classcursestone_1_1entity_1_1Living.html#a9c00f973028a40719a0baf60ec9da897",
"classcursestone_1_1event_1_1entity_1_1ProjectileLaunchEvent.html#a2627dfa14af4c3b4681577af68facafb",
"classcursestone_1_1event_1_1potion_1_1PotionCollideEvent.html#ac63ef1fcf0fc3b50c5d1dafe2941da2e",
"classcursestone_1_1inventory_1_1Recipe.html#ae1f6bdcb32d0d3e49a342d16e3760244",
"classcursestone_1_1item_1_1ItemSwordStone.html#a417f53f0e11748bd40cc71fd773ce578",
"classcursestone_1_1network_1_1protocol_1_1CraftingEventPacket.html#ab57d8e18aa6b002b1c3536bf8f2f41e3",
"classcursestone_1_1network_1_1protocol_1_1ReplaceSelectedItemPacket.html#aee65510e78fe6edfdc0f223f992ae12d",
"classcursestone_1_1tile_1_1Container.html#a1f670825eb52a304bfe1d971bbbdb47a",
"classcursestone_1_1world_1_1World.html#aee98a1f6c3ff1a147431da730a57f4ea",
"classcursestone_1_1world_1_1generator_1_1biome_1_1BiomeMountains.html#aa43e92fb22d04213f446aeb400170d74",
"index.html#autotoc_md12",
"structcursestone_1_1world_1_1DroppedItem.html",
"structmcp__logger.html#ae291da8fbb584073e5f2097195f16b5d",
"structmcp__rak__session.html#a670e69edcdbb4a959956ce88e92a099f"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';