/**
 * Serialise structured data for a <script type="application/ld+json"> tag.
 * JSON.stringify does not escape "<", so a "</script>" inside any string
 * (a headline, a source title) would end the script element early and let
 * the rest be parsed as HTML. Escaping "<" keeps the JSON identical once
 * parsed and closes that hole.
 */
export function jsonLdString(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
