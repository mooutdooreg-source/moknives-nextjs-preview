import { LegacyHtmlPage } from "../LegacyHtmlPage";

export const metadata = {
  title: "Vanguard Request | Mo Knives",
};

export default function VanguardRequestPage() {
  return (
    <LegacyHtmlPage
      htmlFile="vanguard-request.html"
      route="/vanguard-request"
      pageCss="vanguard-request.css"
      runtime="vanguard-request"
      successMessage="Your request has been received for review. If eligibility and alignment are confirmed, the next step will be a direct contact."
    />
  );
}
