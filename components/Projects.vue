<template>
  <section
    class="mx-auto container px-4 py-24 text-white bg-red-"
    id="projects"
  >
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
            <div class="group flex flex-col h-full max-w-sm overflow-hidden shadow-lg bg-zinc-900 flex flex-col rounded-xl shadow-lg transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <img
                :src="post.img"
                loading="lazy"
                :alt="post.title"
                class="w-full h-48 object-cover rounded-t-lg group-hover:opacity-75"
              />
              <div class="px-6 py-4">
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
              <div class="px-6 pt-4 pb-2">
                <span
                  v-for="(tag, tagIndex) in post.tags"
                  :key="tagIndex"
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >{{ tag }}</span
                >
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
          desc: "Centralizamos todos os seus atendimentos, com Chat-Bot com I.A integrada, relatórios e diversas funcionalidades para melhor atender o seu cliente.",
          img: axoChat,
          href: "javascript:void(0)",
          tags: ["#ChatBot", "#I.A", "#Atendimento"],
        },
        {
          title: "AxoVet",
          desc: "ERP completo de gestão veterinária. Com as melhores ferramentas para você gerenciar toda a sua empresa de forma integrada e eficiente.",
          img: petus,
          href: "javascript:void(0)",
          tags: ["#Gestão", "#ERP", "#Veterinária"],
        },
        {
          title: "AxoShop",
          desc: "AxoShop, o e-commerce personalizável mais completo do mercado. Com SEO otimizado e todas as melhores práticas para maximizar suas vendas.",
          img: axoShop,
          href: "javascript:void(0)",
          tags: ["#E-commerce", "#SEO", "#Vendas"],
        },
        {
          title: "AxoBot",
          desc: "A I.A feita para otimizar suas operações diárias. Gestão de dívidas, reuniões, pagamentos. Um segundo cérebro pensando por você.",
          img: axoBot,
          href: "javascript:void(0)",
          tags: ["#I.A", "#Automação", "#Prodtividade"],
        },
      ],
    };
  },
};
</script>
