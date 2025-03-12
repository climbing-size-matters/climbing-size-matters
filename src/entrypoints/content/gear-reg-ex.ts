// Cam colors and patterns for Black Diamond
const GREEN_COLOR = '#009E3A';
const GREEN_000 =
    /#?0\.0|(0\.(29|3|3[0-9])\s?(in|"))|((7\.[5-9])|(8|9)\.[0-9]|10\.[0-2])(?=\s?mm)|(c3)?[\s(,-]000[\s),-](c3)?|(green\s(z4|dragonfly(?:\s2)?)|dragonfly\s1)/gi;
const GREEN_075 =
    /#?0.75|1\.[1-3]\s?(in|")|(23\.[9]|2[4-9]\.[0-9]|3[0-9]\.[0-9]|40\.[0-9]|41\.[0-2])(?=\s?mm|")|(dragon)(\s2)|(mastercam)(\s5)|black\s((metolius)|(mc))|(green\stotem)|(green)\s(friend|wc)(\s0?.75)?/gi;
const GREEN_600 = /#6(\.0)?|(green)\s(friend)|wc(\s6)/gi;

const RED_COLOR = '#CB1B31';
const RED_010 =
    /#?0\.1|0\.4[0-7]?\s?(in|")|((10\.[3-9])|11|11\.[0-9]|12|12\.0)(?=\s?mm)|(c3)?[\s(,-]00[\s),-](c3)?|(red\s(z4|dragonfly(?:\s2)?)|dragonfly\s2)|gr[ae]y\s((metolius)|(mc))|(black)(\salien)/gi;
const RED_100 =
    /1\.[4-7]\s?(in|")|(35\.([7-9])?|(36|37|38|39|40|41|42|43)\.([0-9])?|44\.([0-6])?)(?=\s?mm|")|(dragon)(\s2)|(mastercam)(\s5)|green\s((metolius)|(mc))|(#?1(\.0)?|red)\s(totem|camalots?|c4|friend|wc)(\s1)?|#1(\.0)?/gi;
const RED_700 = /#7(\.0)?/;

const YELLOW_COLOR = '#C9AF19';
const YELLOW_020 =
    /#?0\.2|(0\.(4[0-7]|5|6|6[0-4])|0\.[46])\s?(in|")|((12\.[1-9])|(13(\.[0-9])?)|(14(\.[0-9])?)|(15(\.[0-0])?))(?=\s?mm)|(green\s)(c3)|(yellow\s(z4|dragonfly(?:\s3)?)|dragonfly\s3)|purple\s((metolius)|(mc))|(blue)(\salien)/gi;
const YELLOW_200 =
    /(1(\.[7-9])?|2(\.[1-2])?)\s?(in|")|(44\.[7-9]|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64\.[0-9])(?=\s?mm)|(yellow\sdragon(\s4)?)|(orange\stotem)|#?7(\s(metolius)|(mc))|(#?2(\.0)?|yellow)\s(c4|friend|wc)(\s2)?|#2(\.0)?/gi;
const YELLOW_800 = /#8(\.0)?/gi;

const BLUE_COLOR = '#1177CC';
const BLUE_030 =
    /#?0\.3|(0\.(6[0-4]|5|6|7([0-4]|6))|0\.[67])\s?(in|")|(green)(\salien)|(blue)(\stotem)|(yellow\s)(c3)|(#?2|yellow)\s((metolius)|(mc))|(blue)(\sdragon)(\s00)?|(blue)(\sC4)/gi;
const BLUE_300 =
    /2\.[3-9]\s?(in|")|(blue)(\sdragon)(\s5)?|(blue)(\sfriend)(\s3)?|(blue)(\sC4)|(#3(\.0)?|blue)\s(c4|friend|wc)(\s3)?|#3(\.0)?/gi;

const GRAY_COLOR = '#9BA1B7';
const GRAY_040 =
    /#?0\.4|(0\.(7[7-9]|8|9[0-1])|0\.[78])\s?(in|")|(gr[ae]y)(\salien)(\s7\/8)?|(yellow)(\stotem)|(#?3|orange)\s((metolius)|(mc))|(gr[ae]y)\s(dragon)(\s0)?|(gr[ae]y)(\sC4)|(gr[ae]y)\s(friend|wc)(\s0?\.4)?/gi;
const GRAY_400 =
    /3(\.[0-9])?\s?(in|")|(gr[ae]y)\s(dragon)(\s6)?|(#4(\.0)?|gr[ae]y)\s(c4|friend|wc)(\s4)?|#4(\.0)?/gi;

const PURPLE_COLOR = '#614FC8';
const PURPLE_050 =
    /#?0\.5|(0\.(9[2-9]|10|11[0-2])|0\.[9]|1\.(0|1[0-2]))\s?(in|")|(red)(\salien)(\s1)?|(#?4|red)\s((metolius)|(mc))|purple\s(dragon|totem)(\s1)?|purple\sC4|purple\s(friend|wc)(\s0?\.5)?/gi;
const PURPLE_500 =
    /(4(\.[0-9])?|5\.[0-2])\s?(in|")|purple\sdragon(\s7)?|#5(\.0)?purple(\sC4)?|#5(\.0)?|(red)\s(friend|wc)(\s5)?/gi;

type GearHighlight = {
    pattern: RegExp;
    color: string;
};

const gearToHighlight: GearHighlight[] = [
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

export { gearToHighlight };
