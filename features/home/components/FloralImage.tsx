import type { CSSProperties } from "react";
import type { FloralImageContent } from "../types/home.types";

type FloralImageProps = {
  image: FloralImageContent;
  className?: string;
};

export function FloralImage({ image, className = "" }: FloralImageProps) {
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(180deg, rgba(25, 18, 12, 0.03), rgba(25, 18, 12, 0.2)), url("${image.src}")`,
  };

  return (
    <figure className={`floralImage ${className}`}>
      <div
        className="floralImage__media"
        style={style}
        role="img"
        aria-label={image.alt}
      />

      {image.caption ? (
        <figcaption className="floralImage__caption">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}