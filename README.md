# Simple QR Generator

![qr-generator](https://socialify.git.ci/yehezkielgunawan/qr-generator/image?logo=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1233%2F1233055.png%3Fw%3D740%26t%3Dst%3D1669899478~exp%3D1669900078~hmac%3Dcdb7088b7f105d5383eb605a29732548b0798f2895f3f4fe06afbb0ed5a35f17&name=1&owner=1&pattern=Solid&theme=Dark)

[![forthebadge](https://res.cloudinary.com/yehez/image/upload/v1635325228/made-by-typescript_mz1tue.svg)](https://forthebadge.com)

This is just a quick mini project of a QR Generator. The live demo can be accessed at [qr.yehezgun.com](https://qr.yehezgun.com)

## ⚡ What's included here?

- Toolings for linting, formatting, and conventions configured.
  `eslint`, `prettier`, `husky`, & `lint-staged.`
- The ESLint config is bundled in [`eslint-config-yehezgun`](https://www.npmjs.com/package/eslint-config-yehezgun)
- ✨Basic responsive layout configuration (through Tailwind CSS)
- 📜Basic `standard-version` to generate Changelog, you can run `npx standard-version --skip.bump --skip.commit --skip.tag`
- SEO Optimization (using next-SEO)
- Now using Next.js 13 with Rust Compiler Minification enabled (you can disable it at next.config.js)

## How to use it?

- Open [qr.yehezgun.com](https://qr.yehezgun.com)
- Write the string or url that you want to generate as QR Code
- You can select the QR Code style
- If you want it, you also can download the QR Code
- You also can generate the QR Code by passing the query param using `qr_value`, for example `https://qr.yehezgun.com?qr_value=https://google.com`, the default QR Value will be changed to `https://google.com`
- It's better to use the link shortener to shorten the QR Value url if the QR Value input is more than 30 characters.

## References

- [Tailwind CSS Official Docs](https://tailwindcss.com/)
- [html-to-image library](https://www.npmjs.com/package/html-to-image)
