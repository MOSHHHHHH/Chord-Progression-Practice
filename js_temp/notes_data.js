// הגדרות הקלידים (צלילים) באוקטבה אחת
// כל קליד מוגדר כמשתנה עם 5 המאפיינים הנדרשים:
// 1. name_en_primary: שם באנגלית (שימוש בדיאז ♯)
// 2. name_en_alternate: שם חלופי באנגלית (שימוש בבמול ♭)
// 3. name_he_primary: שם בעברית (שימוש במילה "דיאז")
// 4. name_he_alternate: שם חלופי בעברית (שימוש במילה "במול")
// 5. half_tone_distance: מרחק בחצאי טונים מ-C (0-11)

// C
const note_C1 = {
    name_en_primary: 'C',
    name_en_alternate: 'C',
    name_he_primary: 'דו',
    name_he_alternate: 'דו',
    half_tone_distance: 0
};

// C♯ / D♭ (קליד שחור)
const note_CSharp1 = {
    name_en_primary: 'C♯',
    name_en_alternate: 'D♭',
    name_he_primary: 'דו דיאז',
    name_he_alternate: 'רה במול',
    half_tone_distance: 1
};

// D
const note_D1 = {
    name_en_primary: 'D',
    name_en_alternate: 'D',
    name_he_primary: 'רה',
    name_he_alternate: 'רה',
    half_tone_distance: 2
};

// D♯ / E♭ (קליד שחור)
const note_DSharp1 = {
    name_en_primary: 'D♯',
    name_en_alternate: 'E♭',
    name_he_primary: 'רה דיאז',
    name_he_alternate: 'מי במול',
    half_tone_distance: 3
};

// E
const note_E1 = {
    name_en_primary: 'E',
    name_en_alternate: 'E',
    name_he_primary: 'מי',
    name_he_alternate: 'מי',
    half_tone_distance: 4
};

// F
const note_F1 = {
    name_en_primary: 'F',
    name_en_alternate: 'F',
    name_he_primary: 'פא',
    name_he_alternate: 'פא',
    half_tone_distance: 5
};

// F♯ / G♭ (קליד שחור)
const note_FSharp1 = {
    name_en_primary: 'F♯',
    name_en_alternate: 'G♭',
    name_he_primary: 'פא דיאז',
    name_he_alternate: 'סול במול',
    half_tone_distance: 6
};

// G
const note_G1 = {
    name_en_primary: 'G',
    name_en_alternate: 'G',
    name_he_primary: 'סול',
    name_he_alternate: 'סול',
    half_tone_distance: 7
};

// G♯ / A♭ (קליד שחור)
const note_GSharp1 = {
    name_en_primary: 'G♯',
    name_en_alternate: 'A♭',
    name_he_primary: 'סול דיאז',
    name_he_alternate: 'לה במול',
    half_tone_distance: 8
};

// A
const note_A1 = {
    name_en_primary: 'A',
    name_en_alternate: 'A',
    name_he_primary: 'לה',
    name_he_alternate: 'לה',
    half_tone_distance: 9
};

// A♯ / B♭ (קליד שחור)
const note_ASharp1 = {
    name_en_primary: 'A♯',
    name_en_alternate: 'B♭',
    name_he_primary: 'לה דיאז',
    name_he_alternate: 'סי במול',
    half_tone_distance: 10
};

// B
const note_B1 = {
    name_en_primary: 'B',
    name_en_alternate: 'B',
    name_he_primary: 'סי',
    name_he_alternate: 'סי',
    half_tone_distance: 11
};

// יצירת מערך שמרכז את כל הקלידים לצורך גישה נוחה באפליקציה.
// המערך מכיל רק את האובייקטים של הקלידים שהוגדרו לעיל.
const ALL_NOTES_OCTAVE_1 = [
    note_C1,
    note_CSharp1,
    note_D1,
    note_DSharp1,
    note_E1,
    note_F1,
    note_FSharp1,
    note_G1,
    note_GSharp1,
    note_A1,
    note_ASharp1,
    note_B1
];
