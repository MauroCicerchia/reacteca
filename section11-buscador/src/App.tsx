import _ from "lodash";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Center, Container, Image, Input, Stack, StackDivider, Text, GridItem, SimpleGrid, Box } from "@chakra-ui/react";

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
      <Stack divider={<StackDivider borderColor="gray.100" />} pt={4} spacing={4}>
        <Center>
          <Input
            bgColor="white"
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
          <div style={{ columnCount: 3, columnGap: 12, columnWidth: "25%" }}>
            {photos.map((photo) => (
              <Stack
                key={photo.id}
                _hover={{
                  transform: "scale(1.02)",
                  shadow: "md",
                  cursor: "pointer",
                  transition: "all 0.1s ease-in-out",
                }}
                bgColor="white"
                borderRadius={12}
                height="auto"
                mb={4}
                overflow="visible"
                style={{ breakInside: "avoid-column" }}
                width="sm"
                onClick={() => open(photo.links.html)}
              >
                <Image
                  alt={photo.alt_description}
                  objectFit="cover"
                  src={photo.urls.regular}
                />
              </Stack>
            ))}
          </div>
        </Center>
      </Stack>
    </Container>
  );
}

export default App;
