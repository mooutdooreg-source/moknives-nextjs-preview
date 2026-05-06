import fs from "node:fs";
import path from "node:path";
import { LegacyHtmlRuntime } from "./LegacyHtmlRuntime";

type RuntimeKind =
  | "limited-drop"
  | "mo-gear"
  | "record-detail"
  | "request-a-blade"
  | "request-entry"
  | "vanguard-request";

type LegacyHtmlPageProps = {
  htmlFile: string;
  route: string;
  pageCss: string;
  runtime: RuntimeKind;
  extraCss?: string[];
  successMessage?: string;
};

const htmlRoutes: Record<string, string> = {
  "index.html": "/",
  "contact.html": "/contact",
  "culinary.html": "/culinary",
  "edge-academy.html": "/edge-academy",
  "expedition.html": "/expedition",
  "limited-drop.html": "/limited-drop",
  "mo-gear.html": "/mo-gear",
  "record-detail.html": "/record-detail",
  "request-a-blade.html": "/request-a-blade",
  "request-entry.html": "/request-entry",
  "singularis.html": "/singularis",
  "the-vault.html": "/the-vault",
  "vanguard.html": "/vanguard",
  "vanguard-request.html": "/vanguard-request",
  "why-mo.html": "/why-mo",
};

function extractBodyContent(html: string) {
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  const withoutHeader = body.replace(/^\s*<div\s+id=["']site-header["']><\/div>\s*/i, "");
  const footerIndex = withoutHeader.search(/<div\s+id=["']site-footer["']><\/div>/i);
  const content = footerIndex >= 0 ? withoutHeader.slice(0, footerIndex) : withoutHeader;
  return content.replace(/<script\b[\s\S]*?<\/script>/gi, "").trim();
}

function normalizeHtml(content: string) {
  let normalized = content
    .replace(/\b(src|href|poster)=(["'])assets\//g, "$1=$2/assets/")
    .replace(/\b(src|href|poster)=(["'])images\//g, "$1=$2/legacy/images/")
    .replace(/url\((["']?)assets\//g, "url($1/assets/")
    .replace(/url\((["']?)images\//g, "url($1/legacy/images/");

  for (const [file, route] of Object.entries(htmlRoutes)) {
    normalized = normalized.replace(new RegExp(`(href=["'])${file.replace(".", "\\.")}([?#][^"']*)?(["'])`, "g"), `$1${route}$2$3`);
  }

  return normalized;
}

function readLegacyHtml(htmlFile: string) {
  const filePath = path.join(process.cwd(), htmlFile);
  const html = fs.readFileSync(filePath, "utf8");
  return normalizeHtml(extractBodyContent(html));
}

export function LegacyHtmlPage({
  htmlFile,
  route,
  pageCss,
  runtime,
  extraCss = [],
  successMessage,
}: LegacyHtmlPageProps) {
  const content = readLegacyHtml(htmlFile);
  const stylesheets = [
    "/assets/css/layout.css",
    "/assets/css/asset-fallbacks.css",
    "/assets/css/media-wrappers.css",
    ...extraCss,
    `/assets/css/pages/${pageCss}`,
  ];

  return (
    <>
      {stylesheets.map((href) => (
        <link rel="stylesheet" href={href} key={href} />
      ))}
      <div
        data-legacy-route={route}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <LegacyHtmlRuntime route={route} kind={runtime} successMessage={successMessage} />
    </>
  );
}
