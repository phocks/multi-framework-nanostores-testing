import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useStore } from "@nanostores/react";
import { color } from "@src/stores/color";
import { isBrowser } from "is-in-browser";

const Worm = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const $color = useStore(color);
  const fill = isHydrated || !isBrowser ? $color : undefined;

  useEffect(() => setIsHydrated(true), []);

  return (
    // <div
    //   className={styles.root}
    //   style={{ "--border-color": fill } as React.CSSProperties}
    // >
    <svg className={styles.root} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
      <path
        fill={fill}
        d="M57.733.28c15.15-.238 33.573 5.428 46 20.76 5.63 5.447 15.973 31.627 15.973 31.627l61.955 164.537c7.97 19.756 31.93 21.236 38.965 1.488L239.87 166.8l32.858 86.48c-15.973 29.157-31.435 36.304-49.765 42.966-21.346 6.68-46.932 4.477-65.245-6.9-6.086-3.947-22.06-14.318-32.86-40.516L59.616 66.494V232.53l24.417-70.16 31.325 87.586c-4.57 20.113-19.116 36.918-36.02 44.822-18.496 8.717-40.555 5.63-57.277-4.945C5.41 277.48.715 262.903 0 236.96L.22 57.366c1.9-29.91 21.017-46.193 37.794-53.486C45.67 1.16 48.944.418 57.734.28z"
      />
      <path
        fill={fill}
        d="M343.146 299.71c-15.15.267-33.572-5.427-46.02-20.733-5.628-5.445-15.954-31.625-15.954-31.625L219.22 82.814c-7.987-19.784-31.93-21.264-38.965-1.5L161.01 133.21l-32.86-86.48c15.955-29.132 31.453-36.306 49.765-42.985 21.364-6.68 46.95-4.45 65.245 6.926 6.104 3.95 22.06 14.32 32.86 40.52l65.243 182.31V67.49l-24.397 70.16-31.344-87.586c4.57-20.14 19.135-36.926 36.04-44.82 18.478-8.7 40.555-5.64 57.258 4.942 16.668 12.327 21.347 26.93 22.06 52.845l-.237 179.626c-1.864 29.908-21 46.2-37.795 53.484-7.603 2.712-10.893 3.442-19.702 3.57z"
      />
    </svg>
    // </div>
  );
};

export default Worm;
