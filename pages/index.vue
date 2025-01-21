<template>
  <MoleculesHeader></MoleculesHeader>
  <OrganismsCarousel :items="items" variant="Primary"></OrganismsCarousel>
  <MoleculesFooter></MoleculesFooter>
</template>
<script setup>
import { getEntry } from '../src/api/contentful';

  const data = await getEntry('carousel', 'landing page')
  const items = data.data.carouselCollection.items[0].mediaWrapperCollection.items.map((item) => {
    return {
      link: `/${item.title}`,
      src: item.media.url
    }
  })
</script>
