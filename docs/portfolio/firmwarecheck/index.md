# FirmwareCheck User Guide

This guide focuses on using FirmwareCheck after deployment. It does not cover installation, system administration, or security best practices unrelated to the application.

---

## Overview

FirmwareCheck scans a firmware binary and tells you what's actually in it: the software components it contains, the known vulnerabilities those components carry, and vulnerabilities that have not yet been catalogued.

It also evaluates the firmware against the standards that apply to your product, including **ETSI TS 303 645** for consumer IoT devices and **ISO/SAE 21434** for automotive systems.

The output is a report, not a black box. It includes a **Software Bill of Materials (SBOM)**, a list of **Common Vulnerabilities and Exposures (CVEs)**, and a compliance summary that can be shared with auditors, customers, or internal stakeholders.

Product security and development teams typically use FirmwareCheck before a device ships, when identifying and fixing vulnerabilities is significantly less expensive.

This guide explains how to use FirmwareCheck to manage devices, upload firmware, run assessments, review results, and integrate findings into your existing workflows.

---

## Who should use this guide?

This guide is intended for:

- Security administrators
- Firmware engineers
- Product security teams
- Compliance analysts

It assumes that you already have access to FirmwareCheck and are familiar with your organization's firmware security processes.

---

## Guide organization

The guide is organized around the tasks that users perform most frequently.

| Section | Description |
|---------|-------------|
| Getting Started | Access FirmwareCheck and become familiar with the application. |
| Manage Account | Update your account settings and personal information. |
| Manage Users | Invite users and manage roles and permissions. |
| Manage Devices | Create, organize, archive, and manage devices. |
| Manage Firmware | Upload firmware and manage firmware versions. |
| Run Assessments | Perform vulnerability, policy, and zero-day assessments. |
| Review Results | Analyze vulnerabilities, SBOMs, compliance findings, and reports. |
| Integrations | Connect FirmwareCheck with Jira. |
| Troubleshooting | Resolve common issues. |
| FAQ | Find answers to frequently asked questions. |