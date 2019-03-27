export const setPTYPEColor = tagName => {
  if (tagName === "CSH") {
    return "tomato";
  } else if (tagName === "STF") {
    return "#2874A6";
  } else if (tagName === "IGC") {
    return "#B03A2E";
  } else if (tagName === "STD") {
    return "#76448A";
  } else if (tagName === "EWS") {
    return "#283747";
  } else if (tagName === "MPK") {
    return "#717D7E";
  } else if (tagName === "BAI") {
    return "#fd5f00";
  } else {
    return "#ea168e";
  }
};

export const setSMODEColor = tagName => {
  if (tagName === "NEW") {
    return "#1ABC9C";
  } else if (tagName === "SHR") {
    return "#F08080";
  } else if (tagName === "REF") {
    return "#d84c73";
  } else if (tagName === "ADM") {
    return "#f5b17b";
  } else {
    return "orange";
  }
};

// CSH - tomato
// STF - #2874A6
// IGC - #B03A2E
// STD - #76448A
// EWS - #283747
// MPK - #717D7E
// BAI - #1ABC9C
// MDA -: gold

// SMODE :
// NEW  -: #239B56
// FOLLOW -: yellow
// SHR -: #F08080
// REF -: #ea168e
