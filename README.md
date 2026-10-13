# CurseStone Documentation

🌐 **English** · [Español](#documentación-de-cursestone)

Official documentation for the **CurseStone** server software (MCPE 0.15.10 / protocol 84).

## Index

| Topic | English | Español | Description |
|---|---|---|---|
| **Plugins (Lua)** | [plugins/plugin.md](plugins/plugin.md) | [plugins/plugin.es.md](plugins/plugin.es.md) | Full guide to the Lua 5.4 plugin API `1.0.1` |
| **Example plugin** | [plugins/ExamplePlugin](plugins/ExamplePlugin) | [plugins/ExamplePlugin](plugins/ExamplePlugin) | Commented reference plugin you can copy and run |

## Repository layout

```
.
├── README.md                     <- this file (main index)
└── plugins/
    ├── plugin.md                 <- plugin guide (English)
    ├── plugin.es.md              <- plugin guide (Español)
    └── ExamplePlugin/            <- ready-to-run example plugin
        ├── README.md
        ├── plugin.yml
        └── src/
            ├── main.lua
            └── core/
```

## Where to start

- **Writing your first plugin?** Read [plugins/plugin.md](plugins/plugin.md), section *Your first plugin*.
- **Prefer learning from code?** Copy `plugins/ExamplePlugin/` into your server's `plugins/` folder and run `/plugins reload`.

## Adding new docs

1. Create a folder per topic (for example `config/` or `commands/`).
2. Write one file per language: `topic.md` (English) and `topic.es.md` (Español), each linking to the other at the top.
3. Add a row to the **Index** table above and update the **Repository layout**.

---

## Documentación de CurseStone

🌐 [English](#cursestone-documentation) · **Español**

Documentación oficial del software de servidor **CurseStone** (MCPE 0.15.10 / protocolo 84).

### Índice

| Tema | English | Español | Descripción |
|---|---|---|---|
| **Plugins (Lua)** | [plugins/plugin.md](plugins/plugin.md) | [plugins/plugin.es.md](plugins/plugin.es.md) | Guía completa de la API de plugins Lua 5.4 `1.0.1` |
| **Plugin de ejemplo** | [plugins/ExamplePlugin](plugins/ExamplePlugin) | [plugins/ExamplePlugin](plugins/ExamplePlugin) | Plugin de referencia comentado, listo para copiar y ejecutar |

### Estructura del repositorio

```
.
├── README.md                     <- este archivo (índice principal)
└── plugins/
    ├── plugin.md                 <- guía de plugins (English)
    ├── plugin.es.md              <- guía de plugins (Español)
    └── ExamplePlugin/            <- plugin de ejemplo listo para usar
        ├── README.md
        ├── plugin.yml
        └── src/
            ├── main.lua
            └── core/
```

### Por dónde empezar

- **¿Tu primer plugin?** Lee [plugins/plugin.es.md](plugins/plugin.es.md), sección *Tu primer plugin*.
- **¿Prefieres aprender con código?** Copia `plugins/ExamplePlugin/` a la carpeta `plugins/` de tu servidor y ejecuta `/plugins reload`.

### Agregar nuevos docs

1. Crea una carpeta por tema (por ejemplo `config/` o `commands/`).
2. Escribe un archivo por idioma: `tema.md` (English) y `tema.es.md` (Español), enlazados entre sí arriba.
3. Agrega una fila a la tabla **Índice** y actualiza la **Estructura del repositorio**.
