<template>
  <header class="absolute inset-x-0 top-0 z-10 mt-2">
    <div class="relative flex justify-center">
      <div class="mx-8 w-full">
        <nav
          class="flex min-h-[1rem] items-top justify-between"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <a href="/">
              <img src="~/assets/images/ra.png" class="h-14 sm:hidden" />
              <img
                src="~/assets/images/logo.png"
                class="h-14 hidden sm:block pt-2"
              />
            </a>
          </div>
          <div
            class="flex flex-1 items-center justify-end space-x-4 text-sm font-medium text-zinc-300 transition sm:space-x-6"
          >
            <a
              href="#projects"
              class="duration-300 hover:text-zinc-100 hover:shadow-glow"
              >Projetos</a
            >

            <button
              class="glow-on-hover group relative rounded-full p-px text-sm/6 text-zinc-300 duration-300 hover:text-zinc-100 hover:shadow-glow"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R19la:"
              data-state="closed"
            >
              <div
                class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10"
              >
                <a
                  class="flex items-center gap-3"
                  href="https://wa.me/5511981914677?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:"
                >
                  Entre em contato
                </a>
              </div>
              <span
                class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-violet-400/90 to-cyan-400/0 group-hover:hidden"
              ></span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style>
.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #8a2be2,
    #9400d3,
    #9932cc,
    #8a2be2,
    #800080,
    #4b0082,
    #7e10a0
  );
  position: absolute;
  top: -1px;
  left: -1px;
  background-size: 200%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  animation: glowing 40s linear infinite;
  opacity: 0;
  transition: opacity 0.7s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: -400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
