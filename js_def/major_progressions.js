/**
 * קובץ זה מגדיר 50 מהלכי אקורדים נפוצים בסולם מז'ור (יוני), ממוינים לפי דרגת קושי.
 *
 * הערות:
 * 1. root_degrees: דרגות רומיות בסולם מז'ור (I = טוניקה מז'ורית) – זהו מקור האמת היחיד.
 * 2. chord_types: משתני האקורדים מהקובץ 'chord_definitions.js'.
 * 3. דרגות הסולם המז'ורי (Ionian): I, ii, iii, IV, V, vi, vii°.
 */

// --- מיפוי עזר לתרגום דרגות רומיות למספר חצי טון מהשורש (0) ---
const DEGREE_TO_SEMITONE = {
    'I': 0,
    'ii': 2,
    'iii': 4,
    'IV': 5,
    'V': 7,
    'vi': 9,
    'vii°': 11
};

// --- המהלכים ממוינים: קל (1-11), בינוני (12-38), קשה (39-50) ---
const major_progressions = [
    // ------------------------------------------------------------------------------------------------
    // --- דרגת קושי: קל (מהלכי טרייד בסיסיים, ארבעה אקורדים נפוצים, וקאדנצות קלאסיות) ---
    // ------------------------------------------------------------------------------------------------
    {
        serial_number: 1,
        root_degrees: ['I', 'IV', 'V', 'I'],
        chord_types: [chord_major, chord_major, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'קאדנצה אוטנטית מלאה קלאסית. המהלך הבסיסי והנפוץ ביותר במוזיקה המערבית, פונקציונלי וחזק.'
    },
    {
        serial_number: 2,
        root_degrees: ['I', 'V', 'vi', 'IV'],
        chord_types: [chord_major, chord_major, chord_minor, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך ארבעת האקורדים (Four Chord Song) המפורסם, יוצר מעגל הרמוני זורם ופופולרי.'
    },
    {
        serial_number: 3,
        root_degrees: ['I', 'vi', 'IV', 'V'],
        chord_types: [chord_major, chord_minor, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'וריאציה של המהלך הקודם, מדגיש את הטוניקה היחסית (vi) לפני מעבר לדומיננטה (V).'
    },
    {
        serial_number: 4,
        root_degrees: ['vi', 'IV', 'I', 'V'],
        chord_types: [chord_minor, chord_major, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך פופולרי שמתחיל בטוניקה יחסית (מינורית), יוצר תחושה של התרוממות מהמינור למז\'ור.'
    },
    {
        serial_number: 5,
        root_degrees: ['I', 'IV', 'I', 'V'],
        chord_types: [chord_major, chord_major, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך פשוט המשתמש בסוב-דומיננטה (IV) כממלא בין הטוניקה לדומיננטה.'
    },
    {
        serial_number: 6,
        root_degrees: ['IV', 'I', 'V'],
        chord_types: [chord_major, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'קאדנצה פלאגלית (Plagal) IV -> I, יוצרת תחושה של "אמן", ואחריה הדומיננטה V שמושכת חזרה ל-I.'
    },
    {
        serial_number: 7,
        root_degrees: ['I', 'ii', 'V', 'I'],
        chord_types: [chord_major, chord_minor, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'קאדנצה קלאסית בסיסית, ה-ii משמש כסוב-דומיננטה מעבר חלקה לדומיננטה (V).'
    },
    {
        serial_number: 8,
        root_degrees: ['iii', 'vi', 'ii', 'V'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'רצף יורד של חמישיות מושלמות (Down a Fifth), יוצר מעגל טונאלי חלק ויעיל.'
    },
    {
        serial_number: 9,
        root_degrees: ['I', 'V', 'IV', 'I'],
        chord_types: [chord_major, chord_major, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך נפוץ המשתמש ברזולוציה פלאגלית (IV->I) לאחר הדומיננטה (V).'
    },
    {
        serial_number: 10,
        root_degrees: ['I', 'ii', 'iii', 'IV'],
        chord_types: [chord_major, chord_minor, chord_minor, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'מהלך עולה המדגיש את הדרגות הפחות נפוצות (ii, iii) בתוך הסולם, יוצר תחושה של ציפייה.'
    },
    {
        serial_number: 11,
        root_degrees: ['V', 'IV', 'I'],
        chord_types: [chord_major, chord_major, chord_major],
        difficulty_he: 'קל',
        harmonic_description_he: 'הדומיננטה מובילה לפתרון פלאגלי (IV-I). נשמע פחות סגור ומכיל יותר תנועה.'
    },

    // ------------------------------------------------------------------------------------------------
    // --- דרגת קושי: בינוני (מהלכים מורכבים יותר, אקורדי 7 רגועים או שימוש בדרגות פחות שכיחות) ---
    // ------------------------------------------------------------------------------------------------
    {
        serial_number: 12,
        root_degrees: ['I', 'vi', 'ii', 'V'],
        chord_types: [chord_major_7th, chord_minor_7th, chord_minor_7th, chord_dominant_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'גרסת הג\'אז של המהלך הקלאסי (I-vi-ii-V), המשתמשת באקורדי 7 לקבלת צליל רך ומתוח יותר.'
    },
    {
        serial_number: 13,
        root_degrees: ['ii', 'V', 'I'],
        chord_types: [chord_minor_7th, chord_dominant_7th, chord_major_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'קאדנצת ii-V-I סטנדרטית בג\'אז, חזקה ומספקת. הבסיס לאלתור מודרני.'
    },
    {
        serial_number: 14,
        root_degrees: ['I', 'IV', 'vii°', 'iii'],
        chord_types: [chord_major, chord_major, chord_diminished, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'שימוש בדרגה vii° המוקטנת כגשר מתוח לפני הטוניקה היחסית של vi (במקרה זה, iii).'
    },
    {
        serial_number: 15,
        root_degrees: ['vi', 'V', 'IV', 'iii'],
        chord_types: [chord_minor, chord_dominant_7th, chord_major_7th, chord_minor_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'קו בס יורד (vi-V-IV-iii) עם צבע של אקורדי 7, יוצר מעבר הרמוני חלק ומתוח.'
    },
    {
        serial_number: 16,
        root_degrees: ['I', 'V', 'vi', 'iii'],
        chord_types: [chord_major, chord_major, chord_minor, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'קאדנצה מטעה חזקה (V -> vi) ואחריה המשך יורד ל-iii.'
    },
    {
        serial_number: 17,
        root_degrees: ['IV', 'V', 'vi', 'ii'],
        chord_types: [chord_major_7th, chord_dominant_7th, chord_minor_7th, chord_minor_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך ii-V מוסווה המתחיל ב-IVmaj7. זורם ובעל צבע ג\'אזי.'
    },
    {
        serial_number: 18,
        root_degrees: ['I', 'iii', 'vi', 'IV'],
        chord_types: [chord_major, chord_minor, chord_minor, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך שמשתמש ב-iii כציר, נותן צליל פחות שכיח ומעט מלנכולי בתוך המז\'ור.'
    },
    {
        serial_number: 19,
        root_degrees: ['I', 'IV', 'V', 'vi'],
        chord_types: [chord_major_7th, chord_major_7th, chord_dominant_7th, chord_minor_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'המתח של V7 -> vi (קאדנצה מטעה) עם אקורדי 7, נפוץ במוזיקת פופ עכשווית.'
    },
    {
        serial_number: 20,
        root_degrees: ['ii', 'V', 'I', 'IV'],
        chord_types: [chord_minor_7th, chord_dominant_7th, chord_major_7th, chord_major_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך II-V-I-IV, קאדנצת ג\'אז מלאה המשתמשת ב-IVmaj7 להמשך התנועה (במקום סיום ב-I).'
    },
    {
        serial_number: 21,
        root_degrees: ['I', 'V', 'vi', 'ii'],
        chord_types: [chord_major, chord_sus4, chord_minor, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'שימוש ב-Sus4 על הדומיננטה (V) ליצירת מתח לפני הפיצול לטוניקה יחסית (vi).'
    },
    {
        serial_number: 22,
        root_degrees: ['IV', 'V', 'iii', 'vi'],
        chord_types: [chord_major, chord_major, chord_minor, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך מעגלי קלאסי שמתחיל בסוב-דומיננטה, הדרגות iii ו-vi יוצרות תחושת מינור חולפת.'
    },
    {
        serial_number: 23,
        root_degrees: ['I', 'iii', 'ii', 'V'],
        chord_types: [chord_major, chord_minor_7th, chord_minor_7th, chord_dominant_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מעבר נדיר דרך ה-iii, מוביל את המהלך ל-ii-V הקלאסי. נשמע אלגנטי.'
    },
    {
        serial_number: 24,
        root_degrees: ['I', 'vi', 'IV', 'V'],
        chord_types: [chord_add_9, chord_minor_7th, chord_major_7th, chord_dominant_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'המהלך הקלאסי (I-vi-IV-V) עם אקורדי 7 ו-Add9, מוסיף צבע מודרני ורך.'
    },
    {
        serial_number: 25,
        root_degrees: ['ii', 'iii', 'IV', 'V'],
        chord_types: [chord_minor, chord_minor, chord_major, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך סקוונציאלי עולה, יוצר מתח הולך וגובר המגיע לשיאו בדומיננטה (V).'
    },
    {
        serial_number: 26,
        root_degrees: ['V', 'vi', 'IV', 'I'],
        chord_types: [chord_dominant_7th, chord_minor_7th, chord_major_7th, chord_major_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'הקדנצה המטעה (V->vi) בגרסה רכה של אקורדי 7, ואחריה חזרה לטוניקה דרך הפלאגל.'
    },
    {
        serial_number: 27,
        root_degrees: ['I', 'vi', 'ii', 'V', 'I'],
        chord_types: [chord_major, chord_minor, chord_minor, chord_dominant_7th, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך ארוך ומקיף, קאדנצה מושלמת מורחבת (ii-V7-I) עם הכנה דרך ה-vi.'
    },
    {
        serial_number: 28,
        root_degrees: ['IV', 'V', 'I', 'ii'],
        chord_types: [chord_major, chord_major, chord_major, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'שימוש ב-ii כדי להוביל את המהלך חזרה אל ה-IV בדומה ל-ii-V (הקדמה לסוב-דומיננטה).'
    },
    {
        serial_number: 29,
        root_degrees: ['I', 'iii', 'IV', 'V'],
        chord_types: [chord_major_7th, chord_minor_7th, chord_major_7th, chord_dominant_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מעבר מתוח ל-iii לפני הסוב-דומיננטה, יוצר מעבר צבעוני ולא שגרתי בתוך המז\'ור.'
    },
    {
        serial_number: 30,
        root_degrees: ['V', 'I', 'IV', 'vi'],
        chord_types: [chord_dominant_7th, chord_major_7th, chord_major_7th, chord_minor_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'הדומיננטה פותרת לטוניקה, אך המהלך ממשיך ל-IV ול-vi, מה שמשאיר אותו פתוח ומחזורי.'
    },
    {
        serial_number: 31,
        root_degrees: ['I', 'IV', 'V', 'IV'],
        chord_types: [chord_major, chord_major, chord_major, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'שימוש חוזר ב-IV ליצירת תחושת רנדור עדינה (IV->V->IV), נפוץ במוזיקת רוק.'
    },
    {
        serial_number: 32,
        root_degrees: ['ii', 'vi', 'iii', 'V'],
        chord_types: [chord_minor, chord_minor, chord_minor, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך המשתמש רק בדרגות המינוריות של הסולם כדי לבנות מתח לפני הדומיננטה.'
    },
    {
        serial_number: 33,
        root_degrees: ['I', 'V', 'IV', 'V'],
        chord_types: [chord_major_7th, chord_dominant_7th, chord_major_7th, chord_dominant_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'החלפה מהירה בין הדומיננטה לסוב-דומיננטה, נותן תחושה של דחיפה והתקדמות.'
    },
    {
        serial_number: 34,
        root_degrees: ['vi', 'ii', 'V', 'I'],
        chord_types: [chord_minor_7th, chord_minor_7th, chord_dominant_7th, chord_major_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך שמתחיל מהטוניקה היחסית (vi), פותח ישר ל-ii-V-I. נשמע טבעי וחלק.'
    },
    {
        serial_number: 35,
        root_degrees: ['I', 'I', 'V', 'IV'],
        chord_types: [chord_major, chord_major_6th, chord_dominant_7th, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'הוספת צבע 6 לטוניקה, ואחריה קדנצה חזקה של V7-IV (דומיננטה פותרת לסוב-דומיננטה).'
    },
    {
        serial_number: 36,
        root_degrees: ['I', 'iii', 'IV', 'vi'],
        chord_types: [chord_major, chord_minor, chord_major, chord_minor],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך ייחודי, נשמע רך ועגול, מדגיש את יחסי הטוניקה היחסית (iii ו-vi).'
    },
    {
        serial_number: 37,
        root_degrees: ['iii', 'IV', 'I', 'V'],
        chord_types: [chord_minor, chord_major, chord_major, chord_major],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מתחיל מה-iii, דרגה חלשה יחסית, מה שיוצר מתח לפני החזרה לטוניקה (I) דרך ה-IV.'
    },
    {
        serial_number: 38,
        root_degrees: ['IV', 'I', 'ii', 'V'],
        chord_types: [chord_major_7th, chord_major_7th, chord_minor_7th, chord_dominant_7th],
        difficulty_he: 'בינוני',
        harmonic_description_he: 'מהלך פונקציונלי המשתמש ב-IV כסוב-דומיננטה חזקה לפני II-V. צליל ג\'אזי קלאסי.'
    },

    // ------------------------------------------------------------------------------------------------
    // --- דרגת קושי: קשה (שימוש בדומיננטות משניות, אקורדים מושאלים, מודולציות חולפות) ---
    // ------------------------------------------------------------------------------------------------
    {
        serial_number: 39,
        root_degrees: ['I', 'vi', 'ii', 'V'],
        chord_types: [chord_major_7th, chord_minor_7th, chord_half_diminished_7th, chord_dominant_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'החלפת ה-ii7 ב-iiø7 (חצי מוקטן) - אקורד מושאל ממינור הרמוני/מלודי, יוצר צליל אפל ודחף חזק יותר ל-V7.'
    },
    {
        serial_number: 40,
        root_degrees: ['I', 'V', 'ii', 'V'],
        chord_types: [chord_major, chord_dominant_7th, chord_minor, chord_dominant_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'V/ii (V של ii) - אקורד לא דיאטוני המופיע כ-V7 רגיל. הדחיפה הזו ל-ii נשמעת מאוד פונקציונלית, אבל זרה לסולם המקורי.'
    },
    {
        serial_number: 41,
        root_degrees: ['I', 'IV', 'I', 'V'],
        chord_types: [chord_major_7th, chord_dominant_7th, chord_major_7th, chord_dominant_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'V/IV (V של IV) - האקורד השני (IV) הוא למעשה דומיננט 7, שמושך ל-IV הבא (שהוא הטוניקה).'
    },
    {
        serial_number: 42,
        root_degrees: ['I', 'vi', 'vii°', 'I'],
        chord_types: [chord_major, chord_minor, chord_fully_diminished_7th, chord_major],
        difficulty_he: 'קשה',
        harmonic_description_he: 'ה-vii° מוחלף באקורד מוקטן 7 מלא (מושאל) - יוצר מתח אולטימטיבי המחייב פתרון חזק לטוניקה (I).'
    },
    {
        serial_number: 43,
        root_degrees: ['I', 'ii', 'vi', 'V'],
        chord_types: [chord_major, chord_minor, chord_minor_major_7th, chord_dominant_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש ב-vi m(maj7) - אקורד מושאל ממינור מלודי. יוצר צליל אפל ודרמטי בתוך המז\'ור.'
    },
    {
        serial_number: 44,
        root_degrees: ['I', 'IV', 'i', 'V'],
        chord_types: [chord_major, chord_major, chord_minor, chord_major],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש באקורד מושאל: הטוניקה המינורית (i) מהסולם המקביל המינורי. יוצר אפקט "אפל" ודרמטי.'
    },
    {
        serial_number: 45,
        root_degrees: ['I', 'vi', 'ii', 'V', 'I'],
        chord_types: [chord_major_7th, chord_minor_7th, chord_minor_7th, chord_dominant_7th, chord_dominant_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'הרחבת המהלך I-vi-ii-V-I, כאשר ה-I האחרון מוחלף ב-I7 (דומיננט 7) כדי למשוך את המהלך ל-IV הבא.'
    },
    {
        serial_number: 46,
        root_degrees: ['I', 'vi', 'IV', 'V'],
        chord_types: [chord_major, chord_minor, chord_minor, chord_major],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש ב-iv (סוב-דומיננטה מינורית) במקום IV. אקורד מושאל, יוצר תחושה נוגה בתוך המהלך המז\'ורי.'
    },
    {
        serial_number: 47,
        root_degrees: ['I', 'bIII', 'IV', 'V'], // בתוך המז'ור, ה-bIII הוא למעשה III מהמינור הטבעי המקביל
        chord_types: [chord_major, chord_major, chord_major, chord_major],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש ב-bIII (דרגה שלישית מונמכת) כאקורד מושאל. יוצר צליל מודאלי חזק ודרמטי, נפוץ ברוק.'
    },
    {
        serial_number: 48,
        root_degrees: ['ii', 'V', 'I', 'V'],
        chord_types: [chord_minor_7th, chord_dominant_7th, chord_major_7th, chord_dominant_7th],
        difficulty_he: 'קשה',
        harmonic_description_he: 'מהלך ii-V-I מופרע על ידי דומיננט 7, שמוביל חזרה למרכז טונאלי אחר. יוצר אי-שקט הרמוני.'
    },
    {
        serial_number: 49,
        root_degrees: ['I', 'V/vi', 'vi', 'IV'], // V/vi = E7 בדו מז'ור (E=4, G#=8, B=11, D=2)
        chord_types: [chord_major, chord_dominant_7th, chord_minor, chord_major],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש בדומיננטה משנית (V/vi) שמושכת חזק ל-vi. זהו ה-E7 המפורסם בדו מז\'ור.'
    },
    {
        serial_number: 50,
        root_degrees: ['I', 'V/IV', 'IV', 'IV'],
        chord_types: [chord_major, chord_dominant_7th, chord_major, chord_major],
        difficulty_he: 'קשה',
        harmonic_description_he: 'שימוש ב-V/IV, דומיננטה משנית המבצעת טוניקציה חולפת ל-IV. מכניס אקורד זר באופן פונקציונלי.'
    }
];

// --- חישוב אוטומטי: מוסיף את root_serial_numbers לכל מהלך על בסיס root_degrees ---
// שיטה זו שומרת על root_degrees כמקור אמת יחיד ומונעת כפילות בנתונים.
major_progressions.forEach(progression => {
    // יוצר את המערך המספרי (root_serial_numbers) על ידי מיפוי דרגות ה-root_degrees למספרי חצאי טון
    progression.root_serial_numbers = progression.root_degrees.map(degree => {
        // המקרה של דרגות מושאלות (כגון bIII) צריך להיבדק באופן מיוחד
        if (degree.startsWith('b')) {
            const baseDegree = degree.substring(1);
            if (DEGREE_TO_SEMITONE[baseDegree] !== undefined) {
                // מוריד חצי טון אחד מהדרגה המקורית
                return (DEGREE_TO_SEMITONE[baseDegree] - 1 + 12) % 12;
            }
        }
        
        // מקרה רגיל של דרגה דיאטונית
        return DEGREE_TO_SEMITONE[degree] !== undefined ? DEGREE_TO_SEMITONE[degree] : -1;
    });
});
