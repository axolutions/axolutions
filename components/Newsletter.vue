<template>
  <section class="relative mt-16 max-w-full p-6 pt-20 min-w-full">
    <div
      aria-hidden="true"
      class="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px translate-x-1/2 -translate-y-1/2 transform-gpu bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(148,0,211,0.6)_0%,rgba(75,0,130,0)_75%)]"
    ></div>
    <div
      aria-hidden="true"
      class="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#09090b_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] md:max-w-[600px]"
    ></div>
    <div class="relative isolate">
      <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(40%_80%_at_center,black,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="cta"
            width="80"
            height="80"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#cta)"
        ></rect>
      </svg>
      <div
        class="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-purple-500 to-violet-800 opacity-20"
          style="
            clip-path: polygon(
              77.5% 40.13%,
              90% 10%,
              100% 50%,
              95% 80%,
              92% 85%,
              75% 65%,
              61.26% 54.7%,
              50% 54.7%,
              47.24% 65.81%,
              50% 85%,
              26.16% 73.91%,
              0.1% 100%,
              1% 40.13%,
              20% 48.75%,
              60% 0.25%,
              67.5% 32.63%
            );
          "
        ></div>
      </div>
      <div class="mx-auto max-w-xl text-center">
        <h2
          class="bg-gradient-to-br from-zinc-100 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl"
        >
          Tem alguma dúvida?
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg text-zinc-300">
          Fale conosco agora mesmo! Teremos prazer em responder suas dúvidas.
        </p>
        <div class="mt-12 min-w-1200">
          <button
            class="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:Rvraqla:"
            data-state="closed"
          >
            <span class="absolute inset-0 overflow-hidden rounded-full"
              ><span
                class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(148,0,211,0.6)_0%,rgba(75,0,130,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></span
            ></span>
            <div
              class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10 text-lg"
            >
              <a
                href="https://wa.me/5511983207820?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20a%20respeito%20da%20Axolutions."
                class="flex items-center gap-2"
              >
                <icon name="akar-icons:whatsapp-fill" color="" class="pb-0" />
                Entre em contato
              </a>
            </div>
            <span
              class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-violet-400/0 via-violet-400/90 to-violet-400/0 transition-opacity duration-500 group-hover:opacity-40"
            ></span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <footer class="isolate mx-auto pt-16">
    <div
      class="border-t border-white/10 pt-4 md:flex md:items-center md:justify-between"
    >
      <div
        class="flex items-center mt-4 gap-4 text-xs font-medium leading-5 text-zinc-100 max-md:flex-col md:order-1 md:mt-0"
      >
        <div class="order-1 md:order-1">
          <p class="">
            ©
            <!-- -->2023<!-- -->
            Axolutions Ltda.
          </p>
        </div>
      </div>
      <div class="order-2 flex justify-center">
        <div class=" card">
          <a class="socialContainer containerOne" href="https://www.instagram.com/axolutions">
            <svg viewBox="0 0 16 16" class="socialSvg instagramSvg">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              ></path>
            </svg>
          </a>

          <a class="socialContainer containerTwo" href="https://www.x.com/axolutions">
            <svg viewBox="0 0 16 16" class="socialSvg twitterSvg">
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              ></path>
            </svg>
          </a>

          <a class="socialContainer containerThree" href="https://www.linkedin.com/company/axolutions/">
            <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg">
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>

          <a class="socialContainer containerFour" href="https://wa.me/5511983207820?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:">
            <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg">
              <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div
      class="mt-4 w-full text-xs leading-5 text-zinc-400 max-md:text-center md:max-w-[60%] pb-20"
    >
      <p>
        Axolutions é uma start-up especializada em desenvolver softwares
        personalizados, sites aprimorados com UI/UX, sistemas de gestão, landing
        pages de alta conversão, sistemas de atendimento e muito mais. Tem um
        projeto e precisa de freelancer? Conte com a axolutions e tenha uma
        solução personalizada e inovadora.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.card {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center !important;
  padding: 25px 25px;
  gap: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
}

/* for all social containers*/
.socialContainer {
  width: 52px;
  height: 52px;
  border-radius: 5px;
  background-color: #111317;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;
}
/* instagram*/
.containerOne:hover {
  background-color: #d62976;
  transition-duration: 0.3s;
}
/* twitter*/
.containerTwo:hover {
  background-color: #00acee;
  transition-duration: 0.3s;
}
/* linkdin*/
.containerThree:hover {
  background-color: #0072b1;
  transition-duration: 0.3s;
}
/* Whatsapp*/
.containerFour:hover {
  background-color: green;
  transition-duration: 0.3s;
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: 0.3s;
}

.socialSvg {
  width: 17px;
}

.socialSvg path {
  fill: rgb(255, 255, 255);
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
