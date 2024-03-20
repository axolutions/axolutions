<template>
  <section id="intro" class="mt-20 mx-auto max-w-7xl py-16 md:py-24 lg:px-8">
    <div class="flex justify-center">
      <div class="container flex items-center justify-center">
        <div class="timeline relative">
          <ul class="text-white">
            <li
              class="rounded-lg bg-white-950 ring-1 ring-white/10 lg:rounded-2x p-5 mb-10"
              :style="{ opacity: 1, backgroundColor: '#111317' }"
            >
              <div class="timeline-content">
                <h1
                  class="font-semibold text-2xl leading-7 mb-4 text-center text-purple-600"
                  style="color: #bd9ad8"
                >
                  1. Entendemos suas necessidades
                </h1>
                <p>
                  Nossa abordagem personalizada começa com uma profunda
                  compreensão de suas metas e objetivos para garantir soluções
                  sob medida que impulsionam o seu sucesso e aumentam sua
                  relevância no mercado, melhorando seu ranking em mecanismos de
                  buscas.
                </p>
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
            </li>
            <li
              class="rounded-md bg-white-950 ring-1 ring-white/10 lg:rounded-2xl p-5 mb-10"
              :style="{ opacity: 1, backgroundColor: '#111317' }"
            >
              <div class="timeline-content">
                <h1
                  class="font-semibold text-2xl leading-7 mb-4 text-center text-purple-600"
                  style="color: #bd9ad8"
                >
                  2. Planejamento estratégico
                </h1>
                <p>
                  Colocamos a criatividade em ação para desenvolver um sistema
                  inovador. Nosso planejamento estratégico leva em consideração
                  seus objetivos e desafios, garantindo soluções quue aumentam
                  sua visibilidade e envolvem seu público-alvo.
                </p>
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
            </li>
            <li
              class="rounded-md bg-white-950 ring-1 ring-white/10 lg:rounded-2xl p-5 mb-10"
              :style="{ opacity: 1, backgroundColor: '#111317' }"
            >
              <div class="timeline-content">
                <h1
                  class="font-semibold text-2xl leading-7 mb-4 text-center text-purple-600"
                  style="color: #bd9ad8"
                >
                  3. Desenvolvimento do software
                </h1>
                <p>
                  Nossa equipe altamente qualificada executa o desenvolvimento
                  do seu projeto com eficiência e excelência. Utilizamos
                  tecnologias avançadas e as melhores práticas para garantir
                  resultados de alta qualidade que impulsionam o seu negócio.
                </p>
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
            </li>
            <li
              class="rounded-md bg-white-950 ring-1 ring-white/10 lg:rounded-2xl p-5"
              :style="{ opacity: 1, backgroundColor: '#111317' }"
            >
              <div class="timeline-content">
                <h1
                  class="font-semibold text-2xl leading-7 mb-4 text-center text-purple-600"
                  style="color: #bd9ad8"
                >
                  4. Aprovação e refinamento
                </h1>
                <p>
                  Após o desenvolvimento, entregamos soluções prontas para o
                  sucesso. Nossa dedicação à excelência e à satisfação do
                  cliente garante que você receba resultados concretos que
                  superam as expectativas. Seu sucesso é a nossa prioridade.
                </p>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div class="section-banner">
</div>

</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.timeline {
  position: relative;
}

.timeline ul {
  list-style: none;
}
.timeline ul li {
  padding: 20px;
  color: white;
  border-radius: 10px;
  margin-bottom: 40px;
}
.timeline ul li:last-child {
  margin-bottom: 0;
}
.timeline-content h1 {
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 10px;
   text-align: center;
    margin-bottom: 1em;
    color: #bd9ad8;
    font-weight: bold;
}

.timeline-content .date {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
@media only screen and (min-width: 880px) {
  .timeline-content h1 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 1em;
    color: #bd9ad8;
    font-weight: bold;
  }

  .timeline-content p {
    font-size: 20px;
  }
  .timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #8f8f8f;
  }
  .timeline ul li {
    padding: 40px;
    width: 50%;
    position: relative;
    margin-bottom: 20px;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
  }
  .timeline ul li::before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: #8f61b3;
    top: 0px;
  }
  .timeline ul li:nth-child(odd)::before {
    transform: translate(50%, -50%);
    right: -30px;
  }
  .timeline ul li:nth-child(even)::before {
    transform: translate(-50%, -50%);
    left: -30px;
  }
}
</style>
