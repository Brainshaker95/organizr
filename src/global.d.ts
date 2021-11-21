/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

interface Locals {
  userid: string;
}

interface ScssVars {
  fsScaleMinWidth?: number,
  fsScaleMaxWidth?: number,
  fs?: {
    xs: {
      min: number,
      max: number,
    },
    sm: {
      min: number,
      max: number,
    },
    md: {
      min: number,
      max: number,
    },
    lg: {
      min: number,
      max: number,
    },
    xl: {
      min: number,
      max: number,
    },
    '2xl': {
      min: number,
      max: number,
    },
    '3xl': {
      min: number,
      max: number,
    },
  },
  lh?: {
    xs: {
      min: number,
      max: number,
    },
    sm: {
      min: number,
      max: number,
    },
    md: {
      min: number,
      max: number,
    },
    lg: {
      min: number,
      max: number,
    },
    xl: {
      min: number,
      max: number,
    },
    '2xl': {
      min: number,
      max: number,
    },
    '3xl': {
      min: number,
      max: number,
    },
  },
}
