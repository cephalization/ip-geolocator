import { Box, Divider, Grid, Text } from "@chakra-ui/core";
import React, { useCallback, useState } from "react";
import { Geolocator } from "./components/Geolocator";
import { IPv4Form } from "./components/IPv4Form";

function App() {
  const [address, setAddress] = useState("");

  /**
   * IPv4 Form Address submission handler
   *
   * @param {string} ipAddress - valid ipAddress entered by user
   */
  const handleSubmit: Function = useCallback(
    (ipAddress: string) => {
      if (ipAddress) {
        setAddress(ipAddress);
      }
    },
    [setAddress]
  );

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
        <IPv4Form onSubmit={handleSubmit} />
        <Divider />
        <Geolocator address={address} />
      </Box>
    </Grid>
  );
}

export default App;
