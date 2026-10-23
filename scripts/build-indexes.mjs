import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const skillRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(skillRoot, "references", "source");
const indexRoot = path.join(skillRoot, "references", "indexes");
mkdirSync(indexRoot, { recursive: true });

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath, files);
    } else if (entry.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function unique(values) {
  return [...new Set(values)].sort();
}

function matchAll(text, regex) {
  const out = [];
  for (const match of text.matchAll(regex)) {
    out.push(match[1]);
  }
  return out;
}

function tagsFor(text, relativePath) {
  const haystack = `${relativePath}\n${text}`.toLowerCase();
  const tags = [];
  const checks = {
    agora: ["agora", "effectsdkextension", "processor"],
    zego: ["zego", "createzegostream", "startpublishingstream"],
    rtc: ["rtc", "mediastream", "publish"],
    camera: ["camera", "startupcamera"],
    image: ["image", "inputimagedata"],
    beauty: ["beauty", "shape", "makeup"],
    segmentation: ["segmentation", "background"],
    caption: ["caption", "compoundcaption"],
    sticker: ["sticker"],
    avatar: ["avatar"],
    package: ["asset package", "installassetpackage", ".arscene", ".videofx"],
    license: ["license", "verify"],
    troubleshooting: ["question", "failure", "not working", "sharedarraybuffer"]
  };
  for (const [tag, needles] of Object.entries(checks)) {
    if (needles.some((needle) => haystack.includes(needle))) {
      tags.push(tag);
    }
  }
  return tags;
}

const dtsPath = path.join(sourceRoot, "effectSdk.d.ts");
const gluePath = path.join(sourceRoot, "NvEffectSdk.js");
const dts = readText(dtsPath);
const glue = readText(gluePath);

const apiSymbols = {
  generatedAt: new Date().toISOString(),
  sourceFiles: {
    declarations: "references/source/effectSdk.d.ts",
    glue: "references/source/NvEffectSdk.js"
  },
  classes: unique(matchAll(dts, /(?:declare\s+)?class\s+([A-Za-z_][A-Za-z0-9_]*)/g)),
  interfaces: unique(matchAll(dts, /interface\s+([A-Za-z_][A-Za-z0-9_]*)/g)),
  enums: unique(matchAll(dts, /(?:declare\s+)?enum\s+([A-Za-z_][A-Za-z0-9_]*)/g)),
  functions: unique(matchAll(dts, /(?:declare\s+)?function\s+([A-Za-z_][A-Za-z0-9_]*)/g)),
  importantRuntimeNames: unique([
    ...matchAll(glue, /\b(Nve[A-Za-z0-9_]+)\b/g),
    ...matchAll(glue, /\b(nve[A-Za-z0-9_]+)\b/g)
  ]).filter((name) => name.startsWith("Nve") || name.startsWith("nve"))
};

const docFiles = walk(path.join(sourceRoot, "docs"));
const docMap = docFiles.map((filePath) => {
  const text = readText(filePath);
  const relativePath = path.relative(skillRoot, filePath).replace(/\\/g, "/");
  return {
    path: relativePath,
    tags: tagsFor(text, relativePath),
    headings: matchAll(text, /^(#{1,3})\s+(.+)$/gm).slice(0, 30).map((heading) => heading.trim())
  };
});

const featureMap = {
  menu: ["references/intent-map.md", "references/recipe-menu.md", "references/glossary.md"],
  image: ["references/demo-recipes.md", "references/source/docs/effectSDK_base_en/InputImageData.md"],
  camera: ["references/react-vite-template.md", "references/source/docs/effectSDK_base_en/CameraMediaStream.md"],
  mediaStream: ["references/demo-recipes.md", "references/source/docs/effectSDK_base_en/InputMediaStream.md"],
  agoraRtc: ["references/rtc-agora.md", "references/source/docs/RTCReadme_en.md"],
  zegoRtc: ["references/rtc-zego.md", "references/source/docs/ZegoRTCReadme_en.md"],
  beautyMakeupShape: ["references/effects.md", "references/source/docs/effectSDK_base_en/BeautyShapeMakeup.md"],
  makeupPackage: ["references/intent-map.md", "references/effects.md", "references/troubleshooting.md", "references/source/docs/effectSDK_base_en/CompoundMakeup.md"],
  faceMesh: ["references/intent-map.md", "references/effects.md", "references/source/docs/effectSDK_base_en/BeautyShapeMakeup.md"],
  videoFx: ["references/intent-map.md", "references/effects.md", "references/source/docs/effectSDK_base_en/VideoFx.md"],
  segmentation: ["references/effects.md", "references/source/docs/effectSDK_base_en/SegmentationBackground.md"],
  caption: ["references/intent-map.md", "references/external-effects.md", "references/source/docs/effectSDK_base_en/Caption.md"],
  modularCaption: ["references/intent-map.md", "references/external-effects.md", "references/api-map.md", "references/source/docs/effectSDK_base_en/Caption.md"],
  compoundCaption: ["references/intent-map.md", "references/external-effects.md", "references/source/docs/effectSDK_base_en/CompoundCaption.md"],
  sticker: ["references/external-effects.md", "references/source/docs/effectSDK_base_en/AnimatedSticker.md"],
  packages: ["references/effects.md", "references/source/docs/effectSDK_base_en/InstallAssetPackage.md"],
  license: ["references/quick-start.md", "references/troubleshooting.md", "references/source/docs/effectSDK_base_en/VerifyLicense.md"],
  models: ["references/intent-map.md", "references/quick-start.md", "references/source/docs/effectSDK_base_en/InitHumanDetectionModels.md"],
  troubleshooting: ["references/troubleshooting.md", "references/source/docs/effectSDK_base_en/EffectQuestionList.md"]
};

writeFileSync(path.join(indexRoot, "api-symbols.json"), `${JSON.stringify(apiSymbols, null, 2)}\n`);
writeFileSync(path.join(indexRoot, "doc-map.json"), `${JSON.stringify(docMap, null, 2)}\n`);
writeFileSync(path.join(indexRoot, "feature-map.json"), `${JSON.stringify(featureMap, null, 2)}\n`);

console.log(`Indexed ${apiSymbols.classes.length} classes, ${apiSymbols.functions.length} functions, and ${docMap.length} docs.`);
