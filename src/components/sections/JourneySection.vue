<script setup>
import { roadmap } from "@/data/site";
</script>

<template>
  <section id="journey" class="relative overflow-hidden bg-gradient-to-b from-sky-500 via-sky-400 to-cloud-100 py-24 text-dusk-900 sm:py-32">
    <!-- Clouds rolling along the bottom -->
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-40 animate-drift opacity-90" style="background: radial-gradient(closest-side, #fff 60%, transparent) 0 100% / 22% 100% repeat-x" />
    <div class="wrap relative">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="kicker justify-center !text-dusk-800">The journey</p>
        <h2 class="title mt-3 text-white drop-shadow-[0_3px_0_rgba(17,33,80,0.35)]">From launch to the Heaven</h2>
        <p class="mt-5 text-lg leading-8 text-dusk-900/80">The Mainland opened one region at a time, each with its own storyline.</p>
      </div>

      <ol class="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(r, i) in roadmap"
          :key="r.date"
          v-reveal="(i % 3) * 110"
          class="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_30px_60px_-30px_rgba(17,33,80,0.55)] ring-1 ring-dusk-900/5 transition duration-300 hover:-translate-y-1.5"
        >
          <div class="relative overflow-hidden">
            <img :src="r.image" :alt="r.title" loading="lazy" class="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
            <span class="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display text-lg text-dusk-950 shadow-gold">{{ i + 1 }}</span>
          </div>
          <div class="p-6">
            <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-500">{{ r.date }}</p>
            <h3 class="mt-1.5 font-display text-2xl">{{ r.title }}</h3>
            <p class="mt-2 leading-7 text-dusk-900/70">{{ r.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
