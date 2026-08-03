---
icon: material/code-block-tags
---

# Docs-as-Code

Docs-as-Code applies software development practices to documentation. Documentation is written as text files, managed with version control, reviewed through pull requests, and published automatically.

This approach improves collaboration, consistency, and maintainability.

---

## Write in Markdown

Use Markdown as the primary authoring format.

Markdown is:

- Easy to read
- Easy to write
- Version-control friendly
- Supported by most documentation platforms

### Example

```markdown
# Create a device

Click **Create device**.

!!! note

    Upload firmware before running an assessment.
```

Avoid embedding HTML unless Markdown cannot achieve the required formatting.

---

## Organize content logically

Structure documentation into folders that reflect the user's workflow rather than the application's structure.

### Example

```
firmwarecheck/
│
├── getting-started/
├── manage-devices/
├── manage-firmware/
├── run-assessments/
└── troubleshooting/
```

A logical folder structure makes content easier to maintain and navigate.

---

## Use meaningful file names

Choose file names that describe the topic clearly.

<div class="voice-table" markdown="1">

| Preferred                                                           | Avoid                                         |
| ------------------------------------------------------------------- | --------------------------------------------- |
| `create-a-device.md`<br>`upload-firmware.md`<br>`reset-password.md` | `page1.md`<br>`document.md`<br>`new-topic.md` |

</div>

Use lowercase letters and hyphens to separate words.

---

## Keep topics focused

Each Markdown file should describe one concept or one task.

<div class="voice-table" markdown="1">

| Preferred       | Avoid                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Create a device | Device management<br>&nbsp;&nbsp;- Create<br>&nbsp;&nbsp;- Update<br>&nbsp;&nbsp;- Delete<br>&nbsp;&nbsp;- Archive<br>&nbsp;&nbsp;- Restore |

</div>

## Smaller topics are easier to reuse, review, and update.

## Use version control

Store documentation in a version control system such as Git.

Version control helps teams:

- Track changes
- Review updates
- Restore previous versions
- Collaborate safely

Write meaningful commit messages that describe the purpose of the change.

### Example

```
Add device management procedures

Update assessment workflow

Correct terminology in style guide
```

---

## Review documentation like code

Treat documentation reviews with the same care as code reviews.

Review for:

- Accuracy
- Clarity
- Consistency
- Broken links
- Formatting
- Accessibility

Encourage peer reviews before publishing.

---

## Automate publishing

Whenever possible, automate documentation builds and publishing.

Automation helps:

- Detect broken links
- Validate Markdown
- Ensure consistent formatting
- Publish updates automatically

Automation reduces manual effort and improves documentation quality.

---

## Documentation in practice

!!! info "Example"

    The FirmwareCheck User Guide is written in Markdown, organized into modular topics, managed with Git, and published using MkDocs Material.

## Key takeaways

- Write documentation in Markdown.
- Organize content around user workflows.
- Use descriptive file names.
- Keep topics focused.
- Manage documentation with version control.
- Review documentation before publishing.
- Automate publishing whenever possible.

## Next steps

Continue with:

- [Editorial checklist](editorial-checklist.md)
