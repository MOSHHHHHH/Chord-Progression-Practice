/**
 * קובץ זה מגדיר 50 מהלכי אקורדים נפוצים בסולם מינור טבעי (אאולי), ממוינים לפי דרגת קושי.
 *
 * הערות:
 * 1. root_degrees: דרגות רומיות בסולם מינור (i = טוניקה מינורית) – זהו מקור האמת היחיד.
 * 2. chord_types: משתני האקורדים מהקובץ 'chord_definitions.js'.
 * 3. דרגות הסולם המינורי הטבעי (Aeolian): i, ii°, III, iv, v, VI, VII.
 *
 * השינוי שבוצע: השדה root_serial_numbers מחושב אוטומטית בסוף הקובץ על בסיס root_degrees כדי למנוע כפילות.
 */

// --- מיפוי עזר לתרגום דרגות רומיות למספר חצי טון מהשורש (0) ---
const DEGREE_TO_SEMITONE = {
    'i': 0,
    'ii°': 2,
    'III': 3,
    'iv': 5,
    'v': 7,
    'VI': 8,
    'VII': 10
};

// --- המהלכים ממוינים: קל (1-11), בינוני (12-38), קשה (39-50) ---
const natural_minor_progressions = [
    // ------------------------------------------------------------------------------------------------
    // --- דרגת קושי: קל (מהלכי טרייד בסיסיים, ארבעה אקורדים נפוצים או קאדנצות קצרות) ---
    // ------------------------------------------------------------------------------------------------
    {
        serial_number: 1,
        root_degrees: ['i', 'VI', 'III', 'VII'],
        chord_types: [chord_minor, chord_major, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך הפופ והרוק המינורי הנפוץ ביותר, זורם ומחזורי, יוצר תחושת נוסטלגיה. המהלך יורד למטה מהטוניקה.'
    },
    {
        serial_number: 2,
        root_degrees: ['i', 'iv', 'VII', 'III'],
        chord_types: [chord_minor, chord_minor, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך מעגלי המתחיל בטוניקה (i) ועובר דרך הסוב-דומיננטה (iv) אל הדרגה השלישית (III) דרך ה-VII.'
    },
    {
        serial_number: 3,
        root_degrees: ['i', 'iv', 'v', 'i'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_minor],
        difficulty_he: 'קל',
        harmonic_description_he: 'קאדנצה מינורית קלאסית בסיסית. הפונקציה הדומיננטית (v) חלשה יחסית כשהיא מינורית, וזה יוצר סיום רך.'
    },
    {
        serial_number: 4,
        root_degrees: ['i', 'VI', 'VII', 'i'],
        chord_types: [chord_minor, chord_major, chord_major, chord_minor],
        difficulty_he: 'קל',
        harmonic_description_he: 'מעבר חזק מ-VI ל-VII היוצר דחיפה ברורה לטוניקה, אופייני למוזיקת רוק ואפוס.'
    },
    {
        serial_number: 5,
        root_degrees: ['i', 'VII', 'i', 'v'],
        chord_types: [chord_minor, chord_major, chord_minor, chord_minor],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך קצר ודרמטי המדגיש את הטוניקה עם פרידה קצרה ל-VII.'
    },
    {
        serial_number: 6,
        root_degrees: ['i', 'iv', 'i', 'v'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_minor],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך פשוט שמדגיש את הפונקציות המינוריות של הטוניקה והסוב-דומיננטה.'
    },
    {
        serial_number: 7,
        root_degrees: ['VI', 'VII', 'i'],
        chord_types: [chord_major, chord_major, chord_minor],
        difficulty_he: 'קל',
        harmonic_description_he: 'קאדנצה דומיננטית חזקה (כפונקציה) מ-VI ל-VII המקדימה את הטוניקה. נפוץ במוזיקה שנות ה-80.'
    },
    {
        serial_number: 8,
        root_degrees: ['VI', 'iv', 'i'],
        chord_types: [chord_major, chord_minor, chord_minor],
        difficulty_he: 'קל',
        harmonic_description_he: 'קאדנצה פלאגלית (Plagal) מינורית (VI -> iv -> i), יוצרת תחושה של "אמן".'
    },
    {
        serial_number: 9,
        root_degrees: ['i', 'i', 'v', 'v'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_minor],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך פשוט עם הארכה של הטוניקה והדומיננטה המינורית.'
    },
    {
        serial_number: 10,
        root_degrees: ['i', 'VII', 'III', 'VI'],
        chord_types: [chord_minor, chord_major, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'וריאציה של המהלך הנפוץ: i-VI-III-VII, עם סדר שונה של האקורדים המז\'וריים. קו בס יורד.'
    },
    {
        serial_number: 11,
        root_degrees: ['i', 'iv', 'VI', 'VII'],
        chord_types: [chord_minor, chord_minor, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך ארבעה אקורדים פשוט ופופולרי, משלב סוב-דומיננטה (iv) ומהלך עולה לטוניקה (דרך VII).'
    },

    // ------------------------------------------------------------------------------------------------
    // --- דרגת קושי: בינוני (מהלכים מורכבים יותר, כוללים אקורדי 7 רגועים או דרגות פחות נפוצות) ---
    // ------------------------------------------------------------------------------------------------
    {
        serial_number: 12,
        root_degrees: ['i', 'VII', 'VI', 'v'],
        chord_types: [chord_minor, chord_major, chord_major, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך עם קו בס יורד (i - VII - VI), נפוץ במוזיקה ספרדית ופסיכדלית, יוצר תחושה אולטימטיבית של ירידה.'
    },
    {
        serial_number: 13,
        root_degrees: ['iv', 'VII', 'III', 'VI'],
        chord_types: [chord_minor, chord_major, chord_major, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך מעגלי של סוב-דומיננטה המתחיל על הדרגה iv. יוצר תחושה של ציפה הרמונית.'
    },
    {
        serial_number: 14,
        root_degrees: ['i', 'III', 'VI', 'iv'],
        chord_types: [chord_minor, chord_major, chord_major, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך המדגיש את היחסים בין i ל-III (הטוניקה היחסית), ואז יורד למטה ל-iv.'
    },
    {
        serial_number: 15,
        root_degrees: ['i', 'iv', 'VII', 'i'],
        chord_types: [chord_minor_7th, chord_minor_7th, chord_major_7th, chord_minor_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך 7th מינורי מלא. ה-VIImaj7 נותן תחושת ג\'אז רכה לפני החזרה לטוניקה (i).'
    },
    {
        serial_number: 16,
        root_degrees: ['ii°', 'v', 'i'],
        chord_types: [chord_diminished, chord_minor, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'קאדנצה מינורית קצרה באמצעות הדרגה המוקטנת (ii°). צליל קלאסי מתוח.'
    },
    {
        serial_number: 17,
        root_degrees: ['i', 'v', 'VI', 'III'],
        chord_types: [chord_minor, chord_minor, chord_major, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך פשוט, ה-v מינור יוצר תחושת נחיתה עדינה ל-VI.'
    },
    {
        serial_number: 18,
        root_degrees: ['VI', 'v', 'iv', 'III'],
        chord_types: [chord_major, chord_minor, chord_minor, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך רצף יורד מדרגה VI. קו בס יורד מאוד יעיל ליצירת מתח.'
    },
    {
        serial_number: 19,
        root_degrees: ['i', 'ii°', 'III', 'iv'],
        chord_types: [chord_minor, chord_diminished, chord_major, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'בנייה הדרגתית של מתח המגיעה לשיאה ב-iv. ה-ii° יוצר רגע של ערפול הרמוני.'
    },
    {
        serial_number: 20,
        root_degrees: ['III', 'VII', 'VI', 'v'],
        chord_types: [chord_major, chord_major, chord_major, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'שימוש ב-III כטוניקה זמנית (טוניקציה). מהלך נועז עם פתרון ל-v מינור.'
    },
    {
        serial_number: 21,
        root_degrees: ['i', 'v', 'i'],
        chord_types: [chord_minor, chord_minor_7th, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'קאדנצה קצרה המדגישה את המתח הקל שנוצר על ידי ה-v min7 לפני הרזולוציה.'
    },
    {
        serial_number: 22,
        root_degrees: ['i', 'VII', 'VI', 'VII'],
        chord_types: [chord_minor_7th, chord_major_7th, chord_major_7th, chord_major_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'רצף של אקורדי 7 עם צליל רך ומודרני, אופייני למוזיקת R&B וסול.'
    },
    {
        serial_number: 23,
        root_degrees: ['III', 'v', 'i', 'iv'],
        chord_types: [chord_major, chord_minor_7th, chord_minor_7th, chord_minor_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מתחיל על הדרגה היחסית (III), יוצר מעבר חלק ל-i דרך v min7.'
    },
    {
        serial_number: 24,
        root_degrees: ['i', 'ii°', 'i', 'v'],
        chord_types: [chord_minor, chord_diminished, chord_minor, chord_minor_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'שימוש ב-ii° כצליל חולף היוצר תחושת אי-נוחות רגעית בתוך הטוניקה.'
    },
    {
        serial_number: 25,
        root_degrees: ['III', 'VI', 'ii°', 'v'],
        chord_types: [chord_major, chord_major, chord_diminished, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'רצף שבו ה-ii° וה-v המינורי משמשים כמושכים לקראת חזרה ל-i (אם יבוא בהמשך).'
    },
    {
        serial_number: 26,
        root_degrees: ['VII', 'VI', 'v', 'iv'],
        chord_types: [chord_major, chord_major, chord_minor, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך יורד (Descending Sequential) הממשיך לרדת עד iv, עם תחושת יציבות מתונה.'
    },
    {
        serial_number: 27,
        root_degrees: ['i', 'iv', 'i', 'v', 'VI', 'III', 'VII', 'i'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_minor, chord_major, chord_major, chord_major, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך ארוך ומקיף המשלב קאדנצות קטנות בתוכו, מכסה את רוב דרגות הסולם.'
    },
    {
        serial_number: 28,
        root_degrees: ['i', 'i', 'iv', 'iv'], // שינוי שם הדרגה ל-i ו-iv, כיוון שה-Add9 הוא רק שינוי צבע
        chord_types: [chord_minor, chord_add_9, chord_minor, chord_add_9],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'שימוש באקורדי Add9 כצבע מודרני בתוך הרצף המינורי. יוצר עניין מבלי לשנות את הפונקציה.'
    },
    {
        serial_number: 29,
        root_degrees: ['i', 'v', 'i', 'VII', 'VI'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_major, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך משתנה המשתמש בקאדנצה מינורית קצרה ואז משתחרר באמצעות ה-VII וה-VI.'
    },
    {
        serial_number: 30,
        root_degrees: ['iv', 'i', 'VII', 'III'],
        chord_types: [chord_minor, chord_minor, chord_major, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מתחיל מהסוב-דומיננטה, יוצר מעבר חלק וזורם עם תנועה מעגלית.'
    },
    {
        serial_number: 31,
        root_degrees: ['i', 'i', 'iv', 'iv'],
        chord_types: [chord_minor, chord_minor_6th, chord_minor, chord_minor_6th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'שימוש חוזר ב-m6 כצבע עמוק ואלגנטי, יוצר תחושה קלאסית/ג\'אז ישנה.'
    },
    {
        serial_number: 32,
        root_degrees: ['III', 'VII', 'i'],
        chord_types: [chord_major, chord_sus4, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'שימוש ב-Sus4 על ה-VII ליצירת מעבר, יוצר מתח אולטימטיבי לפני החזרה לטוניקה.'
    },
    {
        serial_number: 33,
        root_degrees: ['i', 'v', 'VI', 'VII'],
        chord_types: [chord_minor, chord_minor_7th, chord_major, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך המשלב את הקאדנצה המינורית (i-v) עם המהלך העולה החזק (VI-VII).'
    },
    {
        serial_number: 34,
        root_degrees: ['i', 'iv', 'v', 'VI'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מעבר ל-VI המז\'ורי (הטוניקה היחסית) אחרי קאדנצה מינורית חלקית, יוצר תחושה של תקווה או שינוי.'
    },
    {
        serial_number: 35,
        root_degrees: ['v', 'i', 'iv', 'VII'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מתחיל מהדומיננטה המינורית. נשמע פחות פתור ומחזורי, יוצר תחושה של תנועה מתמשכת.'
    },
    {
        serial_number: 36,
        root_degrees: ['i', 'v', 'iv', 'VII'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מעבר מ-iv ל-VII יוצר תחושת "פלאגל" קלה לפני חזרה ל-i. נשמע פשוט וחזק.'
    },
    {
        serial_number: 37,
        root_degrees: ['VII', 'i', 'iv', 'VI'],
        chord_types: [chord_major, chord_minor, chord_minor, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מתחיל מהדרגה ה-VII, מעבר חזק אל הטוניקה, יוצר תחושה של הקדמה דרמטית.'
    },
    {
        serial_number: 38,
        root_degrees: ['i', 'i', 'VI', 'VI'],
        chord_types: [chord_minor, chord_minor_7th, chord_major, chord_major_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'המתנה על הטוניקה ואז מעבר ל-VI, משתמש ב-7th כדי להעניק צבע רך יותר.'
    },

    // ------------------------------------------------------------------------------------------------
    // --- דרגת קושי: קשה (אקורדים אקזוטיים, שימוש באקורדים לא דיאטוניים נדירים, או רצפים מאתגרים) ---
    // ------------------------------------------------------------------------------------------------
    {
        serial_number: 39,
        root_degrees: ['ii°', 'v', 'i', 'iv'],
        chord_types: [chord_half_diminished_7th, chord_minor_7th, chord_minor_7th, chord_minor_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'ii-v-i מינורי טבעי. השימוש ב-iiø7 מכין יפה את ה-v min7, צליל ג\'אזי/מודאלי. חסר את הדחיפה של V7.'
    },
    {
        serial_number: 40,
        root_degrees: ['i', 'i', 'VI', 'VII'],
        chord_types: [chord_minor_7th, chord_minor_7th, chord_major_7th, chord_dominant_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'המתנה על הטוניקה (i7), ואז מעבר ל-VImaj7. ה-VII7 הוא משיכה מחוץ לסולם (Non-diatonic), משמש כדומיננטה משנית חזקה.'
    },
    {
        serial_number: 41,
        root_degrees: ['i', 'iv', 'VII', 'i'],
        chord_types: [chord_minor_7th, chord_sus4, chord_major_7th, chord_minor],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש ב-Sus4 על הדרגה iv ליצירת מעבר, מוסיף עניין מודאלי חולף.'
    },
    {
        serial_number: 42,
        root_degrees: ['i', 'VI', 'III', 'VII'],
        chord_types: [chord_minor, chord_major_6th, chord_major, chord_dominant_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'הוספת צבע 6 לאקורד VI, ושימוש ב-VII7 כדומיננטה חזקה (אם כי לא מהסולם הטבעי).'
    },
    {
        serial_number: 43,
        root_degrees: ['iv', 'v', 'VI', 'VII'],
        chord_types: [chord_minor_7th, chord_minor_7th, chord_major_7th, chord_major_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'מהלך עולה של אקורדי 7, יוצר תחושה של בנייה עד לשיא בדרגה VIImaj7. שימוש רחב ב-7th.'
    },
    {
        serial_number: 44,
        root_degrees: ['i', 'iv', 'i', 'iv'],
        chord_types: [chord_minor, chord_sus2, chord_minor, chord_sus2],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש חוזר ב-Sus2 כצבע ליווי, מעניק תחושה "פתוחה" ומופשטת יותר, גורם לעמעום פונקציונלי.'
    },
    {
        serial_number: 45,
        root_degrees: ['i', 'iv', 'i', 'v'],
        chord_types: [chord_minor_major_7th, chord_minor_7th, chord_minor_major_7th, chord_minor_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש ב-i m(maj7) הדרמטי כטוניקה, יוצר צליל אפל ומסתורי (בדומה למינור מלודי).'
    },
    {
        serial_number: 46,
        root_degrees: ['VI', 'VII', 'i', 'III', 'iv', 'v'],
        chord_types: [chord_major_7th, chord_major_7th, chord_minor_7th, chord_major_7th, chord_minor_7th, chord_minor_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש רחב באקורדי 7 לאורך המהלך, יוצר תחושה "מודאלית" רכה ומורכבת. ה-VImaj7 היא הטוניקה היחסית של הסולם.'
    },
    {
        serial_number: 47,
        root_degrees: ['i', 'VI', 'iv', 'ii°'],
        chord_types: [chord_minor, chord_major, chord_minor, chord_diminished],
        difficulty_he: 'קשה',
        harmonic_description_he: 'יוצר מתח חזק בסוף על ה-ii° הדורש רזולוציה ל-v או ל-i. מהלך עם קפיצות לא שגרתיות.'
    },
    {
        serial_number: 48,
        root_degrees: ['i', 'VI', 'ii°', 'v'],
        chord_types: [chord_minor_7th, chord_major_7th, chord_half_diminished_7th, chord_minor_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'ורסיה מורכבת של ii-v-i שמתחילה מהטוניקה (i7), עוברת ל-VI7 ואז לקדנצה מינורית חצי מוקטנת.'
    },
    {
        serial_number: 49,
        root_degrees: ['i', 'iv', 'ii°', 'v'],
        chord_types: [chord_minor, chord_minor, chord_diminished, chord_minor],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש ב-ii° כמתווך בין הסוב-דומיננטה (iv) לדומיננטה המינורית (v). יוצר צליל מתוח בתוך רצף פונקציונלי.'
    },
    {
        serial_number: 50,
        root_degrees: ['i', 'III', 'ii°', 'iv'],
        chord_types: [chord_minor, chord_major, chord_diminished, chord_minor],
        difficulty_he: 'קשה',
        harmonic_description_he: 'מהלך לא שגרתי המשתמש ב-ii° בין הדרגות המינוריות, יוצר מתח לא פתור עם תנועה קרובה בשורשים (i-III-ii°-iv).'
    }
];

// --- חישוב אוטומטי: מוסיף את root_serial_numbers לכל מהלך על בסיס root_degrees ---
// שיטה זו שומרת על root_degrees כמקור אמת יחיד ומונעת כפילות בנתונים.
natural_minor_progressions.forEach(progression => {
    // יוצר את המערך המספרי (root_serial_numbers) על ידי מיפוי דרגות ה-root_degrees למספרי חצאי טון
    progression.root_serial_numbers = progression.root_degrees.map(degree => {
        // מנסה למצוא את המיפוי, אם לא נמצא (בגלל שגיאת קלט), מחזיר -1 (שגיאה)
        return DEGREE_TO_SEMITONE[degree] !== undefined ? DEGREE_TO_SEMITONE[degree] : -1;
    });
});
