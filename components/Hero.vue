<template>
  <div class="relative text-center hero">
    <div
      class="relative text-center hero flex flex-col items-center justify-center"
    >
      <h1
        class="bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]"
        style="transform: none"
      >
        A solução ideal para sua empresa:
        <br />
        <div class="animacao">
          <span
            class="inline bg-gradient-to-r from-[#9611FF] via-[#d456f7] to-[#9611FF] bg-clip-text"
            >Axolutions
          </span>
        </div>
      </h1>

      <p
        class="mt-6 text-lg font-medium text-zinc-200 md:text-xl"
        style="opacity: 1"
      >
        Softwares personalizados e inovadores para impulsionar o seu negócio.
      </p>
      <div class="mt-10 flex flex-col items-center justify-center gap-y-8">
        <div style="opacity: 1">
          <button
            class="glow-on-hover group relative rounded-full p-px text-sm/6 text-zinc-300 duration-300 hover:text-zinc-100 hover:shadow-glow"
            type="button"
          >
            <div
              class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10 text-lg"
            >
              <a
                href="https://wa.me/5511981914677?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:"
                class="flex items-center gap-2"
              >
                <icon name="akar-icons:whatsapp-fill" color="" class="pb-0" />
                Entre em contato
              </a>
            </div>
            <span
              class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-violet-400/0 via-violet-400/90 to-violet-400/0 transition-opacity duration-500 group-hover:gopacity-40"
            ></span>
          </button>
        </div>

        <div class="group hidden sm:block" style="opacity: 1">
          <a class="flex flex-col items-center gap-1" href="/#intro"
            ><p
              class="text-sm/6 text-zinc-400 duration-300 group-hover:text-zinc-100"
            >
              Conheça nossa empresa
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-100"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="perspective-[4000px]" style="opacity: 1">
      <NuxtParticles
        id="tsparticles"
        :options="options"
        class="pointer-events-none absolute left-1/2 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        @load="onLoad"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Container } from "tsparticles-engine";
const options = ref({
  fpsLimit: 40,
  interactivity: {
    modes: {
      push: { quantity: 8 },
    },
  },
  particles: {
    color: { value: "#a3a0a0" },
    number: {
      density: {
        enable: true,
        area: 2000,
      },
      value: 400,
    },
    opacity: {
      value: {
        min: 0,
        max: 0.5,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 0.9, max: 1.7 },
    },
    move: {
      direction: "bottom",
      enable: true,
      speed: 1, // Increased speed for faster particle movement
    },
  },
});

const onLoad = (container: Container) => {
  container.play();
};
</script>

<style>
@media only screen and (min-width: 800px) {
  .hero{
    height: 100vh !important;
  }

}
.hero {
  height: 85vh;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden;
}

#tsparticles {
  height: 200%;
}

/* Define the keyframes for the fadeIn animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
