// Browsers don't actually submit form data through action="mailto:" method="post" —
// the POST body is silently dropped. Build a real mailto: link with the message
// URL-encoded into the subject/body instead, so the user's email client opens
// pre-filled and ready to send.
export function buildMailtoHref(to: string, subject: string, body: string) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
