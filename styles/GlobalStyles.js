import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";
import React from "react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
        }
        html {
          font-size: 62.5%;
        }
        html,
        body {
          font-family: "Montserrat", sans-serif;
        }
        body {
          line-height: 1.3;
        }
        body,
        html,
        #__next {
          height: 100%;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
}
