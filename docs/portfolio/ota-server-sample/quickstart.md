# Quickstart

Get from zero to your first successful API call in under 3 minutes.

## Prerequisites

- Node.js installed
- The OTA server running locally (`npm install && npm run test`)
- cURL or any HTTP client
- No authentication required

## Step 1: List all firmware for a device

```
bash
curl -X GET http://localhost:8080/omega2p \
  -H "Accept: application/json"

  Expected response (200 OK):

```
 JSON

```


[
  {
    "version": "0.3.2",
    "url": "http://repo.onioniot.com/omega2/images/omega2p-v0.3.2-b234.bin",
    "build": 234,
    "device": "omega2p",
    "stable": false
  },
  {
    "version": "0.3.2",
    "url": "http://repo.onioniot.com/omega2/images/omega2p-v0.3.2-b233.bin",
    "build": 233,
    "device": "omega2p",
    "stable": true
  }
]

```

The response is an array of all firmware releases for the device, sorted by build number in descending order.

## Step 2: Get the latest stable firmware

Filter to a single release by appending /stable or /latest to the device path.

```
bash
curl -X GET http://localhost:8080/omega2p/stable \
  -H "Accept: application/json"

```
```
Expected response (200 OK):
```
```
JSON
{
  "version": "0.3.2",
  "url": "http://repo.onioniot.com/omega2/images/omega2p-v0.3.2-b233.bin",
  "build": 233,
  "device": "omega2p",
  "stable": true
}
```

### Step 3: Report firmware status
Use the root endpoint to log an update result from the device.

```
bash
curl -X POST http://localhost:8080/ \
  -H "Content-Type: application/json" \
  -d '{
    "device": "omega2p",
    "current_version": "0.3.2",
    "current_build": 233,
    "status": "success"
  }'

```
```

Expected response (200 OK):
```
```
JSON

{
  "success": "OK"
}

```

### Common errors
| Error             | Cause                                | Fix                                                                |
| ----------------- | ------------------------------------ | ------------------------------------------------------------------ |
| `404 Not Found`   | Device does not exist in `fwDB.json` | Use `omega2`, `omega2p`, or `omega2pro`                            |
| `400 Bad Request` | Missing field in POST body           | Include `device`, `current_version`, `current_build`, and `status` |


## What's next

- [Endpoint Reference](reference.md)
- [Download OpenAPI Spec](openapi.yaml){:download}
- [Download Postman Collection](OTA-Server-Sample.postman_collection.json){:download}