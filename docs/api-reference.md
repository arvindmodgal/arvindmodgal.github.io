# OTA Firmware API Reference

The Over-The-Air (OTA) Firmware API allows IoT hardware devices to query available firmware builds, retrieve specific release channels, and report update status back to the server.

## Server Base URL

`http://localhost:8080`

---

## Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/{device}` | Returns all firmware release history for a device. |
| `GET` | `/{device}/{fwType}` | Returns the latest build for a specific release channel. |
| `POST` | `/` | Submits device update status and telemetry data. |

---

## Endpoints

### 1. Get Firmware History

Retrieves a list of all compiled firmware images available for a specific hardware model.

* **HTTP Method:** `GET`
* **Path:** `/{device}`

#### Path Parameters

| Parameter | Type | Required | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| `device` | String | **Yes** | The hardware model identifier. | `omega2p` |

#### Response (`200 OK`)

```json
[
  {
    "version": "0.3.2",
    "url": "[http://repo.onioniot.com/omega2/images/omega2p-v0.3.2-b234.bin](http://repo.onioniot.com/omega2/images/omega2p-v0.3.2-b234.bin)",
    "build": 234,
    "device": "omega2p",
    "stable": false
  }
]
```

