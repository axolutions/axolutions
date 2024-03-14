<template>
  <section class="relative mx-auto mt-16 max-w-full p-6 pt-20 lg:px-8">
    <div
      aria-hidden="true"
      class="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(148,0,211,0.6)_0%,rgba(75,0,130,0)_75%)]"
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
          Se inscreva na nossa newsletter!
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg text-zinc-400/80">
          Fique por dentro de todas as novidades do mundo da tecnologia.
        </p>
        <div class="mt-12 flex items-center justify-center">
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
              class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10"
            >
              Join the waitlist
            </div>
            <span
              class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-violet-400/0 via-violet-400/90 to-violet-400/0 transition-opacity duration-500 group-hover:opacity-40"
            ></span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <footer class="isolate mx-auto max-w-7xl  pt-16 lg:px-8">
    <div
      class="border-t border-white/10 pt-4 md:flex md:items-center md:justify-between"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on X (formerly Twitter)"
          class="group flex h-6 w-6 items-center justify-center text-zinc-400 transition hover:text-zinc-300"
          href="https://twitter.com/joincobalt"
          ><svg
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="Twitter"
            class="hidden h-5 w-5 group-hover:block"
            aria-hidden="true"
          >
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            ></path></svg
          ><svg
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-label="X"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 group-hover:hidden"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
            ></path></svg></a
        ><a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on LinkedIn"
          class="group flex h-6 w-6 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-300"
          href="https://www.linkedin.com/company/cobaltfinancial"
          ><svg
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="LinkedIn"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M21 1.5H3c-.83 0-1.5.68-1.5 1.51V21c0 .83.67 1.51 1.5 1.51h18c.82 0 1.5-.68 1.5-1.51V3c0-.83-.68-1.51-1.5-1.51Zm-13.15 18H4.73V9.48h3.12V19.5ZM6.29 8.1a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm13.22 11.4h-3.1v-4.88c0-1.16-.03-2.65-1.63-2.65-1.62 0-1.87 1.26-1.87 2.57v4.96h-3.1V9.48h2.98v1.37h.04a3.28 3.28 0 0 1 2.95-1.62c3.15 0 3.73 2.08 3.73 4.78v5.49Z"
            ></path></svg></a
        ><a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on Facebook"
          class="group flex h-6 w-6 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-300"
          href="https://www.facebook.com/joincobalt"
          ><svg
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="Facebook"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            ></path></svg
        ></a>
      </div>
      <div
        class="flex items-center mt-4 gap-4 text-xs font-medium leading-5 text-zinc-100 max-md:flex-col md:order-1 md:mt-0"
      >
        <div class="order-2 md:order-1">
          <p class="">
            ©
            <!-- -->2023<!-- -->
            Axolutions Ltda.
          </p>
        </div>
      </div>
    </div>
    <div
      class="mt-4 w-full text-xs leading-5 text-zinc-300 max-md:text-center md:max-w-[60%]"
    >
      <p>
        Axolutions é uma start-up especializada em desenvolver softwares personalizados, sites aprimorados com UI/UX, sistemas de gestão, landing pages de alta conversão, sistemas de atendimento e muito mais. Tem um projeto e precisa de freelancer? Conte com a axolutions e tenha uma solução personalizada e inovadora.
      </p>
    </div>
  </footer>
</template>
