import * as htmlToImage from "html-to-image";
import type { NextPage } from "next";
import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";

import Button from "@/components/buttons/Button";
import InputField from "@/components/forms/InputField";
import Layout from "@/components/layouts/Layout";
import clsxm from "@/lib/helpers/clsxm";

const Home: NextPage = () => {
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
    htmlToImage.toJpeg(document.getElementById("qr-code")!).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "image.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <Layout>
      <div
        className={clsxm(
          "flex flex-wrap items-center justify-between gap-8 lg:flex-nowrap"
        )}
      >
        <div className="flex w-full flex-col items-center gap-4 lg:items-start">
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
          <Button className="w-60" onClick={handleDownload}>
            Save QR
          </Button>
        </div>
        <div className="w-full space-y-4">
          <InputField
            labelName="Content"
            autoFocus
            defaultValue={QRValue}
            type="text"
            onChange={handleQRValueChange}
            placeholder="Input the URL String here"
          />
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
          <div className="flex flex-col gap-2">
            <label htmlFor="qr-style">QR Style</label>
            <select onChange={handleQRStyleChange} className="select-input">
              <option value="square">Square</option>
              <option value="dots">Dots</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="qr-style">QR Color Mode</label>
            <select
              defaultValue="#FFFFFF"
              onChange={handleBgColorChange}
              className="select-input"
            >
              <option value="#FFFFFF">Default White</option>
              <option value="#d1d5db">Dark Gray</option>
              <option value="#DEF2F1">Primary Color</option>
              <option value="#D6FFEB">Secondary Color</option>
            </select>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
