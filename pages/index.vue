<template>
  <LandingHeader></LandingHeader>
  <main>
    <section class="conteudo-principal mt-10 p-32 w-[70%]">
      <h1 class="conteudo-principal-titulo text-6xl">
        A solução final para encantar os seus clientes.
      </h1>
      <p class="conteudo-principal-subtitulo text-gray-300 text-2xl w-[90%]">
        AxoChat oferece todas as ferramentas para gerenciar conversas,
        centralizar seu atendimento e aumentar seus lucros em um só lugar.
      </p>
      <div class="conteudo-principal-btn">
        <UButton
          to="https://wa.me/5511981914677?"
          target="_blank"
          icon="i-heroicons-pencil-square"
          size="sm"
          color="primary"
          variant="solid"
          class="p-6"
          label="Fale com um especialista"
          :trailing="false"
        />
        <UButton
          icon="i-heroicons-pencil-square"
          size="sm"
          color="gray"
          class="p-6"
          variant="solid"
          label="Conheça nossos planos"
          :trailing="false"
        />
      </div>
    </section>

    <section class="imagem-section">
      <img src="~/assets/images/banner.jpg" class="imagem" />
    </section>

    <section
      class="relative w-full h-[90vh] flex justify-center bg-gradient-to-r from-gray-800 via-purple-800 to-primary-800 py-20 px-5 sm:p-28"
    >
      <div class="flex flex-col items-center text-center sm:w-1/2 lg:w-1/2">
        <div>
          <h1
            class="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-4"
          >
            Omnichannel support center
          </h1>
          <p class="mt-4 mb-6 text-xl">
            Chatwoot connects with popular customer communication channels like
            Email, Website live-chat, Facebook, Twitter, WhatsApp, Instagram,
            Line, etc. This helps you deliver a consistent customer experience
            across channels - from a single dashboard.
          </p>
          <UButton color="primary" size="lg" label="Learn more"></UButton>
        </div>
      </div>

      <div class="absolute bottom-0 w-full overflow-hidden h-1/2">
        <NuxtImg
          src="https://www.chatwoot.com/images/home/omnichannel.webp"
          class="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:h-[600px] lg:h-[600px] object-contain -bottom-[75%] left-1/2 -translate-x-1/2 z-10"
        />
      </div>
    </section>
  </main>
  <LandingFooter></LandingFooter>
</template>

<style scoped>
main {
  gap: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.conteudo-principal {
  row-gap: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.conteudo-principal-titulo {
  text-align: center;
}
.conteudo-principal-subtitulo {
  text-align: center;
}

.conteudo-principal-btn {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1em;
}
</style>

<script setup></script>
