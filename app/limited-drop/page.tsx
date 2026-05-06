import { LegacyHtmlPage } from "../LegacyHtmlPage";

export const metadata = {
  title: "Limited Drop | Mo Knives",
};

export default function LimitedDropPage() {
  return (
    <LegacyHtmlPage
      htmlFile="limited-drop.html"
      route="/limited-drop"
      pageCss="limited-drop.css"
      runtime="limited-drop"
    />
  );
}
