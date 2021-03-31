import React from 'react';
import imgLink from './ImageLink.module.css';
import Link from "../Link/Link";
import Image from "../Image/Image";

const ImageLink = () => {
  return (
    <div className={imgLink.imageLink}>
      <Link>
        <Image/>
      </Link>
    </div>
  );
}

export default ImageLink;