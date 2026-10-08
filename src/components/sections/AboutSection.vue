<script setup>
import AppIcon from "../AppIcon.vue";
import { pillars } from "@/data/site";
</script>

<template>
  <section id="about" class="relative overflow-hidden bg-gradient-to-b from-dusk-950 via-dusk-800 to-dusk-700 py-24 sm:py-32">
    <!-- Drifting clouds -->
    <div class="pointer-events-none absolute -left-1/4 top-10 h-64 w-[150%] animate-drift opacity-[0.08]" style="background: radial-gradient(closest-side, #fff, transparent) 0 0 / 30% 100% repeat-x" />

    <div class="wrap relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
      <div v-reveal class="relative mx-auto w-full max-w-sm">
        <div class="absolute -inset-6 rounded-[2.5rem] bg-sky-400/20 blur-3xl" />
        <img src="/media/brand/poster.jpg" alt="A skeleton adventurer and a capybara over the castle town" loading="lazy" class="relative w-full rounded-[2rem] border-2 border-gold-400/50 shadow-lift" />
        <span class="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-400 px-5 py-2 text-sm font-black text-dusk-950 shadow-gold">MMORPG · PC · Steam</span>
      </div>

      <div>
        <p v-reveal class="kicker">The world of Aetheria</p>
        <h2 v-reveal class="title mt-3">Brought back to life.<br />Sent out on an adventure.</h2>
        <p v-reveal class="mt-5 max-w-2xl text-lg leading-8 text-white/75">
          Nobody remembers why the dead walked again — only that you did. With a capybara who refuses to leave your side,
          you set out across the Mainland to find out what happened, fight what stands in the way and meet everyone else
          who woke up with you.
        </p>
        <ul class="mt-10 grid gap-4 sm:grid-cols-2">
          <li v-for="(p, i) in pillars" :key="p.title" v-reveal="i * 90" class="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-gold-400/40 hover:bg-white/[0.07]">
            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300">
              <AppIcon :name="p.icon" class="h-5 w-5" />
            </span>
            <h3 class="mt-3 text-lg font-extrabold">{{ p.title }}</h3>
            <p class="mt-1 text-sm leading-6 text-white/65">{{ p.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
