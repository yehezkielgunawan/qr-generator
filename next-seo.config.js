/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "QR Generator",
  description: "A simple web app to generate the QR Code.",
  canonical: "https://qr.yehezgun.com",
  openGraph: {
    url: "https://qr.yehezgun.com",
    title: "QR Generator",
    description: "A simple web app to generate the QR Code.",
    type: "website",
    images: [
      {
        url: "https://og-v2.yehezgun.com/api/og?title=QR%20Generator&desc=A%20simple%20web%20app%20to%20generate%20the%20QR%20Code.&imgUrl=https://cdn-icons-png.flaticon.com/512/1233/1233055.png?w=740&t=st=1669899478~exp=1669900078~hmac=cdb7088b7f105d5383eb605a29732548b0798f2895f3f4fe06afbb0ed5a35f17&siteName=qr.yehezgun.com",
        alt: "qr-code",
        width: 1200,
        height: 630,
      },
    ],
    site_name: "qr-code",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://cdn-icons-png.flaticon.com/512/1233/1233055.png?w=740&t=st=1669899478~exp=1669900078~hmac=cdb7088b7f105d5383eb605a29732548b0798f2895f3f4fe06afbb0ed5a35f17",
    },
  ],
};

export default defaultSEOConfig;
