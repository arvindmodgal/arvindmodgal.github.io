---

icon: material/script-text-play-outline

---

# Formatting

Consistent formatting improves readability and helps users find information quickly. Apply these guidelines to every documentation topic to create a predictable reading experience.

## Use descriptive headings

Headings should clearly describe the content that follows.

### ✅ Preferred

- Create a device
- Upload firmware
- Reset your password

### ❌ Avoid

- Device
- Firmware
- Passwords
- Miscellaneous

Choose headings that reflect the user's goal rather than the product feature.

---

## Keep heading levels consistent

Use headings in a logical hierarchy.

```text
# Page title

## Main section

### Subsection
```

Avoid skipping heading levels.

### ✅ Preferred

```text
# Create a device

## Before you begin

## Create a device

### Optional settings
```

### ❌ Avoid

```text
# Create a device

### Before you begin
```

---

## Use numbered lists for procedures

Use numbered lists when steps must be completed in order.

### ✅ Preferred

1. Click **Create device**.
2. Enter the device name.
3. Click **Save**.

---

## Use bullet lists for unordered information

Use bullets for:

- Features
- Requirements
- Options
- Examples
- Related information

Do not number items when sequence doesn't matter.

---

## Format UI elements consistently

Use **bold** for:

- Buttons
- Menu commands
- Dialog names
- Tabs
- Fields

### Example

Click **Save**.

Select **Profile**.

Open the **Settings** dialog.

Enter the device name in the **Name** field.

---

## Write meaningful links

Link text should describe the destination.

### ✅ Preferred

For more information, see
[Upload firmware](manage-firmware/upload-firmware.md).

### ❌ Avoid

Click
[here](manage-firmware/upload-firmware.md).

---

## Use tables appropriately

Tables work best for comparing related information.

### Example

| Assessment | Purpose |
|------------|---------|
| Vulnerability | Identifies known vulnerabilities |
| Policy | Checks compliance requirements |
| Zero-day | Detects emerging threats |

Avoid using tables for long paragraphs of text.

---

## Use images purposefully

Include screenshots only when they help users complete a task.

Every image should:

- Support the accompanying text.
- Highlight the relevant UI.
- Be current.
- Include alt text.

Avoid screenshots that simply repeat the written instructions.

---

## Use callouts consistently

Use callouts only when they add value.

| Callout | Use for |
|----------|----------|
| 📝 Note | Additional information |
| 💡 Tip | Best practices |
| ⚠️ Warning | Potential risks |
| 📌 Important | Information users must not overlook |

Avoid placing important procedural steps inside callouts.

---

## Documentation in practice

!!! info "Example"

    The FirmwareCheck User Guide uses descriptive headings, numbered procedures, meaningful links, and consistent callouts throughout the documentation.

## Key takeaways

- Use descriptive headings.
- Maintain a logical heading hierarchy.
- Number procedures.
- Use bullets for unordered information.
- Bold UI elements.
- Write descriptive links.
- Use screenshots only when they add value.
- Apply callouts consistently.

## Next steps

Continue with:

- [Accessibility](accessibility.md)
- [Docs-as-Code](docs-as-code.md)