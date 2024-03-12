<template>
  <section
    id="intro"
    class="mt-20 mx-auto max-w-7xl py-16  flex justify-center items-center"
  >
    <div class="grid items-start justify-between gap-5 md:grid-cols-1">
      <div class="flex items-center justify-center">
        <div class="text-center">
          <span
            class="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent"
          >
            Como
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-900"
            >
              trabalhamos
            </span>
          </span>
          <p class="text-xl text-zinc-400">
            Nosso modo de trabalho é dividido em quatro pilares:
          </p>
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white"
      >
        <!-- Card 1 -->
        <div
          class="p-4 bg-primary cardBorder"
          :style="{ opacity: 1, backgroundColor: '#111317' }"
        >
          <div class="flex justify-center mb-4">
            <img src="~assets/icons/how1.svg" class="w-16" />
          </div>
          <h3 class="text-lg font-semibold text-center cardTitle">
            1. Captando sua necessidade
          </h3>
          <br />
          <p class="text-lg text-center">
            Entendemos suas metas e objetivos para fornecer soluções
            personalizadas que atendam às necessidades exclusivas de sua
            empresa.
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="p-4 bg-primary cardBorder"
          :style="{ opacity: 1, backgroundColor: '#111317' }"
        >
         <div class="flex justify-center mb-4">
            <img src="~assets/icons/how2.svg" class="w-16" />
          </div>
          <h3 class="text-lg font-semibold text-center cardTitle">
            2. Planejamento estratégico
          </h3>
          <br />
          <p class="text-lg text-center">
            Utilizamos uma abordagem criativa para desenvolver soluções únicas
            que diferenciam sua marca e envolvem seu público-alvo.
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="p-4 bg-primary cardBorder"
          :style="{ opacity: 1, backgroundColor: '#111317' }"
        >
          <h2 class="text-lg font-semibold text-center">
            3. Executando com eficiência
          </h2>
          <br />
          <p class="text-sm text-center">
            Implementamos estratégias utilizando tecnologias avançadas e as
            melhores práticas para desenvolver o melhor sistema para sua
            empresa.
          </p>
        </div>

        <!-- Card 4 -->
        <div
          class="p-4 bg-primary cardBorder"
          :style="{ opacity: 1, backgroundColor: '#111317' }"
        >
          <h2 class="text-lg font-semibold text-center">
            4. Aprovação e refinamento
          </h2>
          <br />
          <p class="text-sm text-center">
            Após a implementação, enviamos o software para sua aprovação,
            realizando ajustes conforme necessário, garantindo a satisfação do
            cliente.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cardBorder {
  border: #36203c 1px solid !important;
}

.cardTitle{
  font-size: 1.5rem;
}
</style>
