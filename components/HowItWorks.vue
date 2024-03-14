<template>
  <section id="intro" class="mt-20 mx-auto max-w-7xl py-16 md:py-24 lg:px-8">
    <div class="text-center">
      <div
        class="text-4xl/[1.07] font-bold tracking-tight md:text-5xl/[1.07] mb-20"
      >
        <span
          class="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent"
          >Descubra
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-900"
          >
            como trabalhamos
          </span>
        </span>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="container">
        <div class="timeline">
          <ul>
            <li
              class="rounded-md bg-white-950 ring-1 ring-white/10 lg:rounded-2xl"
              :style="{ opacity: 1, backgroundColor: '#111317' }"
            >
              <div class="timeline-content">
                <h1>1. Compreendendo sua necessidade: </h1>
                <p>
                  Começamos nosso projeto captando suas metas e objetivos para fornecer soluções
                  personalizadas que atendam às necessidades exclusivas da sua
                  empresa, aumentando sua relevância no mercado.
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
              class="rounded-md bg-white-950 ring-1 ring-white/10 lg:rounded-2xl"
              :style="{ opacity: 1, backgroundColor: '#111317' }"
            >
              <div class="timeline-content">
                <h1>2. Planejamento estrtégico: </h1>
                <p>
                  Utilizamos uma abordagem criativa para desenvolver um sistema que diferencie sua marca, aumentando sua visibilidade e envolva seu público-alvo, além de melhorar seu ranking em mecanismos de buscas.
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
              class="rounded-md bg-white-950 ring-1 ring-white/10 lg:rounded-2xl"
              :style="{ opacity: 1, backgroundColor: '#111317' }"
            >
              <div class="timeline-content">
                <h1>3. Executando com eficiência: </h1>
                <p>
                  Implementamos estratégias utilizando tecnologias avançadas e
                  as melhores práticas para desenvolver o melhor sistema para
                  sua empresa, buscando sempre otimizar a performance e a eficiência.
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
              class="rounded-md bg-white-950 ring-1 ring-white/10 lg:rounded-2xl"
              :style="{ opacity: 1, backgroundColor: '#111317' }"
            >
              <div class="timeline-content">
                <h1>4. Aprovação e refinamento</h1>
                <p>
                  Após a implementação, enviamos o software para sua aprovação,
                  realizando ajustes conforme necessário, garantindo a
                  satisfação do cliente.
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
}
.timeline-content p {

}
.timeline-content .date {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
}
@media only screen and (min-width: 880px) {
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
  .timeline-content .date {
    position: absolute;
    top: -30px;
  }
}
</style>
