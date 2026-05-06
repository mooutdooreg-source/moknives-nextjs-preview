import { LegacyHtmlPage } from "../LegacyHtmlPage";

export const metadata = {
  title: "Request Entry | Mo Knives",
};

export default function RequestEntryPage() {
  return (
    <LegacyHtmlPage
      htmlFile="request-entry.html"
      route="/request-entry"
      pageCss="request-entry.css"
      runtime="request-entry"
      successMessage="Your request has been received. If the project is aligned, the next step will be a direct conversation."
    />
  );
}
