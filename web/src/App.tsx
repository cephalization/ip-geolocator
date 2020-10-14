import { Box, Grid } from "@chakra-ui/core";
import React from "react";

function App() {
  return (
    <Grid style={{ placeItems: "center" }} h="100vh" w="100%" bg="gray.50">
      <Box
        boxShadow="0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)"
        p={4}
        borderRadius={4}
      ></Box>
    </Grid>
  );
}

export default App;
