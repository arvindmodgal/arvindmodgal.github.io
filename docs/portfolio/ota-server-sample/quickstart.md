# Quickstart

Get from zero to your first successful API call in under 3 minutes.

## Prerequisites

- Node.js installed
- The OTA server running locally (`npm install && npm run test`)
- cURL or any HTTP client
- No authentication required

## Step 1: List all firmware for a device

```bash
curl -X GET http://localhost:8080/omega2p \
  -H "Accept: application/json"