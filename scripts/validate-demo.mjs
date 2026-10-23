import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const skillRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.resolve(skillRoot, process.argv[2] || "assets/react-vite-demo-template");
const ignored = new Set(["node_modules", "dist", ".git"]);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (ignored.has(entry)) continue;
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath, files);
    } else if (/\.(ts|tsx|js|jsx|md|json|html|css)$/.test(entry)) {
      files.push(fullPath);
    }
  }
  return files;
}

function readIfExists(filePath) {
  try {
    return readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

const files = walk(target);
const relativeFiles = files.map((filePath) => path.relative(target, filePath).replace(/\\/g, "/"));
const text = files.map((filePath) => readIfExists(filePath)).join("\n");
const appText = files
  .filter((filePath) => !path.relative(target, filePath).replace(/\\/g, "/").startsWith("types/"))
  .map((filePath) => readIfExists(filePath))
  .join("\n");
const packageJson = readIfExists(path.join(target, "package.json"));
const indexHtml = readIfExists(path.join(target, "index.html"));
const sdkReleaseKeys = [
  ...new Set([...text.matchAll(/NvWasm\/domain\/([^/"'`)]+\/[^/"'`)]+)/g)].map((match) => match[1]))
];
const legacyMouthCornerKey = ["Face Mesh Mouth Corner", "Degree"].join(" ");
const legacyNoseBridgeKey = ["Face Mesh Nose Bridge", "Degree"].join(" ");
const mouthCornerLiftKey = "Face Mesh Mouth Corner Lift Degree";
const noseBridgeWidthKey = "Face Mesh Nose Bridge Width Degree";
const defaultVideoFxUrl =
  "https://qasset.meishesdk.com/material/pu/videofx/DF972925-85A1-4687-939C-5C50585A825A/DF972925-85A1-4687-939C-5C50585A825A.1.videofx";
const defaultFaceMeshUrl =
  "https://qasset.meishesdk.com/material/pu/makeup/63BD3F32-D01B-4755-92D5-0DE361E4045A/63BD3F32-D01B-4755-92D5-0DE361E4045A.3.facemesh";

function hasRangeNear(key, min, max) {
  let index = -1;
  while ((index = text.indexOf(key, index + 1)) >= 0) {
    const segment = text.slice(Math.max(0, index - 300), index + 300);
    if (
      new RegExp(`min\\s*[:=]\\s*${min}`).test(segment) &&
      new RegExp(`max\\s*[:=]\\s*${max}`).test(segment)
    ) {
      return true;
    }
  }
  return false;
}

function usesFeature(pattern) {
  return pattern.test(appText);
}

const checks = [
  ["has React dependency", /"react"\s*:/.test(packageJson)],
  ["has Vite dependency", /"vite"\s*:/.test(packageJson)],
  ["has TypeScript dependency", /"typescript"\s*:/.test(packageJson)],
  ["has TSX source", relativeFiles.some((filePath) => filePath.endsWith(".tsx"))],
  ["uses meishewasmloader", /meishewasmloader|WASMLoader/.test(text)],
  ["uses EffectSDK Nve API names", /NveARSceneRenderer|NveEffectContext|nveGetEffectContextInstance/.test(text)],
  ["loads NvEffectSdk.js in index head", /<head>[\s\S]*<script[^>]+src=["'][^"']*NvEffectSdk\.js["'][^>]*>[\s\S]*<\/head>/i.test(indexHtml)],
  ["keeps SDK script and WASM release consistent", sdkReleaseKeys.length <= 1],
  ["loads WASM through EffectSDK base", /loadEmscriptenModule\([^)]*effectSdk\s*:\s*true/.test(text)],
  ["sets COOP header", /Cross-Origin-Opener-Policy["']?\s*:\s*["']same-origin/.test(text)],
  ["sets COEP header", /Cross-Origin-Embedder-Policy["']?\s*:\s*["']require-corp/.test(text)],
  ["mentions localhost", /localhost/.test(text)],
  ["does not default to 127.0.0.1", !/host\s*:\s*["']127\.0\.0\.1["']|http:\/\/127\.0\.0\.1/.test(appText)],
  ["does not default to 0.0.0.0 host", !/host\s*:\s*["']0\.0\.0\.0["']/.test(text)],
  ["does not wrap SDK init in StrictMode", !/React\.StrictMode|<StrictMode|<\/StrictMode>/.test(text)],
  ["does not invent a default license file", !/effectsdk\.lic|license\.lic|verifySdkLicenseFileUrl\(["'][^"'<]/.test(text)],
  ["keeps license placeholder guidance", /<LICENSE_URL>|localhost preview can skip SDK license|skips SDK license verification on localhost/i.test(text)],
  ["has cleanup guidance or calls", /release\(|stop\(\)|cleanup|unmount/i.test(text)],
  ["does not use obsolete mouth-corner key", !text.includes(legacyMouthCornerKey)],
  ["does not use obsolete nose-bridge key", !text.includes(legacyNoseBridgeKey)],
  ["uses corrected mouth-corner key", text.includes(mouthCornerLiftKey)],
  ["uses corrected nose-bridge key", text.includes(noseBridgeWidthKey)],
  ["uses mouth-corner -1..1 range", hasRangeNear(mouthCornerLiftKey, -1, 1)],
  ["uses nose-bridge -1..1 range", hasRangeNear(noseBridgeWidthKey, -1, 1)],
  ["uses documented face model URL", /model\/face240\/ms_face240_v3_0_1_next\.model/.test(text)],
  ["uses documented eye contour model URL", /model\/eyecontour\/ms_eyecontour_v2_0_0_next\.model/.test(text)],
  [
    "uses default video FX material when video FX is present",
    !usesFeature(/\bvideoFx\b|videofx|Video FX|Video Effect/i) || text.includes(defaultVideoFxUrl)
  ],
  [
    "uses default face mesh material when face mesh package is present",
    !usesFeature(/\bfaceMesh\b|facemesh|Face Mesh Package/i) || text.includes(defaultFaceMeshUrl)
  ]
];

const failed = checks.filter(([, ok]) => !ok);
for (const [label, ok] of checks) {
  console.log(`${ok ? "ok" : "fail"} - ${label}`);
}

if (failed.length > 0) {
  process.exitCode = 1;
}
