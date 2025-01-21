const PAGE_GRAPHQL_FIELDS = `
title
subtitle
description
slug
carousel{
  title
}
relatedProjects{
  title
}
`;

const CAROUSEL_GRAPHQL_FIELDS = `
title
mediaWrapperCollection{
  items{
    title
    media{
      url
    }
    altText
    link
  }
}
`;

const RELATEDWORKS_GRAPHQL_FIELDS = `
title
pageCollection{
  items{
    title
    tag
    mainImage{
      media{
        url
      }
    }
  }
}
`

async function fetchGraphQL(query) {
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ query }),
      next: {
        revalidate: 3600,
      },
    }
  ).then((response) => {
    return response.json();
  });
}

export async function getAllEntries(limit = 100) {
  try {
    const query = `query {
      pageCollection(
        limit: ${limit},
      ) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`;
    const entries = await fetchGraphQL(query);
    return entries;
  } catch (error) {
    console.error("Erro ao buscar entradas:", error);
    return [];
  }
}

export async function getEntry(contentType, title) {
  function items() {
    switch (contentType) {
      case "page":
        return PAGE_GRAPHQL_FIELDS;
      case "carousel":
        return CAROUSEL_GRAPHQL_FIELDS;
      case "relatedWorks":
        return RELATEDWORKS_GRAPHQL_FIELDS;
    }
  };

  try {
    const entry = await fetchGraphQL(
      `query {
        ${contentType}Collection(
          where: { title: "${title}" },
          limit: 1,
          preview: false
        ) {
          items {
            ${items()}
          }
        }
      }`
    );

    const characteristicsData =
      entry.data?.[
        `${contentType}Collection`
      ]?.items?.[0]?.characteristicsCollection?.items.map((item) => {
        return {
          information: item.information,
        };
      }) || [];

    return {
      ...entry,
      characteristics: characteristicsData,
    };
  } catch (error) {
    console.error("Erro ao buscar entrada:", error);
    return null;
  }
}
