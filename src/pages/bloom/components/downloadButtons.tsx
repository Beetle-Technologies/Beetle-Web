import { IoLogoGooglePlaystore } from "react-icons/io5";
import { RiAppStoreFill } from "react-icons/ri";

// Interface for the download buttons
interface AppDownloadButtonProps {
  url: string;
  className?: string;
}

// App Store download button
export const AppStoreButton = ({
  url,
  className = "",
}: AppDownloadButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex gap-x-1 sm:gap-x-2 md:gap-x-3 items-center bg-black text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl font-semibold hover:scale-105 transition ease-in-out ${className}`}
    >
      <div className="flex flex-col items-start">
        <span className="text-xs font-normal">Download on the</span>
        <span className="text-base sm:text-lg font-semibold -mt-1">
          App Store
        </span>
      </div>
      <RiAppStoreFill className="text-2xl sm:text-3xl md:text-4xl" />
    </a>
  );
};

// Google Play download button
export const PlayStoreButton = ({
  url,
  className = "",
}: AppDownloadButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex gap-x-1 sm:gap-x-2 md:gap-x-3 items-center bg-black text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl font-semibold hover:scale-105 transition ease-in-out ${className}`}
      onClick={(e) => e.preventDefault()}
    >
      <div className="flex flex-col items-start">
        <span className="text-xs font-normal">GET IT ON</span>
        <span className="text-base sm:text-lg font-semibold -mt-1">
          Google Play
        </span>
      </div>
      <IoLogoGooglePlaystore className="text-2xl sm:text-3xl md:text-4xl" />
    </a>
  );
};
