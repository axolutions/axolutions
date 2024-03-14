<template>
  <main class="relative isolate transform-gpu pt-14">
    <div class="py-24 sm:py-32 lg:pb-40">
      <div class="absolute inset-0 -z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,#9611FE,rgba(255,255,255,0))] h-1/3" ></div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <Hero />
        <About />
        <HowItWorks />
        <Intro />
        <Examples />
        <Newsletter />
      </div>
    </div>

    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    ></div>
  </main>
</template>
