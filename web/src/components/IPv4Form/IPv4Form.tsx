import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import React from "react";

export const IPv4Form = () => {
  return (
    <Box py={4} px={2}>
      <form>
        <FormControl>
          <FormLabel htmlFor="ip-address">IPv4 Address</FormLabel>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            my={2}
          >
            <Input
              type="text"
              id="ip-address"
              name="ip-address"
              aria-describedby="ip-address-helper-text"
              placeholder="127.0.0.1"
              w="80%"
            />
            <Button variantColor="teal" type="submit">
              Submit
            </Button>
          </Box>
          <FormHelperText id="ip-address-helper-text">
            We'll look up a valid IPv4 address and convert it to latitude and
            longitude
          </FormHelperText>
        </FormControl>
      </form>
    </Box>
  );
};
