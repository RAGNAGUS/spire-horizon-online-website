<script setup>
import { ref } from "vue";
import AppIcon from "../AppIcon.vue";
import { links, socials } from "@/data/site";

const copied = ref(false);
const share = async () => {
  const data = { title: "Spire Horizon Online", text: "Rise again in Aetheria.", url: links.site };
  try {
    if (navigator.share) await navigator.share(data);
    else {
      await navigator.clipboard.writeText(links.site);
      copied.value = true;
      setTimeout(() => (copied.value = false), 1800);
    }
  } catch {
    /* sharing cancelled */
  }
};
</script>

<template>
  <section id="community" class="relative isolate overflow-hidden py-24 sm:py-32">
    <img src="/media/brand/hero-poster.jpg" alt="" loading="lazy" class="absolute inset-0 -z-20 h-full w-full object-cover" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-dusk-950/80 via-dusk-900/80 to-dusk-950" />
    <div class="wrap text-center">
      <div v-reveal>
        <img src="/media/brand/logo-glow.png" alt="Spire Horizon Online" class="mx-auto w-full max-w-xs" />
        <h2 class="title mx-auto mt-8 max-w-2xl">Your capybara is waiting.</h2>
        <p class="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/75">Play on Steam, and come say hello to the community.</p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a :href="links.steam" target="_blank" rel="noopener" class="btn-gold !px-8 !py-4 text-base"><AppIcon name="steam" class="h-5 w-5" /> Get it on Steam</a>
          <button type="button" class="btn-glass relative !px-7 !py-4 text-base" @click="share">
            <AppIcon name="share" class="h-5 w-5" /> {{ copied ? "Link copied!" : "Share" }}
          </button>
        </div>
      </div>
      <ul v-reveal="120" class="mt-12 flex flex-wrap justify-center gap-3">
        <li v-for="s in socials" :key="s.name">
          <a
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur transition hover:-translate-y-1 hover:border-gold-400/70 hover:text-gold-300"
            :aria-label="s.name"
            :title="s.name"
          >
            <AppIcon :name="s.icon" class="h-5 w-5" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
