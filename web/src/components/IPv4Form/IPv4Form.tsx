import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import React, { useCallback, useState } from "react";

const ipPattern = "^(?:[0-9]{1,3}.){3}[0-9]{1,3}$";

export const IPv4Form = ({ onSubmit }: { onSubmit: Function }) => {
  const [ip, setIp] = useState("");

  const isValid = ip.match(ipPattern);

  /**
   * Controlled input component setter
   *
   * @param {React.ChangeEvent} e - input onChange event
   */
  const handleInputChange: React.ChangeEventHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setIp(e.target.value),
    [setIp]
  );

  /**
   * Form submission handler
   *
   * @param {React.FormEvent} e - form onSubmit event
   */
  const handleSubmit: React.FormEventHandler = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // validate
      if (!isValid) return;

      // call parent submission handler
      onSubmit(ip);
    },
    [onSubmit, isValid, ip]
  );

  return (
    <Box py={4} px={2}>
      <form onSubmit={handleSubmit}>
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
              value={ip}
              onChange={handleInputChange}
              pattern="^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$"
            />
            <Button variantColor="teal" type="submit" isDisabled={!isValid}>
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
