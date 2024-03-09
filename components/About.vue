<template>
  <div class="relative pt-16 bg-zync-500 pt-20">
    <div
      class="rounded-md bg-white-950 ring-1 ring-white/10 lg:rounded-2xl text-purple from-white to-zinc-500 bg-zync-500"
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
            <NuxtImg
              src="logo.png"
              class="w-[70px] object-contain rounded-lg"
            />
          </div>

          <div class="bg-green-0 flex flex-col justify-between">
            <div>
              <h2 class="text-3xl font-bold text-zinc-400">
                <span class="text-zinc-400"
                  >Sobre
                  <span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-900"
                    >nós</span
                  ></span
                >
              </h2>

              <hr
                class="border-0 h-[1px] my-6 mx- bg-gradient-to-r from-purple-400 via-purple-500 to-purple-900"
              />
              <p class="text-xl text-zinc-400 mt-4">
                Axolutions é a principal consultoria em desenvolvimento de
                softwares inovadores. Especializados em soluções personalizadas,
                estamos comprometidos em impulsionar a eficiência e o
                crescimento de sua empresa. Comprovadamente eficazes, nossas
                soluções são projetadas para aumentar a produtividade, reduzir
                custos operacionais e aprimorar a experiência do seu cliente.
              </p>
              <br />
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
