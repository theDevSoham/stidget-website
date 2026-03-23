import React from "react";
import Image from "next/image";
import { container } from "@/constants";
import { plusJakartaSans } from "@/public/fonts/font";

export interface HeroProps {
  sectionId: string;
  badge: {
    label: string;
  };

  title: string;

  subtitle: string;

  image: {
    url: string;
    alt: string;
  };

  buttons: Array<{
    theme: string;
    text: string;
  }>;

  avatars: Array<string>;

  avatarText: string;
}

const Hero:React.FC<HeroProps> = ({
  sectionId,
  badge,
  image,
  title,
  subtitle,
  buttons,
  avatars,
  avatarText,
}) => {
  return (
    <section className="w-full bg-bg-muted scroll-mt-20" id={sectionId}>
      <div
        className={`${container} 
        py-12 sm:py-16 md:py-20 
        grid md:grid-cols-2 
        gap-10 md:gap-12 
        items-center`}
      >
        {/* LEFT */}
        <div className="flex flex-col gap-5 sm:gap-6 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center justify-center md:justify-start gap-2 px-4 py-1 rounded-full bg-bg-primary text-brand-primary text-xs font-medium w-fit mx-auto md:mx-0 border border-brand-accent/30">
            ✨ {badge.label}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-text-primary">
            {title}
          </h1>

          {/* Subtitle */}
          <p className={`${plusJakartaSans.className} font-semibold text-sm sm:text-xl text-text-secondary max-w-md mx-auto md:mx-0 leading-relaxed`}>
            {subtitle}
          </p>

          {/* 📱 MOBILE / TABLET IMAGE */}
          <div className="relative flex justify-center md:hidden mt-4">
            <div className="absolute w-65 h-65 bg-brand-accent/30 blur-[90px] rounded-full z-0" />

            <div className="relative z-10 bg-bg-primary rounded-2xl p-4 shadow-xl">
              <Image
                src={image.url}
                alt={image.alt}
                width={300}
                height={300}
                className="w-60 h-auto rounded-xl object-contain"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4">
            {buttons.map((btn, index: number) => (
              <button
                key={index}
                className={`
                  w-full md:w-auto
                  px-6 py-3 rounded-xl text-sm font-semibold transition
                  ${
                    btn.theme === "brand-primary"
                      ? "bg-brand-primary text-bg-primary shadow-lg hover:opacity-90"
                      : "bg-bg-secondary text-text-primary border border-border hover:bg-bg-muted"
                  }
                `}
              >
                {btn.text}
              </button>
            ))}
          </div>

          {/* Avatars */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-3 sm:gap-4 mt-2">
            <div className="flex -space-x-3">
              {avatars.map((avatar: string, i: number) => (
                <Image
                  key={i}
                  src={avatar}
                  alt="avatar"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-bg-primary"
                />
              ))}
            </div>

            <p className="text-xs sm:text-sm text-text-secondary text-center sm:text-left">
              {avatarText}
            </p>
          </div>
        </div>

        {/* 💻 DESKTOP IMAGE (UNCHANGED) */}
        <div className="relative hidden md:flex justify-center">
          {/* Glow */}
          <div className="absolute w-25 h-87.5 bg-brand-accent/30 blur-[120px] rounded-full z-0" />

          {/* Card */}
          <div className="relative z-10 bg-bg-primary rounded-3xl p-6 shadow-2xl">
            <Image
              src={image.url}
              alt={image.alt}
              width={400}
              height={400}
              className="w-95 h-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
