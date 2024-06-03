export type ThemeColors = {
  text: string;
  textInactive: string;
  background: string;
  fonBackground: string;
  textComponent: string;
  border: string;
  inputBackground: string;
  inputText: string;
  buttonBackground: string;
  buttonText: string;
  primary: string;
  secundary:string;
  tertiary: string;
  quaternary: string;
  divider: string
};

export type ColorThemeName = "light" | "dark";

export const colors: Record<ColorThemeName, ThemeColors> = {
  light: {
    text: "#080808",
    textInactive: "#a1a1a1",
    background: "#ffffff",
    fonBackground: "#EDEEF2",
    textComponent: "#DBD8E3",
    border: "#dadada",
    inputBackground: "#EDEEF2",
    inputText: "#292929",
    buttonBackground: "#756AB6",
    buttonText: "white",
    primary:'#80BCBD',
    secundary:'#AAD9BB',
    tertiary:'#D5F0C1',
    quaternary:'#F9F7C9',
    divider: "#DFE4EA",
  },
  dark: {
    text: "#ffffff",
    textInactive: "#cecece",
    background: "#121212",
    fonBackground: "#292929",
    textComponent: "#DBD8E3",
    border: "#474545",
    inputBackground: "#292929",
    inputText: "#616161",
    buttonBackground: "#6d5d94",
    buttonText: "#c5c4c4",
    primary:'#756AB6',
    secundary:'#AC87C5',
    tertiary:'#E0AED0',
    quaternary:'#FFE5E5',
    divider: '#292929'
  }
};
