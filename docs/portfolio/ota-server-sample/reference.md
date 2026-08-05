# Endpoint Reference

All endpoints are served from the base URL `http://localhost:8080` (default development port). No authentication is required.

---

## POST `/`

Report firmware update status.

### Request body

| Field | Type | Required | Description |
|---|---|---|---|
| `device` | string | Yes | Device type: `omega2`, `omega2p`, `omega2pro` |
| `current_version` | string | Yes | Installed firmware version |
| `current_build` | integer | Yes | Installed firmware build number |
| `status` | string | Yes | `success`, `failed`, or `pending` |

### Response

| Status | Body | Description |
|---|---|---|
| `200 OK` | `{"success": "OK"}` | Status recorded |
| `400 Bad Request` | `{"error": "...", "message": "..."}` | Missing or invalid field |

---

## GET `/{device}`

List all available firmware releases for a device.

### Path parameters

| Parameter | Type | Description |
|---|---|---|
| `device` | string | Device type: `omega2`, `omega2p`, `omega2pro` |

### Response

| Status | Body | Description |
|---|---|---|
| `200 OK` | Array of `FirmwareRelease` objects | All firmware releases, sorted by build descending |
| `404 Not Found` | `{"error": "...", "message": "..."}` | Device not found |

---

## GET `/{device}/{fwType}`

Get a specific firmware release.

### Path parameters

| Parameter | Type | Description |
|---|---|---|
| `device` | string | Device type |
| `fwType` | string | `latest` (highest build) or `stable` (highest stable build) |

### Response

| Status | Body | Description |
|---|---|---|
| `200 OK` | Single `FirmwareRelease` object | Matching firmware release |
| `404 Not Found` | `{"error": "...", "message": "..."}` | No matching firmware for device/type |

---

## Response schemas

### FirmwareRelease

```json
{
  "version": "0.3.2",
  "url": "http://repo.onioniot.com/omega2/images/omega2p-v0.3.2-b233.bin",
  "build": 233,
  "device": "omega2p",
  "stable": true
}
