import { LegacyHtmlPage } from "../LegacyHtmlPage";

export const metadata = {
  title: "Request a Blade | Mo Knives",
};

export default function RequestABladePage() {
  return (
    <LegacyHtmlPage
      htmlFile="request-a-blade.html"
      route="/request-a-blade"
      pageCss="request-a-blade.css"
      runtime="request-a-blade"
      successMessage="Message received. Youâ€™ve taken the first step toward the right blade."
    />
  );
}
