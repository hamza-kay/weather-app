const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);


request({
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=nEcvva5oDGQXrKph886wvuxZMLUWjwBC&location=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  console.log(`Address ${body.results[0].locations[0].adminArea5}`);
  console.log(`Lat ${body.results[0].locations[0].displayLatLng.lat}`);
  console.log(`Lng ${body.results[0].locations[0].displayLatLng.lng}`);
});
