import { Box, Divider, Grid, Text } from "@chakra-ui/core";
import React from "react";
import { Geolocator } from "./components/Geolocator";
import { IPv4Form } from "./components/IPv4Form";

function App() {
  return (
    <Grid style={{ placeItems: "center" }} h="100vh" w="100%">
      <Box
        boxShadow="0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)"
        p={4}
        borderRadius={4}
        bg="gray.50"
      >
        <Text fontSize="3xl" px={2} pb={6}>
          IPv4 Geolocator
        </Text>
        <IPv4Form />
        <Divider />
        <Geolocator url="" />
      </Box>
    </Grid>
  );
}

export default App;
