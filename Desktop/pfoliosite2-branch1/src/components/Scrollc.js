import { useEffect } from "react";

export default function Scrollcorrector() {
  useEffect(() => {
    window.scrollTo(0, 1000);
  }, []);

  return null;
}
