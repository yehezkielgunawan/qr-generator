/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "YehezGun's Next.js + Tailwind Starter",
  description:
    "Yehezkiel Gunawan's personalized Next.js + Tailwind CSS + TypeScript starter template",
  canonical: "https://yehez-nexttailwind-starter.yehezgun.com",
  openGraph: {
    url: "https://yehez-nexttailwind-starter.yehezgun.com",
    title: "YehezGun's Next.js + Tailwind Starter",
    description: "Next.js + Tailwind CSS + TypeScript template",
    type: "website",
    images: [
      {
        url: "https://og-v2.yehezgun.com/api/og?title=yehez-nexttailwind-starter&desc=This%20is%20a%20Next%20JS%20(Typescript)%20+%20Tailwind%20CSS%20personalized%20template&imgUrl=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1607554385%2Frepositories%2Fnext-js%2Fnext-logo.png&f=1&nofb=1&ipt=c85d3f1b169b29d5ebb3c9ca87303abdf1091ceed3998361dc23f329943e9728&ipo=images&siteName=nexttw-starter.yehezgun.com",
        alt: "yehez-nexttailwind-starter.yehezgun.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "yehez-nexttailwind-starter",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
    },
  ],
};

export default defaultSEOConfig;
