import React from "react";

export default function NavbarHalfRound({ className, wigth, heigth }: { className?: string, wigth?: string, heigth?: string }) {
  return (
    <svg
    width={wigth || "23"}
    height={heigth || "11.5"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="362 108 23 11.5"
      fill="currentColor"
    >
      <path
        d="M385 108c0 6.347-5.153 11.5-11.5 11.5S362 114.347 362 108"
        className={className}
      />
    </svg>
  );
}
