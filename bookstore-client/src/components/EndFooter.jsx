import React from "react";

import { Footer } from "flowbite-react";

const EndFooter = () => {
  return (
    <Footer container className="space-x-80 ml-8">
      <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      <Footer.LinkGroup className="space-x-40">
        <Footer.Link href="/about">About</Footer.Link>
        <Footer.Link href="/shop">Shop</Footer.Link>
        <Footer.Link href="/">Home</Footer.Link>
        <Footer.Link>Contact Us at bookEmpyrean@outlook.com</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default EndFooter;
