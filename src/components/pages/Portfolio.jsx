import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../../styles/Portfolio.css";

const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

function assetLink(asset, width) {
  return `https://assets.yet-another-react-lightbox.com/_next/image?url=${encodeURIComponent(
    `/_next/static/media/${asset}`
  )}&w=${width}&q=75`;
}

export const photos = [
  { asset: "image01.cd7ee301.jpeg", width: 3840, height: 5760 },
  { asset: "image02.da10388f.jpeg", width: 3840, height: 5070 },
  { asset: "image03.a6580cde.jpeg", width: 3840, height: 5120 },
  { asset: "image04.cb767d7c.jpeg", width: 3840, height: 2546 },
  { asset: "image05.fdbef001.jpeg", width: 3840, height: 5760 },
  { asset: "image06.2e6597a1.jpeg", width: 3840, height: 2553 },
  { asset: "image07.27dd139c.jpeg", width: 3840, height: 2553 },
  { asset: "image08.f646dad6.jpeg", width: 3840, height: 5760 },
  { asset: "image09.7f346735.jpeg", width: 3840, height: 5760 },
  { asset: "image10.41ba7faa.jpeg", width: 3840, height: 2560 },
  { asset: "image11.d57d7fe1.jpeg", width: 3840, height: 5760 },
  { asset: "image12.faa02319.jpeg", width: 3840, height: 5124 },
  { asset: "image13.94108f7d.jpeg", width: 3840, height: 5643 },
  { asset: "image14.953c7b70.jpeg", width: 3840, height: 5781 },
  { asset: "image15.5ebdf6ed.jpeg", width: 3840, height: 4800 },
  { asset: "image16.e81dbeb1.jpeg", width: 3840, height: 5760 },
  { asset: "image17.6546cfcd.jpeg", width: 3840, height: 2560 },
  { asset: "image18.31163d01.jpeg", width: 3840, height: 6834 },
  { asset: "image19.7d89a265.jpeg", width: 3840, height: 5771 },
  { asset: "image20.05176f17.jpeg", width: 3840, height: 5735 },
  { asset: "image21.bbfb647d.jpeg", width: 3840, height: 2560 },
  { asset: "image22.e8ce81ce.jpeg", width: 3840, height: 5124 },
  { asset: "image23.9dc5eb2c.jpeg", width: 3840, height: 4800 },
  { asset: "image24.3fd5c729.jpeg", width: 3840, height: 2560 },
  { asset: "image25.77de342d.jpeg", width: 3840, height: 5760 },
  { asset: "image26.3ca53ad1.jpeg", width: 3840, height: 4654 },
  { asset: "image27.c8fde361.jpeg", width: 3840, height: 2553 },
  { asset: "image28.0ab6b361.jpeg", width: 3840, height: 6837 },
  { asset: "image29.b3972088.jpeg", width: 3840, height: 2272 },
  { asset: "image30.785ba204.jpeg", width: 3840, height: 5120 },
  { asset: "image31.c3217527.jpeg", width: 3840, height: 5760 },
  { asset: "image32.871ab9c0.jpeg", width: 3840, height: 5120 },
  { asset: "image33.dcfe554a.jpeg", width: 3840, height: 4800 },
  { asset: "image34.7486121b.jpeg", width: 3840, height: 6827 },
  { asset: "image35.e881eb31.jpeg", width: 3840, height: 5120 },
  { asset: "image36.4e5b5abd.jpeg", width: 3840, height: 2880 },
  { asset: "image37.2a651052.jpeg", width: 3840, height: 3072 },
  { asset: "image38.c26c2fea.jpeg", width: 3840, height: 2560 },
  { asset: "image39.3cda0dc7.jpeg", width: 3840, height: 5756 },
  { asset: "image40.45760457.jpeg", width: 3840, height: 5760 },
  { asset: "image41.ff494aee.jpeg", width: 3840, height: 2158 },
  { asset: "image42.1f591633.jpeg", width: 3840, height: 4800 },
  { asset: "image43.080b9633.jpeg", width: 3840, height: 5120 },
  { asset: "image44.1abbe2ca.jpeg", width: 3840, height: 4800 },
  { asset: "image45.d3221a8a.jpeg", width: 3840, height: 4800 },
  { asset: "image46.719c4a6b.jpeg", width: 3840, height: 5760 },
  { asset: "image47.5d5c8ebf.jpeg", width: 3840, height: 7844 },
  { asset: "image48.c3acad57.jpeg", width: 3840, height: 5760 },
  { asset: "image49.2da6704b.jpeg", width: 3840, height: 2560 },
  { asset: "image50.d0a43c01.jpeg", width: 3840, height: 5760 },
  { asset: "image51.f63b7fea.jpeg", width: 3840, height: 2560 },
].map(({ asset, width, height }) => ({
  src: assetLink(asset, width),
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: assetLink(asset, breakpoint),
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

function Portfolio() {
  const [index, setIndex] = useState(-1);
  console.log(index);

  // const gotoPrevious = () => index > 0 && setIndex(index - 1);

  // const gotoNext = () => index + 1 < photos.length && setIndex(index + 1);

  return (
    <div className="content">
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullUp: true,
          closeOnPullDown: true,
        }}
        close={() => setIndex(-1)}
        render={{
          iconPrev: () => <p>prev</p>,
          iconNext: () => <p>next</p>,
        }}
      />

      {index >= 0 && <p className="slashfooter">/</p>}
    </div>
  );
}

export default Portfolio;
