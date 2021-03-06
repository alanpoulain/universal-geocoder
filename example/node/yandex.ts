/* eslint-disable no-console */
import UniversalGeocoder from "../../dist/UniversalGeocoder";

const yandexGeocoder = UniversalGeocoder.createGeocoder("yandex");
yandexGeocoder.geocode(
  { text: "1600 Pennsylvania Ave, Washington, DC", locale: "en-US" },
  (result) => {
    console.log(result);
  }
);

yandexGeocoder.geodecode(
  { coordinates: { latitude: "44.915", longitude: "-93.21" }, locale: "en-US" },
  (result) => {
    console.log(result);
  }
);
