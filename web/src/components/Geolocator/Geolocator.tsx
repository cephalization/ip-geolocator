import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/core";

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

export const Geolocator = ({ url }: { url: string }) => {
  const [address] = useState("");

  if (!url)
    return (
      <Container>
        <EmptyState />
      </Container>
    );

  if (url && !address)
    return (
      <Container>
        <ErrorState error="" />
      </Container>
    );

  return (
    <Container>
      <ValidAddress>{address}</ValidAddress>
    </Container>
  );
};
