import CSS from 'csstype'
import { COLORS } from './site-colors';

const headerTextStyles: CSS.Properties = {
  textAlign: "left"
};

const headerInlineTextStyles: CSS.Properties = {
    display: "inline", 
    textAlign: "left",
    color: COLORS.blackOlive
  };

export {headerInlineTextStyles, headerTextStyles}