# Moving the notebook onto Airtable

The site reads content through one interface (`ContentProvider` in
`src/lib/content/types.ts`). The Airtable implementation is already written and
tested against the schema below. Nothing in `src/app` or `src/components` needs
to change — you set two environment variables and the whole site switches over.

---

## 1. Build the base

Four tables. Field names must match exactly, or you edit the `FIELD` map at the
top of `src/lib/content/airtable-provider.ts` — that map exists precisely so you
only ever change names in one place.

### `Projects`

| Field | Airtable type | Notes |
|---|---|---|
| `Title` | Single line text | |
| `Slug` | Single line text | URL segment. Leave blank and it is derived from Title. |
| `Summary` | Long text | One sentence. Shown under the title. |
| `Disciplines` | Multiple select | Values are slugified: "Product Design" → `product-design` |
| `Status` | Single select | `published` / `draft` / `archived` |
| `Featured` | Checkbox | Drives the home page selection |
| `Date` | Date | Ordering and the year stamp |
| `Client` | Single line text | Optional |
| `Role` | Single line text | Optional |
| `Tools` | Multiple select | Shown as tags in the apparatus |
| `Cover` | Attachment | First attachment is used |
| `Gallery` | Attachment | All attachments, in order |
| `Links` | Long text | One per line: `Label\|https://url` |
| `Body` | Long text | Blank line between paragraphs |
| `Marginalia` | Long text | One annotation per line |
| `Order` | Number | Optional manual sort; lower floats up |

### `Disciplines`

| Field | Type |
|---|---|
| `Name` | Single line text |
| `Slug` | Single line text (optional — derived from Name) |
| `Blurb` | Long text |

Optional. Without it, disciplines are derived from the values actually used in
`Projects`, which is fine until you want blurbs and a fixed order.

### `Profile`

One row. Fields: `Name`, `Title`, `Location`, `Email`, `Statement`,
`Bio` (blank line between paragraphs), `Socials` (`Label|url` per line),
`Availability`.

### `Inquiries` — the CRM side

Written to by the contact form.

| Field | Type |
|---|---|
| `Name` | Single line text |
| `Email` | Email |
| `Subject` | Single line text |
| `Message` | Long text |
| `Source` | Single line text |
| `Status` | Single select — `New` / `Replied` / `Qualified` / `Won` / `Archived` |
| `Received At` | Date with time |

That `Status` column is your pipeline. Add `Value`, `Next action`, and an owner
field and it becomes a workable lightweight CRM without any further code.

---

## 2. Set the environment

In `.env.local`:

```
CONTENT_SOURCE=airtable
AIRTABLE_API_KEY=pat...          # personal access token
AIRTABLE_BASE_ID=app...
AIRTABLE_PROJECTS_TABLE=Projects
AIRTABLE_DISCIPLINES_TABLE=Disciplines
AIRTABLE_INQUIRIES_TABLE=Inquiries
AIRTABLE_PROFILE_TABLE=Profile
REVALIDATE_SECRET=<a long random string>
```

The token needs `data.records:read` and `data.records:write`, scoped to this
base only.

Restart the dev server. That is the entire migration.

---

## 3. Make edits appear without redeploying

Reads are cached for 5 minutes and tagged `content`. To push an edit through
immediately, add an Airtable automation:

- **Trigger:** When a record is updated (table: Projects)
- **Action:** Send web request
  - URL: `https://<your-domain>/api/revalidate`
  - Method: `POST`
  - Header: `x-revalidate-secret: <REVALIDATE_SECRET>`
  - Body: `{}` — or `{"path": "/work"}` to flush one route

---

## 4. Using the Airtable MCP connector

You already have the Airtable connector available in Claude. Once the base
exists, the connector can operate it directly — which is the point of putting
content in Airtable rather than in files:

- **Publishing** — "add a folio for the Verdigris rebrand, mark it featured,
  disciplines Brand and Product Design" creates the record; the site picks it up
  on the next revalidation.
- **Triage** — "show me every inquiry from the last fortnight still marked New"
  reads the `Inquiries` table.
- **Pipeline hygiene** — "move the Acme inquiry to Qualified and note the call"
  updates records in place.
- **Auditing** — "which published projects have no cover attachment?" catches
  the gaps before a visitor does.

Nothing extra is needed on the site's side for this. The connector talks to
Airtable; the site reads Airtable; the two never talk to each other directly,
which is what keeps the arrangement simple.

### If you later want the site itself to expose an MCP server

The read surface is already a clean seam. A server would wrap `content` in
`src/lib/content/index.ts` and expose `listProjects`, `getProject`,
`listDisciplines`, `createInquiry` as tools — roughly a hundred lines, and no
changes to anything that exists today.
