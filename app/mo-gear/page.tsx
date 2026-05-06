import { LegacyHtmlPage } from "../LegacyHtmlPage";

export const metadata = {
  title: "Mo Gear | Mo Knives",
};

export default function MoGearPage() {
  return (
    <LegacyHtmlPage
      htmlFile="mo-gear.html"
      route="/mo-gear"
      pageCss="mo-gear.css"
      runtime="mo-gear"
    />
  );
}
