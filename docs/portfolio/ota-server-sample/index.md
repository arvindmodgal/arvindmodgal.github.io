# OTA Server Sample API Documentation

**Type:** API documentation (open-source redesign)

**Audience:** IoT developers, DevOps engineers using Onion Omega2

**Domain:** IoT firmware management, OTA updates, REST API

**Tools:** OpenAPI 3.0, YAML, Markdown, Material for MkDocs, Postman

---

## Project Context

[OnionIoT/OTA-Server-Sample](https://github.com/OnionIoT/OTA-Server-Sample) is a real open-source Node.js server that manages Over-The-Air firmware updates for Omega2 IoT devices. The project has a working API but **no usable developer documentation** — the README links to "full API documentation" that does not exist.

## Before

The original documentation consisted of:

- Three endpoint names listed in plain text (`POST /`, `GET /{device}`, `GET /{device}/{fwType}`)
- No HTTP method details, parameter descriptions, or response schemas
- No authentication guidance (the server has no auth, but this was unstated)
- No working code examples or cURL commands
- A broken link to "full API documentation"
- Developers had to read the source code and `fwDB.json` to understand how to use the API

## After

I analyzed the source code, set up the server locally, and verified all requests via Postman to produce:

- A complete **OpenAPI 3.0 specification** with request/response schemas and verified examples
- A **2-minute quickstart** with copy-paste cURL commands using real response data
- Full **parameter tables** for all path variables
- **Error response documentation** with human-readable explanations
- A downloadable `openapi.yaml` file for import into Swagger UI, Postman, or Stoplight
- A downloadable Postman collection with all verified requests

## Skills Demonstrated

| Skill | Evidence |
|---|---|
| Source-code analysis | Derived API behavior from Node.js routes and JSON schema |
| OpenAPI 3.0 design | Wrote complete spec with schemas, examples, and enums |
| Information architecture | Structured docs as quickstart → reference → spec download |
| Developer empathy | Added cURL examples and explained implicit behaviors |
| API testing | Verified all examples against a locally running instance via Postman |

## Documentation

- [Quickstart Guide](quickstart.md)
- [Endpoint Reference](reference.md)
- [Download OpenAPI Spec](openapi.yaml){:download}
- [Download Postman Collection](OTA-Server-Sample.postman_collection.json){:download}

---

*This is an independent documentation contribution. The original project is © OnionIoT.*
