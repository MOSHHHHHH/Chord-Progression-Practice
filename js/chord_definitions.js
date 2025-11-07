/**
 * קובץ זה מגדיר משתנים עבור סוגי האקורדים הנפוצים.
 * כל משתנה (Chord Type) מכיל את הפרטים הבאים:
 * - hebrew_name: שם האקורד בעברית (למשל, מז'ור).
 * - symbolic_name_build: מחרוזת המייצגת את בניית השם הסימבולי של האקורד (למשל note_name + 'm').
 * - intervals_semitones: מערך של חצאי טונים מהשורש (0) המרכיבים את האקורד.
 * - playing_technique_he: תיאור קצר בעברית המציין את מרווחי חצאי הטונים המרכיבים את האקורד.
 * - harmonic_function_he: תיאור בעברית של תפקודו ההרמוני של האקורד.
 */

// 1. אקורד מז'ור (Major)
const chord_major = {
    hebrew_name: 'מז\'ור',
    symbolic_name_build: 'note_name',
    intervals_semitones: [0, 4, 7],
    playing_technique_he: 'מורכב משליש גדול (4 חצאי טונים) וקווינטה זכה (7 חצאי טונים).',
    harmonic_function_he: 'אקורד יציב ושמח, משמש לרוב כטוניקה (דרגה I) או כדומיננטה משנית. משמש כאקורד פתיחה וסיום נפוץ.'
};

// 2. אקורד מינור (Minor)
const chord_minor = {
    hebrew_name: 'מינור',
    symbolic_name_build: 'note_name + \'m\'',
    intervals_semitones: [0, 3, 7],
    playing_technique_he: 'מורכב משליש קטן (3 חצאי טונים) וקווינטה זכה (7 חצאי טונים).',
    harmonic_function_he: 'אקורד עצוב או מלנכולי, משמש כטוניקה מינורית (דרגה i) וכאקורדים אחרים התורמים לצבע המינורי (למשל iv, vi).'
};

// 3. אקורד דומיננט 7 (Dominant 7th)
const chord_dominant_7th = {
    hebrew_name: 'דומיננט 7',
    symbolic_name_build: 'note_name + \'7\'',
    intervals_semitones: [0, 4, 7, 10],
    playing_technique_he: 'מורכב מטרייד מז\'ור (0, 4, 7) וספטא קטנה (10 חצאי טונים).',
    harmonic_function_he: 'האקורד המרכזי של ההרמוניה הפונקציונלית. אקורד מתוח היוצר צורך חזק ברזולוציה לטוניקה (V7 -> I).'
};

// 4. אקורד מז'ור 7 (Major 7th)
const chord_major_7th = {
    hebrew_name: 'מז\'ור 7',
    symbolic_name_build: 'note_name + \'maj7\'',
    intervals_semitones: [0, 4, 7, 11],
    playing_technique_he: 'מורכב מטרייד מז\'ור (0, 4, 7) וספטא גדולה (11 חצאי טונים).',
    harmonic_function_he: 'אקורד יציב המשמש לעיתים קרובות כטוניקה (Imaj7) או כדרגה IVmaj7, מוסיף צבע, רכות ועידון.'
};

// 5. אקורד מינור 7 (Minor 7th)
const chord_minor_7th = {
    hebrew_name: 'מינור 7',
    symbolic_name_build: 'note_name + \'m7\'',
    intervals_semitones: [0, 3, 7, 10],
    playing_technique_he: 'מורכב מטרייד מינור (0, 3, 7) וספטא קטנה (10 חצאי טונים).',
    harmonic_function_he: 'אקורד רגוע, משמש לעיתים קרובות כאקורד דרגה ii (סוב-דומיננטה) או vi (טוניקה משנית) בסולם מז\'ור.'
};

// 6. אקורד מוקטן (Diminished Triad)
const chord_diminished = {
    hebrew_name: 'מוקטן',
    symbolic_name_build: 'note_name + \'°\'',
    intervals_semitones: [0, 3, 6],
    playing_technique_he: 'מורכב משני שלישים קטנים רצופים (0, 3, 6), יוצר קווינטה מוקטנת.',
    harmonic_function_he: 'אקורד מאוד מתוח ומטשטש, משמש לרוב כ-vii° (הדרגה השביעית) או viio7, בעל פונקציה דומיננטית חזקה הדורשת רזולוציה מיידית לטוניקה.'
};

// 7. אקורד מוגדל (Augmented Triad)
const chord_augmented = {
    hebrew_name: 'מוגדל',
    symbolic_name_build: 'note_name + \'+\'',
    intervals_semitones: [0, 4, 8],
    playing_technique_he: 'מורכב משני שלישים גדולים רצופים (0, 4, 8), יוצר קווינטה מוגדלת.',
    harmonic_function_he: 'אקורד צבעוני ומרחף, משמש ליצירת מתח, אפקט דרמטי או שינוי כיוון הרמוני (לרוב כ-V+).'
};

// 8. אקורד סאס 4 (Suspended 4th)
const chord_sus4 = {
    hebrew_name: 'סאס 4',
    symbolic_name_build: 'note_name + \'sus4\'',
    intervals_semitones: [0, 5, 7],
    playing_technique_he: 'השליש מוחלף בקוורטה זכה (5 חצאי טונים), עם קווינטה זכה (7 חצאי טונים).',
    harmonic_function_he: 'אקורד מעבר, יוצר מתח קל ותחושת ציפייה לפני רזולוציה לאקורד המז\'ור או המינור המקביל. לרוב מופיע לפני אקורד דומיננט.'
};

// --- אקורדים נפוצים נוספים שנוספו ---

// 9. אקורד חצי מוקטן 7 (Half-Diminished 7th / Minor 7th flat 5)
const chord_half_diminished_7th = {
    hebrew_name: 'חצי מוקטן 7',
    symbolic_name_build: 'note_name + \'m7b5\'', // או note_name + 'ø'
    intervals_semitones: [0, 3, 6, 10],
    playing_technique_he: 'מורכב מטרייד מוקטן (0, 3, 6) וספטא קטנה (10 חצאי טונים).',
    harmonic_function_he: 'משמש כאקורד דרגה ii במינור הרמוני (iiø7) או כחלק מרצף דומיננטי חלופי. יוצר מתח חזק הדורש פתרון.'
};

// 10. אקורד מוקטן 7 מלא (Fully Diminished 7th)
const chord_fully_diminished_7th = {
    hebrew_name: 'מוקטן 7 מלא',
    symbolic_name_build: 'note_name + \'dim7\'', // או note_name + '°7'
    intervals_semitones: [0, 3, 6, 9],
    playing_technique_he: 'מורכב משליש קטן (3), קווינטה מוקטנת (6) וספטא מוקטנת (9 חצאי טונים).',
    harmonic_function_he: 'אקורד סימטרי ועתיר מתח. משמש כדומיננטה מחליפה (V7b9) ומתפקד כגשר הרמוני למעבר בין טוניקות רחוקות.'
};

// 11. אקורד סאס 2 (Suspended 2nd)
const chord_sus2 = {
    hebrew_name: 'סאס 2',
    symbolic_name_build: 'note_name + \'sus2\'',
    intervals_semitones: [0, 2, 7],
    playing_technique_he: 'השליש מוחלף בטון שלם (2 חצאי טונים), עם קווינטה זכה (7 חצאי טונים).',
    harmonic_function_he: 'אקורד מעבר המעניק תחושה פתוחה ובהירה, פחות נפוץ מ-Sus4, אך משמש גם לרזולוציה לטרייד רגיל. בעל צליל "פתוח".'
};

// 12. אקורד מז'ור 6 (Major 6th)
const chord_major_6th = {
    hebrew_name: 'מז\'ור 6',
    symbolic_name_build: 'note_name + \'6\'',
    intervals_semitones: [0, 4, 7, 9],
    playing_technique_he: 'מורכב מטרייד מז\'ור (0, 4, 7) ומרווח שישי גדול (9 חצאי טונים).',
    harmonic_function_he: 'אקורד יציב ו"מתוק", מחליף לעיתים את Imaj7 בסגנונות קלאסיים וג\'אז. נחשב לאקורד טוניקה רגוע.'
};

// 13. אקורד מינור 6 (Minor 6th)
const chord_minor_6th = {
    hebrew_name: 'מינור 6',
    symbolic_name_build: 'note_name + \'m6\'',
    intervals_semitones: [0, 3, 7, 9],
    playing_technique_he: 'מורכב מטרייד מינור (0, 3, 7) ומרווח שישי גדול (9 חצאי טונים).',
    harmonic_function_he: 'אקורד מינורי קלאסי, בעל צליל עמוק ונוגה יותר מ-m7. משמש כאקורד צבע לטוניקה מינורית.'
};

// 14. אקורד Add 9
const chord_add_9 = {
    hebrew_name: 'הוספת 9',
    symbolic_name_build: 'note_name + \'add9\'',
    intervals_semitones: [0, 4, 7, 2],
    playing_technique_he: 'מורכב מטרייד מז\'ור (0, 4, 7) וטון שלם מעל השורש (2 חצאי טונים) שמנוגן יחד עם האקורד.',
    harmonic_function_he: 'אקורד טוניקה עשיר ובהיר, מוסיף צבע ורוחב מבלי ליצור מתח רב כמו אקורדי 7 או 11.'
};

// 15. אקורד מינור מז'ור 7 (Minor Major 7th)
const chord_minor_major_7th = {
    hebrew_name: 'מינור מז\'ור 7',
    symbolic_name_build: 'note_name + \'m(maj7)\'',
    intervals_semitones: [0, 3, 7, 11],
    playing_technique_he: 'מורכב מטרייד מינור (0, 3, 7) וספטא גדולה (11 חצאי טונים).',
    harmonic_function_he: 'אקורד נדיר ודרמטי, משמש כטוניקה במינור הרמוני או מלודי (דרגה i) ויוצר צליל "אפל" ומסתורי.'
};
