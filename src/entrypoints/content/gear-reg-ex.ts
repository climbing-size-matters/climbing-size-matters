// Colors and patterns in reference to BD, DMM, or Wild Country gear
/* Green
    Added:
        BD: 0.0, #0.0, 000, green z4
        DMM: green dragonfly
        Imperial: 0.29-0.46 in
        Metolius: N/A
        Metric: 7.5-11.8 mm
        Totem: N/A
    Need to add:
        BD: 0, .0
        Wild Country: ??
*/
const GREEN_COLOR = "#009e3a";
const GREEN_0_PATTERN =
  /#?0\.0|(0\.(3|4|29|3[0-9]|4[0-6])(?=\s?in|"))|((7\.[5-9])|(8|9|10)\.[0-9]|(11\.[0-8]))(?=\s?mm)|([Cc]3\s?)?000(\s?[Cc]3)?|([Gg]reen)((\s[Zz]4)|(\s[Dd]ragonfly))/;
const GREEN_75_PATTERN = /#?0.75|(0\.9[4-9]|1\.[0-5][0-9]|1\.6[0-2])(?=\s?in|")|(23\.[9]|2[4-9]\.[0-9]|3[0-9]\.[0-9]|40\.[0-9]|41\.[0-2])(?=\s?mm|")|([Dd]ragon)(\s2)|([Mm]astercam)(\s5)|([Bb]lack)(\s[Mm]etolius)/;
const GREEN_6_PATTERN = /#6/
// const RED_COLOR = "#CB1B31";
// (0\.(3[4-9]|4[0-9]|5[0-4]))(?=\s?in|")
// const YELLOW_COLOR = "#c9af19";

// const BLUE_COLOR = "#1177cc";

// const GRAY_COLOR = "#9ba1b7";



type Replacement = {
  pattern: RegExp;
  color: string;
};

const replacements: Replacement[] = [
  { pattern: GREEN_0_PATTERN, color: GREEN_COLOR },
  { pattern: GREEN_75_PATTERN, color: GREEN_COLOR },
  { pattern: GREEN_6_PATTERN, color: GREEN_COLOR },
];

export { replacements };
