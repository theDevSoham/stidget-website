import type { NavbarProps } from "@/components/Navbar";
import type { MarketingProps } from "@/components/Marketing";
import { HeroProps } from "@/components/Hero";
import { OurStoryProps } from "@/components/OurStory";
import type { MarketplaceProps } from "@/components/Marketplace";
import { NewsletterProps } from "@/components/Newsletter";
import { FooterProps } from "@/components/Footer";

export const homepageContent: {
  navbar: NavbarProps;
  hero: HeroProps;
  marketing: MarketingProps;
  ourStory: OurStoryProps;
  marketplace: MarketplaceProps;
  newsletter: NewsletterProps;
  footer: FooterProps;
} = {
  navbar: {
    brand: "STIDGET",
    logo: "/images/Icon.webp",
    avatar: "https://i.pravatar.cc/100",
    links: [
      {
        id: 1,
        label: "Home",
        link: "#home",
      },
      {
        id: 2,
        label: "Feature",
        link: "#feature",
      },
      {
        id: 3,
        label: "About",
        link: "#about",
      },
      {
        id: 4,
        label: "Shop",
        link: "#shop",
      },
    ],
  },

  hero: {
    sectionId: "home",
    badge: {
      label: "PATCH IT NEO PRO",
    },

    title: "PATCH Your Vibe",

    subtitle:
      "Vibes you can flaunt. Custom patches that let you express your quirks, mood and personality. Patch it. Style it. Own your vibe.",

    image: {
      url: "/images/hero.webp", // replace with your asset
      alt: "Smart Watch",
    },

    buttons: [
      {
        theme: "brand-primary",
        text: "Order Now — $299",
      },
      {
        theme: "secondary",
        text: "Watch Demo",
      },
    ],

    avatars: [
      "https://i.pravatar.cc/100?img=1",
      "https://i.pravatar.cc/100?img=2",
      "https://i.pravatar.cc/100?img=3",
    ],

    avatarText: "Trusted by 12k+ early adopters",
  },
  marketing: {
    sectionId: "feature",
    heading: "Tech you love to wear all day, every day, everywhere",
    cards: [
      {
        icon: {
          name: "battery",
          size: "md",
        },
        title: "7-Day Battery",
        description:
          "Proprietary power management system ensures you stay connected for a full week on a single 45-minute charge.",
      },
      {
        icon: {
          name: "sensor",
          size: "lg",
        },
        title: "Bio-Sensors",
        description:
          "Clinical-grade bio-tracking for heart rate, blood oxygen, and sleep stages. Real-time alerts for irregularities.",
      },
      {
        icon: {
          name: "droplet",
          size: "lg",
        },
        title: "5ATM Waterproof",
        description:
          "Precision-sealed titanium chassis allows for diving up to 50m. Perfect for swimming and open-water sports.",
      },
    ],
  },
  ourStory: {
    sectionId: "about",
    intro: "Our Story",
    title: "Building Tech That Elevates Human Potential",
    story: `We believe fashion is what you wear - it's how you express who you are. Our journey began with a simple idea : what if your clothing could speak for you? Inspired by the evolving world of technology and self-expression, we created a wearable e-ink display designed to bring your style, thoughts and creativity to life. Our innovative displays allows you to change graphics, messages and designs whenever you desire, turning everyday garments and accessories into dynamic canvases. Starting with a no battery display that lets you update visuals effortlessly and evolving into seamlessly integrated smart displays, our goal is to blend technology and fashion in a way that feels natural, stylish and empowering. Whether you're showcasing your mood, sharing your art or making a bold statement, we're here to help you wear your expression and redefine how the world sees style.`,
    image: {
      url: "/images/story.webp",
      sub: {
        title: "Est. 2024",
        subtitle: "Innovation Hub",
      },
    },

    link: {
      url: "/about",
      label: "Read the full vision",
    },
  },
  marketplace: {
    sectionId: "shop",
    intro: "MARKETPLACE",

    heading: {
      title: "Choose Your Style",
      buttons: [
        {
          label: "All Series",
          theme: "primary",
          action: "log",
        },
        {
          label: "Special Editions",
          theme: "secondary",
          action: "log",
        },
      ],
    },

    cards: [
      {
        id: "1",
        tag: {
          text: "BEST SELLER",
          theme: "ghost",
        },
        image: "/images/product1.webp",
        productTitle: "Midnight Black",
        productSubTitle: "Space Grade Aluminum",
        price: "$299",
      },
      {
        id: "2",
        tag: {
          text: "",
          theme: "ghost",
        },
        image: "/images/product2.webp",
        productTitle: "Arctic White",
        productSubTitle: "Brushed Titanium",
        price: "$349",
      },
      {
        id: "3",
        tag: {
          text: "LIMITED",
          theme: "primary",
        },
        image: "/images/product3.webp",
        productTitle: "Teal Edition",
        productSubTitle: "Signature Ceramic",
        price: "$399",
      },
    ],
  },
  newsletter: {
    title: "Stay Ahead of the Curve",
    description:
      "Get exclusive access to software updates, health tips, and early bird pricing on new hardware releases.",
    inputPlaceholder: "Enter your email",
    buttonText: "Join Now",
  },
  footer: {
    branding: {
      iconPath: "/images/Icon.webp",
      brandName: "STIDGET",
      subText: "Bridging gap between Tech and Freedom of Expression",
      actions: [
        {
          icon: {
            name: "share",
            size: "sm",
          },
          action: "share",
        },
        {
          icon: {
            name: "shutter",
            size: "sm",
          },
          action: "dribbble",
        },
      ],
    },

    product: [
      { label: "Compare Series", link: "/" },
      { label: "Accessories", link: "/" },
      { label: "Health App", link: "/" },
      { label: "For Enterprise", link: "/" },
    ],

    company: [
      { label: "About Us", link: "/about" },
      { label: "Our Process", link: "/" },
      { label: "Sustainability", link: "/" },
      { label: "Careers", link: "/" },
    ],

    support: [
      { label: "Help Center", link: "/" },
      { label: "Order Status", link: "/" },
      { label: "Warranty", link: "/" },
      { label: "Contact Us", link: "/" },
    ],

    copyright: "© 2024 WEARABLETECH INC. ALL RIGHTS RESERVED.",

    extras: [
      { label: "Privacy Policy", link: "/" },
      { label: "Terms of Service", link: "/" },
    ],
  },
};
