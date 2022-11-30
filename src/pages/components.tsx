import React from "react";

import Button from "@/components/buttons/Button";
import ButtonLink from "@/components/buttons/ButtonLink";
import BaseImage from "@/components/images/BaseImage";
import NextImage from "@/components/images/NextImage";
import Layout from "@/components/layouts/Layout";
import ArrowLink from "@/components/links/ArrowLink";
import PrimaryLink from "@/components/links/PrimaryLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import UnstyledLink from "@/components/links/UnstyledLink";

const Components = () => {
  return (
    <Layout>
      <main className="min-h-screen py-10">
        <h1>Reusable Components</h1>
        <ArrowLink href="/" direction="left" className="my-2">
          Go Back
        </ArrowLink>
        <ol className="mt-8 space-y-4">
          <li className="space-y-1">
            <h3>Regular Link</h3>
            <div className="flex flex-wrap gap-2">
              <UnstyledLink href="/">Internal Link</UnstyledLink>
              <UnstyledLink href="https://yehezgun.com">
                External Link
              </UnstyledLink>
            </div>
          </li>
          <li className="space-y-1">
            <h3>Primary Link</h3>
            <div className="flex flex-wrap gap-2">
              <PrimaryLink href="/">Regular link</PrimaryLink>
              <PrimaryLink href="https://yehezgun.com">
                External link
              </PrimaryLink>
            </div>
          </li>
          <li className="space-y-1">
            <h3>Underline Link</h3>
            <div className="flex flex-wrap gap-2">
              <UnderlineLink href="/">Internal Link</UnderlineLink>
              <UnderlineLink href="https://yehezgun.com">
                External Link
              </UnderlineLink>
            </div>
          </li>
          <li className="space-y-1">
            <h3>Arrow Link</h3>
            <div className="flex flex-wrap gap-2">
              <ArrowLink href="https://yehezgun.com" direction="left">
                Direction Left
              </ArrowLink>
              <ArrowLink href="https://yehezgun.com" direction="right">
                Direction Right
              </ArrowLink>
              <ArrowLink
                href="https://yehezgun.com"
                direction="right"
                as={UnstyledLink}
                className="inline-flex items-center"
              >
                Polymorphism
              </ArrowLink>
              <ArrowLink
                as={ButtonLink}
                href="https://yehezgun.com"
                direction="right"
                variant="outline"
              >
                Polymorphism
              </ArrowLink>
            </div>
          </li>
          <li className="space-y-1">
            <h3>Button Component</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="light">Light Button</Button>
              <Button variant="dark">Dark Button</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="outline" disabled>
                Disabled
              </Button>
              <Button variant="ghost" disabled>
                Disabled
              </Button>
              <Button variant="light" disabled>
                Disabled
              </Button>
              <Button variant="dark" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" isLoading>
                Disabled
              </Button>
              <Button variant="outline" isLoading>
                Disabled
              </Button>
              <Button variant="ghost" isLoading>
                Disabled
              </Button>
              <Button variant="light" isLoading>
                Disabled
              </Button>
              <Button variant="dark" isLoading>
                Disabled
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" block>
                Block Button
              </Button>
              <Button variant="outline" block>
                Block Button
              </Button>
              <Button variant="ghost" block>
                Block Button
              </Button>
              <Button variant="light" block>
                Block Button
              </Button>
              <Button variant="dark" block>
                Block Button
              </Button>
            </div>
          </li>
          <li className="space-y-1">
            <h3>Button Link Component</h3>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="https://yehezgun.com" variant="primary">
                Primary Button
              </ButtonLink>
              <ButtonLink href="https://yehezgun.com" variant="outline">
                Outline Button
              </ButtonLink>
              <ButtonLink href="https://yehezgun.com" variant="ghost">
                Ghost Button
              </ButtonLink>
              <ButtonLink href="https://yehezgun.com" variant="light">
                Light Button
              </ButtonLink>
              <ButtonLink href="https://yehezgun.com" variant="dark">
                Dark Button
              </ButtonLink>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="https://yehezgun.com" variant="primary" block>
                Block Button Link
              </ButtonLink>
              <ButtonLink href="https://yehezgun.com" variant="outline" block>
                Block Button Link
              </ButtonLink>
              <ButtonLink href="https://yehezgun.com" variant="ghost" block>
                Block Button Link
              </ButtonLink>
              <ButtonLink href="https://yehezgun.com" variant="light" block>
                Block Button Link
              </ButtonLink>
              <ButtonLink href="https://yehezgun.com" variant="dark" block>
                Block Button Link
              </ButtonLink>
            </div>
          </li>
          <li className="space-y-1">
            <h3>NextImage</h3>
            <NextImage
              className="w-32 md:w-40"
              src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
              width={140}
              height={140}
              alt="Icon example"
            />
          </li>
          <li className="space-y-1">
            <h3>BaseImage (using base HTML img and figure tag)</h3>
            <BaseImage
              alt="sample-icon"
              className="w-32 md:w-40"
              src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
              loading="lazy"
              decoding="async"
            />
          </li>
        </ol>
      </main>
    </Layout>
  );
};

export default Components;
