// הערה: קובץ זה משתמש במשתנים שהוגדרו בקובץ chords_data.js כגון:
// chord_Major, chord_Minor, chord_Dominant7, chord_Major7, chord_Minor7, chord_Diminished,
// chord_HalfDiminished, chord_Augmented, chord_Sus4, chord_Sus2, etc.
// לצורך הפעלה, יש לוודא ששני הקבצים נטענים.

// מרווחי השורשים (Roots) הדיאטוניים בסולם מז'ור:
// I=0, ii=2, iii=4, IV=5, V=7, vi=9, vii°=11

const ALL_PROGRESSIONS_MAJOR = [

    // === קבוצה 1: קל (הכי נפוץ, משולשים בלבד) ===
    {
        sequence_number: 1,
        symbol_roman: ['I', 'IV', 'V', 'I'],
        roots_intervals: [0, 5, 7, 0],
        chord_types: [chord_Major, chord_Major, chord_Major, chord_Major],
        description_he: 'מהלך הפופ והרוק הבסיסי ביותר, בעל תחושת סיום חזקה (קדנצה מושלמת).'
    },
    {
        sequence_number: 2,
        symbol_roman: ['I', 'vi', 'IV', 'V'],
        roots_intervals: [0, 9, 5, 7],
        chord_types: [chord_Major, chord_Minor, chord_Major, chord_Major],
        description_he: 'המהלך הקנוני (Canon Progression), נשמע מוכר ומאוד פופולרי בבלדות.'
    },
    {
        sequence_number: 3,
        symbol_roman: ['I', 'V', 'vi', 'IV'],
        roots_intervals: [0, 7, 9, 5],
        chord_types: [chord_Major, chord_Major, chord_Minor, chord_Major],
        description_he: 'מהלך נפוץ מאוד המציג מעבר קטן מהדומיננט למינור היחסי.'
    },
    {
        sequence_number: 4,
        symbol_roman: ['vi', 'IV', 'I', 'V'],
        roots_intervals: [9, 5, 0, 7],
        chord_types: [chord_Minor, chord_Major, chord_Major, chord_Major],
        description_he: 'מהלך שפותח מהמינור היחסי, נותן תחושה מעט יותר נוגה ודרמטית.'
    },
    {
        sequence_number: 5,
        symbol_roman: ['IV', 'I', 'V', 'vi'],
        roots_intervals: [5, 0, 7, 9],
        chord_types: [chord_Major, chord_Major, chord_Major, chord_Minor],
        description_he: 'מהלך פתוח, משמש לעתים קרובות כמעבר או בתים (Verses) בשירי פופ.'
    },
    {
        sequence_number: 6,
        symbol_roman: ['I', 'V', 'vi', 'iii'],
        roots_intervals: [0, 7, 9, 4],
        chord_types: [chord_Major, chord_Major, chord_Minor, chord_Minor],
        description_he: 'מהלך עם התקדמות עגולה המשתמשת בדרגה III, נשמע קלאסי ורגוע.'
    },
    {
        sequence_number: 7,
        symbol_roman: ['IV', 'V', 'vi', 'iii'],
        roots_intervals: [5, 7, 9, 4],
        chord_types: [chord_Major, chord_Major, chord_Minor, chord_Minor],
        description_he: 'מהלך מעבר או בתי שיר, משתמש בדרגה III ליצירת יציבות במינור.'
    },
    {
        sequence_number: 8,
        symbol_roman: ['I', 'vi', 'iii', 'IV'],
        roots_intervals: [0, 9, 4, 5],
        chord_types: [chord_Major, chord_Minor, chord_Minor, chord_Major],
        description_he: 'מהלך רך וזורם המשתמש ברצף יורד של דרגות (iii ל-IV).'
    },
    {
        sequence_number: 9,
        symbol_roman: ['I', 'IV', 'V'],
        roots_intervals: [0, 5, 7],
        chord_types: [chord_Major, chord_Major, chord_Major],
        description_he: 'קדנצה פשוטה ומהירה, יוצרת מתח שמוביל חזרה לטוניקה.'
    },
    {
        sequence_number: 10,
        symbol_roman: ['V', 'IV', 'I'],
        roots_intervals: [7, 5, 0],
        chord_types: [chord_Major, chord_Major, chord_Major],
        description_he: 'מהלך פופולרי המשתמש בקוורטה (IV) לאחר הדומיננט, נשמע רחב.'
    },
    {
        sequence_number: 11,
        symbol_roman: ['I', 'IV', 'I', 'V'],
        roots_intervals: [0, 5, 0, 7],
        chord_types: [chord_Major, chord_Major, chord_Major, chord_Major],
        description_he: 'וריאציה של המהלך הבסיסי, עם חזרה לטוניקה באמצע הרצף.'
    },
    {
        sequence_number: 12,
        symbol_roman: ['IV', 'V', 'I', 'I'],
        roots_intervals: [5, 7, 0, 0],
        chord_types: [chord_Major, chord_Major, chord_Major, chord_Major],
        description_he: 'מהלך המדגיש את הטוניקה עם שני אקורדי I רצופים בסיום.'
    },
    {
        sequence_number: 13,
        symbol_roman: ['I', 'ii', 'V', 'I'],
        roots_intervals: [0, 2, 7, 0],
        chord_types: [chord_Major, chord_Minor, chord_Major, chord_Major],
        description_he: 'מהלך קלאסי עם שימוש בדרגה ii, בסיסית לקדנצות ג׳אז ופופ.'
    },
    {
        sequence_number: 14,
        symbol_roman: ['I', 'IV', 'vi', 'V'],
        roots_intervals: [0, 5, 9, 7],
        chord_types: [chord_Major, chord_Major, chord_Minor, chord_Major],
        description_he: 'מהלך פשוט ומאוזן, דרך טובה להכניס את ה-vi למשפחת המז׳ור.'
    },
    {
        sequence_number: 15,
        symbol_roman: ['iii', 'vi', 'IV', 'I'],
        roots_intervals: [4, 9, 5, 0],
        chord_types: [chord_Minor, chord_Minor, chord_Major, chord_Major],
        description_he: 'מהלך שפותח עם דרגת iii, נותן תחושה מעט יותר מלודית ומורכבת.'
    },

    // === קבוצה 2: בינוני (שביעיות דומיננטיות, ii ו-iii נפוצים יותר) ===
    {
        sequence_number: 16,
        symbol_roman: ['I', 'V7', 'I'],
        roots_intervals: [0, 7, 0],
        chord_types: [chord_Major, chord_Dominant7, chord_Major],
        description_he: 'קדנצה דומיננטית חזקה (V7-I), יסודות המוזיקה הקלאסית והבלוז.'
    },
    {
        sequence_number: 17,
        symbol_roman: ['ii', 'V7', 'I'],
        roots_intervals: [2, 7, 0],
        chord_types: [chord_Minor, chord_Dominant7, chord_Major],
        description_he: 'קדנצת ג׳אז בסיסית וקלאסית, ii-V-I, מאופיינת בתנועה חלקה.'
    },
    {
        sequence_number: 18,
        symbol_roman: ['I', 'vi', 'ii', 'V7'],
        roots_intervals: [0, 9, 2, 7],
        chord_types: [chord_Major, chord_Minor, chord_Minor, chord_Dominant7],
        description_he: 'הרחבה של הקנון, עם ii-V7 בסוף, חזרה חלקה ל-I.'
    },
    {
        sequence_number: 19,
        symbol_roman: ['IV', 'vii°', 'iii', 'vi'],
        roots_intervals: [5, 11, 4, 9],
        chord_types: [chord_Major, chord_Diminished, chord_Minor, chord_Minor],
        description_he: 'מהלך יורד בפנים הסולם, משתמש בדרגת ה-vii° המוקטנת ליצירת מתח.'
    },
    {
        sequence_number: 20,
        symbol_roman: ['I', 'ii', 'IV', 'V7'],
        roots_intervals: [0, 2, 5, 7],
        chord_types: [chord_Major, chord_Minor, chord_Major, chord_Dominant7],
        description_he: 'מהלך עולה צעד-אחר-צעד, מוביל באופן ברור ל-V7.'
    },
    {
        sequence_number: 21,
        symbol_roman: ['vi', 'IV', 'I', 'V7'],
        roots_intervals: [9, 5, 0, 7],
        chord_types: [chord_Minor, chord_Major, chord_Major, chord_Dominant7],
        description_he: 'וריאציה של מהלך הקנון עם דומיננט 7 להעצמת הסיום.'
    },
    {
        sequence_number: 22,
        symbol_roman: ['I', 'iii', 'IV', 'vi'],
        roots_intervals: [0, 4, 5, 9],
        chord_types: [chord_Major, chord_Minor, chord_Major, chord_Minor],
        description_he: 'מהלך פחות נפוץ עם iii, נותן תחושה של הרחבת הטוניקה לפני המעבר ל-IV.'
    },
    {
        sequence_number: 23,
        symbol_roman: ['IV', 'iii', 'ii', 'I'],
        roots_intervals: [5, 4, 2, 0],
        chord_types: [chord_Major, chord_Minor, chord_Minor, chord_Major],
        description_he: 'מהלך יורד (Downstep) יפהפה מהסאב-דומיננט לטוניקה, נשמע דרמטי.'
    },
    {
        sequence_number: 24,
        symbol_roman: ['I', 'V/7', 'vi', 'ii'],
        roots_intervals: [0, 7, 9, 2],
        chord_types: [chord_Major, chord_Dominant7, chord_Minor, chord_Minor],
        description_he: 'מעבר חלק מ-V7 ל-vi, ואז ירידה ל-ii לקראת קדנצה אפשרית.'
    },
    {
        sequence_number: 25,
        symbol_roman: ['iii', 'vi', 'ii', 'V'],
        roots_intervals: [4, 9, 2, 7],
        chord_types: [chord_Minor, chord_Minor, chord_Minor, chord_Major],
        description_he: 'שרשרת של מעברים מדרגות מינור לדומיננט, נפוץ במוזיקה מזרחית וג׳אז.'
    },
    {
        sequence_number: 26,
        symbol_roman: ['I', 'IV', 'V', 'vi'],
        roots_intervals: [0, 5, 7, 9],
        chord_types: [chord_Major, chord_Major, chord_Major, chord_Minor],
        description_he: 'מהלך שמסתיים במינור היחסי (קדנצה מטעה), יוצר תחושה של אי-סיום.'
    },
    {
        sequence_number: 27,
        symbol_roman: ['I', 'ii', 'V7', 'I'],
        roots_intervals: [0, 2, 7, 0],
        chord_types: [chord_Major, chord_Minor, chord_Dominant7, chord_Major],
        description_he: 'קדנצה ii-V-I עם דומיננט 7, חיבור של ג׳אז ופופ.'
    },
    {
        sequence_number: 28,
        symbol_roman: ['I', 'V7', 'vi', 'IV'],
        roots_intervals: [0, 7, 9, 5],
        chord_types: [chord_Major, chord_Dominant7, chord_Minor, chord_Major],
        description_he: 'התקדמות קנונית עם V7 המחדדת את המעבר ל-vi.'
    },
    {
        sequence_number: 29,
        symbol_roman: ['vi', 'ii', 'V', 'I'],
        roots_intervals: [9, 2, 7, 0],
        chord_types: [chord_Minor, chord_Minor, chord_Major, chord_Major],
        description_he: 'מהלך שפותח במינור, נשמע מודרני יותר עם ii לפני ה-V.'
    },
    {
        sequence_number: 30,
        symbol_roman: ['I', 'sus4', 'I', 'V'],
        roots_intervals: [0, 0, 0, 7],
        chord_types: [chord_Major, chord_Sus4, chord_Major, chord_Major],
        description_he: 'השהיה (Sus4) בטוניקה עצמה, יוצרת מתח קצר שמשתחרר בחזרה ל-I לפני ה-V.'
    },

    // === קבוצה 3: קשה (שביעיות, תוספות, ומהלכים פחות צפויים) ===
    {
        sequence_number: 31,
        symbol_roman: ['I^7', 'IV^7', 'V7', 'I^7'],
        roots_intervals: [0, 5, 7, 0],
        chord_types: [chord_Major7, chord_Major7, chord_Dominant7, chord_Major7],
        description_he: 'קדנצה ג׳אזית עם שביעיות מז׳ור בדרגות I ו-IV.'
    },
    {
        sequence_number: 32,
        symbol_roman: ['vi7', 'ii7', 'V7', 'I^7'],
        roots_intervals: [9, 2, 7, 0],
        chord_types: [chord_Minor7, chord_Minor7, chord_Dominant7, chord_Major7],
        description_he: 'הקדנצה הג׳אזית הארוכה (vi-ii-V-I) עם שביעיות מינור ומז׳ור.'
    },
    {
        sequence_number: 33,
        symbol_roman: ['I^7', 'iii7', 'vi7', 'IV^7'],
        roots_intervals: [0, 4, 9, 5],
        chord_types: [chord_Major7, chord_Minor7, chord_Minor7, chord_Major7],
        description_he: 'שימוש בשביעיות מינור בדרגות III ו-vi, מהלך חלק ונינוח.'
    },
    {
        sequence_number: 34,
        symbol_roman: ['ii7', 'V7', 'iii7', 'vi7'],
        roots_intervals: [2, 7, 4, 9],
        chord_types: [chord_Minor7, chord_Dominant7, chord_Minor7, chord_Minor7],
        description_he: 'מחזור קוורטות (Quartal Cycle) קלאסי, מאפיין מוזיקת ג׳אז ו-R&B.'
    },
    {
        sequence_number: 35,
        symbol_roman: ['I', 'V7', 'IV^7', 'I'],
        roots_intervals: [0, 7, 5, 0],
        chord_types: [chord_Major, chord_Dominant7, chord_Major7, chord_Major],
        description_he: 'שילוב של דומיננט 7 וסאב-דומיננט 7 (IV^7), מרקם עשיר.'
    },
    {
        sequence_number: 36,
        symbol_roman: ['vi7', 'iii7', 'ii7', 'V7'],
        roots_intervals: [9, 4, 2, 7],
        chord_types: [chord_Minor7, chord_Minor7, chord_Minor7, chord_Dominant7],
        description_he: 'מהלך יורד (Descending) דרך דרגות המינור עד הדומיננט 7.'
    },
    {
        sequence_number: 37,
        symbol_roman: ['I', 'V/7', 'vi', 'ii7'],
        roots_intervals: [0, 7, 9, 2],
        chord_types: [chord_Major, chord_Dominant7, chord_Minor, chord_Minor7],
        description_he: 'שימוש ב-ii7 לקראת סיום, מעבה את הצליל לפני חזרה ל-I.'
    },
    {
        sequence_number: 38,
        symbol_roman: ['IV', 'V', 'I', 'vi7'],
        roots_intervals: [5, 7, 0, 9],
        chord_types: [chord_Major, chord_Major, chord_Major, chord_Minor7],
        description_he: 'פתרון ל-I ואז מעבר ל-vi7, מכין את הקרקע להמשך ג׳אזי.'
    },
    {
        sequence_number: 39,
        symbol_roman: ['I', 'ii7', 'IV^7', 'V7'],
        roots_intervals: [0, 2, 5, 7],
        chord_types: [chord_Major, chord_Minor7, chord_Major7, chord_Dominant7],
        description_he: 'מהלך הרמוני מלא ועשיר עם שביעיות מכל הסוגים הדיאטוניים הראשיים.'
    },
    {
        sequence_number: 40,
        symbol_roman: ['vi', 'IV', 'ii', 'V7'],
        roots_intervals: [9, 5, 2, 7],
        chord_types: [chord_Minor, chord_Major, chord_Minor, chord_Dominant7],
        description_he: 'ארבעה אקורדים שאינם חוזרים, כולם מובילים באופן חזק לטוניקה.'
    },
    {
        sequence_number: 41,
        symbol_roman: ['I^7', 'vi7', 'ii7', 'V7'],
        roots_intervals: [0, 9, 2, 7],
        chord_types: [chord_Major7, chord_Minor7, chord_Minor7, chord_Dominant7],
        description_he: 'מהלך היסוד של ה-Doo-Wop והג׳אז, עם צליל עגול ושלם.'
    },
    {
        sequence_number: 42,
        symbol_roman: ['iii7', 'vi7', 'V7', 'I^7'],
        roots_intervals: [4, 9, 7, 0],
        chord_types: [chord_Minor7, chord_Minor7, chord_Dominant7, chord_Major7],
        description_he: 'מהלך חלופי ל-ii-V-I, המשתמש ב-iii7 כרכיב מקדים.'
    },
    {
        sequence_number: 43,
        symbol_roman: ['I', 'sus2', 'I', 'V'],
        roots_intervals: [0, 0, 0, 7],
        chord_types: [chord_Major, chord_Sus2, chord_Major, chord_Major],
        description_he: 'השהיית Sus2 בטוניקה, מוסיפה צליל פתוח ומרחף לפני הדומיננט.'
    },
    {
        sequence_number: 44,
        symbol_roman: ['ii7', 'IV^7', 'V7', 'I^7'],
        roots_intervals: [2, 5, 7, 0],
        chord_types: [chord_Minor7, chord_Major7, chord_Dominant7, chord_Major7],
        description_he: 'מעבר II-IV-V עם שביעיות מז׳ור ודומיננט 7, נשמע מתוח וג׳אזי.'
    },
    {
        sequence_number: 45,
        symbol_roman: ['I', 'V', 'vi(aug)', 'IV'],
        roots_intervals: [0, 7, 9, 5],
        chord_types: [chord_Major, chord_Major, chord_Augmented, chord_Major],
        description_he: 'שימוש באקורד מוגדל (Augmented) כדי ליצור תנועה כרומטית חדה.'
    },
    {
        sequence_number: 46,
        symbol_roman: ['I', 'IV', 'V7', 'vi7'],
        roots_intervals: [0, 5, 7, 9],
        chord_types: [chord_Major, chord_Major, chord_Dominant7, chord_Minor7],
        description_he: 'מהלך קנוני קלאסי עם דומיננט 7 וסיום במינור 7.'
    },
    {
        sequence_number: 47,
        symbol_roman: ['I', 'iii', 'vi', 'ii'],
        roots_intervals: [0, 4, 9, 2],
        chord_types: [chord_Major, chord_Minor, chord_Minor, chord_Minor],
        description_he: 'מהלך שקט ונינוח, מתקדם בשלישיות יורדות.'
    },
    {
        sequence_number: 48,
        symbol_roman: ['IV^7', 'V7', 'I^7', 'vi7'],
        roots_intervals: [5, 7, 0, 9],
        chord_types: [chord_Major7, chord_Dominant7, chord_Major7, chord_Minor7],
        description_he: 'קדנצה IV-V-I ג׳אזית עם שימוש בדרגת vi7 ליצירת לולאה רציפה.'
    },
    {
        sequence_number: 49,
        symbol_roman: ['I', 'ii7', 'iii7', 'IV^7'],
        roots_intervals: [0, 2, 4, 5],
        chord_types: [chord_Major, chord_Minor7, chord_Minor7, chord_Major7],
        description_he: 'מהלך עולה שלם בדרגות רצופות, משביעית מינור לשביעית מז׳ור.'
    },
    {
        sequence_number: 50,
        symbol_roman: ['vi', 'vii°', 'I', 'IV'],
        roots_intervals: [9, 11, 0, 5],
        chord_types: [chord_Minor, chord_Diminished, chord_Major, chord_Major],
        description_he: 'מהלך שמתחיל במינור ועובר דרך האקורד המוקטן לטוניקה, ליצירת מתח דרמטי.'
    },
    // === מהלך שהוסף כדי להשלים את כל סוגי האקורדים ===
    {
        sequence_number: 51,
        symbol_roman: ['I^7', 'viiø7', 'IV^7', 'I^7'],
        roots_intervals: [0, 11, 5, 0],
        chord_types: [chord_Major7, chord_HalfDiminished, chord_Major7, chord_Major7],
        description_he: 'מהלך ג׳אז המשתמש בדרגה viiø7 (חצי מוקטן), שהיא דיאטונית בסולם מז׳ור, ליצירת טוויסט מלודי עשיר לפני ה-IV או הטוניקה.'
    }
];
