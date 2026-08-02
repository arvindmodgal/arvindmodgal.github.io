---
icon: material/file-document-alert-outline
---

# Common Technical Writing Mistakes

This page highlights common writing and editing issues found in technical documentation. The guidance is based on modern documentation practices and recommendations from the Microsoft Writing Style Guide and other industry references.

Use this page as a quick reference during peer reviews and editorial reviews.

---

## Quick reference

<div class="generic-table" markdown="1">
| Category       | Remember                                                               |
| -------------- | ---------------------------------------------------------------------- |
| Acronyms       | Spell out on first reference and avoid periods.                        |
| Numbers        | Follow your organization's number style consistently.                  |
| Voice          | Prefer active voice and present tense.                                 |
| Word choice    | Use precise, familiar words.                                           |
| Capitalization | Use sentence case unless a proper noun or UI label requires otherwise. |
| Grammar        | Ensure subject-verb agreement and clear pronoun references.            |
| Lists          | Use parallel grammatical structure.                                    |
| Punctuation    | Use hyphens, en dashes, and em dashes correctly.                       |
</div>
---

## Acronyms and abbreviations

### Best practices

- Spell out an acronym on first use.
- Do not use periods in acronyms.
- Do not use apostrophes to form plural acronyms.

<div class="voice-table" markdown="1">

| Preferred                                      | Avoid      |
| ---------------------------------------------- | ---------- |
| PIN                                            | P.I.N.     |
| IDs                                            | ID's       |
| APIs                                           | API's      |
| The Application Programming Interface (API)... | The API... |

</div>

---

## Numbers

Follow your organization's style guide for writing numbers.

Whatever style you choose, apply it consistently.

<div class="voice-table" markdown="1">

| Consistent                    | Inconsistent              |
| ----------------------------- | ------------------------- |
| Five users and twelve devices | Five users and 12 devices |
| Five users logged in.         | 5 users logged in.        |

</div>
!!! tip

    Spell out any number that begins a sentence.

---

## Voice and tense

### Prefer active voice

Active voice makes instructions easier to understand.

<div class="voice-table" markdown="1">

| Preferred                                                    | Avoid                                               |
| ------------------------------------------------------------ | --------------------------------------------------- |
| The system uploads the file automatically.                   | The file is uploaded automatically.                 |
| FirmwareCheck generates the report after the scan completes. | The report is generated after the scan is complete. |

</div>

### Use present tense

Documentation should describe how the product behaves today.

<div class="voice-table" markdown="1">

| Preferred                    | Avoid                            |
| ---------------------------- | -------------------------------- |
| The next section explains... | The next section will explain... |
| The dialog box displays...   | The dialog box is displaying...  |

</div>

---

## Word choice

### Need vs. Want

<div class="voice-table" markdown="1">

| Preferred                                                                               | Avoid                                      |
| --------------------------------------------------------------------------------------- | ------------------------------------------ |
| Users who need to complete registration...                                              | Users who want to complete registration... |
| If you want to customize the dashboard... _(Correct because it expresses user choice.)_ | If you want to customize the dashboard...  |

</div>

### Can vs. May

<div class="generic-table" markdown="1">
| Word    | Use for                   |
| ------- | ------------------------- |
| **Can** | Ability                   |
| **May** | Permission or possibility |
</div>

<div class="voice-table" markdown="1">

| Preferred                                       | Avoid                                            |
| ----------------------------------------------- | ------------------------------------------------ |
| You cannot use this button when it is disabled. | You may not use this button when it is disabled. |
| You may not access another user's account.      | You cannot access another user's account.        |

</div>

### Because vs. Since

Use **because** when expressing a reason.

Use **since** when referring to time.

<div class="voice-table" markdown="1">

| Preferred                                            | Avoid                                              |
| ---------------------------------------------------- | -------------------------------------------------- |
| The report failed because the upload was incomplete. | The report failed since the upload was incomplete. |
| The feature has existed since 2023.                  | The feature has existed because 2023.              |

</div>

### Which vs. That

<div class="generic-table" markdown="1">
| Word      | Use                                  |
| --------- | ------------------------------------ |
| **That**  | Introduces essential information.    |
| **Which** | Introduces nonessential information. |

</div>

<div class="voice-table" markdown="1">

| Preferred                                                    | Avoid                                                           |
| ------------------------------------------------------------ | --------------------------------------------------------------- |
| The settings that control authentication must be configured. | The settings, which control authentication, must be configured. |
| FirmwareCheck, which scans firmware, generates reports.      | FirmwareCheck, that scans firmware, generates reports.          |

</div>

---

## Grammar

### Subject-verb agreement

Subjects and verbs must agree in number.

<div class="voice-table" markdown="1">

| Preferred                       | Avoid                            |
| ------------------------------- | -------------------------------- |
| The list of users is displayed. | The list of users are displayed. |
| Each device has a unique ID.    | Each device have a unique ID.    |

</div>

### Clear pronoun references

Avoid pronouns with unclear antecedents.

<div class="voice-table" markdown="1">

| Preferred                                                           | Avoid                                                  |
| ------------------------------------------------------------------- | ------------------------------------------------------ |
| When the user clicks **Submit**, the application displays an error. | When the user clicks the button, it displays an error. |
| Avoid this practice.                                                | This should be avoided.                                |

</div>

### Parallel structure

Use the same grammatical form throughout lists and procedures.

<div class="voice-table" markdown="1">

| Preferred                                                 | Avoid                                              |
| --------------------------------------------------------- | -------------------------------------------------- |
| Planning, testing, and deployment                         | Planning, to test, and deployment                  |
| Click **Save**, enter the details, then click **Submit**. | Click **Save**, entering the details, then submit. |

</div>

---

## Capitalization

Use sentence case for headings unless your organization's style guide specifies otherwise.

Capitalize:

- Product names
- Company names
- UI labels exactly as they appear

<div class="voice-table" markdown="1">

| Preferred                                      | Avoid                                          |
| ---------------------------------------------- | ---------------------------------------------- |
| Click **Close**.                               | Click CLOSE.                                   |
| Functional requirements specification document | Functional Requirements Specification Document |

</div>

---

## Punctuation

### Hyphens, en dashes, and em dashes

<div class="generic-table" markdown="1">

| Mark        | Use                        | Example                                                  |
| ----------- | -------------------------- | -------------------------------------------------------- |
| Hyphen (-)  | Compound modifiers         | user-defined                                             |
| En dash (–) | Numeric ranges             | 2023–2025                                                |
| Em dash (—) | Parenthetical interruption | Firmware—which scans embedded software—produces an SBOM. |

</div>
### Punctuation in tables

Do not end sentence fragments in tables with periods unless every table entry is a complete sentence.

---

## Before and after

Small editorial changes often make documentation easier to read.

<div class="voice-table" markdown="1">

| Preferred             | Avoid                          |
| --------------------- | ------------------------------ |
| Click **Save**.       | Click on **Save**.             |
| To create a device... | In order to create a device... |
| Use                   | Utilize                        |
| Now                   | At this point in time          |
| Because               | Due to the fact that           |
| _(Delete entirely.)_  | It should be noted that...     |
| _(Delete entirely.)_  | Please be aware that...        |

</div>

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
