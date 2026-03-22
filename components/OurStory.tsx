import { container } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface OurStoryProps {
  sectionId: string;
  image: {
    url: string;
    sub: {
      title: string;
      subtitle: string;
    };
  };
  intro: string;
  title: string;
  story: string;
  link: {
    url: string;
    label: string;
  };
}

const OurStory: React.FC<OurStoryProps> = ({
  sectionId,
  image,
  intro,
  title,
  story,
  link,
}) => {
  return (
    <section className="w-full bg-bg-muted text-text-primary py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12" id={sectionId}>
      <div className={`${container} grid md:grid-cols-2 gap-10 md:gap-12 items-center`}>
        {/* 💻 DESKTOP IMAGE (UNCHANGED) */}
        <div className="relative hidden md:block">
          {/* Glow */}
          <div className="absolute -top-8 right-10 w-40 h-40 bg-brand-accent/30 blur-[100px] rounded-full z-0" />

          {/* Card */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-surface-dark">
            <Image
              src={image.url}
              alt="Our Story"
              width={500}
              height={500}
              className="w-full h-100 object-cover opacity-90"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-surface-dark/90 to-transparent">
              <h3 className="text-3xl font-bold text-bg-primary">
                {image.sub.title}
              </h3>
              <p className="text-xs tracking-widest text-bg-primary/70 uppercase">
                {image.sub.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT / MOBILE CONTENT */}
        <div className="text-center md:text-left flex flex-col gap-4 sm:gap-5 md:gap-6">
          {/* Intro */}
          <p className="text-brand-accent uppercase tracking-widest text-xs sm:text-sm">
            {intro}
          </p>

          {/* 📱 MOBILE IMAGE */}
          <div className="relative md:hidden mt-2">
            {/* Glow */}
            <div className="absolute -top-6 right-6 w-28 h-28 bg-brand-accent/30 blur-[80px] rounded-full z-0" />

            {/* Card */}
            <div className="md:h-125 relative z-10 rounded-xl overflow-hidden shadow-xl bg-surface-dark">
              <Image
                src={image.url}
                alt="Our Story"
                width={400}
                height={400}
                className="w-full aspect-video object-fill opacity-100"
              />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-surface-dark/90 to-transparent">
                <h3 className="text-xl font-bold text-bg-primary">
                  {image.sub.title}
                </h3>
                <p className="text-[10px] tracking-widest text-bg-primary/70 uppercase">
                  {image.sub.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h2>

          {/* Story */}
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed whitespace-pre-line">
            {story}
          </p>

          {/* Link */}
          <Link
            href={link.url}
            className="text-brand-accent font-semibold inline-flex items-center justify-center md:justify-start gap-2 hover:gap-3 transition-all"
          >
            {link.label} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
