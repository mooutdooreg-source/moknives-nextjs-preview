import { LegacyHtmlPage } from "../LegacyHtmlPage";

export const metadata = {
  title: "Record Detail | Mo Knives",
};

export default function RecordDetailPage() {
  return (
    <LegacyHtmlPage
      htmlFile="record-detail.html"
      route="/record-detail"
      pageCss="record-detail.css"
      runtime="record-detail"
      extraCss={["/assets/css/record-preview.css"]}
    />
  );
}
