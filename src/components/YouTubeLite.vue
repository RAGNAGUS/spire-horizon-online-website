<script setup>
import { ref } from "vue";
import AppIcon from "./AppIcon.vue";

// Shows a cover and loads YouTube's player only when someone presses play.
const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, default: "" },
  cover: { type: String, default: "" },
  autoplay: { type: Boolean, default: false },
});
const playing = ref(props.autoplay);
const thumb = props.cover || `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`;
</script>

<template>
  <div class="relative aspect-video overflow-hidden rounded-2xl bg-dusk-950">
    <iframe
      v-if="playing"
      class="absolute inset-0 h-full w-full"
      :src="`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <button v-else type="button" class="group absolute inset-0" :aria-label="`Play: ${title}`" @click="playing = true">
      <img :src="thumb" :alt="title" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <span class="absolute inset-0 bg-gradient-to-t from-dusk-950/70 via-transparent to-transparent" />
      <span class="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-400 text-dusk-950 shadow-gold transition group-hover:scale-110">
        <AppIcon name="play" class="ml-1 h-7 w-7" />
      </span>
    </button>
  </div>
</template>
