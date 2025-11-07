/**
 * קובץ זה מגדיר משתנים עבור כל 12 התווים באוקטבה, החל מ-C.
 * כל משתנה (Note) מכיל את הפרטים הבאים:
 * - serial_number: מספר סידורי של חצי טון מהשורש (C=0).
 * - english_name: שם התו הראשי באנגלית (לרוב הדיאז).
 * - alt_english_name: שם חלופי באנגלית (לרוב הבמול). null אם לא קיים.
 * - hebrew_name: שם התו הראשי בעברית.
 * - alt_hebrew_name: שם חלופי בעברית. null אם לא קיים.
 *
 * שימו לב: שמות המשתנים של התווים השחורים משתמשים בסימון 'b' (במול) כפי שביקשת.
 */

// 0. C / דו
const note_c = {
    serial_number: 0,
    english_name: 'C',
    alt_english_name: null,
    hebrew_name: 'דו',
    alt_hebrew_name: null
};

// 1. C# / Db / דו דיאז / רה במול
const note_db = {
    serial_number: 1,
    english_name: 'C#',
    alt_english_name: 'Db',
    hebrew_name: 'דו דיאז',
    alt_hebrew_name: 'רה במול'
};

// 2. D / רה
const note_d = {
    serial_number: 2,
    english_name: 'D',
    alt_english_name: null,
    hebrew_name: 'רה',
    alt_hebrew_name: null
};

// 3. D# / Eb / רה דיאז / מי במול
const note_eb = {
    serial_number: 3,
    english_name: 'D#',
    alt_english_name: 'Eb',
    hebrew_name: 'רה דיאז',
    alt_hebrew_name: 'מי במול'
};

// 4. E / מי
const note_e = {
    serial_number: 4,
    english_name: 'E',
    alt_english_name: null,
    hebrew_name: 'מי',
    alt_hebrew_name: null
};

// 5. F / פה
const note_f = {
    serial_number: 5,
    english_name: 'F',
    alt_english_name: null,
    hebrew_name: 'פה',
    alt_hebrew_name: null
};

// 6. F# / Gb / פה דיאז / סול במול
const note_gb = {
    serial_number: 6,
    english_name: 'F#',
    alt_english_name: 'Gb',
    hebrew_name: 'פה דיאז',
    alt_hebrew_name: 'סול במול'
};

// 7. G / סול
const note_g = {
    serial_number: 7,
    english_name: 'G',
    alt_english_name: null,
    hebrew_name: 'סול',
    alt_hebrew_name: null
};

// 8. G# / Ab / סול דיאז / לה במול
const note_ab = {
    serial_number: 8,
    english_name: 'G#',
    alt_english_name: 'Ab',
    hebrew_name: 'סול דיאז',
    alt_hebrew_name: 'לה במול'
};

// 9. A / לה
const note_a = {
    serial_number: 9,
    english_name: 'A',
    alt_english_name: null,
    hebrew_name: 'לה',
    alt_hebrew_name: null
};

// 10. A# / Bb / לה דיאז / סי במול
const note_bb = {
    serial_number: 10,
    english_name: 'A#',
    alt_english_name: 'Bb',
    hebrew_name: 'לה דיאז',
    alt_hebrew_name: 'סי במול'
};

// 11. B / סי
const note_b = {
    serial_number: 11,
    english_name: 'B',
    alt_english_name: null,
    hebrew_name: 'סי',
    alt_hebrew_name: null
};
