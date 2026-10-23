/**
 * CMS bodies are stored HTML-escaped by the API's input sanitization, so they are text, not
 * trusted HTML. Decode entities with DOMParser (which never runs scripts) and split the result
 * into paragraphs for rendering as text, so nothing stored can inject markup into a page.
 */
export function bodyParagraphs(body?: string | null): string[] {
  if (!body) return [];
  const text =
    typeof window === "undefined"
      ? body
      : new DOMParser().parseFromString(body, "text/html").documentElement.textContent ?? "";
  return text.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
}

/** Decode entities in a short CMS string (a title or excerpt) for display as text. */
export function plainText(value?: string | null): string {
  return bodyParagraphs(value).join(" ");
}
