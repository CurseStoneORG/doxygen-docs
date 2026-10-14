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
"",
"BlockIds_8h.html#afffd59fac8da24da79a88bfd701003d4a3f6c126526eb749487c0982800a5fc4c",
"BlockStemPumpkin_8h_source.html",
"EntityXPOrb_8h_source.html",
"ItemConstants_8h.html#a49d32d5c768a7299e2ea25699a3e5e94",
"ItemConstants_8h.html#adff5ec534c3e68a02f7e531cfc8b3364",
"LakeGenerator_8h_source.html",
"Spawnable_8h_source.html",
"classcursestone_1_1CommandMap.html#a8d089a8e28843bca5062c0819c13fdf8",
"classcursestone_1_1Server.html#a64de480b9c722ece23c5c9b248f4e374",
"classcursestone_1_1block_1_1BlockEndStone.html#a9448d0fef0c2bfa52b0ef7776a4d17c4",
"classcursestone_1_1block_1_1BlockSapling.html",
"classcursestone_1_1entity_1_1EntityPrimedTNT.html#aa67c48f85ba5dcddd7fc2b99d1a64285",
"classcursestone_1_1event_1_1entity_1_1EntityShootBowEvent.html#a06f560ca039bc54df82a2bcaf371f270",
"classcursestone_1_1event_1_1player_1_1PlayerQuitEvent.html#a8a8eca91dcc9e6ff12202ac26771494f",
"classcursestone_1_1inventory_1_1PlayerInventory.html#a4986b2839aa5d3475ebdde3e371a7f2d",
"classcursestone_1_1item_1_1ItemShovelDiamond.html",
"classcursestone_1_1network_1_1protocol_1_1ContainerOpenPacket.html#a46048b1a85508effbb430c87a26d09d4",
"classcursestone_1_1network_1_1protocol_1_1PacketWriter.html#af13b76db4169d9d022a7026771bbb166",
"classcursestone_1_1scheduler_1_1AsyncTask.html#a11f563f4f681f6c6ba2e8240c5da441f",
"classcursestone_1_1world_1_1World.html#a2ce9afacee86234fadde0927f9eca672",
"classcursestone_1_1world_1_1generator_1_1Synth.html#a7e97c9585a7480d43366a3256cdc48fc",
"dir_8250e12e5a19acb8ece30f1703b6dc16.html",
"structcursestone_1_1network_1_1protocol_1_1PlayerListPacket_1_1Entry.html#ae8608098f7044f5cc951d686ce687a26",
"structmcp__encapsulated__header.html#a0a6f492f0a509dc4cf8d696525193980",
"structmcp__pkt__unconnected__ping.html#aef0ebdbadf6b9d20d1264c90470389c7"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';