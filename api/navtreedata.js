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
      [ "Features", "index.html#autotoc_md0", null ],
      [ "Compatibility", "index.html#autotoc_md1", null ],
      [ "Building from source", "index.html#autotoc_md2", null ],
      [ "1. Ways to contribute", "md_CONTRIBUTING.html#autotoc_md5", null ],
      [ "2. Setting up", "md_CONTRIBUTING.html#autotoc_md7", null ],
      [ "3. Architecture rules: the C / C++ split", "md_CONTRIBUTING.html#autotoc_md9", [
        [ "Rule 1: C files never depend on C++", "md_CONTRIBUTING.html#autotoc_md10", null ],
        [ "Rule 2: C headers are C++-safe, so C++ includes them directly", "md_CONTRIBUTING.html#autotoc_md11", null ],
        [ "Rule 3: never inherit from a C struct", "md_CONTRIBUTING.html#autotoc_md12", null ],
        [ "C++ wrappers for C headers", "md_CONTRIBUTING.html#autotoc_md13", null ]
      ] ],
      [ "4. Naming and style", "md_CONTRIBUTING.html#autotoc_md15", [
        [ "Items and blocks", "md_CONTRIBUTING.html#autotoc_md16", null ],
        [ "General", "md_CONTRIBUTING.html#autotoc_md17", null ],
        [ "Comments and documentation", "md_CONTRIBUTING.html#autotoc_md18", null ]
      ] ],
      [ "5. Protocol 84 notes", "md_CONTRIBUTING.html#autotoc_md20", null ],
      [ "6. Where things go", "md_CONTRIBUTING.html#autotoc_md22", null ],
      [ "7. Testing your change", "md_CONTRIBUTING.html#autotoc_md24", null ],
      [ "8. Commits and pull requests", "md_CONTRIBUTING.html#autotoc_md26", null ],
      [ "9. Reporting bugs", "md_CONTRIBUTING.html#autotoc_md28", null ],
      [ "10. Plugins", "md_CONTRIBUTING.html#autotoc_md30", null ],
      [ "11. License", "md_CONTRIBUTING.html#autotoc_md32", null ]
    ] ],
    [ "Cómo compilar CurseStone", "md_BUILDING.html", [
      [ "Opción 1 — GitHub Actions (recomendado)", "md_BUILDING.html#autotoc_md34", null ],
      [ "Opción 1.5 — Release personalizado (versión y descripción custom)", "md_BUILDING.html#autotoc_md36", null ],
      [ "</blockquote>", "md_BUILDING.html#autotoc_md37", null ],
      [ "Opción 2 — Linux x86_64 (VPS / PC)", "md_BUILDING.html#autotoc_md38", null ],
      [ "Opción 3 — Android ARM64 desde Termux (en tu celular)", "md_BUILDING.html#autotoc_md40", null ],
      [ "</blockquote>", "md_BUILDING.html#autotoc_md41", null ],
      [ "Opción 4 — Cross-compile ARM64 desde Linux (con NDK)", "md_BUILDING.html#autotoc_md42", null ],
      [ "Variables CMake útiles", "md_BUILDING.html#autotoc_md44", null ]
    ] ],
    [ "¿Migrar el core C a C++? — Evaluación ejecutiva", "md_docs_audits_c_to_cpp_assessment.html", [
      [ "1. Veredicto ejecutivo", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md47", null ],
      [ "2. Estado actual del C propio", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md49", null ],
      [ "3. Riesgos con evidencia (auditoría de memoria, commit <tt>2afbc53</tt>)", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md51", null ],
      [ "4. Comparativa esfuerzo vs beneficio", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md53", null ],
      [ "5. Ruta de migración recomendada", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md55", null ],
      [ "6. Lo que la migración NO compra", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md57", null ],
      [ "7. Conclusión", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md59", null ]
    ] ],
    [ "CurseStone — Deep Memory Audit Report", "md_docs_audits_memory_audit.html", [
      [ "1. Scope", "md_docs_audits_memory_audit.html#autotoc_md62", null ],
      [ "2. Architecture as found (summary)", "md_docs_audits_memory_audit.html#autotoc_md63", null ],
      [ "3. Tooling and constraints", "md_docs_audits_memory_audit.html#autotoc_md64", null ],
      [ "4. Memory-management model as found", "md_docs_audits_memory_audit.html#autotoc_md65", null ],
      [ "5. Confirmed memory leaks — fixed (5)", "md_docs_audits_memory_audit.html#autotoc_md66", [
        [ "C1 (confirmed, LSan-proven): kick path frees the session struct without destroying session-owned buffers", "md_docs_audits_memory_audit.html#autotoc_md67", null ],
        [ "C2 (confirmed): UNCONNECTED_PONG leaked its MOTD twice", "md_docs_audits_memory_audit.html#autotoc_md68", null ],
        [ "C3 (confirmed): chunk-serialize buffer leaked on empty chunks (2 sites)", "md_docs_audits_memory_audit.html#autotoc_md69", null ],
        [ "C4 (confirmed): login rejections used <tt>close()</tt> and left the RakNet session alive", "md_docs_audits_memory_audit.html#autotoc_md70", null ],
        [ "C5 (confirmed): GC swept only the default world", "md_docs_audits_memory_audit.html#autotoc_md71", null ]
      ] ],
      [ "6. Invalid / unsafe memory access — fixed (6)", "md_docs_audits_memory_audit.html#autotoc_md72", [
        [ "A1: split reassembly accepted fragments that change <tt>split_count</tt> mid-message", "md_docs_audits_memory_audit.html#autotoc_md73", null ],
        [ "A2: enqueue's double <tt>realloc</tt> could leave a dangling pointer", "md_docs_audits_memory_audit.html#autotoc_md74", null ],
        [ "A3 (UAF): world unload while generation tasks are in flight", "md_docs_audits_memory_audit.html#autotoc_md75", null ],
        [ "A4 (UAF): effect tick snapshot held raw pointers across callbacks", "md_docs_audits_memory_audit.html#autotoc_md76", null ],
        [ "A5 (dangling): lightning removal task held a raw <tt>World*</tt> across a 20-tick delay", "md_docs_audits_memory_audit.html#autotoc_md77", null ],
        [ "A6: ChunkManager destructor raced with generation workers", "md_docs_audits_memory_audit.html#autotoc_md78", null ]
      ] ],
      [ "7. Undefined behavior — fixed (1 family, 4 sites, 3 files)", "md_docs_audits_memory_audit.html#autotoc_md79", [
        [ "U1: signed integer overflow in generator seed/hash mixing", "md_docs_audits_memory_audit.html#autotoc_md80", null ]
      ] ],
      [ "8. Unbounded / attacker-influenced allocation — hardened (10)", "md_docs_audits_memory_audit.html#autotoc_md81", null ],
      [ "9. Crash / corruption paths — fixed (3)", "md_docs_audits_memory_audit.html#autotoc_md82", [
        [ "P1: exceptions escaping packet <tt>decode()</tt> reached <tt>std::terminate</tt>", "md_docs_audits_memory_audit.html#autotoc_md83", null ],
        [ "P2: <tt>writeBEString</tt> wrapped its u16 length on oversized strings", "md_docs_audits_memory_audit.html#autotoc_md84", null ],
        [ "P3: crash-dump write could deadlock inside the crashing process", "md_docs_audits_memory_audit.html#autotoc_md85", null ]
      ] ],
      [ "10. Concurrency / lifetime / shutdown-order — fixed (5)", "md_docs_audits_memory_audit.html#autotoc_md86", [
        [ "L1: async logger could respawn after destroy", "md_docs_audits_memory_audit.html#autotoc_md87", null ],
        [ "L2: network thread joined at static destruction instead of shutdown", "md_docs_audits_memory_audit.html#autotoc_md88", null ],
        [ "L3: console commands dispatched on the console thread", "md_docs_audits_memory_audit.html#autotoc_md89", null ],
        [ "L4: recovery-slot accounting consumed capacity on failed <tt>malloc</tt>", "md_docs_audits_memory_audit.html#autotoc_md90", null ],
        [ "L5: block break generated chunks for arbitrary coordinates", "md_docs_audits_memory_audit.html#autotoc_md91", null ]
      ] ],
      [ "11. Suspected findings (documented, intentionally not \"fixed\")", "md_docs_audits_memory_audit.html#autotoc_md92", null ],
      [ "12. Residual risks and limitations", "md_docs_audits_memory_audit.html#autotoc_md93", null ]
    ] ],
    [ "CurseStone — Ownership & Lifecycle Map", "md_docs_audits_ownership_map.html", [
      [ "1. Process shape", "md_docs_audits_ownership_map.html#autotoc_md96", null ],
      [ "2. Ownership graph (Mermaid)", "md_docs_audits_ownership_map.html#autotoc_md97", null ],
      [ "3. Object lifecycles and cleanup responsibilities", "md_docs_audits_ownership_map.html#autotoc_md98", [
        [ "3.1 Server and singletons", "md_docs_audits_ownership_map.html#autotoc_md99", null ],
        [ "3.2 Player session (highest-churn lifecycle)", "md_docs_audits_ownership_map.html#autotoc_md100", null ],
        [ "3.3 Chunk lifecycle", "md_docs_audits_ownership_map.html#autotoc_md101", null ],
        [ "3.4 Entities, dropped items, tiles", "md_docs_audits_ownership_map.html#autotoc_md102", null ],
        [ "3.5 Packets (C structs and C++ objects)", "md_docs_audits_ownership_map.html#autotoc_md103", null ],
        [ "3.6 Plugins / Lua", "md_docs_audits_ownership_map.html#autotoc_md104", null ]
      ] ],
      [ "4. Non-owning references inventory (as fixed or verified safe)", "md_docs_audits_ownership_map.html#autotoc_md105", null ],
      [ "5. Dangling-reference risks by design (accepted, documented)", "md_docs_audits_ownership_map.html#autotoc_md106", null ],
      [ "6. Cleanup responsibility matrix", "md_docs_audits_ownership_map.html#autotoc_md107", null ]
    ] ],
    [ "CurseStone — Audit Test Results", "md_docs_audits_test_results.html", [
      [ "1. Environment", "md_docs_audits_test_results.html#autotoc_md110", null ],
      [ "2. Builds", "md_docs_audits_test_results.html#autotoc_md111", null ],
      [ "3. Static analysis", "md_docs_audits_test_results.html#autotoc_md112", null ],
      [ "4. Sanitizer runs (ASan + UBSan + LSan)", "md_docs_audits_test_results.html#autotoc_md113", [
        [ "4.1 Discovery run (first pass, same audit)", "md_docs_audits_test_results.html#autotoc_md114", null ],
        [ "4.2 Final-state leak verification (fresh re-run on the final tree)", "md_docs_audits_test_results.html#autotoc_md115", null ],
        [ "4.3 Red/green experiment proving the harness detects the leak (fix C1)", "md_docs_audits_test_results.html#autotoc_md116", null ]
      ] ],
      [ "5. Malformed-input / lifecycle stress suite", "md_docs_audits_test_results.html#autotoc_md117", [
        [ "Test-development failure recorded honestly", "md_docs_audits_test_results.html#autotoc_md118", null ]
      ] ],
      [ "6. Gameplay regression tests (existing e2e tools)", "md_docs_audits_test_results.html#autotoc_md119", null ],
      [ "7. Repeated-lifecycle stress evidence (summary)", "md_docs_audits_test_results.html#autotoc_md120", null ],
      [ "8. Not executed — with reasons", "md_docs_audits_test_results.html#autotoc_md121", null ],
      [ "9. Reproduction commands", "md_docs_audits_test_results.html#autotoc_md122", null ]
    ] ],
    [ "CurseStone Comment and Documentation Style Guide", "md_docs_STYLE_COMMENTS.html", [
      [ "1. Language", "md_docs_STYLE_COMMENTS.html#autotoc_md124", null ],
      [ "2. What deserves a comment", "md_docs_STYLE_COMMENTS.html#autotoc_md125", null ],
      [ "3. Doxygen conventions", "md_docs_STYLE_COMMENTS.html#autotoc_md126", null ],
      [ "4. What to remove or rewrite", "md_docs_STYLE_COMMENTS.html#autotoc_md127", null ],
      [ "5. Prohibited or restricted changes", "md_docs_STYLE_COMMENTS.html#autotoc_md128", null ],
      [ "6. File headers", "md_docs_STYLE_COMMENTS.html#autotoc_md129", null ],
      [ "7. Tooling workflow (per migration batch)", "md_docs_STYLE_COMMENTS.html#autotoc_md130", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ]
      ] ]
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
"BlockIds_8h.html#afffd59fac8da24da79a88bfd701003d4a62c050f7d54dee355143a86502569749",
"Blocks_8cpp.html#a0b724d63c0851bec43502cdfb955069f",
"Enchantment_8h.html#a3632a18be05a3af061ee9f50f68696dea41a1196a61dfedcfd9e695a47e789e15",
"ItemAxeWooden_8h_source.html",
"ItemConstants_8h.html#aa169a712a1f8c671496b8bfb08bbdc73",
"ItemIds_8h.html#a3e000ec119790a8d8275720ada569223a8271b582cff526ce56c370e0bb6c502a",
"MobSpawnerData_8h.html#a0d1fa2a7493e93cf21337fd3e91dc66ea7d037f8be425e72ef6a68c59d91673ef",
"StartGamePacket_8h_source.html",
"WorldEvent_8h_source.html",
"classcursestone_1_1Player.html#ac3436c16750c2320b17300525247dc7f",
"classcursestone_1_1block_1_1BlockCarrot.html#a235266436a3d462f0ed0da21da9e337c",
"classcursestone_1_1block_1_1BlockMushroomBrown.html#aee89d427fcd86093d1c66fefddb793cc",
"classcursestone_1_1block_1_1BlockWheat.html",
"classcursestone_1_1event_1_1block_1_1BlockUpdateEvent.html",
"classcursestone_1_1event_1_1player_1_1PlayerBedLeaveEvent.html",
"classcursestone_1_1event_1_1world_1_1WeatherEvent.html",
"classcursestone_1_1item_1_1ItemCarrot.html#adc4c2fb8d846e0cefc411a58b42777b6",
"classcursestone_1_1item_1_1ItemSugar.html#a4e37c3e543a62f9b1f4542c25f252905",
"classcursestone_1_1network_1_1protocol_1_1ContainerSetContentPacket.html#a70fc40eb91bb1c84de99aed08b70839c",
"classcursestone_1_1network_1_1protocol_1_1PlayStatusPacket.html#a33fcfa608f3010b8c7b270dee719fb4e",
"classcursestone_1_1scheduler_1_1AsyncTask.html#a11f563f4f681f6c6ba2e8240c5da441f",
"classcursestone_1_1world_1_1SimpleChunkManager.html#a46dbf27d3347f6e40d48f99112d41799",
"classcursestone_1_1world_1_1generator_1_1ImprovedNoise.html#afa2dd24e53a83c01cb3711407ce9fc55",
"classvgen_1_1BiomeDecorator.html#a9f434257a2a189408953fa64472adcb4",
"classvgen_1_1DirtBlock.html#ad513e287b32dc5df6acf02e9848a3270ae8062ebd51dbd8c311bfb758f7ecad8e",
"classvgen_1_1Material.html#a357afccb7f6b96482f38081a1922ee88",
"classvgen_1_1Random.html#ae7f7c7cf617ae840c04fb749946e2f09",
"classvgen_1_1StructureStart.html#aa1ab20e29a369b1e9f922bc0e81cf567",
"md_CONTRIBUTING.html#autotoc_md30",
"structcursestone_1_1network_1_1protocol_1_1CraftingEntry.html#acd405c1120764ea343f579843a0beac6",
"structmcp__compound__tag.html",
"structmcp__pkt__ping.html",
"structvgen_1_1BlockPos.html#a8452e3a21d15980587aab2c7311f4a38"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';