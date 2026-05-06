import { LegacyHtmlPage } from "../LegacyHtmlPage";

export const metadata = {
  title: "Contact | Mo Knives",
};

export default function ContactPage() {
  return (
    <LegacyHtmlPage
      htmlFile="contact.html"
      route="/contact"
      pageCss="contact.css"
      runtime="contact"
      extraCss={["/assets/css/card-actions.css"]}
      successMessage="Message received. Youâ€™ve taken the first step toward the right blade."
    />
  );
}
