import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // अगर यूआरएल में कोई हैश (#contact) नहीं है, तो टॉप पर स्क्रॉल करो
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // अगर हैश है, तो थोड़ा रुक कर उस आईडी वाले सेक्शन पर स्क्रॉल करो
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}
