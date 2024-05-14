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
          <div
            class="group flex flex-col overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          >
            <a :href="post.href">
              <img
                :src="post.img"
                loading="lazy"
                :alt="post.title"
                class="w-full rounded-lg group-hover:opacity-75"
              />
              <div class="flex flex-col justify-between p-6 space-y-4">
                <h3 class="text-2xl font-semibold text-center">AxoVet</h3>
                <p class="text-sm text-gray-300">
                  O melhor ERP de gestão veterinária. Com a AxoVet, você
                  gerencia toda a sua empresa de forma integrada e eficiente.
                </p>
              </div>
            </a>
          </div>
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
          title: "What is SaaS? Software as a Service Explained",
          desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
          img: axoChat,
          date: "Jan 4 2022",
          href: "javascript:void(0)",
        },
        {
          title: "A Quick Guide to WordPress Hosting",
          desc: "According to him, “I'm still surprised that this has happened. But we are surprised because we are so surprised.” More revelations.",
          img: petus,
          date: "Jan 4 2022",
          href: "javascript:void(0)",
        },
        {
          title: "7 Promising VS Code Extensions Introduced in 2022",
          desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
          img: axoShop,
          href: "javascript:void(0)",
        },
        {
          title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
          desc: "The powerful gravity waves resulting from the impact of the planets' moons — four in total — were finally resolved in 2015 when gravitational.",
          img: axoBot,
          date: "Jan 4 2022",
          href: "javascript:void(0)",
        },
      ],
    };
  },
};
</script>
