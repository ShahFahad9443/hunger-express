"use client";
import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const scriptInject = document.createElement("script");
    scriptInject.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    scriptInject.async = true;

    scriptInject.onload = () => {
      const scriptCustom = document.createElement("script");
      scriptCustom.src =
        "https://files.bpcontent.cloud/2026/04/21/14/20260421140959-TDT81EQK.js";
      scriptCustom.async = true;
      document.body.appendChild(scriptCustom);
    };
    document.body.appendChild(scriptInject);

    return () => {
      const scripts = document.querySelectorAll("script");
      scripts.forEach((script) => {
        if (
          script.src === "https://cdn.botpress.cloud/webchat/v3.6/inject.js" ||
          script.src ===
            "https://files.bpcontent.cloud/2026/04/21/14/20260421140959-TDT81EQK.js"
        ) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default Chatbot;
