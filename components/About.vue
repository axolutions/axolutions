<template>
  <div class="relative bg-zync-500">
    <div
      class="bg-white-950 ring-1 ring-white/10 rounded-2xl text-purple from-white to-white bg-zync-500 overflow-hidden relative"
      :style="{ opacity: 1, backgroundColor: '#111317' }"
    >
      <span
        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-purple-600 animate-slideRight"
      ></span>
      <span
        class="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent to-purple-600 animate-slideDown delay-1000"
      ></span>
      <span
        class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-transparent to-purple-600 animate-slideLeft"
      ></span>
      <span
        class="absolute top-0 left-0 w-1 h-full bg-gradient-to-t from-transparent to-purple-600 animate-slideUp delay-1000"
      ></span>
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
                  A Axolutions é a startup líder em desenvolvimento de softwares
                  inovadores, dedicada a fornecer soluções personalizadas para
                  impulsionar o crescimento da sua empresa. Com experiência no
                  mercado, construímos uma reputação sólida pela excelência dos
                  nossos sistemas e pelo compromisso com a sua satisfação.
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
                    <h2
                      class="contador text-3xl sm:text-4xl font-bold"
                      data-valor-final="2700"
                    >
                      2.7K+
                    </h2>
                    <p class="text-xl text-muted-foreground">Usuários</p>
                  </div>
                  <div class="space-y-2 text-center">
                    <h2
                      class="contador text-3xl sm:text-4xl font-bold"
                      data-valor-final="57"
                    >
                      57
                    </h2>
                    <p class="text-xl text-muted-foreground">Clientes</p>
                  </div>
                  <div class="space-y-2 text-center">
                    <h2
                      class="contador text-3xl sm:text-4xl font-bold"
                      data-valor-final="16"
                    >
                      16
                    </h2>
                    <p class="text-xl text-muted-foreground">Colaboradores</p>
                  </div>
                  <div class="space-y-2 text-center">
                    <h2
                      class="contador text-3xl sm:text-4xl font-bold"
                      data-valor-final="62"
                    >
                      62
                    </h2>
                    <p class="text-xl text-muted-foreground">Projetos</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
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
  mounted() {
    if (typeof document !== "undefined") {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startCountAnimation();
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      const elements = document.querySelectorAll(".contador");
      elements.forEach((element) => {
        observer.observe(element);
      });
    }
  },
  methods: {
    startCountAnimation() {
      function animateCounter(
        element,
        finalValue,
        interval,
        duration,
        startTime
      ) {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= duration) {
          element.textContent = finalValue.toLocaleString();
          return;
        }
        const currentValue = Math.floor((finalValue / duration) * elapsedTime);
        element.textContent = currentValue.toLocaleString();
        setTimeout(() => {
          animateCounter(element, finalValue, interval, duration, startTime);
        }, interval);
      }

      const elements = document.querySelectorAll(".contador");
      elements.forEach((element) => {
        const finalValue = parseInt(element.getAttribute("data-valor-final"));
        const interval = 1;
        const duration = 2000;
        const startTime = Date.now();
        animateCounter(element, finalValue, interval, duration, startTime);
      });
    },
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

@keyframes slideRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes slideLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.animate-slideRight {
  animation: slideRight 4s linear infinite;
}

.animate-slideDown {
  animation: slideDown 4s linear infinite;
}

.animate-slideLeft {
  animation: slideLeft 4s linear infinite;
}

.animate-slideUp {
  animation: slideUp 4s linear infinite;
}

.delay-800 {
  animation-delay: 1.6s;
}

.delay-1000 {
  animation-delay: 2s;
}
</style>
