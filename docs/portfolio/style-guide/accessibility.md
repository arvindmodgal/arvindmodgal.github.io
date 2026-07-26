---

icon: material/account-box-outline
---

# Accessibility

Accessible documentation ensures that all users, including those using assistive technologies, can read, understand, and navigate the content effectively.

Apply these guidelines to improve the usability and inclusiveness of your documentation.

---

## Write descriptive links

Link text should clearly describe the destination.

### ✅ Preferred

For more information, see
[Upload firmware](manage-firmware/upload-firmware.md).

### ❌ Avoid

Click
[here](manage-firmware/upload-firmware.md).

Descriptive links improve accessibility for screen readers and help users understand where a link leads.

---

## Add meaningful alternative text

Provide alternative (alt) text for images that convey important information.

### ✅ Preferred

```text
Device dashboard showing firmware upload progress.
```

### ❌ Avoid

```text
Screenshot
```

If an image is purely decorative, use empty alt text so screen readers can ignore it.

---

## Use headings in order

Organize content using a logical heading hierarchy.

### ✅ Preferred

```text
# Page title

## Main section

### Subsection
```

### ❌ Avoid

```text
# Page title

### Main section
```

A consistent heading structure helps users navigate documentation with assistive technologies.

---

## Don't rely on color alone

Do not use color as the only way to communicate information.

### ✅ Preferred

> Required fields are marked with an asterisk (*).

### ❌ Avoid

> Fields highlighted in red are required.

Users with color vision deficiencies may not distinguish color-based cues.

---

## Write accessible tables

Keep tables simple and use clear column headings.

Avoid:

- Nested tables
- Empty cells
- Tables used only for page layout

Tables should present structured information, not control page formatting.

---

## Keep language simple

Use plain language whenever possible.

Short sentences and familiar words improve readability for:

- Non-native English speakers
- Users with cognitive disabilities
- Screen reader users

---

## Support keyboard navigation

Avoid instructions that depend only on mouse actions.

### ✅ Preferred

Select **Settings**.

### Better

Select **Settings** or use the keyboard shortcut, if available.

Whenever possible, document keyboard shortcuts alongside mouse actions.

---

## Documentation in practice

!!! info "Example"

    The FirmwareCheck User Guide uses descriptive headings, meaningful links, and concise procedures to improve readability for all users.

## Key takeaways

- Write descriptive links.
- Add meaningful alt text to images.
- Follow a logical heading hierarchy.
- Don't rely on color alone.
- Keep tables simple.
- Use plain language.
- Document keyboard alternatives when available.

## Next steps

Continue with:

- [Docs-as-Code](docs-as-code.md)
- [Editorial checklist](editorial-checklist.md)