# voyo new core style

Modern Sass module system (`@use` / `@forward`) migration of `@voyo/core-style`.

## Import in Vite projects

```scss
@use "@voyo/new-core-style" as *;
```

Or import specific modules:

```scss
@use "@voyo/new-core-style/lib/vars" as *;
@use "@voyo/new-core-style/lib/mixins" as *;
```

## Legacy import (still supported)

```scss
@import "@voyo/new-core-style/lib/main";
```
