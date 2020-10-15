import { fetcher } from ".";

export const fetchCoordinates = async (ipAddress: string) => {
  if (!ipAddress) throw new Error("ip address not provided");

  try {
    const query = new URLSearchParams();
    query.append("ip", ipAddress);

    const response = await fetcher(`coordinates?${query}`);
    const body = await response.json();

    if (body.error) {
      throw new Error(body.error);
    }

    return body;
  } catch (e) {
    throw new Error(e);
  }
};
