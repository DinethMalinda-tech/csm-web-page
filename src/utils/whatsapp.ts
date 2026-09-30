/* ------------------------------------------------------------------
 * WhatsApp link builder
 * ------------------------------------------------------------------
 * Generates a `wa.me` deep link with a pre-filled message.
 *
 * @example
 *   const link = buildWhatsAppLink('94755110269', 'I would like to buy CSM');
 *   // → "https://wa.me/94755110269?text=I%20would%20like%20to%20buy%20CSM"
 * ------------------------------------------------------------------ */

/** Your default WhatsApp number (Sri Lanka country code + number, no + or spaces) */
export const DEFAULT_WHATSAPP_NUMBER = '94755110269';

/** Default message used when none is provided */
export const DEFAULT_WHATSAPP_MESSAGE = 'I would like to buy CSM';

/**
 * Builds a WhatsApp click-to-chat link.
 *
 * @param message  Message text (will be URL-encoded automatically)
 * @param phone    WhatsApp number with country code, digits only (defaults to DEFAULT_WHATSAPP_NUMBER)
 * @returns        A full `https://wa.me/...` URL ready to use in an <a href>
 */
export function buildWhatsAppLink(
  message: string = DEFAULT_WHATSAPP_MESSAGE,
  phone: string = DEFAULT_WHATSAPP_NUMBER
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Opens WhatsApp chat in a new tab. Useful for onClick handlers.
 */
export function openWhatsApp(
  message: string = DEFAULT_WHATSAPP_MESSAGE,
  phone: string = DEFAULT_WHATSAPP_NUMBER
): void {
  window.open(buildWhatsAppLink(message, phone), '_blank', 'noopener,noreferrer');
}