import Auth from './Auth'
import { supabase } from './lib/supabase'
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import {
  getQuestions,
  languages,
  levels,
  totalChallengeCount
} from "./data/questions";

function App() {
  console.log("APP IS RUNNING");
  
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("codeDetectiveLoggedIn") === "true"
  );

  const [username, setUsername] = useState(
    localStorage.getItem("codeDetectiveUser") || ""
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("codeDetectiveTheme") || "dark"
  );

  const [page, setPage] = useState("home");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);

  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(
    Number(localStorage.getItem("codeDetectiveXP")) || 0
  );

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
  const getUser = async () => {
    const { data } = await supabase.auth.getUser()
    setUser(data.user)
  }

  getUser()

  const { data: listener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      setUser(session?.user ?? null)
    }
  )

  return () => {
    listener.subscription.unsubscribe()
  }
}, [])
  useEffect(() => {
    localStorage.setItem("codeDetectiveTheme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("codeDetectiveXP", xp);
  }, [xp]);

  const currentQuestion = questions[currentIndex];

  const accuracy = useMemo(() => {
    if (!questions.length) return 0;

    return Math.round((score / questions.length) * 100);
  }, [score, questions.length]);

  function handleLogin(event) {
    event.preventDefault();

    if (!loginUsername.trim() || !loginPassword.trim()) {
      setLoginError("Please enter both username and password.");
      return;
    }

    localStorage.setItem("codeDetectiveLoggedIn", "true");
    localStorage.setItem("codeDetectiveUser", loginUsername.trim());

    setUsername(loginUsername.trim());
    setLoggedIn(true);
    setLoginError("");
  }

  function logout() {
    localStorage.removeItem("codeDetectiveLoggedIn");
    localStorage.removeItem("codeDetectiveUser");

    setLoggedIn(false);
    setPage("home");
  }

  function chooseLanguage(language) {
    setSelectedLanguage(language);
    setPage("levels");
  }

  function chooseLevel(level) {
    const quiz = getQuestions(selectedLanguage.id, level.id);

    setSelectedLevel(level);
    setQuestions(quiz);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setHintVisible(false);
    setScore(0);
    setPage("quiz");
  }

  function selectAnswer(index) {
    if (answered) return;

    setSelectedAnswer(index);
    setAnswered(true);

    if (index === currentQuestion.answer) {
      setScore((previous) => previous + 1);
      setXp((previous) => previous + 10);
    }
  }

  function nextQuestion() {
    if (currentIndex === questions.length - 1) {
      setPage("result");
      return;
    }

    setCurrentIndex((previous) => previous + 1);
    setSelectedAnswer(null);
    setAnswered(false);
    setHintVisible(false);
  }

  function restartQuiz() {
    chooseLevel(selectedLevel);
  }

  function goHome() {
    setPage("home");
    setSelectedLanguage(null);
    setSelectedLevel(null);
  }

  function getOptionClass(index) {
    if (!answered) {
      return selectedAnswer === index ? "option selected" : "option";
    }

    if (index === currentQuestion.answer) {
      return "option correct";
    }

    if (index === selectedAnswer) {
      return "option wrong";
    }

    return "option";
  }

 if (!user) {
  return <Auth onLogin={setUser} />
}

  return (
    <div className={`app ${theme}`}>
      <header className="navbar">
        <button className="brand" onClick={goHome}>
          <span className="brand-icon">🕵️</span>

          <span>
            <strong>Code Detective</strong>
            <small>Debug • Learn • Master</small>
          </span>
        </button>

        <div className="nav-right">
          <div className="xp-pill">
            <span>⚡</span>
            {xp} XP
          </div>

          <span className="welcome-user">
            Hi, {username}
          </span>

          <button
            className="theme-button"
            onClick={() =>
              setTheme((previous) =>
                previous === "dark" ? "light" : "dark"
              )
            }
            title="Change theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      {page === "home" && (
        <Home
          onLanguage={chooseLanguage}
          theme={theme}
          total={totalChallengeCount}
        />
      )}

      {page === "levels" && selectedLanguage && (
        <Levels
          language={selectedLanguage}
          onBack={goHome}
          onLevel={chooseLevel}
        />
      )}

      {page === "quiz" && currentQuestion && (
        <Quiz
          language={selectedLanguage}
          level={selectedLevel}
          question={currentQuestion}
          currentIndex={currentIndex}
          total={questions.length}
          selectedAnswer={selectedAnswer}
          answered={answered}
          hintVisible={hintVisible}
          setHintVisible={setHintVisible}
          selectAnswer={selectAnswer}
          nextQuestion={nextQuestion}
          getOptionClass={getOptionClass}
          onBack={() => setPage("levels")}
        />
      )}

      {page === "result" && (
        <Result
          language={selectedLanguage}
          level={selectedLevel}
          score={score}
          total={questions.length}
          accuracy={accuracy}
          xp={xp}
          restart={restartQuiz}
          chooseLevel={() => setPage("levels")}
          home={goHome}
        />
      )}
    </div>
  );
}

function LoginScreen({
  username,
  password,
  setUsername,
  setPassword,
  error,
  onSubmit
}) {
  return (
    <main className="login-page">
      <div className="login-orb orb-one" />
      <div className="login-orb orb-two" />

      <form className="login-card" onSubmit={onSubmit}>
        <div className="login-logo">🕵️</div>

        <span className="eyebrow">WELCOME TO</span>

        <h1>Code Detective</h1>

        <p>
          Test your programming knowledge, solve bugs and earn XP.
        </p>

        <label>Username</label>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error && <div className="login-error">{error}</div>}

        <button className="login-submit" type="submit">
          Enter Code Detective
          <span>→</span>
        </button>

        <small className="demo-note">
          Demo login — connect a backend later for real authentication.
        </small>
      </form>
    </main>
  );
}

function Home({ onLanguage, total }) {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-badge">🚀 LEVEL UP YOUR CODING</div>

        <h1>
          Think like a
          <span> Code Detective.</span>
        </h1>

        <p>
          Test your programming knowledge, discover bugs, understand
          concepts and build real problem-solving skills.
        </p>

        <div className="stats-row">
          <div>
            <strong>5</strong>
            <span>Languages</span>
          </div>

          <div>
            <strong>4</strong>
            <span>Levels</span>
          </div>

          <div>
            <strong>20</strong>
            <span>Challenges / Level</span>
          </div>

          <div>
            <strong>{total}+</strong>
            <span>Total Challenges</span>
          </div>
        </div>
      </section>

      <section className="language-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CHOOSE YOUR WEAPON</span>
            <h2>Select a programming language</h2>
          </div>

          <span className="section-count">5 Languages</span>
        </div>

        <div className="language-grid">
          {languages.map((language) => (
            <button
              className="language-card"
              key={language.id}
              onClick={() => onLanguage(language)}
            >
              <div className="language-icon">{language.icon}</div>

              <div className="language-info">
                <h3>{language.name}</h3>
                <p>4 Levels • 20 challenges each</p>
              </div>

              <span className="card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function Levels({ language, onBack, onLevel }) {
  return (
    <main className="levels-page">
      <button className="back-button" onClick={onBack}>
        ← Back to Languages
      </button>

      <section className="page-heading">
        <div className="selected-language">
          <span>{language.icon}</span>

          <div>
            <span className="eyebrow">PROGRAMMING LANGUAGE</span>
            <h1>{language.name}</h1>
          </div>
        </div>

        <p>
          Choose your difficulty. Every level contains 20 meaningful
          challenges: 15 MCQs + 5 Bug Detective cases.
        </p>
      </section>

      <div className="level-grid">
        {levels.map((level) => (
          <button
            className="level-card"
            key={level.id}
            onClick={() => onLevel(level)}
          >
            <div className="level-top">
              <span className="level-number">
                0{level.id}
              </span>

              <span className="level-icon">
                {level.icon}
              </span>
            </div>

            <h2>{level.name}</h2>

            <p>{level.description}</p>

            <div className="level-meta">
              <span>15 MCQs</span>
              <span>5 Bugs</span>
              <span>20 Total</span>
            </div>

            <div className="start-level">
              Start Level <span>→</span>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}

function Quiz({
  language,
  level,
  question,
  currentIndex,
  total,
  selectedAnswer,
  answered,
  hintVisible,
  setHintVisible,
  selectAnswer,
  nextQuestion,
  getOptionClass,
  onBack
}) {
  const letters = ["A", "B", "C", "D"];

  return (
    <main className="quiz-page">
      <div className="quiz-top">
        <button className="back-button" onClick={onBack}>
          ← Levels
        </button>

        <div className="quiz-title">
          <span>{language.icon}</span>
          <div>
            <strong>{language.name}</strong>
            <small>{level.name} Level</small>
          </div>
        </div>

        <div className="question-counter">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </div>
      </div>

      <div className="progress-area">
        <div className="progress-info">
          <span>Challenge Progress</span>
          <span>
            {Math.round(((currentIndex + 1) / total) * 100)}%
          </span>
        </div>

        <div className="progress-track">
          <div
            className="progress-value"
            style={{
              width: `${((currentIndex + 1) / total) * 100}%`
            }}
          />
        </div>
      </div>

      <section className="question-card">
        <div className="question-meta">
          <span
            className={
              question.type === "BUG"
                ? "question-type bug"
                : "question-type"
            }
          >
            {question.type === "BUG"
              ? "🐞 BUG DETECTIVE"
              : "◈ MULTIPLE CHOICE"}
          </span>

          <span className="topic-tag">
            {question.topic}
          </span>
        </div>

        <h1>{question.question}</h1>

        {question.type === "BUG" && (
          <pre className="code-box">
            <code>{question.code}</code>
          </pre>
        )}

        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={`${question.id}-${index}`}
              className={getOptionClass(index)}
              onClick={() => selectAnswer(index)}
              disabled={answered}
            >
              <span className="option-letter">
                {letters[index]}
              </span>

              <span className="option-text">
                {option}
              </span>

              {answered && index === question.answer && (
                <span className="option-result">✓</span>
              )}

              {answered &&
                index === selectedAnswer &&
                index !== question.answer && (
                  <span className="option-result">×</span>
                )}
            </button>
          ))}
        </div>

        <button
          className="hint-button"
          onClick={() => setHintVisible((previous) => !previous)}
        >
          💡 {hintVisible ? "Hide Hint" : "Show Hint"}
        </button>

        {hintVisible && (
          <div className="hint-box">
            <strong>💡 Detective Hint</strong>
            <p>{question.hint}</p>
          </div>
        )}

        {answered && (
          <div
            className={
              selectedAnswer === question.answer
                ? "feedback correct-feedback"
                : "feedback wrong-feedback"
            }
          >
            <div className="feedback-icon">
              {selectedAnswer === question.answer ? "✓" : "!"}
            </div>

            <div>
              <strong>
                {selectedAnswer === question.answer
                  ? "Correct! +10 XP"
                  : "Not quite — keep learning!"}
              </strong>

              <p>{question.explanation}</p>
            </div>
          </div>
        )}

        <div className="quiz-actions">
          <span>
            {answered
              ? "Answer locked"
              : "Select an answer to continue"}
          </span>

          <button
            className="primary-button"
            disabled={!answered}
            onClick={nextQuestion}
          >
            {currentIndex === total - 1
              ? "View Results"
              : "Next Challenge"}{" "}
            →
          </button>
        </div>
      </section>
    </main>
  );
}

function Result({
  language,
  level,
  score,
  total,
  accuracy,
  xp,
  restart,
  chooseLevel,
  home
}) {
  return (
    <main className="result-page">
      <section className="result-card">
        <div className="result-icon">🏆</div>

        <span className="eyebrow">LEVEL COMPLETE</span>

        <h1>Challenge Finished!</h1>

        <p>
          {language.name} • {level.name}
        </p>

        <div className="result-main-score">
          <strong>{score}</strong>
          <span>/ {total}</span>
        </div>

        <div className="result-stats">
          <div>
            <span>Accuracy</span>
            <strong>{accuracy}%</strong>
          </div>

          <div>
            <span>Correct</span>
            <strong>{score}</strong>
          </div>

          <div>
            <span>XP Earned</span>
            <strong>+{score * 10}</strong>
          </div>

          <div>
            <span>Total XP</span>
            <strong>{xp}</strong>
          </div>
        </div>

        <div className="result-actions">
          <button className="primary-button" onClick={restart}>
            ↻ Retry Level
          </button>

          <button className="secondary-button" onClick={chooseLevel}>
            Choose Level
          </button>

          <button className="secondary-button" onClick={home}>
            Home
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;