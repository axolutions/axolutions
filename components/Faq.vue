<template>
  <section id="faq" class=" mx-auto px-4 py-24 sm:py-32 text-white">
    <div class="text-center mb-12">
      <h2
        class="text-4xl pb-4 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-900"
      >
        Perguntas Frequentes
      </h2>
    </div>

    <div class=" mx-auto">
      <ul>
        <li v-for="(faq, index) in faqs" :key="index" class="mb-4">
          <button
            @click="toggleAccordion(index)"
            :aria-expanded="activeIndex === index ? 'true' : 'false'"
            class="flex items-center justify-between w-full px-4 py-3 text-left text-lg font-medium rounded-lg shadow focus:outline-none bg-zinc-800 hover:bg-zinc-700 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 transition duration-300 ease-in-out"
          >
            <span>{{ faq.question }}</span>
            <svg
              :class="{ 'rotate-180': activeIndex === index }"
              class="w-6 h-6 transition-transform text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            v-show="activeIndex === index"
            class="mt-2 px-4 py-2 text-base text-gray-300 bg-zinc-800 rounded-lg shadow transition-max-height duration-500 ease-in-out"
            :class="{
              'max-h-96': activeIndex === index,
              'max-h-0': activeIndex !== index,
            }"
          >
            <p
              class="transition-opacity duration-500 ease-in-out"
              :class="{
                'opacity-0': activeIndex !== index,
                'opacity-100': activeIndex === index,
              }"
            >
              {{ faq.answer }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: null,
      faqs: [
        {
          question: "De que maneira a Axolutions pode beneficiar meu negócio?",
          answer:
            "Nossos produtos, são desenvolvidos para simplificar operações, aumentar a produtividade e melhorar a experiência do cliente, ajudando você a alcançar seus objetivos de negócios de forma eficaz.",
        },
        {
          question:
            "Como a Axolutions protege meus dados e informações comerciais?",
          answer:
            "A segurança dos dados dos nossos clientes é uma prioridade nossa. Implementamos medidas rigorosas de segurança, incluindo criptografia avançada, autenticação de dois fatores e práticas de segurança líderes do setor para garantir a proteção total de suas informações comerciais confidenciais.",
        },
        {
          question:
            "É possível integrar as soluções da Axolutions ao meu sistema existente?",
          answer:
            "Sim, nossas soluções foram projetadas com integrações flexíveis em mente. Trabalhamos para garantir que nossos produtos possam ser facilmente integrados a uma variedade de sistemas e aplicativos existentes, permitindo uma colaboração eficiente e uma transição suave para nossas soluções.",
        },
        {
          question:
            "Como posso contratar a Axolutions para um projeto específico?",
          answer:
            "Para discutir um projeto específico e explorar como a Axolutions pode ajudar sua empresa, entre em contato conosco através do nosso número ou redes sociais. Nossa equipe terá prazer em entender suas necessidades e fornecer uma solução personalizada que atenda aos seus requisitos.",
        },
        {
          question:
            "A Axolutions oferece serviços de freelancers ou consultoria?",
          answer:
            "Sim, a Axolutions oferece tanto serviços de freelancers quanto consultoria. Estamos preparados para atender às necessidades do seu projeto, seja fornecendo profissionais qualificados para trabalhar em regime de freelancer ou oferecendo consultoria especializada para ajudar a impulsionar o crescimento e a inovação do seu negócio. Entre em contato conosco para discutir como podemos ajudar a atender às suas necessidades específicas.",
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.animate-slide-down {
  max-height: 1000px;
  transition: max-height 3s ease-in-out;
  overflow: hidden;
}
</style>
