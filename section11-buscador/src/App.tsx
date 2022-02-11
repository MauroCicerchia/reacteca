import _ from "lodash";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Center, Container, Image, Input, Stack, StackDivider, Text, GridItem, SimpleGrid } from "@chakra-ui/react";

type Photo = {
  id: string;
  description: string;
  "alt_description": string;
  urls: {
    regular: string;
  };
  links: {
    html: string;
  };
};

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: async(values) => {
      const response = await fetch(`https://api.unsplash.com/search/photos?per_page=24&query=${values.search}`, {
        headers: {
          Authorization: "Client-ID FRMVCXZCVB1LwR8nkJaBgR7RUV-idkFgpx3aQaEPTcE",
        },
      });
      const data = await response.json();

      console.log(data.results);
      setPhotos(data.results);
    },
  });

  const open = (url: string) => window.open(url, "_blank");

  return (
    <Container maxWidth="100%">
      <Stack divider={<StackDivider />} pt={4} spacing={4}>
        <Center>
          <Input
            {...formik.getFieldProps("search")}
            placeholder="Search"
            width="xl"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                formik.handleSubmit();
              }
            }}
          >
          </Input>
        </Center>
        <Center width="100%">
          <SimpleGrid gap={4} gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="masonry">
            {photos.map((photo) => (
              <GridItem key={photo.id}>
                <Stack
                  _hover={{
                    shadow: "dark-lg",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                  }}
                  bgColor="gray.100"
                  borderRadius={12}
                  height="auto"
                  p={4}
                  width="sm"
                  onClick={() => open(photo.links.html)}
                >
                  <Image
                    alt={photo.alt_description}
                    h="sm"
                    objectFit="cover"
                    src={photo.urls.regular}
                    w="sm"
                  />
                  <Text overflowWrap="break-word">{_.capitalize(photo.alt_description)}</Text>
                </Stack>
              </GridItem>
            ))}
          </SimpleGrid>
        </Center>
      </Stack>
    </Container>
  );
}

export default App;
