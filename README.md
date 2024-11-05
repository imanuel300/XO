# 🎮 משחק איקס עיגול | Tic Tac Toe

משחק איקס עיגול מודרני הבנוי ב-React עם TypeScript ואנימציות מרהיבות.

## ✨ תכונות

* 🎯 ממשק משתמש אינטואיטיבי
* 🎨 עיצוב מודרני ונקי
* ✍️ תמיכה מלאה בעברית (RTL)
* 🌈 אנימציות חלקות
* 📱 תמיכה במובייל (Responsive)
* 🏆 זיהוי אוטומטי של ניצחון או תיקו

## 🚀 התקנה

1. שכפל את הפרויקט:
    ```bash
    git clone https://github.com/your-username/tic-tac-toe.git
    cd tic-tac-toe
    ```

2. התקן את החבילות הנדרשות:
    ```bash
    npm install
    ```

3. הרץ את הפרויקט:
    ```bash
    npm run dev
    ```

## 🛠️ טכנולוגיות

* React 18
* TypeScript
* Framer Motion
* CSS Modules
* Vite

## 📁 מבנה הפרויקט

    tic-tac-toe/
    ├── src/
    │   ├── components/
    │   │   ├── Board/
    │   │   ├── Cell/
    │   │   └── GameStatus/
    │   ├── hooks/
    │   ├── types/
    │   └── styles/
    └── public/

## 🎮 דוגמת קוד

```typescript
// דוגמה לשימוש בקומפוננטת המשחק
const Game: React.FC = () => {
    const { board, currentPlayer, status, makeMove } = useGame();
    
    return (
        <div className="game-container">
            <Board 
                board={board}
                onCellClick={makeMove}
            />
            <GameStatus
                currentPlayer={currentPlayer}
                status={status}
            />
        </div>
    );
}
```

## 🎯 איך משחקים?

1. השחקן הראשון משחק עם X
2. השחקן השני משחק עם O
3. לחץ על משבצת ריקה כדי לשים את הסימן שלך
4. המטרה היא ליצור רצף של שלושה סימנים זהים
5. אם אין מנצח, המשחק מסתיים בתיקו

## 🤝 תרומה לפרויקט

מוזמנים לתרום! בצעו את השלבים הבאים:

    1. Fork את הפרויקט
    2. צרו branch חדש (`git checkout -b feature/amazing-feature`)
    3. Commit את השינויים (`git commit -m 'Add amazing feature'`)
    4. Push ל-branch (`git push origin feature/amazing-feature`)
    5. פתחו Pull Request

## 📝 רישיון

MIT License - ראה [LICENSE](LICENSE) לפרטים נוספים.

## 🌟 תצוגה מקדימה

![Game Preview](preview.gif)

---
נבנה באהבה ⚡ על ידי [השם שלך] 