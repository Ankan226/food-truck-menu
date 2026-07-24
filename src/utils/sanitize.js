// Strips characters that are commonly used to inject HTML/script content
// (e.g. <script>alert(1)</script>) before we ever put user text into state.
// React already escapes text when rendering, but this gives us a second,
// explicit layer of defense at the point of input -- which is what the
// project's security requirement asks for.
export function sanitizeText(rawValue) {
  if (typeof rawValue !== "string") return "";

  return rawValue
    .replace(/</g, "")
    .replace(/>/g, "")
    .replace(/javascript:/gi, "")
    .trim();
}