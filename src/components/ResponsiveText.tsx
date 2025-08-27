import React from "react";

export default function ResponsiveText({
  short,
  long,
  as: Tag = "p",
  className = "",
}: {
  short?: string;           // optional mobile text
  long: string;             // required desktop/tablet text
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  // If no "short" is provided, render "long" for all breakpoints.
  if (!short) {
    return <Tag className={className}>{long}</Tag>;
  }
  return (
    <>
      <Tag className={`sm:hidden ${className}`}>{short}</Tag>
      <Tag className={`hidden sm:block ${className}`}>{long}</Tag>
    </>
  );
}