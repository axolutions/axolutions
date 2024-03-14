<template>
  <div class="relative mx-auto max-w-3xl text-center">
    <h1
      class="bg-gradient-to-br from-white to-white bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]"
      style="opacity: 1; transform: none"
    >
      A solução ideal para sua empresa:
      <br />
      <span
        class="animate-bounce inline bg-gradient-to-r from-[#c875df] via-[#d456f7] to-[#590570] text-transparent bg-clip-text"
        >Axolutions
      </span>
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
          class="group relative rounded-full p-px text-sm/6 text-zinc-300 duration-300 hover:text-zinc-100 hover:shadow-glow"
          type="button"
        >
          <span class="absolute inset-0 overflow-hidden rounded-full">
            <span
              class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(148,0,211,0.6)_0%,rgba(75,0,130,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></span>
          </span>
          <div
            class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10"
          >
            <a href="https://wa.me/5511981914677?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:">
              Solucione sua necessidade
            </a>
          </div>
          <span
            class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-violet-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"
          ></span>
        </button>
      </div>
      <div class="group" style="opacity: 1">
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

    <div class="perspective-[1500px] relative pt-16" style="opacity: 1">
      <NuxtParticles
        id="tsparticles"
        :options="options"
        class="pointer-events-none absolute -top-36 left-1/2 h-[32rem] w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden lg:w-[60rem]"
        @load="onLoad"
      ></NuxtParticles>

      <div class="relative" style="transform: none">
        <div
          class="absolute -top-px right-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64"
        >
          <div
            class="h-px w-full animate-starlight-right bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"
          ></div>
        </div>
        <div
          class="rounded-md bg-zinc-950 ring-1 ring-white/10 lg:rounded-2xl"
        ></div>
        <div
          class="absolute -bottom-2 left-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64"
        >
          <div
            class="h-px w-full animate-starlight-left bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Container } from "tsparticles-engine";
const options = ref({
  fpsLimit: 60,
  interactivity: {
    modes: {
      push: { quantity: 8 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    number: {
      density: {
        enable: true,
        area: 900,
      },
      value: 90,
    },
    opacity: {
      animation: {},
      value: {
        min: 0,
        max: 0.5,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 1.9 },
    },
    move: {
      direction: "top",
      enable: true,
      speed: 0.8,
    },
  },
});

const onLoad = (container: Container) => {
  container.play();
};
</script>

<style>
#tsparticles {
  height: 2300vh;
}
</style>
