<template>

  <LandingHeader></LandingHeader>
  <UContainer>
    <main>
      <section class="conteudo-principal">
        <h1 class="conteudo-principal-titulo text-5xl">A solução final para encantar os seus clientes.</h1>
        <p class="conteudo-principal-subtitulo text-gray-300">AxoChat oferece todas as ferramentas para gerenciar conversas, centralizar seu atendimento e aumentar seus lucros em um só lugar.</p>
        <div class="conteudo-principal-btn">
          <UButton to="https://wa.me/5511981914677?" target="_blank"
            icon="i-heroicons-pencil-square"
            size="sm"
            color="primary"
            variant="solid"
            label="Fale com um especialista"
            :trailing="false"/>
          <UButton
              icon="i-heroicons-pencil-square"
              size="sm"
              color="primary"
              variant="solid"
              label="Conheça nossos planos"
              :trailing="false"
          />
        </div>
      </section>

      <section class="imagem-section">
        <img src="~/assets/images/banner.jpg" class="imagem"/>
      </section>
    </main>
  </UContainer>
  <LandingFooter></LandingFooter>
</template>

<style scoped>
  main{
    gap: 3em;
    padding: 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .conteudo-principal{
    row-gap: 1em;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .conteudo-principal-titulo{
    text-align: center;
  }
  .conteudo-principal-subtitulo{
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

<script setup>
const message = "batata";
const whatsappUrl = "https://wa.me/5511983207820?" + encodeURIComponent(message);
</script>

