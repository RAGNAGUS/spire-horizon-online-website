<script setup>
import YouTubeLite from "../YouTubeLite.vue";
import { trailers } from "@/data/site";
import { useMusic } from "@/composables/useMusic";

const { pause } = useMusic();
</script>

<template>
  <section id="trailers" class="bg-gradient-to-b from-cloud-100 to-cloud-200 pb-24 text-dusk-900 sm:pb-32">
    <div class="wrap">
      <div v-reveal class="border-t border-dusk-900/10 pt-16">
        <p class="kicker !text-sky-500">Trailers</p>
        <h2 class="title mt-3">See it in motion</h2>
      </div>
      <div class="mt-10 grid gap-8 lg:grid-cols-2">
        <article v-for="(t, i) in trailers" :key="t.id" v-reveal="i * 120" class="rounded-[1.75rem] bg-white p-3 shadow-[0_30px_60px_-30px_rgba(17,33,80,0.5)]" @click.capture="pause">
          <YouTubeLite :id="t.id" :title="t.title" :cover="t.cover" />
          <h3 class="px-3 pb-2 pt-4 font-display text-xl">{{ t.title }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>
