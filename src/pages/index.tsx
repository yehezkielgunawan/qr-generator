import * as htmlToImage from "html-to-image";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";

import Button from "@/components/buttons/Button";
import InputField from "@/components/forms/InputField";
import SelectForm from "@/components/forms/SelectForm";
import Layout from "@/components/layouts/Layout";
import UnderlineLink from "@/components/links/UnderlineLink";
import { colorOptions, QRStyleOptions } from "@/lib/constants/baseConstants";
import clsxm from "@/lib/helpers/clsxm";

const Home: NextPage = () => {
  const router = useRouter();
  const { qr_value } = router.query;
  const [QRValue, setQRValue] = useState<string>("https://yehezgun.com");
  const [QRStyle, setQRStyle] = useState<"squares" | "dots">("squares");
  const [imageURL, setImageURL] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");
  const [logoWidth, setLogoWidth] = useState<number>(100);
  const [logoHeight, setLogoHeight] = useState<number>(100);

  const handleQRValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQRValue(e.target.value);
  };

  const handleQRStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQRStyle(e.target.value as "squares" | "dots");
  };

  const handleLogoWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogoWidth(Number(e.target.value));
  };

  const handleLogoHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogoHeight(Number(e.target.value));
  };

  const handleImageURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value);
  };

  const handleBgColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBgColor(e.target.value);
  };

  const handleDownload = () => {
    htmlToImage
      .toJpeg(document.getElementById("qr-code-wrapper")!)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "image.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  useEffect(() => {
    qr_value && setQRValue(qr_value as string);
  }, [qr_value]);

  return (
    <Layout>
      <div
        className={clsxm(
          "flex flex-wrap items-center justify-between gap-8 lg:flex-nowrap"
        )}
      >
        <div className="flex w-full flex-col items-center gap-4 lg:items-start">
          <div id="qr-code-wrapper">
            <QRCode
              id="qr-code"
              size={220}
              value={QRValue}
              qrStyle={QRStyle}
              logoImage={imageURL}
              logoHeight={logoHeight}
              logoWidth={logoWidth}
              bgColor={bgColor}
              logoOpacity={0.85}
            />
            <p className="w-60 break-words bg-white text-darkpurple-300">
              {QRValue}
            </p>
          </div>
          <Button className="w-60" onClick={handleDownload}>
            Save QR
          </Button>
        </div>
        <div className="w-full space-y-4">
          <div className="space-y-1">
            <InputField
              labelName="Content"
              autoFocus
              defaultValue={QRValue}
              type="text"
              onChange={handleQRValueChange}
              placeholder="Input the URL String here"
            />
            {QRValue.length > 30 && (
              <div className="text-rose-500">
                <p>
                  Better use{" "}
                  <UnderlineLink
                    href="https://shortin.yehezgun.com"
                    className="hover:bg-rose-100 dark:hover:bg-rose-50"
                  >
                    link shortener
                  </UnderlineLink>
                  , the URL content is too long.
                </p>
              </div>
            )}
          </div>
          <InputField
            labelName="Logo Image URL"
            type="text"
            placeholder="Put the QR Logo Image URL here (optional)"
            onChange={handleImageURLChange}
          />
          <div className="flex items-center gap-4">
            <InputField
              labelName="Logo Image Width (Opt)"
              defaultValue={logoWidth}
              type="number"
              placeholder="Logo Image Width"
              onChange={handleLogoWidthChange}
            />
            <InputField
              labelName="Logo Image Height (Opt)"
              defaultValue={logoHeight}
              type="number"
              placeholder="Logo Image Height"
              onChange={handleLogoHeightChange}
            />
          </div>
          <SelectForm
            labelName="QR Style"
            selectOptions={QRStyleOptions}
            onChange={handleQRStyleChange}
            defaultValue={QRStyle}
            labelHTMLFor="qr-style"
          />
          <SelectForm
            labelName="QR Color Mode"
            labelHTMLFor="qr-color-mode"
            selectOptions={colorOptions}
            onChange={handleBgColorChange}
            defaultValue="#FFFFFF"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
