// הערה: קובץ זה משתמש במשתנים שהוגדרו בקובץ chords_data.js כגון:
// chord_Major, chord_Minor, chord_Dominant7, chord_Major7, chord_Minor7, chord_Diminished,
// chord_HalfDiminished, chord_Augmented, chord_Sus4, chord_Sus2, etc.
// לצורך הפעלה, יש לוודא ששני הקבצים נטענים.

// מרווחי השורשים (Roots) הדיאטוניים בסולם מינור טבעי:
// i=0, ii°=2, III=3, iv=5, v=7, VI=8, VII=10
// דרגות מושאלות (Harmonic Minor): V=7 (Major), vii°=11 (Diminished)

const ALL_PROGRESSIONS_MINOR = [

    // === קבוצה 1: קל (הכי נפוץ, משולשים בלבד) ===
    {
        sequence_number: 1,
        symbol_roman: ['i', 'iv', 'v', 'i'],
        roots_intervals: [0, 5, 7, 0],
        chord_types: [chord_Minor, chord_Minor, chord_Minor, chord_Minor],
        description_he: 'מהלך המינור הטבעי הבסיסי ביותר, בעל תחושה נוגה ומלנכולית.'
    },
    {
        sequence_number: 2,
        symbol_roman: ['i', 'VI', 'VII', 'i'],
        roots_intervals: [0, 8, 10, 0],
        chord_types: [chord_Minor, chord_Major, chord_Major, chord_Minor],
        description_he: 'מהלך רוק/פופ נפוץ בסולם מינור (אאולי), תנועה יורדת חלקה.'
    },
    {
        sequence_number: 3,
        symbol_roman: ['i', 'VI', 'III', 'VII'],
        roots_intervals: [0, 8, 3, 10],
        chord_types: [chord_Minor, chord_Major, chord_Major, chord_Major],
        description_he: 'מהלך עגול הנשמע דרמטי, נפוץ במוזיקה קלאסית ושירי נושא אפיים.'
    },
    {
        sequence_number: 4,
        symbol_roman: ['iv', 'VII', 'III', 'VI'],
        roots_intervals: [5, 10, 3, 8],
        chord_types: [chord_Minor, chord_Major, chord_Major, chord_Major],
        description_he: 'מהלך יורד (Downstep) במחזור רביעיות, נשמע מלודי וזורם.'
    },
    {
        sequence_number: 5,
        symbol_roman: ['i', 'III', 'VII', 'iv'],
        roots_intervals: [0, 3, 10, 5],
        chord_types: [chord_Minor, chord_Major, chord_Major, chord_Minor],
        description_he: 'מעבר לטוניקה יחסית (III) ואז חזרה למינור, יוצר תחושה של תקווה ואז חזרה לנוגה.'
    },
    {
        sequence_number: 6,
        symbol_roman: ['i', 'VII', 'VI', 'V'], // V מושאל ממינור הרמוני
        roots_intervals: [0, 10, 8, 7],
        chord_types: [chord_Minor, chord_Major, chord_Major, chord_Major],
        description_he: 'מהלך עם קדנצה מושלמת (V-i), המשתמש ב-V מז׳ור המושאל ליצירת מתח דומיננטי חזק.'
    },
    {
        sequence_number: 7,
        symbol_roman: ['i', 'iv', 'i', 'V'], // V מושאל ממינור הרמוני
        roots_intervals: [0, 5, 0, 7],
        chord_types: [chord_Minor, chord_Minor, chord_Minor, chord_Major],
        description_he: 'מהלך קלאסי שמדגיש את הטוניקה לפני הדומיננט המושאל.'
    },
    {
        sequence_number: 8,
        symbol_roman: ['ii°', 'V', 'i'], // V מושאל ממינור הרמוני
        roots_intervals: [2, 7, 0],
        chord_types: [chord_Diminished, chord_Major, chord_Minor],
        description_he: 'קדנצה ii°-V-i, המקבילה המינורית לקדנצת הג׳אז ii-V-I.'
    },
    {
        sequence_number: 9,
        symbol_roman: ['i', 'VII', 'i', 'VI'],
        roots_intervals: [0, 10, 0, 8],
        chord_types: [chord_Minor, chord_Major, chord_Minor, chord_Major],
        description_he: 'וריאציה שמדגישה את הדרגה הראשונה עם מעברים בין VII ל-VI.'
    },
    {
        sequence_number: 10,
        symbol_roman: ['VI', 'i', 'iv', 'VII'],
        roots_intervals: [8, 0, 5, 10],
        chord_types: [chord_Major, chord_Minor, chord_Minor, chord_Major],
        description_he: 'מהלך שמתחיל בדרגה VI החזקה, נשמע פתוח ואז נסגר לטוניקה.'
    },
    {
        sequence_number: 11,
        symbol_roman: ['i', 'v', 'VI', 'III'],
        roots_intervals: [0, 7, 8, 3],
        chord_types: [chord_Minor, chord_Minor, chord_Major, chord_Major],
        description_he: 'שימוש ב-v מינור (מינור טבעי) ליצירת תחושת רכות והיעדר פתרון דומיננטי חזק.'
    },
    {
        sequence_number: 12,
        symbol_roman: ['III', 'VI', 'iv', 'i'],
        roots_intervals: [3, 8, 5, 0],
        chord_types: [chord_Major, chord_Major, chord_Minor, chord_Minor],
        description_he: 'מהלך המתחיל בטוניקה היחסית, יוצר תחושה מבלבלת בין מז׳ור למינור.'
    },
    {
        sequence_number: 13,
        symbol_roman: ['i', 'ii°', 'III', 'iv'],
        roots_intervals: [0, 2, 3, 5],
        chord_types: [chord_Minor, chord_Diminished, chord_Major, chord_Minor],
        description_he: 'מהלך עולה צעד-אחר-צעד, משתמש ב-ii° המוקטנת ליצירת צליל חולף ומהיר.'
    },
    {
        sequence_number: 14,
        symbol_roman: ['i', 'V', 'VI', 'VII'],
        roots_intervals: [0, 7, 8, 10],
        chord_types: [chord_Minor, chord_Major, chord_Major, chord_Major],
        description_he: 'מהלך המשלב את ה-V המושאל עם ה-VII וה-VI המז׳וריים במינור הטבעי.'
    },
    {
        sequence_number: 15,
        symbol_roman: ['iv', 'i', 'VI', 'V'],
        roots_intervals: [5, 0, 8, 7],
        chord_types: [chord_Minor, chord_Minor, chord_Major, chord_Major],
        description_he: 'מתחיל מה-iv, עובר לטוניקה ויוצר קדנצה חזקה עם ה-V המושאל.'
    },

    // === קבוצה 2: בינוני (שביעיות דומיננטיות/מינוריות, והלוואות) ===
    {
        sequence_number: 16,
        symbol_roman: ['i', 'V7', 'i'], // V7 מושאל ממינור הרמוני
        roots_intervals: [0, 7, 0],
        chord_types: [chord_Minor, chord_Dominant7, chord_Minor],
        description_he: 'קדנצה דומיננטית חזקה (V7-i), יסודות המוזיקה הקלאסית המינורית.'
    },
    {
        sequence_number: 17,
        symbol_roman: ['i7', 'iv7', 'V7', 'i7'],
        roots_intervals: [0, 5, 7, 0],
        chord_types: [chord_Minor7, chord_Minor7, chord_Dominant7, chord_Minor7],
        description_he: 'גרסת R&B/ג׳אז למהלך הבסיסי, עם שביעיות ו-V7 מושאל.'
    },
    {
        sequence_number: 18,
        symbol_roman: ['i7', 'VI^7', 'VII7', 'i7'],
        roots_intervals: [0, 8, 10, 0],
        chord_types: [chord_Minor7, chord_Major7, chord_Dominant7, chord_Minor7],
        description_he: 'מהלך אאולי נפוץ עם שביעיות, נשמע חלק וזורם, קלאסי לפיוז׳ן.'
    },
    {
        sequence_number: 19,
        symbol_roman: ['iiø7', 'V7', 'i7'], // iiø7 ו-V7 הם דיאטוניים להרמונית מינור
        roots_intervals: [2, 7, 0],
        chord_types: [chord_HalfDiminished, chord_Dominant7, chord_Minor7],
        description_he: 'קדנצת ג׳אז מינורית בסיסית (iiø7-V7-i7), החשובה ביותר בז׳אנר.'
    },
    {
        sequence_number: 20,
        symbol_roman: ['i', 'iv', 'iiø7', 'V7'],
        roots_intervals: [0, 5, 2, 7],
        chord_types: [chord_Minor, chord_Minor, chord_HalfDiminished, chord_Dominant7],
        description_he: 'יוצר מתח דרמטי עם ה-iiø7 לפני הפתרון הדומיננטי.'
    },
    {
        sequence_number: 21,
        symbol_roman: ['III^7', 'VI^7', 'iiø7', 'V7'],
        roots_intervals: [3, 8, 2, 7],
        chord_types: [chord_Major7, chord_Major7, chord_HalfDiminished, chord_Dominant7],
        description_he: 'מחזור קוורטות ג׳אזי-מינורי, מלווה בתנועה של קווים עליונים חלקים.'
    },
    {
        sequence_number: 22,
        symbol_roman: ['i', 'VII7', 'VI^7', 'V7'],
        roots_intervals: [0, 10, 8, 7],
        chord_types: [chord_Minor, chord_Dominant7, chord_Major7, chord_Dominant7],
        description_he: 'מהלך עמוס דומיננטים ושביעיות, נשמע מורכב ומהיר.'
    },
    {
        sequence_number: 23,
        symbol_roman: ['i', 'V7/i', 'III^7', 'VI^7'],
        roots_intervals: [0, 7, 3, 8],
        chord_types: [chord_Minor, chord_Dominant7, chord_Major7, chord_Major7],
        description_he: 'מתחיל עם V7 חזק ואז עובר לדרגות המז׳ור היחסיות.'
    },
    {
        sequence_number: 24,
        symbol_roman: ['i', 'sus4', 'i', 'V'],
        roots_intervals: [0, 0, 0, 7],
        chord_types: [chord_Minor, chord_Sus4, chord_Minor, chord_Major],
        description_he: 'שימוש בהשהיה (Sus4) בטוניקה ליצירת מתח קצר שמוביל לדומיננט המושאל.'
    },
    {
        sequence_number: 25,
        symbol_roman: ['iv7', 'i7', 'iiø7', 'V7'],
        roots_intervals: [5, 0, 2, 7],
        chord_types: [chord_Minor7, chord_Minor7, chord_HalfDiminished, chord_Dominant7],
        description_he: 'מהלך שפותח מה-iv7, מדגיש את תת-הדומיננט לפני הפתרון.'
    },
    {
        sequence_number: 26,
        symbol_roman: ['i', 'VII', 'VI', 'V7'],
        roots_intervals: [0, 10, 8, 7],
        chord_types: [chord_Minor, chord_Major, chord_Major, chord_Dominant7],
        description_he: 'גרסה של המהלך היורד האאולי, עם V7 בסוף ליצירת קדנצה סגורה.'
    },
    {
        sequence_number: 27,
        symbol_roman: ['i7', 'III^7', 'VII7', 'iv7'],
        roots_intervals: [0, 3, 10, 5],
        chord_types: [chord_Minor7, chord_Major7, chord_Dominant7, chord_Minor7],
        description_he: 'שימוש בשביעיות בכל הדרגות, מהלך עגול ומתוחכם.'
    },
    {
        sequence_number: 28,
        symbol_roman: ['i', 'VI', 'ii°', 'V'],
        roots_intervals: [0, 8, 2, 7],
        chord_types: [chord_Minor, chord_Major, chord_Diminished, chord_Major],
        description_he: 'משלב את ii° המוקטן הדיאטוני עם V המושאל לקדנצה חזקה.'
    },
    {
        sequence_number: 29,
        symbol_roman: ['i', 'VII', 'iv', 'i'],
        roots_intervals: [0, 10, 5, 0],
        chord_types: [chord_Minor, chord_Major, chord_Minor, chord_Minor],
        description_he: 'מהלך פשוט שמדגיש את הדרגות הראשיות (טוניקה, סאב-טוניקה, סאב-דומיננט).'
    },
    {
        sequence_number: 30,
        symbol_roman: ['i', 'sus2', 'i', 'iv'],
        roots_intervals: [0, 0, 0, 5],
        chord_types: [chord_Minor, chord_Sus2, chord_Minor, chord_Minor],
        description_he: 'השהיית Sus2 בטוניקה, מוסיפה צליל פתוח ו"נורדי" לפני המעבר ל-iv.'
    },

    // === קבוצה 3: קשה (שביעיות, תוספות, אקורדים מוגדלים/מוקטנים, ומורכבים) ===
    {
        sequence_number: 31,
        symbol_roman: ['i', 'V7', 'VI(aug)', 'iv'], // VI(aug) - שימוש כרומטי
        roots_intervals: [0, 7, 8, 5],
        chord_types: [chord_Minor, chord_Dominant7, chord_Augmented, chord_Minor],
        description_he: 'שימוש באקורד מוגדל (Augmented) בדרגה VI ליצירת תנועה כרומטית חדה ופתרון ל-iv.'
    },
    {
        sequence_number: 32,
        symbol_roman: ['i7', 'iv7', 'V7', 'III^7'],
        roots_intervals: [0, 5, 7, 3],
        chord_types: [chord_Minor7, chord_Minor7, chord_Dominant7, chord_Major7],
        description_he: 'קדנצה מורכבת שבה ה-V7 פותר לטוניקה היחסית (III), יוצרת מודולציה זמנית.'
    },
    {
        sequence_number: 33,
        symbol_roman: ['iiø7', 'v7', 'i7', 'VI^7'],
        roots_intervals: [2, 7, 0, 8],
        chord_types: [chord_HalfDiminished, chord_Minor7, chord_Minor7, chord_Major7],
        description_he: 'משתמש ב-v7 המינורי הטבעי, מהלך ג׳אזי עם צליל רך יותר ופחות דומיננטי.'
    },
    {
        sequence_number: 34,
        symbol_roman: ['i', 'VII7', 'VI^7', 'V(aug)'],
        roots_intervals: [0, 10, 8, 7],
        chord_types: [chord_Minor, chord_Dominant7, chord_Major7, chord_Augmented],
        description_he: 'הוספת צליל מוגדל ל-V הדומיננטי לקראת פתרון, יוצרת מתח קיצוני.'
    },
    {
        sequence_number: 35,
        symbol_roman: ['III^7', 'iiø7', 'i7', 'V7'],
        roots_intervals: [3, 2, 0, 7],
        chord_types: [chord_Major7, chord_HalfDiminished, chord_Minor7, chord_Dominant7],
        description_he: 'מהלך יורד כרומטי חלקי, מתאים למעברים ג׳אזיים מורכבים.'
    },
    {
        sequence_number: 36,
        symbol_roman: ['i', 'vii°7', 'iv', 'VII'], // vii°7 מושאל ממינור הרמוני
        roots_intervals: [0, 11, 5, 10],
        chord_types: [chord_Minor, chord_Diminished, chord_Minor, chord_Major],
        description_he: 'שימוש ב-vii°7 המוקטן המלא (מהרמונית מינור), יוצר מתח אדיר לפני חזרה לטוניקה (i).'
    },
    {
        sequence_number: 37,
        symbol_roman: ['i7', 'IV(sus4)', 'i7', 'V7'], // IV הוא הלוואה סאב-דומיננטית סאס
        roots_intervals: [0, 5, 0, 7],
        chord_types: [chord_Minor7, chord_Sus4, chord_Minor7, chord_Dominant7],
        description_he: 'השהיית סאס 4 על הדרגה הרביעית, מוסיפה צבע מודרני לפני הפתרון.'
    },
    {
        sequence_number: 38,
        symbol_roman: ['i', 'V7', 'iv', 'VII7'],
        roots_intervals: [0, 7, 5, 10],
        chord_types: [chord_Minor, chord_Dominant7, chord_Minor, chord_Dominant7],
        description_he: 'רצף של אקורדים דומיננטיים בתוך הסולם, יוצר תחושת תנועה חזקה ומתוחה.'
    },
    {
        sequence_number: 39,
        symbol_roman: ['VI^7', 'V7', 'iv7', 'i7'],
        roots_intervals: [8, 7, 5, 0],
        chord_types: [chord_Major7, chord_Dominant7, chord_Minor7, chord_Minor7],
        description_he: 'מהלך יורד בצעד-אחר-צעד, מאפיין מוזיקת נשמה וג׳אז מודרני.'
    },
    {
        sequence_number: 40,
        symbol_roman: ['i', 'iii(dim)', 'V', 'i'], // iii(dim) הוא שימוש כרומטי ליצירת מעבר
        roots_intervals: [0, 4, 7, 0],
        chord_types: [chord_Minor, chord_Diminished, chord_Major, chord_Minor],
        description_he: 'שימוש באקורד מוקטן בדרגה שלישית כמעבר כרומטי חזק לדומיננט.'
    },
    {
        sequence_number: 41,
        symbol_roman: ['i', 'sus2', 'VI', 'V'],
        roots_intervals: [0, 0, 8, 7],
        chord_types: [chord_Minor, chord_Sus2, chord_Major, chord_Major],
        description_he: 'מערבב את הצליל המרחף של ה-Sus2 עם הקדנצה המושאלת החזקה.'
    },
    {
        sequence_number: 42,
        symbol_roman: ['iiø7', 'VI^7', 'III^7', 'i7'],
        roots_intervals: [2, 8, 3, 0],
        chord_types: [chord_HalfDiminished, chord_Major7, chord_Major7, chord_Minor7],
        description_he: 'מהלך עם תנועות גדולות וקפיצות, מעברים בין שביעיות מז׳ור למינור.'
    },
    {
        sequence_number: 43,
        symbol_roman: ['i7', 'VII7', 'VI^7', 'V7'],
        roots_intervals: [0, 10, 8, 7],
        chord_types: [chord_Minor7, chord_Dominant7, chord_Major7, chord_Dominant7],
        description_he: 'שרשרת של אקורדים דומיננטיים בתוך הסולם, יוצרת תחושת תנועה חזקה ומתוחה.'
    },
    {
        sequence_number: 44,
        symbol_roman: ['VI', 'VII', 'i', 'iv(sus4)'],
        roots_intervals: [8, 10, 0, 5],
        chord_types: [chord_Major, chord_Major, chord_Minor, chord_Sus4],
        description_he: 'השהייה (Sus4) בדרגת הסאב-דומיננט (iv) בסיום, ליצירת מתח לפני חזרה ל-i.'
    },
    {
        sequence_number: 45,
        symbol_roman: ['i', 'iv', 'V7', 'V7'],
        roots_intervals: [0, 5, 7, 7],
        chord_types: [chord_Minor, chord_Minor, chord_Dominant7, chord_Dominant7],
        description_he: 'שימוש כפול ב-V7 הדומיננטי המושאל להדגשת הצורך בפתרון לטוניקה.'
    },
    {
        sequence_number: 46,
        symbol_roman: ['i', 'iv(sus2)', 'V', 'i'],
        roots_intervals: [0, 5, 7, 0],
        chord_types: [chord_Minor, chord_Sus2, chord_Major, chord_Minor],
        description_he: 'שימוש ב-Sus2 ב-iv, מוסיף בהירות ופתיחות לדרגת הסאב-דומיננט.'
    },
    {
        sequence_number: 47,
        symbol_roman: ['i', 'Aug', 'iv', 'VII'], // Aug כרומטי בתוך המינור
        roots_intervals: [0, 0, 5, 10],
        chord_types: [chord_Minor, chord_Augmented, chord_Minor, chord_Major],
        description_he: 'מעבר כרומטי על הטוניקה (i ל-iAug) כדי ליצור תנועה חדה ל-iv.'
    },
    {
        sequence_number: 48,
        symbol_roman: ['III^7', 'i7', 'VI^7', 'iv7'],
        roots_intervals: [3, 0, 8, 5],
        chord_types: [chord_Major7, chord_Minor7, chord_Major7, chord_Minor7],
        description_he: 'מהלך עגול עם שביעיות מז׳ור ומינור, נשמע נינוח ומלודי.'
    },
    {
        sequence_number: 49,
        symbol_roman: ['i', 'iiø7', 'III^7', 'V7'],
        roots_intervals: [0, 2, 3, 7],
        chord_types: [chord_Minor, chord_HalfDiminished, chord_Major7, chord_Dominant7],
        description_he: 'רצף הרמוני מעניין המשלב סוגי אקורדים שונים לקראת קדנצה.'
    },
    {
        sequence_number: 50,
        symbol_roman: ['i', 'v7', 'iiø7', 'V7'],
        roots_intervals: [0, 7, 2, 7],
        chord_types: [chord_Minor, chord_Minor7, chord_HalfDiminished, chord_Dominant7],
        description_he: 'שימוש ב-v7 המינורי לפני קדנצת iiø7-V7, מחליש את תחושת הדומיננט הראשונית.'
    },
    // === מהלך שהוסף כדי להשלים את כל סוגי האקורדים והדרישות ===
    {
        sequence_number: 51,
        symbol_roman: ['i', 'iii(dim)', 'V7', 'i'], // iii(dim) הוא שימוש כרומטי באקורד מוקטן
        roots_intervals: [0, 4, 7, 0],
        chord_types: [chord_Minor, chord_Diminished, chord_Dominant7, chord_Minor],
        description_he: 'שימוש באקורד מוקטן (Diminished) בדרגה שלישית כמעבר ל-V7 הדומיננטי.'
    }
];
