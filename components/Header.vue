<template>
  <header className="absolute inset-x-0 top-0 z-10 mt-2">
    <div className="relative flex justify-center">
      <div className="mx-4 w-full max-w-7xl">
        <nav
          className="flex min-h-[1rem] items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/"> </a>
            <NuxtImg src="ra.png" class="h-14 sm:hidden" />
            <NuxtImg src="logo.png" class="h-14 hidden sm:block" />
          </div>
          <div
            className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium text-zinc-300 transition hover:text-zinc-100 sm:space-x-6"
          >
            <a href="#projects">Portifólio.</a>
            <button
              className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R19la:"
              data-state="closed"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span
                  className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(148,0,211,0.6)_0%,rgba(75,0,130,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>
              </span>
              <div
                className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10"
              >
                <a href="https://wa.me/5511981914677?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:">
                  Entre em contato!
                </a>
              </div>
              <span
                className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-violet-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"
              ></span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
