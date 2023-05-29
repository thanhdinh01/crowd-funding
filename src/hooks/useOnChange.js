import { useState } from "react";
import { debounce } from "lodash";

export default function useOnChange(time = 0) {
  const [filter, setFilter] = useState("");
  const handleChange = debounce((e) => {
    setFilter(e.target.value);
  }, time);
  return { filter, handleChange };
}
