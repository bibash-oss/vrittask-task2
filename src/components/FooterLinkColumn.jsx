import React from "react";

export default function FooterLinkColumn({ linkTitle, links }) {
  console.log(links);
  return (
    <div>
      <h4 className="font-semibold text-white">{linkTitle}</h4>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </div>
  );
}
