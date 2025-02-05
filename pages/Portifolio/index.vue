<template>
  <MoleculesHeader></MoleculesHeader>
  <div>
    <OrganismsCardDisplay
      :-cards="cards"
      Variant="Primary"
    ></OrganismsCardDisplay>
  </div>
  <MoleculesFooter></MoleculesFooter>
</template>

<script lang="ts" setup>
import { getEntry } from "~/src/api/contentful";
const relatedWorks = await getEntry("relatedWorks", "portifolio");

const cards =
  relatedWorks.data.relatedWorksCollection.items[0].pageCollection.items.map(
    (card: { title: any; tag: any; mainImage: { media: { url: any } } }) => {
      return {
        title: card.title,
        Tag: card.tag,
        BGImage: card.mainImage.media.url,
        link: `/${card.title}`,
      };
    }
  );
</script>
