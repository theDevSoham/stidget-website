"use client";

import { container } from "@/constants";
import Image from "next/image";
import React from "react";

const actionMap = {
  log: (param: string) => {
    console.log("Log: ", param);
  },
};

export interface MarketplaceProps {
  intro: string;
  heading: {
    title: string;
    buttons: Array<{
      label: string;
      action: keyof typeof actionMap;
      theme: "primary" | "secondary";
    }>;
  };
  cards: Array<{
    id: string;
    tag: {
      text: string;
      theme: "primary" | "ghost";
    };
    image: string;
    productTitle: string;
    productSubTitle: string;
    price: string;
  }>;
}

const Marketplace: React.FC<MarketplaceProps> = ({ intro, heading, cards }) => {
  return (
    <section className={`${container} w-full px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 bg-bg-muted`}>
      {/* Intro */}
      <p className="text-brand-accent font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 text-center md:text-left">
        {intro}
      </p>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 sm:mb-12 gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary text-center md:text-left">
          {heading.title}
        </h2>

        <div className="flex flex-wrap justify-center md:justify-end gap-3">
          {heading.buttons.map((btn, i: number) => (
            <button
              key={i}
              onClick={() => {}}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  btn.theme === "primary"
                    ? "bg-brand-accent text-white hover:opacity-90"
                    : "bg-bg-primary border border-border text-text-secondary hover:bg-bg-muted"
                }
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-bg-primary rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div className="relative bg-bg-muted">
              {/* Tag */}
              {card.tag.text && (
                <span
                  className={`
                    absolute top-3 left-3 z-10 
                    px-3 py-1 text-xs rounded-md font-semibold
                    ${
                      card.tag.theme === "primary"
                        ? "bg-brand-accent text-white"
                        : "bg-surface-dark text-white"
                    }
                  `}
                >
                  {card.tag.text}
                </span>
              )}

              <Image
                src={card.image}
                alt={card.productTitle}
                width={400}
                height={400}
                className="
                  w-full 
                  aspect-square 
                  object-cover 
                  transition-transform duration-500 hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <div className="flex justify-between items-start mb-3 gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                    {card.productTitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary uppercase tracking-wide">
                    {card.productSubTitle}
                  </p>
                </div>

                <span className="text-brand-accent font-semibold text-base sm:text-lg whitespace-nowrap">
                  {card.price}
                </span>
              </div>

              {/* CTA */}
              <button
                className="
                w-full 
                bg-surface-dark 
                text-white 
                py-2.5 sm:py-3 
                rounded-xl 
                flex items-center justify-center gap-2 
                hover:bg-surface-elevated 
                transition
              "
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;
