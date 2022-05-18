import React from "react";
import CardLayout from "../components/Card/CardLayout";
import ImageCard from "../components/Card/ImageCard";

import Entries, { EntriesType } from "../components/Entries";
import DownLoadLink from "../components/Link/DownLoadLink";
import List from "../components/List";
import PageWrapper from "../components/PageWrapper";

const items = [
  "Primary logo: for a majority of application",
  "Vertical logo: alternate square layout",
  "Heighlienr Icon: our icon",
];

const logoImgPaths = [
  require("/img/page/heighliner-brand/logo/icon-horizontal@3x.webp").default,
  require("/img/page/heighliner-brand/logo/icon-only-logo@3x.webp").default,
  require("/img/page/heighliner-brand/logo/icon-vertical@3x.webp").default,
];

const colorImgPaths = [
  require("/img/page/heighliner-brand/color/white@3x.webp").default,
  require("/img/page/heighliner-brand/color/black@3x.webp").default,
  require("/img/page/heighliner-brand/color/purple@3x.webp").default,
  require("/img/page/heighliner-brand/color/gradient@3x.webp").default,
];

const entries: EntriesType = [
  {
    title: "Logo",
    content:
      "Heighliner mark includes the Heighliner name & logo, " +
      "and any word, phrase, image or other designation that" +
      " identifies the source of origin of any Heighliner products. " +
      "Marks cannot be modified or used for commercial purpose or " +
      "used in any other confusing way, including suggesting endorsement by Heighliner.",
    customComponent: (
      <>
        <div style={{ marginTop: 51 }}>
          <DownLoadLink
            path={require("/static/resources/Heighliner-logo.zip").default}
          />
        </div>
        <List items={items} title="From left to right:" />
        <CardLayout>
          {logoImgPaths.map((logoImgPath) => {
            return (
              <ImageCard
                path={logoImgPath}
                style={{ width: 284, height: 226 }}
              />
            );
          })}
        </CardLayout>
      </>
    ),
  },
  {
    title: "Colors",
    content:
      "Our color palette consists of purple, white, " +
      "black and colors representing of our products.",
    customComponent: (
      <CardLayout>
        {colorImgPaths.map((colorImgPath) => {
          return (
            <ImageCard
              path={colorImgPath}
              style={{ width: 284, height: 226, marginTop: 51 }}
            />
          );
        })}
      </CardLayout>
    ),
  },
];

export default function HeighlinerBrand(): React.ReactElement {
  return (
    <PageWrapper title="Heighliner Brand">
      <Entries entries={entries} />
    </PageWrapper>
  );
}
