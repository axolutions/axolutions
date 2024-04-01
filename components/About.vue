<template>
  <div class="relative bg-zync-500">
    <div
      class="rounded-md bg-white-950 ring-1 ring-white/10 lg:rounded-2xl text-purple from-white to-white bg-zync-500"
      :style="{ opacity: 1, backgroundColor: '#111317' }"
    >
      <div class="bg-muted/50 rounded-lg py-12">
        <div
          class="px-6 flex flex-col-reverse justify-center md:flex-row gap-8 md:gap-12"
          :style="{ flexWrap: 'wrap' }"
        >
          <div
            :style="{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }"
          >
            <img
              src="~/assets/images/ra.png"
              class="w-[70px] object-contain rounded-lg"
            />
          </div>

          <div class="bg-green-0 flex flex-col justify-between">
            <div>
              <div class="text-center">
                <h2 class="text-3xl font-bold text-zinc-400">
                  <span class="text-zinc-200"
                    >Sobre
                    <span
                      class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700"
                      >nós</span
                    ></span
                  >
                </h2>
              </div>
              <hr
                class="border-0 h-[1px] my-6 mx- bg-gradient-to-r from-purple-400 via-purple-500 to-purple-900"
              />
              <div>
                <p class="text-xl text-zinc-300 textAbout">
                  A Axolutions é aaaaaaaaaaaaaaaaaaa consultoria líder em desenvolvimento de
                  softwares inovadores, dedicada a fornecer soluções
                  personalizadas para impulsionar o crescimento da sua empresa.
                  Com experiência no mercado, construímos uma reputação sólida
                  pela excelência dos nossos sistemas e pelo compromisso com a
                  sua satisfação.
                </p>
                <br />
                <div v-if="showMore">
                  <p class="text-xl text-zinc-300 mt-2 textAbout">
                    Durante nossa história impulsionamos a trajetória de outras
                    57 empresas, e nossos projetos são testemunho do nosso
                    compromisso com a qualidade e inovação. Com a Axolutions,
                    você terá a disposição uma equipe de 16 colaboradores
                    apaixonados e qualificados para desenvolver o melhor
                    software para a sua empresa.
                  </p>
                  <br />
                  <p class="text-xl text-zinc-300 mt-2 textAbout">
                    Nossa abordagem centrada no cliente e nossa expertise em
                    desenvolvimento de software nos permitem criar soluções
                    personalizadas que impulsionam a produtividade, reduzem seus
                    custos operacionais e melhoram a experiência do seu cliente.
                  </p>
                </div>
              </div>
              <br />
              <button
                v-if="!showMore"
                @click="showMore = true"
                class="mt-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-2 px-4 hover:scale-105 transition-transform duration-300"
                style="margin: 0 auto; display: block"
              >
                <div class="flex flex-row">
                  <span class="">Ler mais</span>
                  <!-- Ícone de seta em SVG -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
              <button
                v-if="showMore"
                @click="showMore = false"
                class="mt-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-2 px-4 hover:scale-105 transition-transform duration-300"
                style="margin: 0 auto; display: block"
              >
                <div class="flex flex-row gap-2">
                  <span class="">Mostrar menos</span>
                  <!-- Ícone de seta em SVG -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 transform translate-y-0 transition-transform duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
              </button>

              <section id="statistics">
                <div
                  class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-zinc-200"
                >
                  <div class="space-y-2 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold">2.7K+</h2>
                    <p class="text-xl text-muted-foreground">Usuários</p>
                  </div>
                  <div class="space-y-2 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold">57</h2>
                    <p class="text-xl text-muted-foreground">Clientes</p>
                  </div>
                  <div class="space-y-2 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold">16</h2>

                    <p class="text-xl text-muted-foreground">Colaboradores</p>
                  </div>
                  <div class="space-y-2 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold">62</h2>
                    <p class="text-xl text-muted-foreground">Projetos</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute -bottom-2 left-20 h-2 w-20 md:w-32 lg:w-64"
      :style="{
        maskImage:
          'linear-gradient(to right, rgba(217, 217, 217, 0) 0%, #d9d9d9 25%, #d9d9d9 75%, rgba(217, 217, 217, 0) 100%)',
      }"
    >
      <div
        class="h-px w-full bg-gradient-to-r from-violet-400/0 via-violet-400 to-violet-400/0"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
    };
  },
};
</script>

<style scoped>
#statistics {
  margin-top: 2rem;
}
@media (max-width: 768px) {
  .textAbout {
    font-size: 19px;
  }

  #statistics {
    margin-bottom: 2rem;
  }
}
</style>
