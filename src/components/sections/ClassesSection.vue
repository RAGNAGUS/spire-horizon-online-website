<script setup>
import { computed, ref } from "vue";
import { classes } from "@/data/classes";

// Ranges in the original data are 25 / 50 / 100 percent.
const RANGES = [
  { id: "all", label: "All" },
  { id: 25, label: "Close" },
  { id: 50, label: "Mid" },
  { id: 100, label: "Long" },
];
const filter = ref("all");
const shown = computed(() => (filter.value === "all" ? classes : classes.filter((c) => c.range === filter.value)));
const selected = ref(classes.find((c) => c.name === "Knight") || classes[0]);
const rangeLabel = (r) => RANGES.find((x) => x.id === r)?.label ?? "";
const detail = ref(null);
// On narrow screens the detail card sits above the grid, so bring it into view.
const pick = (c) => {
  selected.value = c;
  if (window.matchMedia("(max-width: 1023px)").matches) detail.value?.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <section id="classes" class="relative overflow-hidden bg-gradient-to-b from-dusk-700 to-dusk-900 py-24 sm:py-32">
    <div class="wrap">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="kicker justify-center">Classes</p>
        <h2 class="title mt-3">25 ways to fight</h2>
        <div class="wing-rule mx-auto mt-5 w-64" />
        <p class="mt-5 text-lg leading-8 text-white/70">Brawlers, blades, guns, holy light and dark magic. Pick one to see how it plays.</p>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr]">
        <!-- Selected class -->
        <article ref="detail" v-reveal class="relative scroll-mt-20 self-start overflow-hidden rounded-[2rem] border border-gold-400/30 bg-gradient-to-b from-dusk-600/60 to-dusk-900 p-6 shadow-lift lg:sticky lg:top-24">
          <div class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl" />
          <transition mode="out-in" enter-active-class="transition duration-300" enter-from-class="opacity-0 translate-y-2" leave-active-class="transition duration-150" leave-to-class="opacity-0">
            <div :key="selected.name" class="relative">
              <img :src="selected.image" :alt="selected.name" class="mx-auto aspect-square w-56 rounded-3xl border-2 border-gold-400/60 object-cover shadow-gold" />
              <h3 class="mt-6 text-center font-display text-3xl text-gold-300">{{ selected.name }}</h3>
              <p class="mt-3 text-center leading-7 text-white/75">{{ selected.text }}</p>
              <dl class="mt-6 space-y-3">
                <div>
                  <div class="flex justify-between text-xs font-extrabold uppercase tracking-wider text-white/60"><dt>Attack speed</dt><dd>{{ selected.speed }}%</dd></div>
                  <div class="mt-1.5 h-2.5 overflow-hidden rounded-full bg-white/10"><div class="h-full rounded-full bg-gradient-to-r from-sky-500 to-sky-300 transition-all duration-500" :style="{ width: selected.speed + '%' }" /></div>
                </div>
                <div>
                  <div class="flex justify-between text-xs font-extrabold uppercase tracking-wider text-white/60"><dt>Attack range</dt><dd>{{ rangeLabel(selected.range) }}</dd></div>
                  <div class="mt-1.5 h-2.5 overflow-hidden rounded-full bg-white/10"><div class="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500" :style="{ width: selected.range + '%' }" /></div>
                </div>
              </dl>
            </div>
          </transition>
        </article>

        <!-- Picker -->
        <div>
          <div class="flex flex-wrap gap-2" role="group" aria-label="Filter by attack range">
            <button
              v-for="r in RANGES"
              :key="r.id"
              type="button"
              class="rounded-full border px-4 py-1.5 text-sm font-bold transition"
              :class="filter === r.id ? 'border-gold-400 bg-gold-400 text-dusk-950' : 'border-white/20 text-white/75 hover:border-white/50'"
              :aria-pressed="filter === r.id"
              @click="filter = r.id"
            >
              {{ r.label }}<span v-if="r.id !== 'all'" class="ml-1 opacity-70">range</span>
            </button>
          </div>
          <ul class="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 xl:grid-cols-5">
            <li v-for="c in shown" :key="c.name">
              <button
                type="button"
                class="group w-full rounded-2xl border p-1.5 text-center transition"
                :class="selected.name === c.name ? 'border-gold-400 bg-gold-400/15' : 'border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.07]'"
                :aria-pressed="selected.name === c.name"
                @click="pick(c)"
              >
                <img :src="c.image" :alt="''" loading="lazy" class="aspect-square w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.04]" />
                <span class="mt-1.5 block truncate px-1 pb-0.5 text-xs font-extrabold sm:text-sm">{{ c.name }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
