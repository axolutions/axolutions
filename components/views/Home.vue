<script setup lang="ts">
import FadeTransition from "../ui/transitions/FadeTransition.vue";

// const store = useStore();

// const activeChatComponent = computed((): any => {
//   if (store.status === "loading" || store.delayLoading) {
//     return Loading3;
//   } else if (store.activeConversationId) {
//     return Chat;
//   } else {
//     return NoChatSelected;
//   }
// });
</script>

<template>
  <KeepAlive>
    <div
      class="xs:relative md:static h-full flex xs:flex-col md:flex-row overflow-hidden"
    >
      <p class="xs:order-1 md:-order-none">Navigation</p>
      <p
        class="xs:grow-1 md:grow-0 xs:overflow-y-scroll md:overflow-visible scrollbar-hidden"
      >
        Sidebar
      </p>
      <div
        id="mainContent"
        class="xs:absolute xs:z-10 md:static grow h-full xs:w-full md:w-fit scrollbar-hidden bg-white dark:bg-gray-800 transition-all duration-500"
        :class="true ? ['xs:left-[0rem]', 'xs:static'] : ['xs:left-[62.5rem]']"
        role="region"
      >
        <FadeTransition name="fade" mode="out-in">
          <!-- <component
            :is="activeChatComponent"
            :key="store.activeConversationId"
          /> -->
        </FadeTransition>
      </div>
    </div>
  </KeepAlive>
</template>
