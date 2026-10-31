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
    [ "CurseStone", "index.html#autotoc_md0", [
      [ "About", "index.html#autotoc_md2", null ],
      [ "Built for its era", "index.html#autotoc_md3", null ],
      [ "What it offers", "index.html#autotoc_md4", null ],
      [ "Technology", "index.html#autotoc_md5", null ],
      [ "Project Status", "index.html#autotoc_md6", null ],
      [ "Links", "index.html#autotoc_md7", null ],
      [ "Get Involved", "index.html#autotoc_md8", null ],
      [ "License", "index.html#autotoc_md9", null ]
    ] ],
    [ "Contributing to CurseStone", "md_CONTRIBUTING.html", [
      [ "1. Ways to contribute", "md_CONTRIBUTING.html#autotoc_md13", null ],
      [ "2. Setting up", "md_CONTRIBUTING.html#autotoc_md15", null ],
      [ "3. Architecture rules: the C / C++ split", "md_CONTRIBUTING.html#autotoc_md17", [
        [ "Rule 1: C files never depend on C++", "md_CONTRIBUTING.html#autotoc_md18", null ],
        [ "Rule 2: C headers are C++-safe, so C++ includes them directly", "md_CONTRIBUTING.html#autotoc_md19", null ],
        [ "Rule 3: never inherit from a C struct", "md_CONTRIBUTING.html#autotoc_md20", null ],
        [ "C++ wrappers for C headers", "md_CONTRIBUTING.html#autotoc_md21", null ]
      ] ],
      [ "4. Naming and style", "md_CONTRIBUTING.html#autotoc_md23", [
        [ "Items and blocks", "md_CONTRIBUTING.html#autotoc_md24", null ],
        [ "General", "md_CONTRIBUTING.html#autotoc_md25", null ],
        [ "Comments and documentation", "md_CONTRIBUTING.html#autotoc_md26", null ]
      ] ],
      [ "5. Protocol 84 notes", "md_CONTRIBUTING.html#autotoc_md28", null ],
      [ "6. Where things go", "md_CONTRIBUTING.html#autotoc_md30", null ],
      [ "7. Testing your change", "md_CONTRIBUTING.html#autotoc_md32", null ],
      [ "8. Commits and pull requests", "md_CONTRIBUTING.html#autotoc_md34", null ],
      [ "9. Reporting bugs", "md_CONTRIBUTING.html#autotoc_md36", null ],
      [ "10. Plugins", "md_CONTRIBUTING.html#autotoc_md38", null ],
      [ "11. License", "md_CONTRIBUTING.html#autotoc_md40", null ]
    ] ],
    [ "Cómo compilar CurseStone", "md_BUILDING.html", [
      [ "Opción 1 — GitHub Actions (recomendado)", "md_BUILDING.html#autotoc_md42", null ],
      [ "Opción 1.5 — Release personalizado (versión y descripción custom)", "md_BUILDING.html#autotoc_md44", null ],
      [ "</blockquote>", "md_BUILDING.html#autotoc_md45", null ],
      [ "Opción 2 — Linux x86_64 (VPS / PC)", "md_BUILDING.html#autotoc_md46", null ],
      [ "Opción 3 — Android ARM64 desde Termux (en tu celular)", "md_BUILDING.html#autotoc_md48", null ],
      [ "</blockquote>", "md_BUILDING.html#autotoc_md49", null ],
      [ "Opción 4 — Cross-compile ARM64 desde Linux (con NDK)", "md_BUILDING.html#autotoc_md50", null ],
      [ "Variables CMake útiles", "md_BUILDING.html#autotoc_md52", null ]
    ] ],
    [ "¿Migrar el core C a C++? — Evaluación ejecutiva", "md_docs_audits_c_to_cpp_assessment.html", [
      [ "1. Veredicto ejecutivo", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md55", null ],
      [ "2. Estado actual del C propio", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md57", null ],
      [ "3. Riesgos con evidencia (auditoría de memoria, commit <tt>2afbc53</tt>)", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md59", null ],
      [ "4. Comparativa esfuerzo vs beneficio", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md61", null ],
      [ "5. Ruta de migración recomendada", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md63", null ],
      [ "6. Lo que la migración NO compra", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md65", null ],
      [ "7. Conclusión", "md_docs_audits_c_to_cpp_assessment.html#autotoc_md67", null ]
    ] ],
    [ "CurseStone — Deep Memory Audit Report", "md_docs_audits_memory_audit.html", [
      [ "1. Scope", "md_docs_audits_memory_audit.html#autotoc_md70", null ],
      [ "2. Architecture as found (summary)", "md_docs_audits_memory_audit.html#autotoc_md71", null ],
      [ "3. Tooling and constraints", "md_docs_audits_memory_audit.html#autotoc_md72", null ],
      [ "4. Memory-management model as found", "md_docs_audits_memory_audit.html#autotoc_md73", null ],
      [ "5. Confirmed memory leaks — fixed (5)", "md_docs_audits_memory_audit.html#autotoc_md74", [
        [ "C1 (confirmed, LSan-proven): kick path frees the session struct without destroying session-owned buffers", "md_docs_audits_memory_audit.html#autotoc_md75", null ],
        [ "C2 (confirmed): UNCONNECTED_PONG leaked its MOTD twice", "md_docs_audits_memory_audit.html#autotoc_md76", null ],
        [ "C3 (confirmed): chunk-serialize buffer leaked on empty chunks (2 sites)", "md_docs_audits_memory_audit.html#autotoc_md77", null ],
        [ "C4 (confirmed): login rejections used <tt>close()</tt> and left the RakNet session alive", "md_docs_audits_memory_audit.html#autotoc_md78", null ],
        [ "C5 (confirmed): GC swept only the default world", "md_docs_audits_memory_audit.html#autotoc_md79", null ]
      ] ],
      [ "6. Invalid / unsafe memory access — fixed (6)", "md_docs_audits_memory_audit.html#autotoc_md80", [
        [ "A1: split reassembly accepted fragments that change <tt>split_count</tt> mid-message", "md_docs_audits_memory_audit.html#autotoc_md81", null ],
        [ "A2: enqueue's double <tt>realloc</tt> could leave a dangling pointer", "md_docs_audits_memory_audit.html#autotoc_md82", null ],
        [ "A3 (UAF): world unload while generation tasks are in flight", "md_docs_audits_memory_audit.html#autotoc_md83", null ],
        [ "A4 (UAF): effect tick snapshot held raw pointers across callbacks", "md_docs_audits_memory_audit.html#autotoc_md84", null ],
        [ "A5 (dangling): lightning removal task held a raw <tt>World*</tt> across a 20-tick delay", "md_docs_audits_memory_audit.html#autotoc_md85", null ],
        [ "A6: ChunkManager destructor raced with generation workers", "md_docs_audits_memory_audit.html#autotoc_md86", null ]
      ] ],
      [ "7. Undefined behavior — fixed (1 family, 4 sites, 3 files)", "md_docs_audits_memory_audit.html#autotoc_md87", [
        [ "U1: signed integer overflow in generator seed/hash mixing", "md_docs_audits_memory_audit.html#autotoc_md88", null ]
      ] ],
      [ "8. Unbounded / attacker-influenced allocation — hardened (10)", "md_docs_audits_memory_audit.html#autotoc_md89", null ],
      [ "9. Crash / corruption paths — fixed (3)", "md_docs_audits_memory_audit.html#autotoc_md90", [
        [ "P1: exceptions escaping packet <tt>decode()</tt> reached <tt>std::terminate</tt>", "md_docs_audits_memory_audit.html#autotoc_md91", null ],
        [ "P2: <tt>writeBEString</tt> wrapped its u16 length on oversized strings", "md_docs_audits_memory_audit.html#autotoc_md92", null ],
        [ "P3: crash-dump write could deadlock inside the crashing process", "md_docs_audits_memory_audit.html#autotoc_md93", null ]
      ] ],
      [ "10. Concurrency / lifetime / shutdown-order — fixed (5)", "md_docs_audits_memory_audit.html#autotoc_md94", [
        [ "L1: async logger could respawn after destroy", "md_docs_audits_memory_audit.html#autotoc_md95", null ],
        [ "L2: network thread joined at static destruction instead of shutdown", "md_docs_audits_memory_audit.html#autotoc_md96", null ],
        [ "L3: console commands dispatched on the console thread", "md_docs_audits_memory_audit.html#autotoc_md97", null ],
        [ "L4: recovery-slot accounting consumed capacity on failed <tt>malloc</tt>", "md_docs_audits_memory_audit.html#autotoc_md98", null ],
        [ "L5: block break generated chunks for arbitrary coordinates", "md_docs_audits_memory_audit.html#autotoc_md99", null ]
      ] ],
      [ "11. Suspected findings (documented, intentionally not \"fixed\")", "md_docs_audits_memory_audit.html#autotoc_md100", null ],
      [ "12. Residual risks and limitations", "md_docs_audits_memory_audit.html#autotoc_md101", null ]
    ] ],
    [ "CurseStone — Ownership & Lifecycle Map", "md_docs_audits_ownership_map.html", [
      [ "1. Process shape", "md_docs_audits_ownership_map.html#autotoc_md104", null ],
      [ "2. Ownership graph (Mermaid)", "md_docs_audits_ownership_map.html#autotoc_md105", null ],
      [ "3. Object lifecycles and cleanup responsibilities", "md_docs_audits_ownership_map.html#autotoc_md106", [
        [ "3.1 Server and singletons", "md_docs_audits_ownership_map.html#autotoc_md107", null ],
        [ "3.2 Player session (highest-churn lifecycle)", "md_docs_audits_ownership_map.html#autotoc_md108", null ],
        [ "3.3 Chunk lifecycle", "md_docs_audits_ownership_map.html#autotoc_md109", null ],
        [ "3.4 Entities, dropped items, tiles", "md_docs_audits_ownership_map.html#autotoc_md110", null ],
        [ "3.5 Packets (C structs and C++ objects)", "md_docs_audits_ownership_map.html#autotoc_md111", null ],
        [ "3.6 Plugins / Lua", "md_docs_audits_ownership_map.html#autotoc_md112", null ]
      ] ],
      [ "4. Non-owning references inventory (as fixed or verified safe)", "md_docs_audits_ownership_map.html#autotoc_md113", null ],
      [ "5. Dangling-reference risks by design (accepted, documented)", "md_docs_audits_ownership_map.html#autotoc_md114", null ],
      [ "6. Cleanup responsibility matrix", "md_docs_audits_ownership_map.html#autotoc_md115", null ]
    ] ],
    [ "CurseStone — Audit Test Results", "md_docs_audits_test_results.html", [
      [ "1. Environment", "md_docs_audits_test_results.html#autotoc_md118", null ],
      [ "2. Builds", "md_docs_audits_test_results.html#autotoc_md119", null ],
      [ "3. Static analysis", "md_docs_audits_test_results.html#autotoc_md120", null ],
      [ "4. Sanitizer runs (ASan + UBSan + LSan)", "md_docs_audits_test_results.html#autotoc_md121", [
        [ "4.1 Discovery run (first pass, same audit)", "md_docs_audits_test_results.html#autotoc_md122", null ],
        [ "4.2 Final-state leak verification (fresh re-run on the final tree)", "md_docs_audits_test_results.html#autotoc_md123", null ],
        [ "4.3 Red/green experiment proving the harness detects the leak (fix C1)", "md_docs_audits_test_results.html#autotoc_md124", null ]
      ] ],
      [ "5. Malformed-input / lifecycle stress suite", "md_docs_audits_test_results.html#autotoc_md125", [
        [ "Test-development failure recorded honestly", "md_docs_audits_test_results.html#autotoc_md126", null ]
      ] ],
      [ "6. Gameplay regression tests (existing e2e tools)", "md_docs_audits_test_results.html#autotoc_md127", null ],
      [ "7. Repeated-lifecycle stress evidence (summary)", "md_docs_audits_test_results.html#autotoc_md128", null ],
      [ "8. Not executed — with reasons", "md_docs_audits_test_results.html#autotoc_md129", null ],
      [ "9. Reproduction commands", "md_docs_audits_test_results.html#autotoc_md130", null ]
    ] ],
    [ "CurseStone Comment and Documentation Style Guide", "md_docs_STYLE_COMMENTS.html", [
      [ "1. Language", "md_docs_STYLE_COMMENTS.html#autotoc_md132", null ],
      [ "2. What deserves a comment", "md_docs_STYLE_COMMENTS.html#autotoc_md133", null ],
      [ "3. Doxygen conventions", "md_docs_STYLE_COMMENTS.html#autotoc_md134", null ],
      [ "4. What to remove or rewrite", "md_docs_STYLE_COMMENTS.html#autotoc_md135", null ],
      [ "5. Prohibited or restricted changes", "md_docs_STYLE_COMMENTS.html#autotoc_md136", null ],
      [ "6. File headers", "md_docs_STYLE_COMMENTS.html#autotoc_md137", null ],
      [ "7. Tooling workflow (per migration batch)", "md_docs_STYLE_COMMENTS.html#autotoc_md138", null ]
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
"ACK_8h_source.html",
"BlockIds_8h.html#afffd59fac8da24da79a88bfd701003d4a95cdad9db323dd7aeb0a0ab9931889a8",
"Blocks_8cpp.html#a60d867b0f1da27c9e2c5222723312095",
"EntityDamageEvent_8h.html#a8d24cddd45c24516815ae09edb2678bcaa620a361e9c7602698b91e34b416c08b",
"ItemConstants_8h.html#a16a5c9846e33c6a7dd7595cb6d3dca8e",
"ItemConstants_8h.html#ab7f5ad4b41a5d8d33b048a43e307240b",
"ItemIds_8h.html#a3e000ec119790a8d8275720ada569223aee3acbb117b5a4f6b60e700fbab4c07a",
"PONG__DataPacket_8h_source.html",
"StructurePieceType_8h.html#a0c806526a04a9ba3ed0e9e08c666cc04a7b4477a1f87d312bb1bbaf6d7f0dcd7e",
"classcursestone_1_1CommandMap.html#adc413a8821cc5bc948cdfce58de7246f",
"classcursestone_1_1Player.html#af766dc06d3c71cf726055fabda67d38d",
"classcursestone_1_1block_1_1BlockDeadBush.html",
"classcursestone_1_1block_1_1BlockPlanks.html#a92b2defb1afd7c3b49b2c405323e98cf",
"classcursestone_1_1entity_1_1Attribute.html#a31b3cb2eaf43bad2a3f5e6f171e3f1c9",
"classcursestone_1_1event_1_1entity_1_1EntityBlockChangeEvent.html#a6718548dbccc1008ca74e0bd42bbf569",
"classcursestone_1_1event_1_1player_1_1PlayerCreationEvent.html#ac1d91464a558cc938560e332751a3908",
"classcursestone_1_1inventory_1_1BaseInventory.html#a6d4915d3be2fcda5c893cf3cb12a4fa8",
"classcursestone_1_1item_1_1ItemCookedPorkchop.html",
"classcursestone_1_1item_1_1ItemSwordStone.html#ad43019a42b53f3bfe747351fb4f4b797",
"classcursestone_1_1network_1_1protocol_1_1ContainerSetSlotPacket.html#a767d1192301cd8d6f3d2ee9035f68b96",
"classcursestone_1_1network_1_1protocol_1_1PlayerInputPacket.html#abd0808fe0ddf0b3ff0976ba84999593d",
"classcursestone_1_1scheduler_1_1FileWriteTask.html#abe6f550d7f9d5a8b101b1af6dcdd12eb",
"classcursestone_1_1world_1_1World.html#a08a701317220d034393ae481345a6ee2",
"classcursestone_1_1world_1_1generator_1_1MersenneRandom.html#a3cb90ff0e11e9751d4e42ae2457e76d7",
"classvgen_1_1BiomeDecorator.html#aa7815344d57b82137a5fad640820df68",
"classvgen_1_1DoubleFarmland.html#a981c1892b88184e97258a608c6894ef3",
"classvgen_1_1Material.html#a58ddafa680670b37b62b9746a3104de0",
"classvgen_1_1RandomScatteredLargeFeature.html#a77313f079d5f83f619306b82093fecc1",
"classvgen_1_1StructureStart.html#afb50aaeca4b2e06d82e9c8d741bf6379",
"md_CONTRIBUTING.html#autotoc_md34",
"structcursestone_1_1network_1_1protocol_1_1CraftingEntry.html#acf6a3798d84238b9452d03dc0f78d36a",
"structmcp__compound__tag.html#a2ae505ba63f484d242722c9ff03908c5",
"structmcp__pkt__ping.html#ab681b315b67a7a556cb5b9a609ca0bb5",
"structvgen_1_1BlockPos.html#a8fd54cb0183a49e7590489cf245d51c1"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';