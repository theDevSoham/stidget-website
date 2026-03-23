import React from "react";
import Card from "./ui/Card";
import { IconSetType, SizeType } from "./ui/Icons";
import { container } from "@/constants";

export interface MarketingProps {
  sectionId: string;
  heading: string;
  cards: Array<{
    icon: {
      name: IconSetType;
      size: SizeType;
    };
    title: string;
    description: string;
  }>;
}

const Marketing: React.FC<MarketingProps> = ({ heading, cards, sectionId }) => {
  return (
    <section className={`${container} py-20 px-6 bg-bg-primary scroll-mt-20`} id={sectionId}>
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-light mb-14 uppercase tracking-wide">
          {heading}
        </h2>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              type="default"
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing;
