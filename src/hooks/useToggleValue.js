import { useState } from "react";

export default function useToggleValue(initialValue = false) {
  const [show, setShow] = useState(initialValue);
  const handleToggle = () => {
    setShow(!show);
  };
  return { show, handleToggle };
}
