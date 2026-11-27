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
      [ "What is CurseStone?", "index.html#autotoc_md2", null ],
      [ "What you get", "index.html#autotoc_md3", [
        [ "A server that just works", "index.html#autotoc_md4", null ],
        [ "The game, as players remember it", "index.html#autotoc_md5", null ],
        [ "Make it your own", "index.html#autotoc_md6", null ],
        [ "Clear answers when something goes wrong", "index.html#autotoc_md7", null ]
      ] ],
      [ "Why choose CurseStone", "index.html#autotoc_md8", [
        [ "Honest limits", "index.html#autotoc_md9", null ]
      ] ],
      [ "Quick start", "index.html#autotoc_md10", null ],
      [ "Learn more", "index.html#autotoc_md11", null ],
      [ "Community and contributing", "index.html#autotoc_md12", null ],
      [ "License", "index.html#autotoc_md13", null ]
    ] ],
    [ "Contributing to CurseStone", "md_CONTRIBUTING.html", [
      [ "1. Ways to contribute", "md_CONTRIBUTING.html#autotoc_md17", null ],
      [ "2. Setting up", "md_CONTRIBUTING.html#autotoc_md19", null ],
      [ "3. Architecture at a glance", "md_CONTRIBUTING.html#autotoc_md21", null ],
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
    [ "Cómo compilar CurseStone", "md_docs_BUILDING.html", [
      [ "Opción 1 — GitHub Actions (recomendado)", "md_docs_BUILDING.html#autotoc_md42", null ],
      [ "Opción 1.5 — Release personalizado (versión y descripción custom)", "md_docs_BUILDING.html#autotoc_md44", null ],
      [ "</blockquote>", "md_docs_BUILDING.html#autotoc_md45", null ],
      [ "Opción 2 — Linux x86_64 (VPS / PC)", "md_docs_BUILDING.html#autotoc_md46", null ],
      [ "Opción 3 — Android ARM64 desde Termux (en tu celular)", "md_docs_BUILDING.html#autotoc_md48", null ],
      [ "</blockquote>", "md_docs_BUILDING.html#autotoc_md49", null ],
      [ "Opción 4 — Windows x86_64 (MSVC)", "md_docs_BUILDING.html#autotoc_md50", null ],
      [ "Opción 5 — Cross-compile ARM64 desde Linux (con NDK)", "md_docs_BUILDING.html#autotoc_md52", null ],
      [ "Variables CMake útiles", "md_docs_BUILDING.html#autotoc_md54", null ]
    ] ],
    [ "CURSESTONE — AUDITORÍA ARQUITECTÓNICA COMPLETA (C++ NATIVO)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html", [
      [ "1. RESUMEN EJECUTIVO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md57", null ],
      [ "2. MAPA DE ARQUITECTURA DEL REPOSITORIO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md59", [
        [ "2.1 Distribución del código", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md60", null ],
        [ "2.2 Hilos (inventario completo, verificado por sitios de creación)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md61", null ],
        [ "2.3 Singletons / estado global", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md62", null ],
        [ "2.4 Flujo de un tick (orden real, <tt>Server::tick()</tt> <tt>Server.cpp:508-674</tt>)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md63", null ],
        [ "2.5 Grafo de propiedad (resumen; detalle completo en <tt>docs/audits/ownership-map.md</tt>, que sigue siendo esencialmente válido)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md64", null ]
      ] ],
      [ "3. ANÁLISIS DE LA HERENCIA ARQUITECTÓNICA DE LA REFERENCIA DE LA ERA", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md66", [
        [ "3.1 H1 — Objeto heap + <tt>dynamic_cast</tt> por paquete entrante", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md67", null ],
        [ "3.2 H2 — Sistema de eventos con coste por disparo heredado del bus de the reference", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md68", null ],
        [ "3.3 H3 — <tt>playersSnapshot()</tt>: copia de la lista de jugadores por difusión", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md69", null ],
        [ "3.4 H4 — Virtualización FullChunk/WorldProvider que nadie más usa", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md70", null ],
        [ "3.5 H5 — Scheduler genérico de the reference usado como cola de ticks de bloque", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md71", null ],
        [ "3.6 H6 — <tt>Player</tt> god-class: 84 miembros, 3 bases, 3 mutex, split puramente organizativo", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md72", null ],
        [ "3.7 H7 — Dos registros de sesión paralelos (herencia + migración a medias)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md73", null ],
        [ "3.8 Herencia evaluada y <strong>correcta</strong> (no tocar)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md74", null ],
        [ "3.9 Ausencias heredadas (huecos funcionales que the reference sí tiene)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md75", null ]
      ] ],
      [ "4. EVALUACIÓN DEL APROVECHAMIENTO DE C++", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md77", [
        [ "4.1 Gestión de memoria", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md78", null ],
        [ "4.2 Estructuras de datos", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md79", null ],
        [ "4.3 Diseño orientado a datos", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md80", null ],
        [ "4.4 Templates y cómputo en compilación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md81", null ],
        [ "4.5 NBT: el caso de estudio del \"a medio camino\"", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md82", null ]
      ] ],
      [ "5. ANÁLISIS DE MEMORIA", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md84", null ],
      [ "6. ANÁLISIS DE ESTRUCTURAS DE DATOS", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md86", null ],
      [ "7. ANÁLISIS DE RENDIMIENTO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md88", [
        [ "7.1 Ruta interactiva (bloque colocado/roto)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md89", null ],
        [ "7.2 Ruta de red", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md90", null ],
        [ "7.3 Ruta de guardado/mundo", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md91", null ],
        [ "7.4 Ruta de entidades/juego", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md92", null ]
      ] ],
      [ "8. ARQUITECTURA MULTIHILO Y CONCURRENCIA", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md94", null ],
      [ "9. AUDITORÍA DE NETWORKING", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md96", [
        [ "9.1 Hilos y puentes", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md97", null ],
        [ "9.2 Ruta de recepción (con conteo de copias)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md98", null ],
        [ "9.3 Ruta de envío", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md99", null ],
        [ "9.4 Fiabilidad raklib (post-migración)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md100", null ],
        [ "9.5 Capa de protocolo MCPE", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md101", null ],
        [ "9.6 Inmutable por compatibilidad protocolo 84 (no tocar)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md102", null ],
        [ "9.7 RCON y Query", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md103", null ]
      ] ],
      [ "10. AUDITORÍA DEL MOTOR DE MUNDO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md105", [
        [ "10.1 Representación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md106", null ],
        [ "10.2 Acceso y mutación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md107", null ],
        [ "10.3 Iluminación (doble motor)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md108", null ],
        [ "10.4 Generación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md109", null ],
        [ "10.5 Almacenamiento", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md110", null ],
        [ "10.6 Tiles y entidades", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md111", null ]
      ] ],
      [ "11. AUDITORÍA DE EVENTOS, PLUGINS Y COMANDOS", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md113", [
        [ "11.1 Eventos", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md114", null ],
        [ "11.2 Plugins Lua", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md115", null ],
        [ "11.3 Comandos y permisos", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md116", null ],
        [ "11.4 ¿La API obliga a estructuras ineficientes al motor?", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md117", null ]
      ] ],
      [ "12. SEGURIDAD Y ESTABILIDAD", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md119", [
        [ "12.1 🔴 CRÍTICA [confirmado] — Use-after-free en el índice de sesiones tras kick", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md120", null ],
        [ "12.2 🟠 [confirmado] — Bug de corrección: daño ambiental en el mundo equivocado", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md121", null ],
        [ "12.3 🟠 [confirmado] — Anti-flood declarado y nunca aplicado", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md122", null ],
        [ "12.4 Endurecimiento verificado en su sitio (positivo)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md123", null ],
        [ "12.5 Superficie C restante (riesgo de clase, no hallazgo puntual)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md124", null ],
        [ "12.6 Otros riesgos menores", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md125", null ]
      ] ],
      [ "13. COMPILACIÓN Y OPTIMIZACIÓN DEL BINARIO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md127", [
        [ "13.1 Configuración actual (verificada en <tt>CMakeLists.txt</tt> y cache de build)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md128", null ],
        [ "13.2 Evaluación", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md129", null ]
      ] ],
      [ "14. PROPUESTAS DE REDISEÑO", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md131", [
        [ "R1 — Handle de chunk / <tt>ChunkView</tt> para rutas calientes", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md132", null ],
        [ "R2 — Luz incremental (light removal/addition queue)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md133", null ],
        [ "R3 — Presupuesto de E/S fuera del mutex de chunks", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md134", null ],
        [ "R4 — Anti-churn de red (pools de buffers + writer con reserve + move)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md135", null ],
        [ "R5 — Índice espacial de viewers y entidades por chunk", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md136", null ],
        [ "R6 — Cola dedicada de ticks de bloque (liquids) por mundo", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md137", null ],
        [ "R7 — Consolidación raklib: RAII real y un solo registro de sesiones", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md138", null ],
        [ "R8 — Quitar o cablear los scaffolds muertos (higiene)", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md139", null ]
      ] ],
      [ "15. LISTADO PRIORIZADO DE MEJORAS", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md141", null ],
      [ "16. HOJA DE RUTA DE EVOLUCIÓN", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md143", null ],
      [ "17. EVALUACIÓN FINAL", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md145", [
        [ "17.1 Respuestas explícitas a las preguntas del encargo", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md146", null ],
        [ "17.2 Diagnóstico honesto final", "md_docs_audits_CURSESTONE_ARCHITECTURE_AUDIT.html#autotoc_md147", null ]
      ] ]
    ] ],
    [ "Crash Diagnostics — client-side crash forensics", "md_docs_CRASH_DIAGNOSTICS.html", [
      [ "Problem", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md150", null ],
      [ "Design — three layers", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md151", [
        [ "[1] <tt>network/protocol/PacketSanitizer</tt> — the bad-byte firewall", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md152", null ],
        [ "[2] <tt>diagnostics/PacketForensics</tt> — per-player wire recorder", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md153", null ],
        [ "[3] Client-lost classification in <tt>Player::close()</tt>", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md154", null ]
      ] ],
      [ "How to read a <tt>client-lost</tt> dump", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md155", null ],
      [ "Performance budget", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md156", null ],
      [ "Extension points", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md157", null ],
      [ "Verification", "md_docs_CRASH_DIAGNOSTICS.html#autotoc_md158", null ]
    ] ],
    [ "CurseStone Diagnostic Engine", "md_docs_DIAGNOSTIC_ENGINE.html", [
      [ "Identity", "md_docs_DIAGNOSTIC_ENGINE.html#autotoc_md160", null ],
      [ "Message levels", "md_docs_DIAGNOSTIC_ENGINE.html#autotoc_md161", null ],
      [ "Startup stages", "md_docs_DIAGNOSTIC_ENGINE.html#autotoc_md162", null ],
      [ "Diagnostics", "md_docs_DIAGNOSTIC_ENGINE.html#autotoc_md163", null ],
      [ "Diagnostic codes", "md_docs_DIAGNOSTIC_ENGINE.html#autotoc_md164", null ],
      [ "Configuration", "md_docs_DIAGNOSTIC_ENGINE.html#autotoc_md165", null ],
      [ "Performance notes", "md_docs_DIAGNOSTIC_ENGINE.html#autotoc_md166", null ]
    ] ],
    [ "ENTORNO.md — Informe de entorno (FASE 0–3, fix-pickup-vanilla)", "md_docs_ENTORNO.html", [
      [ "FASE 0 — Sistema Linux", "md_docs_ENTORNO.html#autotoc_md168", null ],
      [ "FASE 1 — Evaluación de emuladores (con evidencia, sin suposiciones)", "md_docs_ENTORNO.html#autotoc_md169", [
        [ "APK (FASE 1.2)", "md_docs_ENTORNO.html#autotoc_md170", null ],
        [ "Intento QEMU (FASE 1.3–1.5, alternativas D/E)", "md_docs_ENTORNO.html#autotoc_md171", null ]
      ] ],
      [ "Qué sí se pudo hacer sin el guest (y qué entrega esta rama)", "md_docs_ENTORNO.html#autotoc_md172", null ],
      [ "Herramientas RE creadas (fuera del repo, en el sandbox)", "md_docs_ENTORNO.html#autotoc_md173", null ]
    ] ],
    [ "Player mechanics events", "md_docs_EVENTS.html", [
      [ "Listening", "md_docs_EVENTS.html#autotoc_md175", null ],
      [ "The events", "md_docs_EVENTS.html#autotoc_md176", [
        [ "PlayerExhaustEvent", "md_docs_EVENTS.html#autotoc_md177", null ],
        [ "PlayerHungerChangeEvent", "md_docs_EVENTS.html#autotoc_md178", null ],
        [ "PlayerToggleSneakEvent / PlayerToggleSprintEvent", "md_docs_EVENTS.html#autotoc_md179", null ],
        [ "PlayerAnimationEvent", "md_docs_EVENTS.html#autotoc_md180", null ],
        [ "PlayerGamemodeChangeEvent", "md_docs_EVENTS.html#autotoc_md181", null ],
        [ "PlayerPreLoginEvent", "md_docs_EVENTS.html#autotoc_md182", null ],
        [ "PlayerCreationEvent", "md_docs_EVENTS.html#autotoc_md183", null ],
        [ "PlayerBucketEvent / PlayerBucketFillEvent", "md_docs_EVENTS.html#autotoc_md184", null ]
      ] ],
      [ "Native <tt>CsEvent</tt> field map", "md_docs_EVENTS.html#autotoc_md185", null ],
      [ "Integration notes (server developers)", "md_docs_EVENTS.html#autotoc_md186", null ]
    ] ],
    [ "Mob AI architecture", "md_docs_MOB_AI.html", [
      [ "1. Starting point (facts about the current tree)", "md_docs_MOB_AI.html#autotoc_md188", null ],
      [ "2. Design goals and constraints", "md_docs_MOB_AI.html#autotoc_md189", null ],
      [ "3. Components", "md_docs_MOB_AI.html#autotoc_md190", [
        [ "Goal", "md_docs_MOB_AI.html#autotoc_md191", null ],
        [ "MobBrain", "md_docs_MOB_AI.html#autotoc_md192", null ],
        [ "MobContext", "md_docs_MOB_AI.html#autotoc_md193", null ],
        [ "MobAIManager", "md_docs_MOB_AI.html#autotoc_md194", null ]
      ] ],
      [ "4. Cadences and budgets", "md_docs_MOB_AI.html#autotoc_md195", null ],
      [ "5. Activation gate", "md_docs_MOB_AI.html#autotoc_md196", null ],
      [ "6. Threading contract (now and later)", "md_docs_MOB_AI.html#autotoc_md197", null ],
      [ "7. Compatibility contract", "md_docs_MOB_AI.html#autotoc_md198", null ],
      [ "8. Stage roadmap", "md_docs_MOB_AI.html#autotoc_md199", null ],
      [ "9. Implementation status", "md_docs_MOB_AI.html#autotoc_md200", [
        [ "The tier contract", "md_docs_MOB_AI.html#autotoc_md201", null ],
        [ "The swim model (hold-band regulator + flotation bob)", "md_docs_MOB_AI.html#autotoc_md202", null ],
        [ "Steering", "md_docs_MOB_AI.html#autotoc_md203", null ],
        [ "Panic", "md_docs_MOB_AI.html#autotoc_md204", null ],
        [ "Benchmarks", "md_docs_MOB_AI.html#autotoc_md205", null ]
      ] ],
      [ "10. Mob persistence", "md_docs_MOB_AI.html#autotoc_md206", null ]
    ] ],
    [ "PICKUP_VANILLA.md — Recogida de items flotantes, paridad vanilla MCPE 0.15.10", "md_docs_PICKUP_VANILLA.html", [
      [ "1. Qué dibuja realmente el cliente", "md_docs_PICKUP_VANILLA.html#autotoc_md208", null ],
      [ "2. Formato del paquete TakeItemEntityPacket (protocolo 84)", "md_docs_PICKUP_VANILLA.html#autotoc_md209", null ],
      [ "3. AddItemEntityPacket (protocolo 84)", "md_docs_PICKUP_VANILLA.html#autotoc_md210", null ],
      [ "4. Recogida server-side vanilla (single-player integrado)", "md_docs_PICKUP_VANILLA.html#autotoc_md211", null ],
      [ "5. Referencia Genisys 0.15.0 (comparación)", "md_docs_PICKUP_VANILLA.html#autotoc_md212", null ],
      [ "6. CurseStone antes del parche (verificado línea a línea)", "md_docs_PICKUP_VANILLA.html#autotoc_md213", null ],
      [ "7. CurseStone después del parche", "md_docs_PICKUP_VANILLA.html#autotoc_md214", null ],
      [ "8. Pruebas ejecutadas (resultados reales)", "md_docs_PICKUP_VANILLA.html#autotoc_md215", null ],
      [ "9. Entorno Android (FASE 0–3)", "md_docs_PICKUP_VANILLA.html#autotoc_md216", null ],
      [ "10. NO VERIFICADO (honesto)", "md_docs_PICKUP_VANILLA.html#autotoc_md217", null ],
      [ "11. Limitaciones del entorno de trabajo", "md_docs_PICKUP_VANILLA.html#autotoc_md218", null ]
    ] ],
    [ "CurseStone Plugin API", "md_docs_PLUGINS.html", [
      [ "Folder plugins (Lua)", "md_docs_PLUGINS.html#autotoc_md220", [
        [ "Building blocks from plugins", "md_docs_PLUGINS.html#autotoc_md221", null ],
        [ "Particles", "md_docs_PLUGINS.html#autotoc_md222", [
          [ "Tag types (all ride the same one-carrier model)", "md_docs_PLUGINS.html#autotoc_md223", null ],
          [ "Why this cannot hurt the FPS", "md_docs_PLUGINS.html#autotoc_md224", null ]
        ] ],
        [ "Entities (standing mobs)", "md_docs_PLUGINS.html#autotoc_md225", [
          [ "Mob combat and health", "md_docs_PLUGINS.html#autotoc_md226", null ]
        ] ]
      ] ],
      [ "File plugins (C++ via .so / .dll)", "md_docs_PLUGINS.html#autotoc_md227", [
        [ "Structure", "md_docs_PLUGINS.html#autotoc_md228", null ],
        [ "Minimal complete plugin", "md_docs_PLUGINS.html#autotoc_md229", null ],
        [ "Building", "md_docs_PLUGINS.html#autotoc_md230", null ],
        [ "Data folder", "md_docs_PLUGINS.html#autotoc_md231", null ],
        [ "Rules and guarantees", "md_docs_PLUGINS.html#autotoc_md232", null ],
        [ "API reference (native)", "md_docs_PLUGINS.html#autotoc_md233", null ],
        [ "Versioning", "md_docs_PLUGINS.html#autotoc_md234", null ]
      ] ],
      [ "Commands", "md_docs_PLUGINS.html#autotoc_md235", null ],
      [ "Reference implementation", "md_docs_PLUGINS.html#autotoc_md236", null ]
    ] ],
    [ "POTION_EFFECTS_PROGRESS.md — checkpoint de fix-potion-effects-vanilla", "md_docs_POTION_EFFECTS_PROGRESS.html", [
      [ "Identidad de la tarea", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md238", null ],
      [ "Estado final de las fases", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md239", null ],
      [ "Commits de la rama (base 6605b4b)", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md240", null ],
      [ "Hallazgos clave del binario (FASE 5, con direcciones)", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md241", null ],
      [ "Archivos modificados", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md242", null ],
      [ "Tests ejecutados (reales)", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md243", null ],
      [ "Problemas encontrados y resueltos", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md244", null ],
      [ "Próximos pasos exactos para continuar", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md245", null ],
      [ "Resultado de CI (real)", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md246", null ]
    ] ],
    [ "POTION_EFFECTS_VANILLA.md — Efectos de pociones, paridad vanilla MCPE 0.15.10", "md_docs_POTION_EFFECTS_VANILLA.html", [
      [ "1. El paquete de efectos del protocolo 84 (medido en el binario)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md248", null ],
      [ "2. Handler del cliente 0.15.10 (<tt>LegacyClientNetworkHandler::handle(MobEffectPacket*)</tt> @ <tt>0x0091F668</tt>)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md249", null ],
      [ "3. Reglas de aplicación vanilla (binario)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md250", null ],
      [ "4. Metadata de efectos (binario)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md251", null ],
      [ "5. Poción arrojada (splash) — <tt>ThrownPotion::onHit</tt> @ <tt>0x00C208B4</tt>", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md252", null ],
      [ "6. Absorción (binario)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md253", null ],
      [ "7. Catálogo de pociones (0.15.x)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md254", null ],
      [ "8. Referencia Genisys 0.15.0 (flujo server-side)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md255", null ],
      [ "9. Estado inicial de CurseStone (verificado leyendo el código)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md256", null ],
      [ "10. Implementación (esta rama)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md257", null ],
      [ "9bis. Pruebas ejecutadas (resultados reales)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md258", null ],
      [ "11. NO VERIFICADO (honesto)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md259", null ],
      [ "12. Limitaciones del entorno", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md260", null ]
    ] ],
    [ "CurseStone Comment and Documentation Style Guide", "md_docs_STYLE_COMMENTS.html", [
      [ "1. Language", "md_docs_STYLE_COMMENTS.html#autotoc_md269", null ],
      [ "2. What deserves a comment", "md_docs_STYLE_COMMENTS.html#autotoc_md270", null ],
      [ "3. Doxygen conventions", "md_docs_STYLE_COMMENTS.html#autotoc_md271", null ],
      [ "4. What to remove or rewrite", "md_docs_STYLE_COMMENTS.html#autotoc_md272", null ],
      [ "5. Prohibited or restricted changes", "md_docs_STYLE_COMMENTS.html#autotoc_md273", null ],
      [ "6. File headers", "md_docs_STYLE_COMMENTS.html#autotoc_md274", null ],
      [ "7. Tooling workflow", "md_docs_STYLE_COMMENTS.html#autotoc_md275", null ]
    ] ],
    [ "Threading notes: what the historical thread moves mean for CurseStone", "md_docs_THREADING.html", [
      [ "1. CurseStone threading snapshot (current tree)", "md_docs_THREADING.html#autotoc_md277", null ],
      [ "2. The historical thread moves and their outcomes", "md_docs_THREADING.html#autotoc_md278", null ],
      [ "3. Lessons, applied to CurseStone", "md_docs_THREADING.html#autotoc_md279", [
        [ "Lesson 1 — thread I/O, not game state", "md_docs_THREADING.html#autotoc_md280", null ],
        [ "Lesson 2 — extract the storage boundary BEFORE threading the provider", "md_docs_THREADING.html#autotoc_md281", null ],
        [ "Lesson 3 — budget small stateful work instead of threading it", "md_docs_THREADING.html#autotoc_md282", null ],
        [ "Lesson 4 — entity ticking needs a budget and a radius the day AI lands", "md_docs_THREADING.html#autotoc_md283", null ],
        [ "Lesson 5 — name your threads", "md_docs_THREADING.html#autotoc_md284", null ]
      ] ],
      [ "4. What is still worth adopting (ranked)", "md_docs_THREADING.html#autotoc_md285", null ],
      [ "5. What NOT to adopt", "md_docs_THREADING.html#autotoc_md286", null ],
      [ "6. Status against the historical kept list", "md_docs_THREADING.html#autotoc_md287", null ],
      [ "7. Implementation status (named threads + async chunk encode)", "md_docs_THREADING.html#autotoc_md288", [
        [ "Named threads", "md_docs_THREADING.html#autotoc_md289", null ],
        [ "Async chunk encode", "md_docs_THREADING.html#autotoc_md290", null ],
        [ "Measurements", "md_docs_THREADING.html#autotoc_md291", null ],
        [ "Simultaneous joins: the \"single-streamer\" observation, root-caused", "md_docs_THREADING.html#autotoc_md292", null ],
        [ "Multi-player concurrency verification (server unchanged)", "md_docs_THREADING.html#autotoc_md293", null ]
      ] ],
      [ "8. Mob AI (added after the join-storm study)", "md_docs_THREADING.html#autotoc_md294", null ]
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
"BlockIds_8h.html#afffd59fac8da24da79a88bfd701003d4a994872d75cc154f715f1b9b3c8dfc1d9",
"Blocks_8h.html#adb4d45999c1ac59398074f857397bfc8",
"EntityTypes_8h.html#a5b74f641c5ff1a2e8c16dc928b8784cf",
"ItemConstants_8h.html#a11bb52cf67fe2da7904a10110ca2a911",
"ItemConstants_8h.html#ab1af63dbbe1180f059915884a404ce27",
"ItemIds_8h.html#a3e000ec119790a8d8275720ada569223ae18ffec7d04f9d051eed224d85beb13c",
"MobSpawnerData_8h.html#a0d1fa2a7493e93cf21337fd3e91dc66ea927ff44ae319e043a892042e489f7845",
"SetEntityMotionPacket_8h_source.html",
"UseItemPacket_8h_source.html",
"classcursestone_1_1Player.html#a44975f49edb114ce0d37afc55d222d10",
"classcursestone_1_1Server.html#afb9c44e1eb12b36f750d02193610056c",
"classcursestone_1_1block_1_1BlockTNT.html",
"classcursestone_1_1entity_1_1ai_1_1WanderGoal.html#ad2fd9d63867f0e68d7959d0cc9fd70ba",
"classcursestone_1_1event_1_1player_1_1PlayerTeleportEvent.html#a36663f74303acc68c7338f761c80b7ea",
"classcursestone_1_1item_1_1ItemBeetroot.html",
"classcursestone_1_1item_1_1ItemShovelStone.html",
"classcursestone_1_1network_1_1protocol_1_1AddPlayerPacket.html#a1d801f353be40ec13ed2ba1192e21cdf",
"classcursestone_1_1network_1_1protocol_1_1MoveEntityPacket.html",
"classcursestone_1_1permission_1_1BanList.html",
"classcursestone_1_1utils_1_1Config.html#a5cc8925efa83e8217f6fd3fe27fe3fd5",
"classcursestone_1_1world_1_1format_1_1ChunkAdapter.html#a21afe7f010d235b1d555ff9a9ae692c9",
"classcursestone_1_1world_1_1generator_1_1VanillaNoise.html#a2f7793adf689c5615cc70309fcd12a5a",
"classvgen_1_1Biome.html#ac54a2b7267cac98f263a59fec6ddd5be",
"classvgen_1_1BoundingBox.html#af780583a61aa382f5a1201a47acfc910",
"classvgen_1_1JunglePyramidPiece.html#a6a0a31b64b969a278957e25426b7a237",
"classvgen_1_1NBBridgeCrossing.html#a43067b80f8a3ae8f684fb1cda6835aaa",
"classvgen_1_1Range.html#a4ab5e7805fa81b559d3e01682a0ed12f",
"classvgen_1_1SwampBiome.html#a0070ebac009cb745a3ec558988110861",
"index.html#autotoc_md9",
"namespacecursestone.html#adec485e08dd2b6fe4a06b0549e970f1a",
"structcursestone_1_1DisconnectDump.html#a37c4fe8252d24d1eba7c42124d9147b6",
"structcursestone_1_1nbt_1_1CompoundEntry.html#ae356a0162427f66e5316995184941cc4",
"structcursestone_1_1world_1_1MobEntity.html#a8851aa7cf58df25bdb885ac9d804e4c7",
"structmcp__rak__session.html#a0eef5445cbbd119d9810086f44fd58c6",
"structvgen_1_1BlockPos.html#a6336a8ca9a062ddc3effaa954ae8ea31"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';