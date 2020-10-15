import { Request, Response, Router } from "express";
import { CityResponse, Reader } from "maxmind";
import { exit } from "process";
import { initDb } from "../data/initDb";

let dbLookup: Reader<CityResponse>;

// initilize db data or fail and close
(async function () {
  try {
    dbLookup = await initDb();
  } catch (e) {
    console.error(e);
    exit(1);
  }
})();

export const geolocatorController = Router();

const ipPattern = "^(?:[0-9]{1,3}.){3}[0-9]{1,3}$";

geolocatorController.get("/coordinates", (req: Request, res: Response) => {
  const ipAddress = (req.query.ip as string) || "";

  // check if the provided ip address is correctly formatted
  if (!ipAddress.match(ipPattern)) {
    return res.status(400).json({
      error: `'ip' query parameter is not correctly formatted.`,
      code: 0,
    });
  }

  // ip address appears to be valid, look it up
  const result = dbLookup.get(ipAddress);

  const latitude = result?.location?.latitude;
  const longitude = result?.location?.longitude;

  // do we have coordinates?
  if (latitude === null || longitude === null) {
    return res.status(404).json({
      error: `Coordinates not found for requested ip address.`,
      code: 1,
    });
  }

  // we've gotten coordinates for this ip, return em
  res.status(200).json({ message: "success", data: { latitude, longitude } });
});
