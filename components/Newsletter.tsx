import { container } from "@/constants";
import React from "react";

export interface NewsletterProps {
  title: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title,
  description,
  inputPlaceholder,
  buttonText,
}) => {
  return (
    <section className={`${container} w-full flex justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16`}>
      <div
        className="
          w-full max-w-5xl 
          rounded-2xl sm:rounded-3xl 
          p-5 sm:p-8 md:p-12 lg:p-14
          text-center 
          shadow-xl
          bg-brand-primary-light
        "
      >
        {/* Title */}
        <h2
          className="
            text-xl 
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl 
            font-bold 
            text-bg-primary 
            mb-3 sm:mb-4
          "
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="
            text-bg-primary/80 
            text-sm 
            sm:text-base 
            md:text-lg
            max-w-xl md:max-w-2xl 
            mx-auto 
            mb-5 sm:mb-6 md:mb-8
          "
        >
          {description}
        </p>

        {/* Input + Button */}
        <div
          className="
            flex flex-col sm:flex-row 
            items-stretch sm:items-center 
            justify-center 
            gap-3 sm:gap-4
            max-w-md sm:max-w-lg md:max-w-xl
            mx-auto
          "
        >
          <input
            type="email"
            placeholder={inputPlaceholder}
            className="
              w-full 
              px-4 sm:px-5 
              py-2.5 sm:py-3 
              rounded-lg sm:rounded-xl 
              bg-bg-primary/10 
              border border-bg-primary/20 
              text-bg-primary 
              placeholder-bg-primary/60 
              text-sm sm:text-base
              focus:outline-none 
              focus:ring-2 
              focus:ring-bg-primary/40
            "
          />

          <button
            className="
              w-full sm:w-auto
              px-5 sm:px-6 
              py-2.5 sm:py-3 
              rounded-lg sm:rounded-xl 
              bg-bg-primary 
              text-brand-accent 
              text-sm sm:text-base
              font-semibold 
              hover:opacity-90 
              transition
              whitespace-nowrap
            "
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
