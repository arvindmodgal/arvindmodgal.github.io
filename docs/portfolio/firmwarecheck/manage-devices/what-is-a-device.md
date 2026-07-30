---

# icon: material/laptop-account
icon: material/devices
---

# What is a device?

A **device** represents the physical product you want to assess in FirmwareCheck, such as a router, IP camera, industrial controller, or automotive electronic control unit (ECU).

FirmwareCheck uses a device record to organize all information related to that product, including uploaded firmware, assessment results, Software Bills of Materials (SBOMs), vulnerability findings, and compliance reports.

A single device can contain multiple firmware versions, allowing you to compare assessment results over time and track the security posture of a product throughout its lifecycle.

A device also stores several component attributes:

- Software configuration
- SBOM — software packages and licensing
- Credentials
- Application configurations, such as web servers


## Device information

A device record typically includes:

- Device name
- Vendor
- Model
- Firmware version
- Industry
- Description

The information you provide helps identify the product and makes it easier to locate and manage devices in larger workspaces.

!!! tip

    Use a consistent naming convention for device records. Including the product name, model, and firmware version makes devices easier to identify and search.

## Next steps

Continue with one of the following tasks:

- [Understand device status](device-status.md)
- [Create a device](create-a-device.md)

## Related tasks

- [Find a device](find-a-device.md)
- [Update device information](update-device-information.md)