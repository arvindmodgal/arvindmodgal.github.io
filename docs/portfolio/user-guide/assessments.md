---
icon: material/clipboard-check-outline
---

# Assessments

Once a device has firmware attached, you can run a policy, vulnerability, or zero-day assessment against it.

## Create an assessment

!!! tip "Before you begin"
    You can only assess a firmware file after:

    1. [Creating a device](managing-devices.md#add-or-create-a-device)
    2. (Optional) [Adding firmware to the device](managing-devices.md#add-firmware-to-a-device)

**To create an assessment:**

1. On the left-hand panel, click **FirmwareCheck**. This displays all devices with **Active** status.
2. Click the device whose firmware you want to assess.
3. Click **Add assessment**.
4. On the **Assessment** tab, fill in the following fields.

    | Field | Description |
    |---|---|
    | Assessment name | Name of the assessment |
    | Assessment type | Type of assessment, selected from a list |
    | Start | Start date, used to track the assessment's due date |
    | End | End date, used to track the assessment's due date |
    | Description | A description of the assessment |
    | Select policy category *(policy assessments only)* | Category, selected from a list |
    | Select policy *(policy assessments only)* | Policy, selected from a list |

5. Click **Next**.
6. On the **Firmware** tab, choose one of the following options:

    **Option 1 — use an existing firmware file**

    - Select the firmware file from the list, then go to step 8.

    **Option 2 — replace an existing firmware file with a new version**

    1. Click **Upload a different firmware file**.
    2. Select **Update an existing firmware file**.
    3. Click **Select file to upload** and enter the version number.
    4. Click **Upload**, then go to step 8.

    **Option 3 — upload a new firmware file**

    1. Select **Upload a new firmware file**.
    2. Click **Select file to upload**. Browse to and select the file.
    3. Enter a firmware name and version number, then click **Upload**. Go to step 8.

7. Click **Next**.
8. On the **Confirm** tab, click **Add assessment**.

## See also

- [Managing devices](managing-devices.md)
- [Getting started](getting-started.md)
- [Jira integration](jira-integration.md)
