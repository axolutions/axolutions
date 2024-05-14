<template>
  <section class="flex min-h-screen flex-col justify-center text-white">
    <div class="w-full">
      <div class="container mx-auto mt-32 mb-0 flex flex-col items-center ">
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
        <div
          class="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-blue-500 transition hover:bg-purple-blue-600 focus:bg-purple-blue-700 bg-purple-500"
            >
              <span class="text-base font-bold leading-7 text-white">1</span>
            </div>
            <div class="flex flex-col">
              <h3
                class="mb-2 text-base font-bold leading-tight text-purple-400"
              >
                Estudo
              </h3>
              <p class="text-base font-medium leading-7 text-dark-grey-600">
                Compreendemos suas metas e objetivos para idealizar a solução ideal para o seu sucesso.
              </p>
            </div>
          </div>
          <div class="rotate-90 lg:rotate-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
            >
              <g clip-path="url(#clip0_3346_6663)">
                <path
                  d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3346_6663">
                  <rect
                    width="42"
                    height="42"
                    fill="white"
                    transform="translate(0.666748)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="flex items-start gap-4">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-500 bg-transparent"
            >
              <span class="text-base font-bold leading-7">2</span>
            </div>
            <div class="flex flex-col">
              <h3
                class="mb-2 text-base font-bold leading-tight text-dark-grey-900 text-purple-400"
              >
                Desenvolvimento
              </h3>
              <p class="text-base font-medium leading-7 text-dark-grey-600">
                Desenvolvemos o sistema personalizado para sua empresa utilizando tecnologias avançadas e inteligência artificial
              </p>
            </div>
          </div>
          <div class="rotate-90 lg:rotate-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
            >
              <g clip-path="url(#clip0_3346_6663)">
                <path
                  d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3346_6663">
                  <rect
                    width="42"
                    height="42"
                    fill="white"
                    transform="translate(0.666748)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="flex items-start gap-4">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-500 bg-transparent text-purple-blue-500"
            >
              <span class="text-base font-bold leading-7">3</span>
            </div>
            <div class="flex flex-col">
              <h3
                class="mb-2 text-base font-bold leading-tight text-purple-400"
              >
                Entrega
              </h3>
              <p class="text-base font-medium leading-7 text-dark-grey-600">
                Entregamos sua aplicação pronta para o uso, com uma interface intuitiva e pronta para te elevar ao próximo nível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
