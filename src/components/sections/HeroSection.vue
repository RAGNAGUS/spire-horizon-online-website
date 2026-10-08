<script setup>
import { ref } from "vue";
import AppIcon from "../AppIcon.vue";
import YouTubeLite from "../YouTubeLite.vue";
import { links, trailers } from "@/data/site";
import { useMusic } from "@/composables/useMusic";

const trailerOpen = ref(false);
const { pause } = useMusic();
const openTrailer = () => {
  pause();
  trailerOpen.value = true;
};
</script>

<template>
  <section id="top" class="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-24">
    <video
      class="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_50%]"
      src="/media/brand/hero.mp4"
      poster="/media/brand/hero-poster.jpg"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-dusk-950/85 via-dusk-950/40 to-transparent" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-dusk-950 via-dusk-950/10 to-dusk-950/40" />

    <div class="wrap">
      <div class="max-w-xl">
        <img src="/media/brand/logo-glow.png" alt="Spire Horizon Online" class="w-full max-w-[26rem] drop-shadow-[0_8px_30px_rgba(10,19,48,0.8)]" />
        <p class="mt-6 font-display text-2xl text-gold-300 drop-shadow sm:text-3xl">Rise again in Aetheria.</p>
        <p class="mt-3 text-lg leading-8 text-white/85">
          Wake as a resurrected skeleton adventurer, choose from 25 classes, collect the creatures of the land and explore
          the world with your capybara companion — an MMORPG on PC.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a :href="links.steam" target="_blank" rel="noopener" class="btn-gold !px-7 !py-4 text-base">
            <AppIcon name="steam" class="h-5 w-5" /> Get it on Steam
          </a>
          <button type="button" class="btn-glass !px-7 !py-4 text-base" @click="openTrailer">
            <AppIcon name="play" class="h-5 w-5" /> Watch the trailer
          </button>
        </div>
      </div>
    </div>

    <a href="#about" class="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-white/60 transition hover:text-white sm:block" aria-label="Scroll down">
      <svg class="h-7 w-7 animate-bob" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6" /></svg>
    </a>

    <Teleport to="body">
      <transition enter-active-class="transition duration-200" enter-from-class="opacity-0" leave-active-class="transition duration-150" leave-to-class="opacity-0">
        <div v-if="trailerOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-dusk-950/90 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label="Trailer" @click.self="trailerOpen = false">
          <div class="w-full max-w-5xl rounded-3xl border border-white/15 bg-white/5 p-2 shadow-lift">
            <YouTubeLite :id="trailers[0].id" :title="trailers[0].title" autoplay />
          </div>
          <button type="button" class="absolute right-4 top-4 rounded-full bg-white/10 p-3 hover:bg-white/20" aria-label="Close trailer" @click="trailerOpen = false">
            <AppIcon name="close" class="h-5 w-5" />
          </button>
        </div>
      </transition>
    </Teleport>
  </section>
</template>
