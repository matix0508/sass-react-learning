import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
type IconData = {
  href: string;
  brand: IconName;
};

export const SocialIcons: FC = () => {
  const data: IconData[] = [
    {
      href: "#!",
      brand: "twitter",
    },
    {
      href: "#!",
      brand: "facebook",
    },
    {
      href: "#!",
      brand: "instagram",
    },
    {
      href: "#!",
      brand: "github",
    },
  ];
  console.log(data);

  return (
    <div className="social-icons">
      {data.map((item) => (
        <a key={item.brand} href={item.href}>
          <FontAwesomeIcon icon={["fab", item.brand]} />
        </a>
      ))}
    </div>
  );
};
