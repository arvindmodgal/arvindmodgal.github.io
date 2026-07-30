---

icon: material/invoice-text-edit-outline

---

# Writing procedures

Procedures help users complete a task. Every procedure should focus on a single user goal and provide clear, sequential instructions.

Organize procedures using a consistent structure so users know what to expect, regardless of the topic.

## Structure of a procedure

Use the following structure when writing task topics:

1. Title
2. Introduction
3. Before you begin
4. Procedure
5. Expected result
6. Next steps
7. Related tasks

Not every procedure requires every section, but the overall structure should remain consistent throughout the documentation.

---

## Write task-oriented titles

Use titles that describe what users want to accomplish.

### Preferred

- Create a device
- Upload firmware
- Run an assessment
- Reset your password

### Avoid

- Device Management
- Firmware Operations
- Assessment Functions
- Password Utilities

Task-oriented titles help users quickly locate the information they need.

---

## Begin with a short introduction

Start each procedure with one or two sentences explaining:

- What the task accomplishes
- When users should perform it

Avoid explaining how the feature works. Save conceptual information for concept topics.

### Example

> Upload firmware to associate a firmware image with a device before running a security assessment.

---

## Include "Before you begin"

List only the prerequisites required to complete the task.

Typical prerequisites include:

- Required permissions
- Previous tasks
- Software requirements
- Files or information the user must have available

Whenever possible, link to related procedures instead of repeating instructions.

---

## Write clear steps

Write one action per step.

Begin each step with an imperative verb.

### Preferred

1. Click **Create device**.
2. Enter the device name.
3. Click **Save**.

### Avoid

> Click **Create device**, enter the device name, select the required options, and save the device.

Breaking complex actions into smaller steps makes procedures easier to follow.

---

## Explain the expected result

Tell users what should happen after they complete the procedure.

### Example

> The device appears in the device list and is ready for firmware upload.

Expected results reassure users that the task completed successfully.

---

## Use notes sparingly

Use notes only when additional information helps users complete the task.

Choose the appropriate callout type:

- **Note** – Additional information
- **Tip** – Best practices or recommendations
- **Warning** – Potential risks or irreversible actions

Avoid overusing callouts. Too many notes reduce their effectiveness.

---

## Guide users to the next task

End every procedure by directing users to the next logical task.

### Example

After creating a device, users typically upload firmware.

```
## Next steps

- Upload firmware
```

This creates a natural workflow through the documentation.

---

## Link related tasks

Include links to related topics without interrupting the primary procedure.

Related tasks help users explore the documentation without duplicating content.

### Example

```
## Related tasks

- Update device information
- Archive a device
- Delete a device
```

---

## Documentation in practice

!!! info "Example"

    The FirmwareCheck User Guide follows a consistent structure throughout task topics:

    - Introduction
    - Before you begin
    - Procedure
    - Notes
    - Next steps
    - Related tasks

    This consistency helps users learn the documentation as well as the product.

## Key takeaways

- Focus on one user goal per procedure.
- Use task-oriented titles.
- Write one action per step.
- Include only essential prerequisites.
- Describe the expected result.
- End with Next steps and Related tasks.