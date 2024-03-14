<template>
  <section id="faq" class="container py-24 sm:py-32 text-white">
     <div class="text-center mb-6">
      <div class="text-4xl/[1.07] font-bold tracking-tight md:text-5xl/[1.07]">
        <span
          class="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent"
          >
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-900"
          >
            Perguntas frequentes
          </span></span
        >
      </div>
    </div>

    <div class="w-full" data-orientation="vertical">
      <div
        v-for="(faq, index) in faqs"
        :key="faq.value"
        class="border-b"
        :class="{ 'border-gray-200': activeIndex !== index }"
      >
        <h3 class="flex">
          <button
            @click="toggleAccordion(index)"
            :aria-expanded="activeIndex === index ? 'true' : 'false'"
            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
          >
            {{ faq.question }}
            <svg
              :class="{ 'rotate-180': activeIndex === index }"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4 shrink-0 transition-transform duration-200"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </h3>
        <div
          v-if="activeIndex === index"
          class="overflow-hidden transition-all"
          :class="{ 'animate-slide-down': activeIndex === index }"
        >
          <p class="pb-4 pt-0 text-muted-foreground text-[16px]">
            {{ faq.answer }}
          </p>
        </div>
      </div>
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
          answer: "Na Axolutions, oferecemos soluções tecnológicas inovadoras projetadas para impulsionar o sucesso e a eficiência de seu negócio. Nossos produtos, são desenvolvidos para simplificar operações, aumentar a produtividade e melhorar a experiência do cliente, ajudando você a alcançar seus objetivos de negócios de forma eficaz."
        },
        {
          question: "Como a Axolutions protege meus dados e informações comerciais?",
          answer: "A segurança dos dados dos nossos clientes é uma prioridade na Axolutions. Implementamos medidas rigorosas de segurança, incluindo criptografia avançada, autenticação de dois fatores e práticas de segurança líderes do setor para garantir a proteção total de suas informações comerciais confidenciais."
        },
        {
          question: "É possível integrar as soluções da Axolutions ao meu sistema existente?",
          answer: "Sim, nossas soluções foram projetadas com integrações flexíveis em mente. Trabalhamos para garantir que nossos produtos possam ser facilmente integrados a uma variedade de sistemas e aplicativos existentes, permitindo uma colaboração eficiente e uma transição suave para nossas soluções."
        },
        {
          question: "Como posso contratar a Axolutions para um projeto específico?",
          answer: "Para discutir um projeto específico e explorar como a Axolutions pode ajudar sua empresa, entre em contato conosco através do nosso número ou redes sociais. Nossa equipe terá prazer em entender suas necessidades e fornecer uma solução personalizada que atenda aos seus requisitos."
        },
        {
          question: "A Axolutions oferece serviços de freelancers ou consultoria?",
          answer: "Sim, a Axolutions oferece tanto serviços de freelancers quanto consultoria. Estamos preparados para atender às necessidades do seu projeto, seja fornecendo profissionais qualificados para trabalhar em regime de freelancer ou oferecendo consultoria especializada para ajudar a impulsionar o crescimento e a inovação do seu negócio. Entre em contato conosco para discutir como podemos ajudar a atender às suas necessidades específicas."
        }
      ]
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
