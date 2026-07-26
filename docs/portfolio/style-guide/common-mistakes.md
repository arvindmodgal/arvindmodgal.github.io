---
icon: material/file-document-alert-outline
---

# Common Technical Writing Mistakes

This page highlights common writing and editing issues found in technical documentation. The guidance is based on modern documentation practices and recommendations from the Microsoft Writing Style Guide and other industry references.

Use this page as a quick reference during peer reviews and editorial reviews.

---

## Quick reference

| Category | Remember |
|----------|----------|
| Acronyms | Spell out on first reference and avoid periods. |
| Numbers | Follow your organization's number style consistently. |
| Voice | Prefer active voice and present tense. |
| Word choice | Use precise, familiar words. |
| Capitalization | Use sentence case unless a proper noun or UI label requires otherwise. |
| Grammar | Ensure subject-verb agreement and clear pronoun references. |
| Lists | Use parallel grammatical structure. |
| Punctuation | Use hyphens, en dashes, and em dashes correctly. |

---

## Acronyms and abbreviations

### Best practices

- Spell out an acronym on first use.
- Do not use periods in acronyms.
- Do not use apostrophes to form plural acronyms.

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| P.I.N. | PIN |
| ID's | IDs |
| API's | APIs |
| The API... | The Application Programming Interface (API)... |

---

## Numbers

Follow your organization's style guide for writing numbers.

Whatever style you choose, apply it consistently.

| ❌ Inconsistent | ✅ Consistent |
|----------------|--------------|
| Five users and 12 devices | Five users and twelve devices *(or)* 5 users and 12 devices |
| 5 users logged in. | Five users logged in. |

!!! tip

    Spell out any number that begins a sentence.

---

## Voice and tense

### Prefer active voice

Active voice makes instructions easier to understand.

| ❌ Passive | ✅ Active |
|------------|-----------|
| The file is uploaded automatically. | The system uploads the file automatically. |
| The report is generated after the scan is complete. | FirmwareCheck generates the report after the scan completes. |

### Use present tense

Documentation should describe how the product behaves today.

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| The next section will explain... | The next section explains... |
| The dialog box is displaying... | The dialog box displays... |

---

## Word choice

### Need vs. Want

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| Users who want to complete registration... | Users who need to complete registration... |
| If you want to customize the dashboard... | If you want to customize the dashboard... *(Correct because it expresses user choice.)* |

### Can vs. May

| Word | Use for |
|------|---------|
| **Can** | Ability |
| **May** | Permission or possibility |

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| You may not use this button when it is disabled. | You cannot use this button when it is disabled. |
| You cannot access another user's account. | You may not access another user's account. |

### Because vs. Since

Use **because** when expressing a reason.

Use **since** when referring to time.

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| The report failed since the upload was incomplete. | The report failed because the upload was incomplete. |
| The feature has existed because 2023. | The feature has existed since 2023. |

### Which vs. That

| Word | Use |
|------|-----|
| **That** | Introduces essential information. |
| **Which** | Introduces nonessential information. |

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| The settings, which control authentication, must be configured. | The settings that control authentication must be configured. |
| FirmwareCheck, that scans firmware, generates reports. | FirmwareCheck, which scans firmware, generates reports. |

---

## Grammar

### Subject-verb agreement

Subjects and verbs must agree in number.

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| The list of users are displayed. | The list of users is displayed. |
| Each device have a unique ID. | Each device has a unique ID. |

### Clear pronoun references

Avoid pronouns with unclear antecedents.

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| When the user clicks the button, it displays an error. | When the user clicks **Submit**, the application displays an error. |
| This should be avoided. | Avoid this practice. |

### Parallel structure

Use the same grammatical form throughout lists and procedures.

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| Planning, to test, and deployment | Planning, testing, and deployment |
| Click **Save**, entering the details, then submit. | Click **Save**, enter the details, then click **Submit**. |

---

## Capitalization

Use sentence case for headings unless your organization's style guide specifies otherwise.

Capitalize:

- Product names
- Company names
- UI labels exactly as they appear

| ❌ Avoid | ✅ Preferred |
|----------|--------------|
| Click CLOSE. | Click **Close**. |
| Functional Requirements Specification Document | Functional requirements specification document |

---

## Punctuation

### Hyphens, en dashes, and em dashes

| Mark | Use | Example |
|------|-----|---------|
| Hyphen (-) | Compound modifiers | user-defined |
| En dash (–) | Numeric ranges | 2023–2025 |
| Em dash (—) | Parenthetical interruption | Firmware—which scans embedded software—produces an SBOM. |

### Punctuation in tables

Do not end sentence fragments in tables with periods unless every table entry is a complete sentence.

---

## Before and after

Small editorial changes often make documentation easier to read.

| ❌ Before | ✅ After |
|-----------|----------|
| Click on **Save**. | Click **Save**. |
| In order to create a device... | To create a device... |
| Utilize | Use |
| At this point in time | Now |
| Due to the fact that | Because |
| It should be noted that... | *(Delete entirely.)* |
| Please be aware that... | *(Delete entirely.)* |

---

## Documentation in practice

!!! info "Example"

    During editorial review of the FirmwareCheck User Guide, wording was simplified, passive voice was reduced, terminology was standardized, and procedures were rewritten to improve clarity and consistency.

---

## Key takeaways

- Write for clarity rather than grammatical complexity.
- Use active voice and present tense.
- Apply terminology and capitalization consistently.
- Choose familiar words over formal alternatives.
- Review documentation for consistency before publishing.

---

## Related topics

- [Writing principles](writing-principles.md)
- [Voice and tone](voice-and-tone.md)
- [Terminology](terminology.md)
- [Editorial checklist](editorial-checklist.md)

## Sources and Further Reading

- Original FinancialObjects Style Guide (2005), adapted and expanded
- Microsoft Manual of Style for Technical Publications, 4th Edition 
- Microsoft Writing Style Guide (modern successor to MSTP)
- Common Errors in Technical Writing, CSUCI Writing Center 
