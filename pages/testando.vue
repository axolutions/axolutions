<template>
  <div class="py-24 sm:py-32 lg:pb-40">

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]"
          style="opacity: 1; transform: none"
        >
          Unleash the power of intuitive finance
        </h1>
        <p
          class="mt-6 text-lg font-medium text-zinc-400 md:text-xl"
          style="opacity: 1; transform: none"
        >
          Say goodbye to the outdated financial tools. Every small business
          owner, regardless of the background, can now manage their business
          like a pro. Simple. Intuitive. And never boring.
        </p>

        <div
          class="perspective-[1500px] relative pt-16 bg-red-900"
          style="opacity: 1"
        >
          <NuxtParticles
            id="tsparticles"
            :options="options"
            class="pointer-events-none absolute bg-blue-900 -top-36 left-1/2 h-[32rem] w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden lg:w-[60rem]"
            @load="onLoad"
          ></NuxtParticles>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";

definePageMeta({
  layout: "testandinho",
});

const options = ref({
  background: {
    color: "transparent",
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: ["circle", "square", "triangle", "polygon"],
      polygon: {
        sides: 5,
      },
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
});

const onLoad = (container: Container) => {
  container.pause();
  setTimeout(() => container.play(), 500);
};
</script>

<style>
#tsparticles {
  height: 10vh;
}
</style>
