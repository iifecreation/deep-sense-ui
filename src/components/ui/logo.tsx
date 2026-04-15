import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "white" | "black" | "primary";
  showName?: boolean;
  iconOnly?: boolean;
  className?: string;
  iconClassName?: string;
  nameClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "primary",
  showName = true,
  iconOnly = false,
  className,
  iconClassName,
  nameClassName,
}) => {
  const iconSrc = `/assets/logo/icon-${variant}.svg`;
  
  // Use SVG if available, fallback for primary if needed (though user provided logo-name-primary.png)
  const nameSrc = variant === "primary" 
    ? "/assets/logo/logo-name-primary.png" 
    : `/assets/logo/logo-name-${variant}.svg`;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative flex-shrink-0", iconClassName)}>
        <img
          src={iconSrc}
          alt="Deep Sense Icon"
          className="w-full h-full object-contain"
        />
      </div>
      {!iconOnly && showName && (
        <div className={cn("relative flex-shrink-0", nameClassName)}>
          <img
            src={nameSrc}
            alt="Deep Sense"
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};
