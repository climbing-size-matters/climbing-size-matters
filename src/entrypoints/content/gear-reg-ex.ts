// Colors and patterns in reference to BD, DMM, or Wild Country gear
/* Green
    Added:
        BD: 0.0, #0.0, 000, green z4
        Imperial: 0.29-0.46 in
        Metolius: N/A
        Totem: N/A
    Need to add:
        BD: 0, .0
        DMM: green dragonfly
        Metric: 7.5-11.8 mm
        Wild Country: ??
        BIGGER SIZES i.e., 0.75
*/
const GREEN_COLOR = "#009e3a";
const GREEN_PATTERN =
  /#?0\.0|(0\.(3|4|29|3[0-9]|4[0-6])(?=\s?in|"))|([Cc]3\s?)?000(\s?[Cc]3)?|([Gg]reen)(\s[Zz]4)/;

// const RED_COLOR = "#CB1B31";

// const YELLOW_COLOR = "#c9af19";

// const BLUE_COLOR = "#1177cc";

// const GRAY_COLOR = "#9ba1b7";

// const CAMALOT_PATTERN = /(?<!\w)[Cc]am(-?a-?lot)?s?(?!\w)/gi; // # matches e.g. cam, Cam-a-lot
const GEAR_SIZE_PATTERN =
  /(?<!\w)(#(0(0|\.([12345]|(75)))?)|#[1-8])(?![\w.])/gi; // matches #00, #0, #0.1-0.75, #1-#8
const CRACK_SIZE_PATTERN =
  /(?<!\w)(([0-9](\.5)?)-)?[0-9](\.5)?("|cm|mm)(?!\w)/gi; // matches e.g. 3.5", 3-4"

// const GEAR_COLOR = "#FF0000"; // red
const GEAR_SIZE_COLOR = "#00FF00"; // green
const CRACK_SIZE_COLOR = "#0000FF"; // blue

type Replacement = {
  pattern: RegExp;
  color: string;
};

const replacements: Replacement[] = [
  //   { pattern: CAMALOT_PATTERN, color: GEAR_COLOR },
  { pattern: GEAR_SIZE_PATTERN, color: GEAR_SIZE_COLOR },
  { pattern: CRACK_SIZE_PATTERN, color: CRACK_SIZE_COLOR },
  { pattern: GREEN_PATTERN, color: GREEN_COLOR },
];

export { replacements };
