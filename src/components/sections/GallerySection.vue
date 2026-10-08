<script setup>
import { ref } from "vue";
import ImageLightbox from "../ImageLightbox.vue";
import { gallery } from "@/data/site";

const open = ref(-1);
</script>

<template>
  <section id="gallery" class="bg-cloud-100 pb-24 text-dusk-900 sm:pb-32">
    <div class="wrap">
      <div v-reveal class="flex flex-col items-start justify-between gap-4 border-t border-dusk-900/10 pt-16 md:flex-row md:items-end">
        <div>
          <p class="kicker !text-sky-500">Gallery</p>
          <h2 class="title mt-3">Snapshots from the Mainland</h2>
        </div>
        <p class="max-w-sm leading-7 text-dusk-900/70">Castle towns, desert raids, fishing trips and flights over the snow.</p>
      </div>
      <div class="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <button
          v-for="(g, i) in gallery"
          :key="g.src"
          v-reveal="(i % 4) * 70"
          type="button"
          class="group relative overflow-hidden rounded-2xl bg-dusk-900 shadow-[0_20px_40px_-24px_rgba(17,33,80,0.6)]"
          :class="[i === 0 && 'col-span-2 row-span-2', i === gallery.length - 1 && 'col-span-2']"
          @click="open = i"
        >
          <img :src="i === 0 ? g.src : g.thumb" :alt="g.alt" loading="lazy" class="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dusk-950/85 to-transparent px-3 pb-2.5 pt-10 text-left text-xs font-bold text-white opacity-0 transition group-hover:opacity-100 sm:text-sm">{{ g.alt }}</span>
        </button>
      </div>
    </div>
    <ImageLightbox :images="gallery" :index="open" @close="open = -1" @move="(i) => (open = i)" />
  </section>
</template>
