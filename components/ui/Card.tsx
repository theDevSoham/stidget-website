import React from "react";
import Icons, { IconSetType, SizeType } from "./Icons";

interface CardProps {
  type: "default";
  icon: {
    name: IconSetType;
    size: SizeType;
  };
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ type, icon, title, description }) => {
  switch (type) {
    case "default":
      return (
        <div
          className="bg-bg-muted rounded-2xl p-8 text-left border border-border hover:shadow-md transition"
        >
          {/* Icon */}
          <div
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-(--color-accent-10) text-brand-accent mb-5"
          >
            <Icons icon={icon.name} size={icon.size} />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>
      );

    default:
      return null;
  }
};

export default Card;
