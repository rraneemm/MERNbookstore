import React from "react";

import { Footer } from "flowbite-react";

const EndFooter = () => {
  return (
    <Footer container className="space-x-80 ml-8">
      <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      <Footer.LinkGroup className="space-x-40">
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default EndFooter;
