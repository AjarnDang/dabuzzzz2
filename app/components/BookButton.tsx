"use client";

import { Button } from "flowbite-react";

export default function BookButton() {
  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfR_mYH5BJj-KfgbxiFUzRSyaTaxp99qAOiWoVJubiqtOkuEw/viewform",
      "_blank"
    );
  };

  return (
    <Button className="rounded-full bg-primary px-4" onClick={handleClick}>
      Book now
    </Button>
  );
}
