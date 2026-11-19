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
      [ "Documentation", "index.html#autotoc_md7", null ],
      [ "Contributing", "index.html#autotoc_md8", null ],
      [ "License", "index.html#autotoc_md9", null ]
    ] ],
    [ "Contributing to CurseStone", "md_CONTRIBUTING.html", [
      [ "1. Ways to contribute", "md_CONTRIBUTING.html#autotoc_md13", null ],
      [ "2. Setting up", "md_CONTRIBUTING.html#autotoc_md15", null ],
      [ "3. Architecture at a glance", "md_CONTRIBUTING.html#autotoc_md17", null ],
      [ "4. Naming and style", "md_CONTRIBUTING.html#autotoc_md19", [
        [ "Items and blocks", "md_CONTRIBUTING.html#autotoc_md20", null ],
        [ "General", "md_CONTRIBUTING.html#autotoc_md21", null ],
        [ "Comments and documentation", "md_CONTRIBUTING.html#autotoc_md22", null ]
      ] ],
      [ "5. Protocol 84 notes", "md_CONTRIBUTING.html#autotoc_md24", null ],
      [ "6. Where things go", "md_CONTRIBUTING.html#autotoc_md26", null ],
      [ "7. Testing your change", "md_CONTRIBUTING.html#autotoc_md28", null ],
      [ "8. Commits and pull requests", "md_CONTRIBUTING.html#autotoc_md30", null ],
      [ "9. Reporting bugs", "md_CONTRIBUTING.html#autotoc_md32", null ],
      [ "10. Plugins", "md_CONTRIBUTING.html#autotoc_md34", null ],
      [ "11. License", "md_CONTRIBUTING.html#autotoc_md36", null ]
    ] ],
    [ "Cómo compilar CurseStone", "md_docs_BUILDING.html", [
      [ "Opción 1 — GitHub Actions (recomendado)", "md_docs_BUILDING.html#autotoc_md38", null ],
      [ "Opción 1.5 — Release personalizado (versión y descripción custom)", "md_docs_BUILDING.html#autotoc_md40", null ],
      [ "</blockquote>", "md_docs_BUILDING.html#autotoc_md41", null ],
      [ "Opción 2 — Linux x86_64 (VPS / PC)", "md_docs_BUILDING.html#autotoc_md42", null ],
      [ "Opción 3 — Android ARM64 desde Termux (en tu celular)", "md_docs_BUILDING.html#autotoc_md44", null ],
      [ "</blockquote>", "md_docs_BUILDING.html#autotoc_md45", null ],
      [ "Opción 4 — Windows x86_64 (MSVC)", "md_docs_BUILDING.html#autotoc_md46", null ],
      [ "Opción 5 — Cross-compile ARM64 desde Linux (con NDK)", "md_docs_BUILDING.html#autotoc_md48", null ],
      [ "Variables CMake útiles", "md_docs_BUILDING.html#autotoc_md50", null ]
    ] ],
    [ "CURSESTONE — AUDITORÍA ARQUITECTÓNICA COMPLETA (C++ NATIVO)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html", [
      [ "1. RESUMEN EJECUTIVO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md53", null ],
      [ "2. MAPA DE ARQUITECTURA DEL REPOSITORIO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md55", [
        [ "2.1 Distribución del código", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md56", null ],
        [ "2.2 Hilos (inventario completo, verificado por sitios de creación)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md57", null ],
        [ "2.3 Singletons / estado global", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md58", null ],
        [ "2.4 Flujo de un tick (orden real, <tt>Server::tick()</tt> <tt>Server.cpp:508-674</tt>)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md59", null ],
        [ "2.5 Grafo de propiedad (resumen; detalle completo en <tt>docs/audits/ownership-map.md</tt>, que sigue siendo esencialmente válido)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md60", null ]
      ] ],
      [ "3. ANÁLISIS DE LA HERENCIA ARQUITECTÓNICA DE LA REFERENCIA DE LA ERA", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md62", [
        [ "3.1 H1 — Objeto heap + <tt>dynamic_cast</tt> por paquete entrante", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md63", null ],
        [ "3.2 H2 — Sistema de eventos con coste por disparo heredado del bus de the reference", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md64", null ],
        [ "3.3 H3 — <tt>playersSnapshot()</tt>: copia de la lista de jugadores por difusión", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md65", null ],
        [ "3.4 H4 — Virtualización FullChunk/WorldProvider que nadie más usa", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md66", null ],
        [ "3.5 H5 — Scheduler genérico de the reference usado como cola de ticks de bloque", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md67", null ],
        [ "3.6 H6 — <tt>Player</tt> god-class: 84 miembros, 3 bases, 3 mutex, split puramente organizativo", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md68", null ],
        [ "3.7 H7 — Dos registros de sesión paralelos (herencia + migración a medias)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md69", null ],
        [ "3.8 Herencia evaluada y <strong>correcta</strong> (no tocar)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md70", null ],
        [ "3.9 Ausencias heredadas (huecos funcionales que the reference sí tiene)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md71", null ]
      ] ],
      [ "4. EVALUACIÓN DEL APROVECHAMIENTO DE C++", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md73", [
        [ "4.1 Gestión de memoria", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md74", null ],
        [ "4.2 Estructuras de datos", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md75", null ],
        [ "4.3 Diseño orientado a datos", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md76", null ],
        [ "4.4 Templates y cómputo en compilación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md77", null ],
        [ "4.5 NBT: el caso de estudio del \"a medio camino\"", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md78", null ]
      ] ],
      [ "5. ANÁLISIS DE MEMORIA", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md80", null ],
      [ "6. ANÁLISIS DE ESTRUCTURAS DE DATOS", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md82", null ],
      [ "7. ANÁLISIS DE RENDIMIENTO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md84", [
        [ "7.1 Ruta interactiva (bloque colocado/roto)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md85", null ],
        [ "7.2 Ruta de red", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md86", null ],
        [ "7.3 Ruta de guardado/mundo", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md87", null ],
        [ "7.4 Ruta de entidades/juego", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md88", null ]
      ] ],
      [ "8. ARQUITECTURA MULTIHILO Y CONCURRENCIA", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md90", null ],
      [ "9. AUDITORÍA DE NETWORKING", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md92", [
        [ "9.1 Hilos y puentes", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md93", null ],
        [ "9.2 Ruta de recepción (con conteo de copias)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md94", null ],
        [ "9.3 Ruta de envío", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md95", null ],
        [ "9.4 Fiabilidad raklib (post-migración)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md96", null ],
        [ "9.5 Capa de protocolo MCPE", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md97", null ],
        [ "9.6 Inmutable por compatibilidad protocolo 84 (no tocar)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md98", null ],
        [ "9.7 RCON y Query", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md99", null ]
      ] ],
      [ "10. AUDITORÍA DEL MOTOR DE MUNDO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md101", [
        [ "10.1 Representación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md102", null ],
        [ "10.2 Acceso y mutación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md103", null ],
        [ "10.3 Iluminación (doble motor)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md104", null ],
        [ "10.4 Generación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md105", null ],
        [ "10.5 Almacenamiento", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md106", null ],
        [ "10.6 Tiles y entidades", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md107", null ]
      ] ],
      [ "11. AUDITORÍA DE EVENTOS, PLUGINS Y COMANDOS", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md109", [
        [ "11.1 Eventos", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md110", null ],
        [ "11.2 Plugins Lua", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md111", null ],
        [ "11.3 Comandos y permisos", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md112", null ],
        [ "11.4 ¿La API obliga a estructuras ineficientes al motor?", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md113", null ]
      ] ],
      [ "12. SEGURIDAD Y ESTABILIDAD", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md115", [
        [ "12.1 🔴 CRÍTICA [confirmado] — Use-after-free en el índice de sesiones tras kick", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md116", null ],
        [ "12.2 🟠 [confirmado] — Bug de corrección: daño ambiental en el mundo equivocado", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md117", null ],
        [ "12.3 🟠 [confirmado] — Anti-flood declarado y nunca aplicado", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md118", null ],
        [ "12.4 Endurecimiento verificado en su sitio (positivo)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md119", null ],
        [ "12.5 Superficie C restante (riesgo de clase, no hallazgo puntual)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md120", null ],
        [ "12.6 Otros riesgos menores", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md121", null ]
      ] ],
      [ "13. COMPILACIÓN Y OPTIMIZACIÓN DEL BINARIO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md123", [
        [ "13.1 Configuración actual (verificada en <tt>CMakeLists.txt</tt> y cache de build)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md124", null ],
        [ "13.2 Evaluación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md125", null ]
      ] ],
      [ "14. PROPUESTAS DE REDISEÑO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md127", [
        [ "R1 — Handle de chunk / <tt>ChunkView</tt> para rutas calientes", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md128", null ],
        [ "R2 — Luz incremental (light removal/addition queue)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md129", null ],
        [ "R3 — Presupuesto de E/S fuera del mutex de chunks", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md130", null ],
        [ "R4 — Anti-churn de red (pools de buffers + writer con reserve + move)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md131", null ],
        [ "R5 — Índice espacial de viewers y entidades por chunk", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md132", null ],
        [ "R6 — Cola dedicada de ticks de bloque (liquids) por mundo", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md133", null ],
        [ "R7 — Consolidación raklib: RAII real y un solo registro de sesiones", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md134", null ],
        [ "R8 — Quitar o cablear los scaffolds muertos (higiene)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md135", null ]
      ] ],
      [ "15. LISTADO PRIORIZADO DE MEJORAS", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md137", null ],
      [ "16. HOJA DE RUTA DE EVOLUCIÓN", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md139", null ],
      [ "17. EVALUACIÓN FINAL", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md141", [
        [ "17.1 Respuestas explícitas a las preguntas del encargo", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md142", null ],
        [ "17.2 Diagnóstico honesto final", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md143", null ]
      ] ]
    ] ],
    [ "Crash Diagnostics — client-side crash forensics", "md_docs_CRASH_DIAGNOSTICS.html", [
      [ "Problem", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md146", null ],
      [ "Design — three layers", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md147", [
        [ "[1] <tt>network/protocol/PacketSanitizer</tt> — the bad-byte firewall", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md148", null ],
        [ "[2] <tt>diagnostics/PacketForensics</tt> — per-player wire recorder", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md149", null ],
        [ "[3] Client-lost classification in <tt>Player::close()</tt>", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md150", null ]
      ] ],
      [ "How to read a <tt>client-lost</tt> dump", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md151", null ],
      [ "Performance budget", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md152", null ],
      [ "Extension points", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md153", null ],
      [ "Verification", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md154", null ]
    ] ],
    [ "Mob AI architecture", "md_docs_MOB_AI.html", [
      [ "1. Starting point (facts about the current tree)", "md_docs_MOB_AI.html#autotoc_md156", null ],
      [ "2. Design goals and constraints", "md_docs_MOB_AI.html#autotoc_md157", null ],
      [ "3. Components", "md_docs_MOB_AI.html#autotoc_md158", [
        [ "Goal", "md_docs_MOB_AI.html#autotoc_md159", null ],
        [ "MobBrain", "md_docs_MOB_AI.html#autotoc_md160", null ],
        [ "MobContext", "md_docs_MOB_AI.html#autotoc_md161", null ],
        [ "MobAIManager", "md_docs_MOB_AI.html#autotoc_md162", null ]
      ] ],
      [ "4. Cadences and budgets", "md_docs_MOB_AI.html#autotoc_md163", null ],
      [ "5. Activation gate", "md_docs_MOB_AI.html#autotoc_md164", null ],
      [ "6. Threading contract (now and later)", "md_docs_MOB_AI.html#autotoc_md165", null ],
      [ "7. Compatibility contract", "md_docs_MOB_AI.html#autotoc_md166", null ],
      [ "8. Stage roadmap", "md_docs_MOB_AI.html#autotoc_md167", null ],
      [ "9. Implementation status", "md_docs_MOB_AI.html#autotoc_md168", null ]
    ] ],
    [ "CurseStone Plugin API", "md_docs_PLUGINS.html", [
      [ "Folder plugins (Lua)", "md_docs_PLUGINS.html#autotoc_md170", [
        [ "Particles", "md_docs_PLUGINS.html#autotoc_md171", [
          [ "Tag types (all ride the same one-carrier model)", "md_docs_PLUGINS.html#autotoc_md172", null ],
          [ "Why this cannot hurt the FPS", "md_docs_PLUGINS.html#autotoc_md173", null ]
        ] ],
        [ "Entities (standing mobs)", "md_docs_PLUGINS.html#autotoc_md174", null ]
      ] ],
      [ "File plugins (C++ via .so / .dll)", "md_docs_PLUGINS.html#autotoc_md175", [
        [ "Structure", "md_docs_PLUGINS.html#autotoc_md176", null ],
        [ "Minimal complete plugin", "md_docs_PLUGINS.html#autotoc_md177", null ],
        [ "Building", "md_docs_PLUGINS.html#autotoc_md178", null ],
        [ "Data folder", "md_docs_PLUGINS.html#autotoc_md179", null ],
        [ "Rules and guarantees", "md_docs_PLUGINS.html#autotoc_md180", null ],
        [ "API reference (native)", "md_docs_PLUGINS.html#autotoc_md181", null ],
        [ "Versioning", "md_docs_PLUGINS.html#autotoc_md182", null ]
      ] ],
      [ "Commands", "md_docs_PLUGINS.html#autotoc_md183", null ],
      [ "Reference implementation", "md_docs_PLUGINS.html#autotoc_md184", null ]
    ] ],
    [ "CurseStone Comment and Documentation Style Guide", "md_docs_STYLE_COMMENTS.html", [
      [ "1. Language", "md_docs_STYLE_COMMENTS.html#autotoc_md193", null ],
      [ "2. What deserves a comment", "md_docs_STYLE_COMMENTS.html#autotoc_md194", null ],
      [ "3. Doxygen conventions", "md_docs_STYLE_COMMENTS.html#autotoc_md195", null ],
      [ "4. What to remove or rewrite", "md_docs_STYLE_COMMENTS.html#autotoc_md196", null ],
      [ "5. Prohibited or restricted changes", "md_docs_STYLE_COMMENTS.html#autotoc_md197", null ],
      [ "6. File headers", "md_docs_STYLE_COMMENTS.html#autotoc_md198", null ],
      [ "7. Tooling workflow", "md_docs_STYLE_COMMENTS.html#autotoc_md199", null ]
    ] ],
    [ "Threading notes: what the historical thread moves mean for CurseStone", "md_docs_THREADING.html", [
      [ "1. CurseStone threading snapshot (current tree)", "md_docs_THREADING.html#autotoc_md201", null ],
      [ "2. The historical thread moves and their outcomes", "md_docs_THREADING.html#autotoc_md202", null ],
      [ "3. Lessons, applied to CurseStone", "md_docs_THREADING.html#autotoc_md203", [
        [ "Lesson 1 — thread I/O, not game state", "md_docs_THREADING.html#autotoc_md204", null ],
        [ "Lesson 2 — extract the storage boundary BEFORE threading the provider", "md_docs_THREADING.html#autotoc_md205", null ],
        [ "Lesson 3 — budget small stateful work instead of threading it", "md_docs_THREADING.html#autotoc_md206", null ],
        [ "Lesson 4 — entity ticking needs a budget and a radius the day AI lands", "md_docs_THREADING.html#autotoc_md207", null ],
        [ "Lesson 5 — name your threads", "md_docs_THREADING.html#autotoc_md208", null ]
      ] ],
      [ "4. What is still worth adopting (ranked)", "md_docs_THREADING.html#autotoc_md209", null ],
      [ "5. What NOT to adopt", "md_docs_THREADING.html#autotoc_md210", null ],
      [ "6. Status against the historical kept list", "md_docs_THREADING.html#autotoc_md211", null ],
      [ "7. Implementation status (named threads + async chunk encode)", "md_docs_THREADING.html#autotoc_md212", [
        [ "Named threads", "md_docs_THREADING.html#autotoc_md213", null ],
        [ "Async chunk encode", "md_docs_THREADING.html#autotoc_md214", null ],
        [ "Measurements", "md_docs_THREADING.html#autotoc_md215", null ],
        [ "Simultaneous joins: the \"single-streamer\" observation, root-caused", "md_docs_THREADING.html#autotoc_md216", null ],
        [ "Multi-player concurrency verification (server unchanged)", "md_docs_THREADING.html#autotoc_md217", null ]
      ] ],
      [ "8. Mob AI (added after the join-storm study)", "md_docs_THREADING.html#autotoc_md218", null ]
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
        [ "All", "functions.html", "functions_dup" ],
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
"BlockIds_8h.html#afffd59fac8da24da79a88bfd701003d4aa303f9c8c5cfeb537e1dfa4f6de73ee5",
"CallbackTask_8h_source.html",
"Goal_8h.html#a55b655a5d2fe4c027c52bbfc827d310aa3fff5336c7c00e40d2bd48afdb3dc922",
"ItemConstants_8h.html#a541a5f4c52f4378040363170dfa74ceb",
"ItemConstants_8h.html#aea7934159afe2ea25e81101bb454b7f3",
"ItemWheatSeeds_8h_source.html",
"PathSafe_8h_source.html",
"Tag_8h.html#aae09dea55e2a658d1f2c8055183d2bada9ae48843818e3d413822c1e7507fa5e7",
"classcursestone_1_1IPlayer.html#a57b684c992c8d9575001fb4cae49f0fc",
"classcursestone_1_1Server.html#a1aab2754b141f53c8e05459967a83fcc",
"classcursestone_1_1block_1_1BlockNetherrack.html",
"classcursestone_1_1entity_1_1ai_1_1MobBrain.html#a951f9157694e79dfbdd88603663cb55d",
"classcursestone_1_1inventory_1_1BaseInventory.html#ac57c3a6ab02f5ce7527caecce2527a82",
"classcursestone_1_1item_1_1ItemDiamondChestplate.html",
"classcursestone_1_1item_1_1ItemWheatSeeds.html#a199f45e78eb65929089a3069ab5112a7",
"classcursestone_1_1network_1_1protocol_1_1ChangeDimensionPacket.html#a197698f6c80c431d100cf54580359f3d",
"classcursestone_1_1network_1_1protocol_1_1PacketWriter.html#a38bb9ca092755693b14ccc8f69f9e3bb",
"classcursestone_1_1plugin_1_1NativePlugin.html#a20afb499be427f50ac4b2c605def3b8d",
"classcursestone_1_1world_1_1Location.html#a0e43bb2fdfe93aa556cd130905e868a2",
"classcursestone_1_1world_1_1format_1_1leveldb_1_1LevelDB.html#a1cab923fbb1199f5d13a49132626fcce",
"classvgen_1_1AddEdgeLayer.html#a3256a2486b50236ec9b844fe10bfaa10",
"classvgen_1_1BlockSource.html#a02e3be642f7ab1fef71bbedf8c1dc42e",
"classvgen_1_1FixedBiomeSource.html#a63928976b0289315df3aeb39e5a0f0dc",
"classvgen_1_1MesaBiome.html#a6597e8ebf7e7c83d114ced4113b5484c",
"classvgen_1_1PerlinNoise.html#a1401a31c8b7bc63533e981c6d1326cd1",
"classvgen_1_1StraightRoad.html#ad83d75125eacc57de25945c1754d2919",
"dir_643474ab3c5c7b996cb15120629b455b.html",
"namespacecursestone.html#ad95da57fc03b5aca9e60e25013fd7223",
"structcursestone_1_1TickSample.html#a07191825b7112159653490c07b43e190",
"structcursestone_1_1utils_1_1Config_1_1Node.html",
"structmcp__logger.html#aa7674bc32d9b510b6bfb19d71a7ae8af",
"structvgen_1_1ChunkBlockPos.html#a8615e6a63ffadc1fd06844fb9c70fba6"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';