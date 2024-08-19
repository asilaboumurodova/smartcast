import React from 'react'

function Info() {
    // Example: Get device information using Tizen Web API

// Get the device model
tizen.systeminfo.getPropertyValue("MODEL", function(model) {
    console.log("Device model: " + model.model);
});

// Get the device manufacturer
tizen.systeminfo.getPropertyValue("MANUFACTURER", function(manufacturer) {
    console.log("Device manufacturer: " + manufacturer.manufacturer);
});

// Get the battery level
tizen.systeminfo.getPropertyValue("BATTERY", function(battery) {
    console.log("Battery level: " + (battery.level * 100) + "%");
});

// Get the Wi-Fi network status
tizen.systeminfo.getPropertyValue("WIFI_NETWORK", function(wifi) {
    console.log("Wi-Fi status: " + (wifi.status ? "Connected" : "Not Connected"));
});

  return (
    <>
      <p>{model.model}</p>
      <p>{manufacturer.manufacturer}</p>
      <p>{battery.level}</p>
      <p>{wifi.status}</p>
    </>
  )
}

export default Info
