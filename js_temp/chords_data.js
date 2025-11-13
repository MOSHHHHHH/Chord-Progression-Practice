// הגדרות של 10 סוגי אקורדים נפוצים
// כל אקורד מוגדר עם 5 מאפיינים:
// 1. var_name: שם המשתנה (chord_[name])
// 2. name_he: שם בעברית
// 3. name_en: שם באנגלית (השם המלא של הדירוג)
// 4. symbol_suffix: הסיומת המוסכמת באנגלית (למשל, m, 7, sus4)
// 5. intervals: מערך המרווחים בחצאי טונים מתו הטוניקה (Root)

// 1. מז'ור (Major Triad)
const chord_Major = {
    name_he: 'מז׳ור',
    name_en: 'Major',
    symbol_suffix: '', // אין סיומת נפוצה
    description_he: 'האקורד הבסיסי, מורכב מפרימה, טרצה גדולה (4 חצאי טונים) וקווינטה זכה (7 חצאי טונים).',
    intervals: [0, 4, 7]
};

// 2. מינור (Minor Triad)
const chord_Minor = {
    name_he: 'מינור',
    name_en: 'Minor',
    symbol_suffix: 'm',
    description_he: 'אקורד בעל אופי נוגה, מורכב מפרימה, טרצה קטנה (3 חצאי טונים) וקווינטה זכה.',
    intervals: [0, 3, 7]
};

// 3. מז'ור 7 (Major 7th)
const chord_Major7 = {
    name_he: 'מז׳ור 7',
    name_en: 'Major 7th',
    symbol_suffix: 'Maj7',
    description_he: 'אקורד עשיר ומלודי, מוסיף ספטימה גדולה (11 חצאי טונים) לאקורד מז׳ור.',
    intervals: [0, 4, 7, 11]
};

// 4. מינור 7 (Minor 7th)
const chord_Minor7 = {
    name_he: 'מינור 7',
    name_en: 'Minor 7th',
    symbol_suffix: 'm7',
    description_he: 'אקורד בעל אופי רך וג׳אזי, מוסיף ספטימה קטנה (10 חצאי טונים) לאקורד מינור.',
    intervals: [0, 3, 7, 10]
};

// 5. דומיננט 7 (Dominant 7th)
const chord_Dominant7 = {
    name_he: 'דומיננט 7',
    name_en: 'Dominant 7th',
    symbol_suffix: '7',
    description_he: 'אקורד מתוח שדורש פתרון, משמש לרוב כ-V בסולם, מוסיף ספטימה קטנה לאקורד מז׳ור.',
    intervals: [0, 4, 7, 10]
};

// 6. מינור 7 שטוח 5 (Half-Diminished / Minor 7th flat 5)
const chord_HalfDiminished = {
    name_he: 'מינור 7b5',
    name_en: 'Minor 7th flat 5 (Half-Diminished)',
    symbol_suffix: 'm7b5',
    description_he: 'אקורד מורכב עם מתח חזק, משמש בעיקר במוזיקת ג׳אז, עם קווינטה מוקטנת (6 חצאי טונים).',
    intervals: [0, 3, 6, 10]
};

// 7. מוגדל (Augmented)
const chord_Augmented = {
    name_he: 'מוגדל',
    name_en: 'Augmented',
    symbol_suffix: 'aug',
    description_he: 'אקורד עם תחושה חלומית או מתוחה, עם קווינטה מוגדלת (8 חצאי טונים).',
    intervals: [0, 4, 8]
};

// 8. מוקטן (Diminished)
const chord_Diminished = {
    name_he: 'מוקטן',
    name_en: 'Diminished',
    symbol_suffix: 'dim',
    description_he: 'אקורד לא יציב ודרמטי, עם טרצה קטנה וקווינטה מוקטנת.',
    intervals: [0, 3, 6]
};

// 9. סאס 4 (Suspended 4th)
const chord_Sus4 = {
    name_he: 'סאס 4',
    name_en: 'Suspended 4th',
    symbol_suffix: 'sus4',
    description_he: 'הטרצה מוחלפת בקוורטה (5 חצאי טונים), יוצר תחושה של השהיה שדורשת פתרון לטרצה.',
    intervals: [0, 5, 7]
};

// 10. סאס 2 (Suspended 2nd)
const chord_Sus2 = {
    name_he: 'סאס 2',
    name_en: 'Suspended 2nd',
    symbol_suffix: 'sus2',
    description_he: 'הטרצה מוחלפת בסקונדה גדולה (2 חצאי טונים), יוצר צליל פתוח ומרחף.',
    intervals: [0, 2, 7]
};

// יצירת מערך שמרכז את כל האקורדים לצורך גישה נוחה
const ALL_CHORDS = [
    chord_Major,
    chord_Minor,
    chord_Dominant7,
    chord_Major7,
    chord_Minor7,
    chord_HalfDiminished,
    chord_Augmented,
    chord_Diminished,
    chord_Sus4,
    chord_Sus2
];
