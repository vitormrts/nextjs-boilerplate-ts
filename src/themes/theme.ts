const theme = {
  breakpoints: {
    xl: "1199px",
    lg: "991px",
    md: "767px",
    sm: "576px",
    xs: "321px",
  },
  border: {
    radius: {
      none: "0px",
      sm: "4px",
      huge: "10px",
      pill: "500px",
      circular: "50%",
    },
    width: {
      none: "0px",
      thin: "1px",
      medium: "2px",
      thick: "4px",
    },
  },
  colors: {
    primary: {
      light: "#03A9F4",
      main: "#2196F3",
      dark: "#3F51B5",
    },
  },
  font: {
    sizes: {
      quarck: "12px",
      nano: "14px",
      xs: "20px",
      sm: "22px",
      lg: "26px",
      huge: "50px",
      giant: "76px",
    },
    lineHeights: {
      default: "100%",
      xs: "110%",
      sm: "120%",
      md: "130%",
      lg: "150%",
    },
    weights: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
  },
  shadow: {
    light: "0px 1px 3px rgba(0, 0, 0, 0.16)",
    dark: "0px 3px 6px rgba(0, 0, 0, 0.2)",
    blur: "0px 0px 15px rgba(0, 0, 0, 0.2)",
    button: "6px 10px 15px rgba(0, 0, 0, 0.08)",
  },
  zIndices: {
    sub: -1,
    none: 0,
    default: 1,
    xs: 10,
    sm: 50,
    md: 100,
    lg: 200,
    xl: 500,
    top: 99999,
  },
} as const;

export default theme;
