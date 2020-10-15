import { useState, useEffect } from "react";
import { fetchCoordinates } from "../../data";

/**
 * Whenever 'address' changes, fetch and return a new set of coordinates
 *
 * @param {string} address - ipv4 address
 */
export const useGeolocator = (address: string) => {
  const [coordinates, setCoordinates] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const response = await fetchCoordinates(address);
        const { latitude, longitude } = response.data;

        setCoordinates(`${latitude}, ${longitude}`);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    setLoading(true);
    getCoordinates();

    return () => {
      setCoordinates("");
      setLoading(false);
      setError("");
    };
  }, [address, setLoading, setError, setCoordinates]);

  return { coordinates, loading, error };
};
