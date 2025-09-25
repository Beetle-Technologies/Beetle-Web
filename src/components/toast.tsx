import { useEffect, useState } from "react";

type Props = {
  message: string;
  duration: number;
  type: "success" | "error" | "info";
  placement: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClose?: () => void;
};

const Toast = (props: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      if (props.onClose) props.onClose();
    }, props.duration);
    return () => clearTimeout(timeout);
  }, [props.onClose, props.duration]);

  if (!isVisible) return null;

  const typeClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  const placementClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <div
      className={`
      fixed ${placementClasses[props.placement]}
      ${typeClasses[props.type]}
      text-white px-4 py-2 rounded-md shadow-lg
      transition-opacity duration-300 ease-in-out z-50
    `}
    >
      <p>{props.message}</p>
    </div>
  );
};

export default Toast;
