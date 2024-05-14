<template>
  <section class="mx-auto container px-4 py-24 text-white" id="projects">
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
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
      <ul class="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-2">
        <li
          v-for="(post, index) in posts"
          :key="index"
          class="w-full mx-auto group sm:max-w-sm"
        >
          <a :href="post.href" class="block">
            <div
              class="flex flex-col h-full group overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <img
                :src="post.img"
                loading="lazy"
                :alt="post.title"
                class="w-full h-48 object-cover rounded-t-lg group-hover:opacity-75"
              />
              <div
                class="flex flex-col justify-between p-6 space-y-4 flex-grow"
              >
                <h3 class="text-2xl font-semibold text-center">
                  {{ post.title }}
                </h3>
                <p class="text-sm text-gray-300">
                  {{ post.desc }}
                </p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axoChat from "@/assets/images/axochat.png";
import petus from "@/assets/images/petus.png";
import axoShop from "@/assets/images/axoshop.png";
import axoBot from "@/assets/images/axobot.png";
export default {
  name: "BlogPosts",
  data() {
    return {
      posts: [
        {
          title: "AxoChat",
          desc: "Centralizamos todos os seus atendimentos para maximizar sua eficiência, com um Chat-Bot com I.A integrada, relatórios personalizados e diversas funcionalidades para melhor atender o seu cliente.",
          img: axoChat,

          href: "javascript:void(0)",
        },
        {
          title: "AxoVet",
          desc: "ERP completo de gestão veterinária. A AxoVet proporciona uma interface intuitiva e as melhores ferramentas para você gerenciar toda a sua empresa de forma integrada e eficiente.",
          img: petus,
          href: "javascript:void(0)",
        },
        {
          title: "AxoShop",
          desc: "Transforme sua loja virtual com o AxoShop, o e-commerce personalizável mais completo do mercado. Com S.E.O otimizado e todas as melhores funcionalidades para maximizar suas vendas.",
          img: axoShop,
          href: "javascript:void(0)",
        },
        {
          title: "AxoBot",
          desc: "Introduzindo o AxoBot, a inteligência artificial definitiva para otimizar suas operações diárias. Gestão de dívidas, reuniões, pagamentos, atendimento. Um segundo cérebro pensando por você.",
          img: axoBot,
          href: "javascript:void(0)",
        },
      ],
    };
  },
};
</script>
