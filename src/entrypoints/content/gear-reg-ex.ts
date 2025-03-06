// Colors and patterns in reference to BD, DMM, or Wild Country gear

const GREEN_COLOR = "#009e3a";
// Add 0, .0, WC
const GREEN_000 =
  /#?0\.0|(0\.(29|3|3[0-9])(?=\s?in|"))|((7\.[5-9])|(8|9)\.[0-9]|10\.[0-2])(?=\s?mm)|([Cc]3)?[\s(,-]000[\s),-]([Cc]3)?|([Gg]reen\s([Zz]4|[Dd]ragonfly(?:\s2)?)|[Dd]ragonfly\s1)/;
// Add WC
const GREEN_075 =
  /#?0.75|(0\.9[4-9]|1\.(?:[0-9]|[0-3][0-9])|1\.(?:4|40))(?=\s?in|")|(23\.[9]|2[4-9]\.[0-9]|3[0-9]\.[0-9]|40\.[0-9]|41\.[0-2])(?=\s?mm|")|([Dd]ragon)(\s2)|([Mm]astercam)(\s5)|([Bb]lack)(\s[Mm]etolius)|([Gg]reen\s[Tt]otem)/;
// Add WC
const GREEN_600 = /#6/;

const RED_COLOR = "#CB1B31";
// Add .1, WC
const RED_010 =
  /#?0\.1|(0\.(4|4[0-7])(?=\s?in|"))|((10\.[3-9])|11|11\.[0-9]|12|12\.0)(?=\s?mm)|([Cc]3)?[\s(,-]00[\s),-]([Cc]3)?|([Rr]ed\s([Zz]4|[Dd]ragonfly(?:\s2)?)|[Dd]ragonfly\s2)|([Gr][ae]y)(\s[Mm]etolius)|([Bb]lack)(\s[Aa]lien)/;
const RED_100 =
  /#1(\.0)?|(1\.4([1-9])?|1\.(5|6)([0-9])?|1\.7([0-5])?)(?=\s?in|")|(35\.([7-9])?|(36|37|38|39|40|41|42|43)\.([0-9])?|44\.([0-6])?)(?=\s?mm|")|([Dd]ragon)(\s2)|([Mm]astercam)(\s5)|([Gg]reen)(\s[Mm]etolius)|([Rr]ed\s[Tt]otem)/;
const RED_700 = /#7/;

const YELLOW_COLOR = "#c9af19";
const YELLOW_020 =
  /#?0\.2|(0\.(4[8-9]|5|5[0-9]|6|6[0-4])(?=\s?in|"))|((12\.[1-9])|(13(\.[0-9])?)|(14(\.[0-9])?)|(15(\.[0-9])?)|(16(\.[0-3])?))(?=\s?mm)|([Gg]reen\s)([Cc]3)|([Yy]ellow\s([Zz]4|[Dd]ragonfly(?:\s3)?)|[Dd]ragonfly\s3)|([Pp]urple)(\s[Mm]etolius)|([Bb]lue)(\s[Aa]lien)/;
const YELLOW_200 = /#2(\.0)?|(1\.7([6-9])?|1\.(8|9)([0-9])?|2\.(5-4)([0-9])?|2\.5([0-5])?(?=\s?in|"))|(44\.[7-9]|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64\.[0-9])(?=\s?mm)|([Yy]ellow\s[Dd]ragon(\s4)?)|([Oo]range\s[Tt]otem)/;

const YELLOW_800 = /#8/;

// const BLUE_COLOR = "#1177cc";

// const GRAY_COLOR = "#9ba1b7";

type Replacement = {
  pattern: RegExp;
  color: string;
};

const replacements: Replacement[] = [
  { pattern: GREEN_000, color: GREEN_COLOR },
  { pattern: GREEN_075, color: GREEN_COLOR },
  { pattern: GREEN_600, color: GREEN_COLOR },
  { pattern: RED_010, color: RED_COLOR },
  { pattern: RED_100, color: RED_COLOR },
  { pattern: RED_700, color: RED_COLOR },
  { pattern: YELLOW_020, color: YELLOW_COLOR },
  { pattern: YELLOW_200, color: YELLOW_COLOR },
  { pattern: YELLOW_800, color: YELLOW_COLOR },
];

export { replacements };
