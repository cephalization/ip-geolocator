import React, { useState } from "react";
import { Box, Skeleton, Text } from "@chakra-ui/core";

const EmptyState = () => (
  <Text fontSize="lg" opacity={0.5}>
    An IPv4 Address has not been entered
  </Text>
);

const ValidAddress = ({ children }: { children: React.ReactNode }) => (
  <Text fontSize="2xl">{children || ""}</Text>
);

const ErrorState = ({ error }: { error: string }) => (
  <Text fontSize="lg">{error || "An unknown error has occurred"}</Text>
);

const Container = ({ children }: { children: React.ReactNode }) => (
  <Box py={4} px={2}>
    {children}
  </Box>
);

const loading = true;

export const Geolocator = ({ address }: { address: string }) => {
  const [coordinates] = useState("");

  // user has not entered any input yet
  if (!address) {
    return (
      <Container>
        <EmptyState />
      </Container>
    );
  }

  // user has entered input, we are loading translation request
  if (address && loading) {
    return (
      <Container>
        <Skeleton height="30px" />
      </Container>
    );
  }

  // user has entered input, we've finished loading, and we still don't have valid coords
  if (address && !coordinates) {
    return (
      <Container>
        <ErrorState error="" />
      </Container>
    );
  }

  return (
    <Container>
      <ValidAddress>{coordinates}</ValidAddress>
    </Container>
  );
};
