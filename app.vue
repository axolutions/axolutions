<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup="ts">
onMounted(() => {
  document.addEventListener("DOMContentLoaded", function () {
    const timelineLine = document.querySelector(".timeline-line");
    const timelineImage = document.querySelector(".timeline-image");

    const maxTimelineHeight =
      (document.querySelectorAll(".my-container").length - 1) * 100;

    window.addEventListener("scroll", () => {
      const scrollPercentage = (window.scrollY / maxTimelineHeight) * 65;

      const adjustedPercentage = Math.min(100, scrollPercentage);
      timelineLine.stylpe.height = `${adjustedPercentage}%`;
      timelineImage.style.top = `${adjustedPercentage}%`;
    });
  });
});

// export default {
//   head() {
//     return {
//       title: 'Desenvolvimento de Software Personalizado | Axolutions', // Título padrão do seu aplicativo
//     meta: [
//       {
//         hid: 'description',
//         name: 'description',
//         content: 'Axolutions oferece soluções de software personalizadas e inovadoras para impulsionar o seu negócio. Somos especializados em desenvolvimento de sistemas SaaS, incluindo atendimento omnichannel, e-commerce, ERP para gestão veterinária, entre outros.'
//       },
//       {
//         hid: 'keywords',
//         name: 'keywords',
//         content: 'desenvolvimento de software personalizado, SaaS, atendimento omnichannel, e-commerce, ERP, gestão veterinária, consultoria de software, personalização de software, integração com redes sociais, segurança avançada, SEO integrado, análise de dados em tempo real, backup automático, design responsivo, experiência do usuário intuitiva, integração com plataformas de pagamento, suporte 24/7, armazenamento em nuvem, insights impulsionados por IA'
//       },
//       {
//         hid: 'og:title',
//         property: 'og:title',
//         content: 'Desenvolvimento de Software Personalizado | Axolutions'
//       },
//       {
//         hid: 'og:description',
//         property: 'og:description',
//         content: 'Axolutions oferece soluções de software personalizadas e inovadoras para impulsionar o seu negócio. Somos especializados em desenvolvimento de sistemas SaaS, incluindo atendimento omnichannel, e-commerce, ERP para gestão veterinária, entre outros.'
//       },
//       {
//         hid: 'og:url',
//         property: 'og:url',
//         content: 'https://www.axolutions.com.br'
//       }
//     ]
//   }
// }
</script>
