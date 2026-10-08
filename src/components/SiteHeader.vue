<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import AppIcon from "./AppIcon.vue";
import { links } from "@/data/site";
import { useMusic } from "@/composables/useMusic";

const nav = [
  { label: "Classes", href: "#classes" },
  { label: "Creatures", href: "#creatures" },
  { label: "Journey", href: "#journey" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trailers", href: "#trailers" },
];

const { playing, toggle } = useMusic();
const scrolled = ref(false);
const open = ref(false);
const onScroll = () => (scrolled.value = window.scrollY > 40);
onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled || open ? 'bg-dusk-900/85 shadow-lift backdrop-blur-xl' : 'bg-gradient-to-b from-dusk-950/70 to-transparent'"
  >
    <div class="wrap flex h-16 items-center gap-4">
      <a href="#top" class="shrink-0" aria-label="Spire Horizon Online — top">
        <img src="/media/brand/logo-white.png" alt="Spire Horizon Online" class="h-10 w-auto drop-shadow" />
      </a>

      <nav class="ml-6 hidden items-center gap-1 lg:flex" aria-label="Main">
        <a v-for="n in nav" :key="n.href" :href="n.href" class="rounded-full px-4 py-2 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white">{{ n.label }}</a>
      </nav>

      <div class="ml-auto flex items-center gap-2">
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-gold-400/70"
          :class="playing && 'border-gold-400/70 text-gold-300'"
          :aria-pressed="playing"
          :aria-label="playing ? 'Pause music' : 'Play music'"
          :title="playing ? 'Pause music' : 'Play the theme'"
          @click="toggle"
        >
          <AppIcon :name="playing ? 'note' : 'mute'" class="h-4 w-4" :class="playing && 'animate-bob'" />
        </button>
        <a :href="links.steam" target="_blank" rel="noopener" class="btn-gold hidden !px-5 !py-2.5 sm:inline-flex">
          <AppIcon name="steam" class="h-4 w-4" /> Play on Steam
        </a>
        <button type="button" class="rounded-full p-2 text-white lg:hidden" :aria-expanded="open" aria-controls="m-nav" aria-label="Menu" @click="open = !open">
          <AppIcon :name="open ? 'close' : 'menu'" class="h-6 w-6" />
        </button>
      </div>
    </div>
    <nav v-if="open" id="m-nav" class="wrap grid gap-1 pb-4 lg:hidden" aria-label="Main" @click="open = false">
      <a v-for="n in nav" :key="n.href" :href="n.href" class="rounded-xl px-4 py-3 font-bold text-white/90 hover:bg-white/10">{{ n.label }}</a>
      <a :href="links.steam" target="_blank" rel="noopener" class="btn-gold mt-2 sm:hidden"><AppIcon name="steam" class="h-4 w-4" /> Play on Steam</a>
    </nav>
  </header>
</template>
