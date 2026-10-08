<script setup>
import { onBeforeUnmount, onMounted, watch } from "vue";
import AppIcon from "./AppIcon.vue";

// images: [{ src, alt }]; index -1 means closed.
const props = defineProps({
  images: { type: Array, required: true },
  index: { type: Number, default: -1 },
});
const emit = defineEmits(["close", "move"]);

const step = (d) => emit("move", (props.index + d + props.images.length) % props.images.length);
const onKey = (e) => {
  if (props.index < 0) return;
  if (e.key === "Escape") emit("close");
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
};
onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey);
  document.documentElement.style.overflow = "";
});
watch(
  () => props.index,
  (i) => (document.documentElement.style.overflow = i >= 0 ? "hidden" : ""),
);
</script>

<template>
  <Teleport to="body">
    <transition enter-active-class="transition duration-200" enter-from-class="opacity-0" leave-active-class="transition duration-150" leave-to-class="opacity-0">
      <div
        v-if="index >= 0"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-dusk-950/95 p-4 backdrop-blur"
        role="dialog"
        aria-modal="true"
        @click.self="emit('close')"
      >
        <figure class="flex max-h-full max-w-6xl flex-col items-center">
          <img :src="images[index].src" :alt="images[index].alt" class="max-h-[80vh] w-auto rounded-xl border border-white/15 shadow-lift" />
          <figcaption class="mt-3 text-center text-sm font-semibold text-white/75">{{ index + 1 }} / {{ images.length }} · {{ images[index].alt }}</figcaption>
        </figure>
        <button type="button" class="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Close" @click="emit('close')">
          <AppIcon name="close" class="h-5 w-5" />
        </button>
        <template v-if="images.length > 1">
          <button type="button" class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Previous" @click="step(-1)">
            <AppIcon name="left" class="h-5 w-5" />
          </button>
          <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Next" @click="step(1)">
            <AppIcon name="right" class="h-5 w-5" />
          </button>
        </template>
      </div>
    </transition>
  </Teleport>
</template>
