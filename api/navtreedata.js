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
    [ "CurseStone Plugin API", "md_docs_PLUGINS.html", [
      [ "Folder plugins (Lua)", "md_docs_PLUGINS.html#autotoc_md146", [
        [ "Particles", "md_docs_PLUGINS.html#autotoc_md147", null ]
      ] ],
      [ "File plugins (C++ via .so / .dll)", "md_docs_PLUGINS.html#autotoc_md148", [
        [ "Structure", "md_docs_PLUGINS.html#autotoc_md149", null ],
        [ "Minimal complete plugin", "md_docs_PLUGINS.html#autotoc_md150", null ],
        [ "Building", "md_docs_PLUGINS.html#autotoc_md151", null ],
        [ "Data folder", "md_docs_PLUGINS.html#autotoc_md152", null ],
        [ "Rules and guarantees", "md_docs_PLUGINS.html#autotoc_md153", null ],
        [ "API reference (native)", "md_docs_PLUGINS.html#autotoc_md154", null ],
        [ "Versioning", "md_docs_PLUGINS.html#autotoc_md155", null ]
      ] ],
      [ "Commands", "md_docs_PLUGINS.html#autotoc_md156", null ],
      [ "Reference implementation", "md_docs_PLUGINS.html#autotoc_md157", null ]
    ] ],
    [ "CurseStone Comment and Documentation Style Guide", "md_docs_STYLE_COMMENTS.html", [
      [ "1. Language", "md_docs_STYLE_COMMENTS.html#autotoc_md165", null ],
      [ "2. What deserves a comment", "md_docs_STYLE_COMMENTS.html#autotoc_md166", null ],
      [ "3. Doxygen conventions", "md_docs_STYLE_COMMENTS.html#autotoc_md167", null ],
      [ "4. What to remove or rewrite", "md_docs_STYLE_COMMENTS.html#autotoc_md168", null ],
      [ "5. Prohibited or restricted changes", "md_docs_STYLE_COMMENTS.html#autotoc_md169", null ],
      [ "6. File headers", "md_docs_STYLE_COMMENTS.html#autotoc_md170", null ],
      [ "7. Tooling workflow", "md_docs_STYLE_COMMENTS.html#autotoc_md171", null ]
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
"AddDeepOceanLayer_8h_source.html",
"BlockIds_8h.html#afffd59fac8da24da79a88bfd701003d4ad6950e0ea45910943d6175203892d75e",
"ContainerSetSlotPacket_8h_source.html",
"InventoryHolder_8h_source.html",
"ItemConstants_8h.html#a92bd921079faa86a73d23fbcb1a2e365",
"ItemIds_8h.html#a3e000ec119790a8d8275720ada569223a48cd38bf55354a67d150641a404b91e5",
"MiniJson_8h_source.html",
"Sound_8h.html#ad5a8efb437405ffe6ca62fed11276c26a46b26370168d91c688aba639d1460e96",
"Vanilla_8h.html#ab38c6f8bf09588ff098584b3a34b3c6eada45f682f1e7ea342b29ad4d076a76ab",
"classcursestone_1_1Player.html#a95670272004bd5f9781da54990919f59",
"classcursestone_1_1block_1_1BlockDiamond.html",
"classcursestone_1_1entity_1_1Human.html#a5f8f372ece47455cbe4d6a71eb01ad24",
"classcursestone_1_1inventory_1_1BaseInventory.html#a0304371ac04671e327634e2d21463ec8",
"classcursestone_1_1item_1_1ItemCoal.html#a5b49cfb1382a2370a97a865b85804eaf",
"classcursestone_1_1item_1_1ItemSugarcane.html#a51b589492f38ec134197f04d303e1413",
"classcursestone_1_1network_1_1protocol_1_1BatchPacket.html",
"classcursestone_1_1network_1_1protocol_1_1PacketReader.html#a313236139452ae5c882241762027a17d",
"classcursestone_1_1plugin_1_1LuaPlugin.html#a6e4d0fa1e6a94c97d53797d41388f338",
"classcursestone_1_1world_1_1ChunkManager.html#ab548a188a727ee70c3edcc54f01291fa",
"classcursestone_1_1world_1_1format_1_1anvil_1_1AnvilRegionLoader.html#a950b782d8db9f7656c08686155643c7c",
"classvgen_1_1Biome.html#a00d99626cc557c10cf79850ba5a9c27d",
"classvgen_1_1BlockSource.html#a9cb99ce6683ffc4f52fea1f6ec4f8af9",
"classvgen_1_1FoliageColor.html",
"classvgen_1_1MineshaftCorridor.html#aeffd8f350db9f3e3926c53ececa14ff1",
"classvgen_1_1PieceWeight.html#aaacc671155af99d45b1344385ab83c0c",
"classvgen_1_1StructurePiece.html#a043896780752cadf041b2c53c9340232",
"dir_dcc86cc43749e6e9f9624b9a1c0040e3.html",
"structCsPlayerApi.html#ae55c3681438c95e7214e64ae3bb4577a",
"structcursestone_1_1network_1_1protocol_1_1SetEntityDataPacket_1_1Entry.html",
"structmcp__hit__result.html#a42cd4c24ea24fbc6c489bb97356fb4bd",
"structvgen_1_1Brightness.html#aba72e18633dfebe0db861d0f83994bc8"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';