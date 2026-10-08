<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ClassesSection from "@/components/sections/ClassesSection.vue";
import CreaturesSection from "@/components/sections/CreaturesSection.vue";
import JourneySection from "@/components/sections/JourneySection.vue";
import GallerySection from "@/components/sections/GallerySection.vue";
import TrailersSection from "@/components/sections/TrailersSection.vue";
import CommunitySection from "@/components/sections/CommunitySection.vue";
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <ClassesSection />
    <CreaturesSection />
    <JourneySection />
    <GallerySection />
    <TrailersSection />
    <CommunitySection />
  </main>
  <SiteFooter />
</template>
