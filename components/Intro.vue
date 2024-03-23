<template>
  <section class="container mx-auto px-4 py-24 text-white" id="projects">
    <div class="text-center mb-16">
      <div class="text-4xl/[1.07] font-bold tracking-tight md:text-5xl/[1.07]">
        <span
          class="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent"
          >Conheça nossos
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-900"
          >
            projetos
          </span></span
        >
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="group flex flex-col overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      >
        <img
          class="object-cover w-full h-48 group-hover:opacity-75"
          :src="project.imageUrl"
          :alt="project.title"
        />

        <div class="flex flex-col justify-between p-6 space-y-4">
          <h3 class="text-2xl font-semibold text-center">
            {{ project.title }}
          </h3>
          <p class="text-sm text-gray-300">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsSection",
  data() {
    return {
      projects: [
        {
          id: "axochat",
          title: "AxoChat",
          description:
            "Centralizamos todos os seus atendimentos para garantir rapidez e eficiência, com um Chat-Bot inteligente e relatórios personalizados.",
          imageUrl: "/_nuxt/assets/images/axochat.png",
        },
        {
          id: "axovet",
          title: "AxoVet",
          description:
            "O melhor ERP de gestão veterinária. Com a AxoVet, você gerencia toda a sua empresa de forma integrada e eficiente.",
          imageUrl: "/_nuxt/assets/images/petus.png",
        },
        {
          id: "axoshop",
          title: "AxoShop",
          description:
            "Transforme sua loja virtual com o AxoShop, o e-commerce personalizável mais completo do mercado.",
          imageUrl: "/_nuxt/assets/images/axoshop.png",
        },
        {
          id: "axobot",
          title: "AxoBot",
          description:
            "Introduzindo o AxoBot, a inteligência artificial definitiva para otimizar suas operações diárias.",
          imageUrl: "/_nuxt/assets/images/axobot.png",
        },
        // Add more projects as needed
      ] as Project[],
    };
  },
});

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}
</script>
