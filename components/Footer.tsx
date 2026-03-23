"use client";

import Image from "next/image";
import React from "react";
import Icons, { IconSetType, SizeType } from "./ui/Icons";

export interface FooterProps {
  branding: {
    iconPath: string;
    brandName: string;
    subText: string;
    actions: Array<{
      icon: {
        name: IconSetType;
        size: SizeType;
      };
      action: string;
    }>;
  };
  product?: Array<{
    label: string;
    link: string;
  }>;
  company?: Array<{
    label: string;
    link: string;
  }>;
  support?: Array<{
    label: string;
    link: string;
  }>;
  copyright: string;
  extras: Array<{
    label: string;
    link: string;
  }>;
}

const Footer: React.FC<FooterProps> = ({
  branding,
  product,
  company,
  support,
  copyright,
  extras,
}) => {
  return (
    <footer className="bg-bg-secondary border-t border-border px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-14 text-sm text-text-secondary">
      {/* TOP */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-4 
        gap-8 sm:gap-10
      "
      >
        {/* Branding */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={branding.iconPath}
              alt={branding.brandName}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-semibold text-text-primary text-lg">
              {branding.brandName}
            </span>
          </div>

          <p className="mb-4 leading-relaxed text-text-secondary">
            {branding.subText}
          </p>

          <div className="flex gap-3">
            {branding.actions.map((item, idx: number) => (
              <button
                key={idx}
                onClick={() => console.log(item.action)}
                className="
                  w-9 h-9 
                  flex items-center justify-center 
                  border border-border 
                  rounded-full 
                  bg-bg-primary
                  hover:bg-bg-muted 
                  transition
                "
              >
                <Icons icon={item.icon.name} size={item.icon.size} />
              </button>
            ))}
          </div>
        </div>

        {/* Product */}
        {product && product.length > 0 && (
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-2">
              {product.map((item, idx: number) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="hover:text-text-primary transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Company */}
        {company && company.length > 0 && (
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, idx: number) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="hover:text-text-primary transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Support */}
        {support && support.length > 0 && (
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item, idx: number) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="hover:text-text-primary transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
        mt-10 sm:mt-12 
        pt-6 
        border-t border-border 
        flex flex-col md:flex-row 
        justify-between 
        items-center 
        gap-4 
        text-xs sm:text-sm 
        text-text-tertiary
      "
      >
        <p className="text-center md:text-left">{copyright}</p>

        <div
          className="
          flex flex-wrap 
          justify-center md:justify-end 
          gap-4 sm:gap-6
        "
        >
          {extras.map((item, idx: number) => (
            <a
              key={idx}
              href={item.link}
              className="hover:text-text-primary transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
