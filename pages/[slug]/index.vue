<template>
  <MoleculesHeader></MoleculesHeader>
  <div class="Page">
    <div class="Texts">
      <AtomsText
        :text="data.data.pageCollection.items[0].title"
        type="Title"
      ></AtomsText>
      <AtomsText
        :text="data.data.pageCollection.items[0].subtitle"
        type="Subtitle"
      ></AtomsText>
      <AtomsText
        :text="data.data.pageCollection.items[0].description"
        type="Text"
      ></AtomsText>
    </div>
    <OrganismsCarousel variant="Secondary" :items="items"></OrganismsCarousel>
    <AtomsText type="Section" text="Projetos Relacionados"></AtomsText>
    <OrganismsCardDisplay
      :-cards="cards"
      Variant="Secondary"
    ></OrganismsCardDisplay>
  </div>
  <MoleculesFooter></MoleculesFooter>
</template>

<script lang="ts" setup>
import { getEntry } from "~/src/api/contentful";
const route = useRoute();

const data = await getEntry("page", route.params.slug);
const carousel = await getEntry(
  "carousel",
  data.data.pageCollection.items[0].carousel.title
);
const relatedWorks = await getEntry(
  "relatedWorks",
  data.data.pageCollection.items[0].relatedProjects.title
);

const items =
  carousel.data.carouselCollection.items[0].mediaWrapperCollection.items.map(
    (item: { title: any; media: { url: any; }; altText: any; }) => {
      return {
        title: `/${item.title}`,
        src: item.media.url,
        link: item.media.url,
        alt: item.altText
      };
    }
  );

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
<style>

.Page{
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 50px;
}

.Texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  p {
    width: 50%;
  }
}
</style>
