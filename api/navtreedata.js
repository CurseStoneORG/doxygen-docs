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
      [ "1. What replaced what", "md_docs_MOB_AI.html#autotoc_md188", null ],
      [ "2. Per-tick pipeline (era <tt>Mob::newServerAiStep</tt>)", "md_docs_MOB_AI.html#autotoc_md189", null ],
      [ "3. Goal wiring (era registrations)", "md_docs_MOB_AI.html#autotoc_md190", null ],
      [ "4. Performance (server adaptations, behavior-preserving)", "md_docs_MOB_AI.html#autotoc_md191", null ],
      [ "5. Conventions and deviations", "md_docs_MOB_AI.html#autotoc_md192", null ],
      [ "6. Testing", "md_docs_MOB_AI.html#autotoc_md193", null ]
    ] ],
    [ "PICKUP_VANILLA.md — Recogida de items flotantes, paridad vanilla MCPE 0.15.10", "md_docs_PICKUP_VANILLA.html", [
      [ "1. Qué dibuja realmente el cliente", "md_docs_PICKUP_VANILLA.html#autotoc_md195", null ],
      [ "2. Formato del paquete TakeItemEntityPacket (protocolo 84)", "md_docs_PICKUP_VANILLA.html#autotoc_md196", null ],
      [ "3. AddItemEntityPacket (protocolo 84)", "md_docs_PICKUP_VANILLA.html#autotoc_md197", null ],
      [ "4. Recogida server-side vanilla (single-player integrado)", "md_docs_PICKUP_VANILLA.html#autotoc_md198", null ],
      [ "5. Referencia Genisys 0.15.0 (comparación)", "md_docs_PICKUP_VANILLA.html#autotoc_md199", null ],
      [ "6. CurseStone antes del parche (verificado línea a línea)", "md_docs_PICKUP_VANILLA.html#autotoc_md200", null ],
      [ "7. CurseStone después del parche", "md_docs_PICKUP_VANILLA.html#autotoc_md201", null ],
      [ "8. Pruebas ejecutadas (resultados reales)", "md_docs_PICKUP_VANILLA.html#autotoc_md202", null ],
      [ "9. Entorno Android (FASE 0–3)", "md_docs_PICKUP_VANILLA.html#autotoc_md203", null ],
      [ "10. NO VERIFICADO (honesto)", "md_docs_PICKUP_VANILLA.html#autotoc_md204", null ],
      [ "11. Limitaciones del entorno de trabajo", "md_docs_PICKUP_VANILLA.html#autotoc_md205", null ]
    ] ],
    [ "CurseStone Plugin API", "md_docs_PLUGINS.html", [
      [ "Folder plugins (Lua)", "md_docs_PLUGINS.html#autotoc_md207", [
        [ "Building blocks from plugins", "md_docs_PLUGINS.html#autotoc_md208", null ],
        [ "Particles", "md_docs_PLUGINS.html#autotoc_md209", [
          [ "Tag types (all ride the same one-carrier model)", "md_docs_PLUGINS.html#autotoc_md210", null ],
          [ "Why this cannot hurt the FPS", "md_docs_PLUGINS.html#autotoc_md211", null ]
        ] ],
        [ "Entities (standing mobs)", "md_docs_PLUGINS.html#autotoc_md212", [
          [ "Mob combat and health", "md_docs_PLUGINS.html#autotoc_md213", null ]
        ] ]
      ] ],
      [ "File plugins (C++ via .so / .dll)", "md_docs_PLUGINS.html#autotoc_md214", [
        [ "Structure", "md_docs_PLUGINS.html#autotoc_md215", null ],
        [ "Minimal complete plugin", "md_docs_PLUGINS.html#autotoc_md216", null ],
        [ "Building", "md_docs_PLUGINS.html#autotoc_md217", null ],
        [ "Data folder", "md_docs_PLUGINS.html#autotoc_md218", null ],
        [ "Rules and guarantees", "md_docs_PLUGINS.html#autotoc_md219", null ],
        [ "API reference (native)", "md_docs_PLUGINS.html#autotoc_md220", null ],
        [ "Versioning", "md_docs_PLUGINS.html#autotoc_md221", null ]
      ] ],
      [ "Commands", "md_docs_PLUGINS.html#autotoc_md222", null ],
      [ "Reference implementation", "md_docs_PLUGINS.html#autotoc_md223", null ]
    ] ],
    [ "POTION_EFFECTS_PROGRESS.md — checkpoint de fix-potion-effects-vanilla", "md_docs_POTION_EFFECTS_PROGRESS.html", [
      [ "Identidad de la tarea", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md225", null ],
      [ "Estado final de las fases", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md226", null ],
      [ "Commits de la rama (base 6605b4b)", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md227", null ],
      [ "Hallazgos clave del binario (FASE 5, con direcciones)", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md228", null ],
      [ "Archivos modificados", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md229", null ],
      [ "Tests ejecutados (reales)", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md230", null ],
      [ "Problemas encontrados y resueltos", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md231", null ],
      [ "Próximos pasos exactos para continuar", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md232", null ],
      [ "Resultado de CI (real)", "md_docs_POTION_EFFECTS_PROGRESS.html#autotoc_md233", null ]
    ] ],
    [ "POTION_EFFECTS_VANILLA.md — Efectos de pociones, paridad vanilla MCPE 0.15.10", "md_docs_POTION_EFFECTS_VANILLA.html", [
      [ "1. El paquete de efectos del protocolo 84 (medido en el binario)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md235", null ],
      [ "2. Handler del cliente 0.15.10 (<tt>LegacyClientNetworkHandler::handle(MobEffectPacket*)</tt> @ <tt>0x0091F668</tt>)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md236", null ],
      [ "3. Reglas de aplicación vanilla (binario)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md237", null ],
      [ "4. Metadata de efectos (binario)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md238", null ],
      [ "5. Poción arrojada (splash) — <tt>ThrownPotion::onHit</tt> @ <tt>0x00C208B4</tt>", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md239", null ],
      [ "6. Absorción (binario)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md240", null ],
      [ "7. Catálogo de pociones (0.15.x)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md241", null ],
      [ "8. Referencia Genisys 0.15.0 (flujo server-side)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md242", null ],
      [ "9. Estado inicial de CurseStone (verificado leyendo el código)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md243", null ],
      [ "10. Implementación (esta rama)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md244", null ],
      [ "9bis. Pruebas ejecutadas (resultados reales)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md245", null ],
      [ "11. NO VERIFICADO (honesto)", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md246", null ],
      [ "12. Limitaciones del entorno", "md_docs_POTION_EFFECTS_VANILLA.html#autotoc_md247", null ]
    ] ],
    [ "CHECKPOINT — Efectos de movimiento (Velocidad/Lentitud), dispersión de orbes de experiencia y elevación de ítems — MCPE 0.15.x", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html", [
      [ "Estado Git", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md249", null ],
      [ "Ramas protegidas (no modificar ni commitear)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md250", null ],
      [ "Estado real de los PR previos (verificado por API el 2026-11-27)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md251", null ],
      [ "Entorno", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md252", null ],
      [ "Estado de FASES", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md253", null ],
      [ "Commits de la tarea (autor Dr1xyDev, push verificado en remoto en cada paso)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md254", null ],
      [ "Estado de compilación / smoke", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md255", null ],
      [ "Tests ejecutados y resultados reales", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md256", null ],
      [ "Estado de CI y commit exacto comprobado", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md257", null ],
      [ "Elementos NO VERIFICADOS", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md258", null ],
      [ "Próximo paso exacto", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md259", null ],
      [ "Investigación (FASE 1-3, verificada contra el binario 0.15.10 y Genisys 0.15.0)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md260", [
        [ "A) Velocidad / Lentitud — cadena de atributos verificada eslabón por eslabón", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md261", null ],
        [ "B) Orbes de experiencia — CAUSA RAÍZ DEMOSTRADA", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md262", null ],
        [ "C) Elevación de ítems tirados — verificación sistemática", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md263", null ]
      ] ],
      [ "Inventario funcional (FASE 1)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md264", null ],
      [ "Auditoría de efectos (tabla de estado — se completa por fase)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md265", null ],
      [ "Investigación previa reutilizable (de los checkpoints de PR #15 y #16, ya en el repo)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md266", null ],
      [ "Comparación con vanilla MCPE 0.15.x (tabla inicial — se rellena por fase)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md267", null ],
      [ "Emulador", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md268", null ],
      [ "Tests ejecutados y resultados reales", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md269", null ],
      [ "Estado de compilación", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md270", null ],
      [ "Estado de CI y commit exacto comprobado", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md271", null ],
      [ "Problemas encontrados", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md272", null ],
      [ "Elementos NO VERIFICADOS", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md273", null ],
      [ "Próximo paso exacto", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_PROGRESS.html#autotoc_md274", null ]
    ] ],
    [ "Efectos de movimiento, orbes de experiencia y elevación de ítems — referencia vanilla MCPE 0.15.x", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html", [
      [ "1. Estado inicial de CurseStone (stable @ 6364bf2)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md276", null ],
      [ "2. Velocidad y Lentitud (prioridad 1)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md277", [
        [ "Investigación vanilla (binario)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md278", null ],
        [ "Multiplicadores de era", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md279", null ],
        [ "Verificación de la cadena en CurseStone", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md280", null ],
        [ "Lo que SÍ faltaba y se corrigió", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md281", null ]
      ] ],
      [ "3. Auditoría del resto de efectos", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md282", null ],
      [ "4. Orbes de experiencia: dispersión y salto (prioridad 2)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md283", [
        [ "Causa raíz (demostrada en código)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md284", null ],
        [ "Vanilla medido (RE del ctor real <tt>ExperienceOrb::ExperienceOrb(BlockSource&, Vec3 const&, int, Player*)</tt> @ 0x00be7c38, vía PLT 0x5c5088)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md285", null ],
        [ "Corrección", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md286", null ],
        [ "Ciclo de sincronización (comprobado)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md287", null ]
      ] ],
      [ "5. Elevación de ítems tirados (prioridad 3)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md288", [
        [ "Verificación sistemática (todas las piezas medidas)", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md289", null ]
      ] ],
      [ "6. Paquetes afectados", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md290", null ],
      [ "7. Tests, compilación y CI", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md291", null ],
      [ "8. Limitaciones y elementos NO VERIFICADOS", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md292", null ],
      [ "9. Referencia cruzada", "md_docs_POTION_MOVEMENT_ORBS_ITEM_HEIGHT_VANILLA.html#autotoc_md293", null ]
    ] ],
    [ "CurseStone Comment and Documentation Style Guide", "md_docs_STYLE_COMMENTS.html", [
      [ "1. Language", "md_docs_STYLE_COMMENTS.html#autotoc_md302", null ],
      [ "2. What deserves a comment", "md_docs_STYLE_COMMENTS.html#autotoc_md303", null ],
      [ "3. Doxygen conventions", "md_docs_STYLE_COMMENTS.html#autotoc_md304", null ],
      [ "4. What to remove or rewrite", "md_docs_STYLE_COMMENTS.html#autotoc_md305", null ],
      [ "5. Prohibited or restricted changes", "md_docs_STYLE_COMMENTS.html#autotoc_md306", null ],
      [ "6. File headers", "md_docs_STYLE_COMMENTS.html#autotoc_md307", null ],
      [ "7. Tooling workflow", "md_docs_STYLE_COMMENTS.html#autotoc_md308", null ]
    ] ],
    [ "Threading notes: what the historical thread moves mean for CurseStone", "md_docs_THREADING.html", [
      [ "1. CurseStone threading snapshot (current tree)", "md_docs_THREADING.html#autotoc_md310", null ],
      [ "2. The historical thread moves and their outcomes", "md_docs_THREADING.html#autotoc_md311", null ],
      [ "3. Lessons, applied to CurseStone", "md_docs_THREADING.html#autotoc_md312", [
        [ "Lesson 1 — thread I/O, not game state", "md_docs_THREADING.html#autotoc_md313", null ],
        [ "Lesson 2 — extract the storage boundary BEFORE threading the provider", "md_docs_THREADING.html#autotoc_md314", null ],
        [ "Lesson 3 — budget small stateful work instead of threading it", "md_docs_THREADING.html#autotoc_md315", null ],
        [ "Lesson 4 — entity ticking needs a budget and a radius the day AI lands", "md_docs_THREADING.html#autotoc_md316", null ],
        [ "Lesson 5 — name your threads", "md_docs_THREADING.html#autotoc_md317", null ]
      ] ],
      [ "4. What is still worth adopting (ranked)", "md_docs_THREADING.html#autotoc_md318", null ],
      [ "5. What NOT to adopt", "md_docs_THREADING.html#autotoc_md319", null ],
      [ "6. Status against the historical kept list", "md_docs_THREADING.html#autotoc_md320", null ],
      [ "7. Implementation status (named threads + async chunk encode)", "md_docs_THREADING.html#autotoc_md321", [
        [ "Named threads", "md_docs_THREADING.html#autotoc_md322", null ],
        [ "Async chunk encode", "md_docs_THREADING.html#autotoc_md323", null ],
        [ "Measurements", "md_docs_THREADING.html#autotoc_md324", null ],
        [ "Simultaneous joins: the \"single-streamer\" observation, root-caused", "md_docs_THREADING.html#autotoc_md325", null ],
        [ "Multi-player concurrency verification (server unchanged)", "md_docs_THREADING.html#autotoc_md326", null ]
      ] ],
      [ "8. Mob AI (added after the join-storm study)", "md_docs_THREADING.html#autotoc_md327", null ]
    ] ],
    [ "CHECKPOINT — Botellas de pociones arrojadizas, botellas de experiencia y sistema XP vanilla MCPE 0.15.x", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html", [
      [ "Estado Git", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md329", null ],
      [ "Ramas protegidas (no modificar)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md330", null ],
      [ "Estado de FASES", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md331", null ],
      [ "Entorno", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md332", null ],
      [ "Investigación de MCPE vanilla (binario real, verificada)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md333", [
        [ "Entidades e items", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md334", null ],
        [ "Lanzamiento (común a ambas botellas — <tt>Throwable::shoot(Mob&)</tt> @ 0x00c1e735 + <tt>Throwable::shoot(Vec3,float,float,Vec3)</tt> @ 0x00c1e858)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md335", null ],
        [ "Física del proyectil (<tt>Throwable::normalTick</tt> @ 0x00c1ed19 + getters)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md336", null ],
        [ "Impacto de la botella XP (<tt>ExperiencePotion::onHit</tt> @ 0x00c1c0d0)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md337", null ],
        [ "Orbes (<tt>ExperienceOrb::spawnOrbs</tt> 2 overloads + normalTick + playerTouch)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md338", null ],
        [ "Sistema XP del jugador (<tt>Player::addExperience(int)</tt> @ 0x00c15e78)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md339", null ],
        [ "Referencia Genisys 0.15.0 (diferencias documentadas)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md340", null ]
      ] ],
      [ "Inventario funcional (FASE 1.1)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md341", null ],
      [ "Diseño de implementación", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md342", null ],
      [ "Problemas encontrados", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md343", null ],
      [ "Elementos \"NO VERIFICADOS\"", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md344", null ],
      [ "Commits de la sesión (todos con autor Dr1xyDev, push verificado)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md345", null ],
      [ "Problemas encontrados (adición)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md346", null ],
      [ "Estado de compilación / smoke", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md347", null ],
      [ "CI y PR (resultado real)", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md348", null ],
      [ "Próximo paso exacto", "md_docs_THROWABLE_POTIONS_XP_PROGRESS.html#autotoc_md349", null ]
    ] ],
    [ "THROWABLE_POTIONS_XP_VANILLA.md — Pociones arrojadizas, botellas de experiencia, orbes y XP, paridad vanilla MCPE 0.15.10", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html", [
      [ "1. Catálogo de objetos y entidades (binario 0.15.10)", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md351", null ],
      [ "2. Lanzamiento — <tt>Throwable::shoot(Mob&)</tt> @ 0x00c1e735 + <tt>shoot(Vec3,float,float,Vec3)</tt> @ 0x00c1e858", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md352", null ],
      [ "3. Vuelo — <tt>Throwable::normalTick</tt> @ 0x00c1ed19 + overrides de gravedad/power", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md353", null ],
      [ "4. Impacto", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md354", [
        [ "4.1 Botella XP — <tt>ExperiencePotion::onHit</tt> @ 0x00c1c0d0", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md355", null ],
        [ "4.2 Orbe XP — generación canónica <tt>ExperienceOrb::spawnOrbs</tt> @ 0x00be8864", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md356", null ]
      ] ],
      [ "5. Orbe — <tt>ExperienceOrb::normalTick</tt> @ 0x00be7e70, <tt>playerTouch</tt> @ 0x00be8688, <tt>_init</tt> @ 0x00be7d70", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md357", null ],
      [ "6. XP del jugador — <tt>Player::addExperience(int)</tt> @ 0x00c15e78", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md358", null ],
      [ "7. Persistencia", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md359", null ],
      [ "8. Implementación en CurseStone", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md360", null ],
      [ "9. Comparación con Genisys 0.15.0 (tag ec716b0ea4)", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md361", null ],
      [ "10. Tests", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md362", null ],
      [ "11. Compilación y CI", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md363", null ],
      [ "12. Pruebas con cliente original", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md364", null ],
      [ "13. Limitaciones y NO VERIFICADOS", "md_docs_THROWABLE_POTIONS_XP_VANILLA.html#autotoc_md365", null ]
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
        [ "Functions", "functions_func.html", "functions_func" ],
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
"BlockIds_8h.html#afffd59fac8da24da79a88bfd701003d4a933566025d7a1379cf2f800e845fbe6e",
"Blocks_8h.html#a2327da8d7ef4c713baad4cc095440a8f",
"EntityTypes_8cpp.html#ac853a216f7be2107791fa0726322035e",
"ItemConstants_8h.html#a0a2d41ff4615521e98368f636f56ecbc",
"ItemConstants_8h.html#aab396005e8eb56cd59cfc890e45b0d31",
"ItemIds_8h.html#a3e000ec119790a8d8275720ada569223ab929da0c49b337ae73c9938bf4bbde40",
"MobSpawnerData_8h.html#a0d1fa2a7493e93cf21337fd3e91dc66ea4797c3a0ff67b479f71a3633c4ffca6f",
"SaveProfiler_8h.html#a131c41358941ac92fad881498ef70252a326b773412d0368c2c32b77e0677a5fa",
"ThreadPort_8h.html#a91343c06751de27c61f6fa1e3ab0dae9",
"classcursestone_1_1Player.html#a2865ad5125ca9b52ed6b2764bfdaf126",
"classcursestone_1_1Server.html#a96f07b132a2c75ec3e5c336d41073662",
"classcursestone_1_1block_1_1BlockSand.html#a2453c603a1c33ff429764cfc7e2ae0f0",
"classcursestone_1_1entity_1_1ai_1_1EatTileGoal.html",
"classcursestone_1_1entity_1_1ai_1_1RestrictSunGoal.html#a7f0579a84ed1ed1f4d0993ee8856e1da",
"classcursestone_1_1event_1_1player_1_1PlayerItemHeldEvent.html#ac74685d455044e3877f57c4f3aa08571",
"classcursestone_1_1item_1_1Item.html#aac42d245627be377d17d804f7b7cfac6",
"classcursestone_1_1item_1_1ItemPumpkinPie.html#a14b8b71e49e09858d3125f133c862808",
"classcursestone_1_1network_1_1SourceInterface.html",
"classcursestone_1_1network_1_1protocol_1_1LoginPacket.html#ac8bc6281aaf2532a71ec4d3865fdd27f",
"classcursestone_1_1network_1_1protocol_1_1UpdateBlockPacket.html#aab3c91dd463dd7ea31c243ac20dc6c9a",
"classcursestone_1_1tile_1_1TileFurnace.html#a6b9a523c82d39230c830ec228ad46383",
"classcursestone_1_1world_1_1World.html#aaeb37b776e72f68f27f84814af0ec05b",
"classcursestone_1_1world_1_1generator_1_1ImprovedNoise.html#afa2dd24e53a83c01cb3711407ce9fc55",
"classvgen_1_1Biome.html#a60315a10590e8d3a228a4eb683f65187a1824e8e0307cbfdd1993511ab040075c",
"classvgen_1_1BlockVolume.html#a5ba21b42b46e267f9e09a6a2af844a07",
"classvgen_1_1HugeMushroomFeature.html",
"classvgen_1_1MineshaftRoom.html#a4a0fabebd05e8ca53f5cb1939a6111dc",
"classvgen_1_1PlainsRefTable.html",
"classvgen_1_1StructurePiece.html#a4488ea26116e1ff395a2a6be24f6f906",
"dir_f6c1c82b4d30ae548d5286e2c80025e9.html",
"md_docs_THREADING.html",
"structCsPlayerApi.html#abaefaa3429449097ada7ac2a163fb05d",
"structcursestone_1_1entity_1_1ai_1_1PathBox.html#a6e786674ffb2b141ad0916083295d3df",
"structcursestone_1_1plugin_1_1NativePlugin_1_1CommandEntry.html#a2cbcc0f604f6d6583de8d35ecdd11427",
"structcursestone_1_1world_1_1format_1_1leveldb_1_1db_1_1FileMeta.html#a2f9e6702313acb68f919c5b282b480c3",
"structmcp__rak__session__manager.html#a3015a909556d0a5ccd2378273eaf5667",
"structvgen_1_1LightLayer.html#a627c8365c55739b0805821e58def3b09"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';