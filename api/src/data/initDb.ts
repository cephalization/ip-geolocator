import maxmind, { AsnResponse, CityResponse, CountryResponse } from "maxmind";
import path from "path";

export const initDb = async () => {
  const dbLocation = path.join(
    __dirname,
    "..",
    "..",
    "static",
    "GeoLite2-City.mmdb"
  );

  if (!dbLocation) {
    throw new Error("Could not open src/data/GeoLite2-ASN.mmdb");
  }

  return await maxmind.open<CityResponse>(dbLocation);
};
