import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React, { useState } from "react";
const StyledMenuBtn = styled.button`
  /* reset stuff */
  background: none;
  border: none;
  padding: 0;
  /* end reset stuff */
  height: 2rem;
  width: 4rem;
  position: relative;
  cursor: pointer;
  place-content: center;
  span {
    transition: all 0.2s;

    background: white;
    border-radius: 0.2rem;
    height: 4px;
    position: absolute;
    left: 0;
    &:first-of-type {
      width: 3rem;
      top: 0px;
    }
    &:nth-of-type(2) {
      width: 2rem;
      top: 50%;
    }
    &:last-of-type {
      width: 4rem;
      top: 100%;
    }
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      height: 3px;
      &:first-of-type {
        width: 3rem;
        top: 0px;
      }
      &:nth-of-type(2) {
        width: 1.5rem;
        top: 50%;
      }
      &:last-of-type {
        width: 3rem;
        top: 100%;
      }
    }
    ${({ open }) =>
      open &&
      css`
        &:first-of-type,
        &:last-of-type {
          width: 4rem;
          transform-origin: 6px;
        }
        &:last-of-type {
          transform: rotate(-45deg);
        }
        &:first-of-type {
          transform: rotate(45deg);
        }
        &:nth-of-type(2) {
          opacity: 0;
        }
      `}
  }
`;
export default function MenuBtn({ setOpen, open }) {
  return (
    <StyledMenuBtn onClick={() => setOpen(!open)} open={open}>
      <span />
      <span />
      <span />
    </StyledMenuBtn>
  );
}
