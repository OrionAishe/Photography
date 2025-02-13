<template>
  <MoleculesHeader></MoleculesHeader>
  <div class="Home__Content">
  <OrganismsCarousel :items="items" variant="Primary"></OrganismsCarousel>
    <AtomsText type="Section" text="Projetos"></AtomsText>
    <OrganismsCardDisplay
      :-cards="cards"
      Variant="Primary"
    ></OrganismsCardDisplay>
  </div>
  <MoleculesFooter></MoleculesFooter>
</template>
<script setup>
import { getEntry } from "../src/api/contentful";

const carousel = await getEntry("carousel", "landing page");
const relatedWorks = await getEntry("relatedWorks", "landing page");
const items =
  carousel.data.carouselCollection.items[0].mediaWrapperCollection.items.map(
    (item) => {
      return {
        link: `/${item.title}`,
        src: item.media.url,
        alt: item.altText
      };
    }
  );

const cards =
  relatedWorks.data.relatedWorksCollection.items[0].pageCollection.items.map(
    (card) => {
      return {
        title: card.title,
        Tag: card.tag,
        BGImage: card.mainImage.media.url,
        link: `/${card.title}`,
      };
    }
  );
</script>
<style>
  .Home__Content{
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 50px;
  }
</style>
