// Cam colors and patterns for Black Diamond
const GREEN_COLOR = "#009E3A";
const GREEN_000 =
  /#?0\.0|(0\.(29|3|3[0-9])(?=\s?in|"))|((7\.[5-9])|(8|9)\.[0-9]|10\.[0-2])(?=\s?mm)|([Cc]3)?[\s(,-]000[\s),-]([Cc]3)?|([Gg]reen\s([Zz]4|[Dd]ragonfly(?:\s2)?)|[Dd]ragonfly\s1)/;
const GREEN_075 =
  /#?0.75|1\.(1[3-9]|2[0-9]|3[0-9]|40|[0-9])(?=\s?in|")|(23\.[9]|2[4-9]\.[0-9]|3[0-9]\.[0-9]|40\.[0-9]|41\.[0-2])(?=\s?mm|")|([Dd]ragon)(\s2)|([Mm]astercam)(\s5)|[Bb]lack\s(([Mm]etolius)|([Mm][Cc]))|([Gg]reen\s[Tt]otem)|([Gg]reen)\s([Ff]riend|[Ww][Cc])(\s0?.75)?/;
const GREEN_600 = /#6(\.0)?|([Gg]reen)\s([Ff]riend)|[Ww][Cc](\s6)/;

const RED_COLOR = "#CB1B31";
const RED_010 =
  /#?0\.1|0\.4[0-7]?(?=\s?in|")|((10\.[3-9])|11|11\.[0-9]|12|12\.0)(?=\s?mm)|([Cc]3)?[\s(,-]00[\s),-]([Cc]3)?|([Rr]ed\s([Zz]4|[Dd]ragonfly(?:\s2)?)|[Dd]ragonfly\s2)|[Gg]r[ae]y\s(([Mm]etolius)|([Mm][Cc]))|([Bb]lack)(\s[Aa]lien)/;
const RED_100 =
  /#1(\.0)?|(1\.4([1-9])?|1\.(5|6)[0-9]?|1\.7([0-5]))(?=\s?in|")|(35\.([7-9])?|(36|37|38|39|40|41|42|43)\.([0-9])?|44\.([0-6])?)(?=\s?mm|")|([Dd]ragon)(\s2)|([Mm]astercam)(\s5)|[Gg]reen\s(([Mm]etolius)|([Mm][Cc]))|([Rr]ed\s[Tt]otem)|([Rr]ed)\s([Ff]riend|[Ww][Cc])(\s1)?/;
const RED_700 = /#7(\.0)?/;

const YELLOW_COLOR = "#C9AF19";
const YELLOW_020 =
  /#?0\.2|(0\.(4[0-7]|5|6|6[0-4])|0\.[46])(?=\s?in|")|((12\.[1-9])|(13(\.[0-9])?)|(14(\.[0-9])?)|(15(\.[0-0])?))(?=\s?mm)|([Gg]reen\s)([Cc]3)|([Yy]ellow\s([Zz]4|[Dd]ragonfly(?:\s3)?)|[Dd]ragonfly\s3)|[Pp]urple\s(([Mm]etolius)|([Mm][Cc]))|([Bb]lue)(\s[Aa]lien)/;
const YELLOW_200 =
  /#2(\.0)?|(1\.(7[6-9]|8[0-9]|9[0-9])|2\.(0[0-9]|1[0-9]|2[0-7]))(?=\s?in|")|(44\.[7-9]|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64\.[0-9])(?=\s?mm)|([Yy]ellow\s[Dd]ragon(\s4)?)|([Oo]range\s[Tt]otem)|#?7(\s([Mm]etolius)|([Mm][Cc]))|([Yy]ellow|#?2(\.0)?)\s([Ff]riend|[Ww][Cc])(\s2)?/;
const YELLOW_800 = /#8(\.0)?/;

const BLUE_COLOR = "#1177CC";
const BLUE_030 =
  /#?0\.3|(0\.(6[0-4]|5|6|7([0-4]|6))|0\.[67])(?=\s?in|")|([Gg]reen)(\s[Aa]lien)|([Bb]lue)(\s[Tt]otem)|([Yy]ellow\s)([Cc]3)|(#?2|[Yy]ellow)\s(([Mm]etolius)|([Mm][Cc]))|([Bb]lue)(\s[Dd]ragon)(\s00)?|([Bb]lue)(\sC4)/;
const BLUE_300 =
  /#3(\.0)?|(2\.(2[8-9]|[3-9][0-9])|3\.(0[0-2]))(?=\s?in|")|([Bb]lue)(\s[Dd]ragon)(\s5)?|([Bb]lue)(\s[Ff]riend)(\s3)?|([Bb]lue)(\sC4)|([Bb]lue)\s([Ff]riend|[Ww][Cc])(\s3)?/;

const GRAY_COLOR = "#9BA1B7";
const GRAY_040 =
  /#?0\.4|(0\.(7[7-9]|8|9[0-1])|0\.[78])(?=\s?in|")|([Gg]r[ae]y)(\s[Aa]lien)(\s7\/8)?|([Yy]ellow)(\s[Tt]otem)|(#?3|[Oo]range)\s(([Mm]etolius)|([Mm][Cc]))|([Gg]r[ae]y)\s([Dd]ragon)(\s0)?|([Gg]r[ae]y)(\sC4)|([Gg]r[ae]y)\s([Ff]riend|[Ww][Cc])(\s0?\.4)?/;
const GRAY_400 =
  /#4(\.0)?|3\.(0[3-9]|[1-8][0-9]|9[0-3])(?=\s?in|")|([Gg]r[ae]y)\s([Dd]ragon)(\s6)?|([Gg]r[ae]y)(\sC4)|([Gg]r[ae]y)\s([Ff]riend|[Ww][Cc])(\s4)?/;

const PURPLE_COLOR = "#614FC8";
const PURPLE_050 =
  /#?0\.5|(0\.(9[2-9]|10|11[0-2])|0\.[9]|1\.(0|1[0-2]))(?=\s?in|")|([Rr]ed)(\s[Aa]lien)(\s1)?|([Pp]urple)(\s[Tt]otem)|(#?4|[Rr]ed)\s(([Mm]etolius)|([Mm][Cc]))|([Pp]urple)\s([Dd]ragon)(\s1)?|([Pp]urple)(\sC4)|([Pp]urple)\s([Ff]riend|[Ww][Cc])(\s0?\.5)?/;
const PURPLE_500 =
  /#5(\.0)?|(3\.(9[4-9]|[1-9][0-9])|4\.(0[0-9]|[1-9][0-9])|5\.(0[0-9]|1[0-7]))(?=\s?in|")|([Pp]urple)\s([Dd]ragon)(\s7)?|([Pp]urple)(\sC4)|([Rr]ed)\s([Ff]riend|[Ww][Cc])(\s5)?/;

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
  { pattern: BLUE_030, color: BLUE_COLOR },
  { pattern: BLUE_300, color: BLUE_COLOR },
  { pattern: GRAY_040, color: GRAY_COLOR },
  { pattern: GRAY_400, color: GRAY_COLOR },
  { pattern: PURPLE_050, color: PURPLE_COLOR },
  { pattern: PURPLE_500, color: PURPLE_COLOR },
];

export { replacements };
