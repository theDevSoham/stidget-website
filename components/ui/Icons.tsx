import React from "react";
import battery from "@/public/images/icons/battery.svg";
import droplet from "@/public/images/icons/droplet.svg";
import sensor from "@/public/images/icons/sensor.svg";
import shutter from "@/public/images/icons/shutter.svg";
import share from "@/public/images/icons/share.svg";
import shoppingBag from "@/public/images/icons/shopping_bag.svg";
import Image from "next/image";

export const IconSet = {
  battery,
  droplet,
  sensor,
  share,
  shutter,
  shoppingBag,
};

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export type IconSetType = keyof typeof IconSet;
export type SizeType = keyof typeof sizeMap;

interface IconsProps {
  icon: IconSetType;
  size: SizeType;
}

const Icons: React.FC<IconsProps> = ({ icon, size }) => {
  return (
    <Image
      src={IconSet[icon]}
      alt={icon}
      width={24}
      height={24}
      className={sizeMap[size]}
    />
  );
};

export default Icons;
