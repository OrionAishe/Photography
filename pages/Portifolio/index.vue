<template>
  <MoleculesHeader></MoleculesHeader>
  <div class="Portifolio__Content">
    <div v-for="(item, i) in pages">
      <OrganismsCardDisplay
        v-if="Page == i + 1"
        :-cards="item"
        Variant="Primary"
      ></OrganismsCardDisplay>
    </div>
    <div class="Portifolio__Buttons">
      <AtomsButton
        v-for="n in pages.length"
        :-variant="Page == n ? 'Secondary' : 'Primary'"
        :children="n.toString()"
        @click="
          () => {
            Page = n;
            console.log(Page);
          }
        "
      ></AtomsButton>
    </div>
  </div>
  <MoleculesFooter></MoleculesFooter>
</template>

<script lang="ts" setup>
import { getEntry } from "~/src/api/contentful";

const Page = ref(1);
const pages: any[] = [];
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

for (let i = 0; i < cards.length / 6; i++) {
  pages.push(cards.slice(i * 6, i + 1 * 6));
}
</script>
<style>
.Portifolio__Content {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
}

.Portifolio__Buttons{
  display: flex;
  gap: 10px;
}

</style>
