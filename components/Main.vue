<template>
  <main class="main relative isolate transform-gpu pt-14">
    <div class=" ">
      <div class="absolute inset-0 -z-10 bg-[image:radial-gradient(100%_100%_at_50%_0%,rgba(107,50,180,0.6)_0%,rgba(75,0,130,0)_75%)] h-1/3"></div>

      <div class="mx-auto  px-6 lg:px-8">
        <Hero />
        <About />
        <div class="z-30 relative fundo mt-1">
        <HowItWorks />
        <Intro />
        <Faq />
        <Newsletter />
        </div>
      </div>
    </div>

    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    ></div>
  </main>
</template>

<style scoped>


  @media( width <= 720px){
    .bg-roxo{

    }
  }

</style>
