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
        url: "https://og-image-rev.yehez.workers.dev/og?title=QR+Generator&description=A+simple+web+app+to+generate+the+QR+Code.&siteName=qr.yehezgun.com&social=Twitter%3A+%40yehezgun&image=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1233%2F1233055.png&=https%3A%2F%2Fog-image-rev.yehez.workers.dev%2Fog%3Ftitle%3DQR%2BGenerator%26description%3DA%2Bsimple%2Bweb%2Bapp%2Bto%2Bgenerate%2Bthe%2BQR%2BCode.%26siteName%3Dqr.yehezgun.com%26social%3DTwitter%253A%2B%2540yehezgun%26image%3Dhttps%253A%252F%252Fres.cloudinary.com%252Fyehez%252Fimage%252Fupload%252Fv1646485864%252Fyehez_avatar_transparent_swwqcq.png%26%3Dhttps%253A%252F%252Fog-image-rev.yehez.workers.dev%252Fog%253Ftitle%253DQR%252BGenerator%2526description%253DA%252Bsimple%252Bweb%252Bapp%252Bto%252Bgenerate%252Bthe%252BQR%252BCode.%2526siteName%253Dyehezgun.com%2526social%253DTwitter%25253A%252B%252540yehezgun%2526image%253Dhttps%25253A%25252F%25252Fres.cloudinary.com%25252Fyehez%25252Fimage%25252Fupload%25252Fv1646485864%25252Fyehez_avatar_transparent_swwqcq.png%2526%253Dhttps%25253A%25252F%25252Fog-image-rev.yehez.workers.dev%25252Fog%25253Ftitle%25253DQR%25252BGenerator%252526siteName%25253Dyehezgun.com%252526social%25253DTwitter%2525253A%25252B%25252540yehezgun%252526image%25253Dhttps%2525253A%2525252F%2525252Fres.cloudinary.com%2525252Fyehez%2525252Fimage%2525252Fupload%2525252Fv1646485864%2525252Fyehez_avatar_transparent_swwqcq.png%252526%25253Dhttps%2525253A%2525252F%2525252Fog-image-rev.yehez.workers.dev%2525252Fog%2525253Ftitle%2525253DTitle%25252526siteName%2525253Dyehezgun.com%25252526social%2525253DTwitter%252525253A%2525252B%2525252540yehezgun%25252526image%2525253Dhttps%252525253A%252525252F%252525252Fres.cloudinary.com%252525252Fyehez%252525252Fimage%252525252Fupload%252525252Fv1646485864%252525252Fyehez_avatar_transparent_swwqcq.png%25252526%2525253D%252525252Fog%252525253Ftitle%252525253DTitle%2525252526description%252525253DDescription%2525252526siteName%252525253Dyehezgun.com%2525252526social%252525253DTwitter%252525253A%2525252B%2525252540yehezgun",
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
