<script setup>
import { ref } from "vue";
import ImageLightbox from "../ImageLightbox.vue";
import { cards } from "@/data/site";

const images = cards.map((src, i) => ({ src, alt: `Creature card ${i + 1} of ${cards.length}` }));
const open = ref(-1);
// A gentle fan: each card leans a little, alternating.
const tilt = (i) => `rotate(${((i % 5) - 2) * 1.6}deg)`;
</script>

<template>
  <section id="creatures" class="relative overflow-hidden bg-gradient-to-b from-dusk-900 via-violet-600/30 to-dusk-900 py-24 sm:py-32">
    <div class="pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
    <div class="wrap relative">
      <div v-reveal class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p class="kicker">Creatures</p>
          <h2 class="title mt-3">Meet the creatures<br class="hidden sm:block" /> of Aetheria</h2>
        </div>
        <p class="max-w-md text-lg leading-8 text-white/70">
          Capybaras and mushrooms, crabs and turtles, slime lords and man-eating flowers. Twenty-four creature cards wait
          to be collected — tap one for a closer look.
        </p>
      </div>

      <ul class="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6">
        <li v-for="(c, i) in cards" :key="c" v-reveal="(i % 6) * 60">
          <button
            type="button"
            class="block w-full transition duration-300 hover:z-10 hover:-translate-y-3 hover:!rotate-0 hover:scale-110 focus-visible:scale-110"
            :style="{ transform: tilt(i) }"
            :aria-label="`View creature card ${i + 1}`"
            @click="open = i"
          >
            <img :src="c" alt="" loading="lazy" class="w-full drop-shadow-[0_18px_22px_rgba(6,11,28,0.55)]" />
          </button>
        </li>
      </ul>
    </div>
    <ImageLightbox :images="images" :index="open" @close="open = -1" @move="(i) => (open = i)" />
  </section>
</template>
