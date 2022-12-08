import type { NextPage } from "next";
import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";

import Button from "@/components/buttons/Button";
import Layout from "@/components/layouts/Layout";
import clsxm from "@/lib/helpers/clsxm";

const Home: NextPage = () => {
  const [QRValue, setQRValue] = useState<string>("https://yehezgun.com");
  const [QRStyle, setQRStyle] = useState<"squares" | "dots">("squares");
  const [imageURL, setImageURL] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");

  const handleQRValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQRValue(e.target.value);
  };

  const handleQRStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQRStyle(e.target.value as "squares" | "dots");
  };

  const handleImageURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value);
  };

  const handleBgColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBgColor(e.target.value);
  };

  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-between gap-8 lg:flex-nowrap">
        <div className="flex w-full flex-col gap-4">
          <QRCode
            id="qr-code"
            size={220}
            value={QRValue}
            qrStyle={QRStyle}
            logoImage={imageURL}
            logoHeight={96}
            logoWidth={96}
            bgColor={bgColor}
          />
          <Button className="w-60">Save QR</Button>
        </div>
        <div className="w-full space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="content">Content</label>
            <input
              defaultValue={QRValue}
              type="text"
              className="text-input"
              onChange={handleQRValueChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="content">Logo Image</label>
            <input
              type="text"
              className={clsxm(
                "text-input",
                "placeholder:dark:text-darkpurple-400"
              )}
              placeholder="Put the QR Logo Image URL here (optional)"
              onChange={handleImageURLChange}
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
