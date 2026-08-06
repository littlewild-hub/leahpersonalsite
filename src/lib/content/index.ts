import { localProvider } from "./local-provider";
import { airtableProvider } from "./airtable-provider";
import type { ContentProvider } from "./types";

export * from "./types";

/* ---------------------------------------------------------------------------
 * The seam.
 *
 * Everything in the app imports from here. Flipping CONTENT_SOURCE in the
 * environment moves the whole site onto Airtable without touching a component.
 * ------------------------------------------------------------------------- */

const SOURCE = (process.env.CONTENT_SOURCE ?? "local").toLowerCase();

const registry: Record<string, ContentProvider> = {
  local: localProvider,
  airtable: airtableProvider,
};

export const content: ContentProvider = registry[SOURCE] ?? localProvider;

if (!registry[SOURCE]) {
  console.warn(
    `[content] Unknown CONTENT_SOURCE "${SOURCE}". Falling back to "local". Valid values: ${Object.keys(registry).join(", ")}.`
  );
}
