import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Broad Ripple Run Co. — casual Indianapolis run club on the Monon Trail.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/brand/logos/main_logo.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#efe5d8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 64,
        }}
      >
        <img
          src={logoSrc}
          alt=""
          style={{
            maxWidth: "82%",
            maxHeight: "100%",
            objectFit: "contain",
            filter: "drop-shadow(10px 10px 0 #7f8764)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
