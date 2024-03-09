<template>
  <div className="overflow-clip">
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="relative flex justify-center">
        <div className="mx-4 w-full max-w-7xl">
          <nav
            className="flex min-h-[5rem] items-center justify-between px-4 py-3"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/"> </a>
              <NuxtImg src="logo.png" className="h-14 mt-4" />
            </div>
            <div
              className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium text-zinc-300 transition hover:text-zinc-100 sm:space-x-6"
            >
              <a href="/blog">Portifolio</a>
              <button
                className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:R19la:"
                data-state="closed"
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span
                    className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(148,0,211,0.6)_0%,rgba(75,0,130,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  ></span>
                </span>
                <div
                  className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10"
                >
                  Entre em contato!
                </div>
                <span
                  className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-violet-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"
                ></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <section class="relative isolate transform-gpu pt-14">
      <div class="py-24 sm:py-32 lg:pb-40">
        <div
          class="absolute inset-0 -z-10 bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(140,50,180,0.6)_0%,rgba(75,0,130,0)_75%)] h-1/3"
        ></div>

        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="relative mx-auto max-w-3xl text-center">
            <h1
              class="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]"
              style="opacity: 1"
            >
              A solução ideal para sua
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-900"
                >empresa</span
              >
            </h1>
            <p
              class="mt-6 text-lg font-medium text-zinc-400 md:text-xl"
              style="opacity: 1"
            >
              Softwares personalizados e inovadores para impulsionar o seu
              negócio.
            </p>
            <div
              class="mt-10 flex flex-col items-center justify-center gap-y-8"
            >
              <div style="opacity: 1">
                <button
                  class="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
                  type="button"
                >
                  <span class="absolute inset-0 overflow-hidden rounded-full">
                    <span
                      class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(148,0,211,0.6)_0%,rgba(75,0,130,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    ></span>
                  </span>
                  <div
                    class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10"
                  >
                    Join the waitlist
                  </div>
                  <span
                    class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-violet-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"
                  ></span>
                </button>
              </div>
              <div class="group" style="opacity: 1">
                <a class="flex flex-col items-center gap-1" href="/#intro">
                  <p
                    class="text-sm/6 text-zinc-400 duration-300 group-hover:text-zinc-100"
                  >
                    Learn more
                  </p>
                </a>
              </div>
            </div>
          </div>
          <About />

          <Intro />

          <Examples />

          <Newsletter />
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </section>
  </div>

  <footer class="isolate mx-auto max-w-7xl p-6 pb-12 pt-16 lg:px-8">
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
        class="mt-8 flex items-center gap-4 text-xs font-medium leading-5 text-zinc-400 max-md:flex-col md:order-1 md:mt-0"
      >
        <div class="order-2 md:order-1">
          <p class="">
            ©
            <!-- -->2023<!-- -->
            Cobalt Financial Technologies Inc.
          </p>
        </div>
        <div class="order-1 flex gap-4 md:order-2">
          <a
            class="transition-colors duration-200 hover:text-zinc-300"
            href="/legal/privacy"
            >Privacy Policy</a
          ><a
            class="transition-colors duration-200 hover:text-zinc-300"
            href="/legal/terms"
            >Terms of Use</a
          >
        </div>
      </div>
    </div>
    <div
      class="mt-4 w-full text-xs leading-5 text-zinc-500 max-md:text-center md:max-w-[60%]"
    >
      <p>
        Cobalt is a trademark or registered trademark of Cobalt Financial
        Technologies Inc. Any other trademarks are the property of their
        respective owners. Unless otherwise noted, use of third party logos does
        not imply endorsement of, sponsorship of, or affiliation with Cobalt.
      </p>
      <p class="mt-2">
        Cobalt is a financial technology company, not a bank. Banking services
        are provided by Celtic Bank and Evolve Bank &amp; Trust®, Members FDIC.
      </p>
    </div>
  </footer>
</template>

<style></style>
