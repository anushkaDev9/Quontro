import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="app">
      <div className="background-overlay"></div>

      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">AI</div>
          <div className="logo-text">
            <h1>Quontro</h1>
            <span>Finance</span>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <h2>AI-Powered Investment Analysis</h2>
            <div className="home">
      <section className="hero">
        <h1>Welcome to Quontro Finance</h1>
        <p>
          Smarter investing powered by AI. Analyze stocks, understand market
          trends, and make confident financial decisions in seconds.
        </p>
      </section>

      <section className="features">
        <h2>What We Offer</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 AI Stock Analysis</h3>
            <p>
              Get real-time insights on stocks with intelligent AI-driven
              analysis and predictions.
            </p>
          </div>

          <div className="feature-card">
            <h3>📈 Market Trends</h3>
            <p>
              Understand whether the market is bullish or bearish with clear,
              simple indicators.
            </p>
          </div>

          <div className="feature-card">
            <h3>⚠️ Risk Assessment</h3>
            <p>
              Evaluate investment risk levels so you can make safer financial
              decisions.
            </p>
          </div>

          <div className="feature-card">
            <h3>💡 Smart Recommendations</h3>
            <p>
              Receive actionable suggestions like “Invest moderately” based on
              AI insights.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Start Investing Smarter Today</h2>
        <p>Enter a stock symbol and let AI guide your decisions.</p>
      </section>
    </div>
        <div className="search-box">
          <input type="text" placeholder="Enter a stock symbol (e.g. AAPL)" />
          <button>Analyze</button>
        </div>

        <p className="analyzing">• Analyzing AAPL...</p>

        <div className="cards-grid">
          <div className="card large-card">
            <div className="card-top">
              <div className="icon teal">🛢</div>
              <div>
                <h3>AAPL</h3>
                <h1>$192.45 <span className="up">▲</span></h1>
              </div>
            </div>

            <div className="mini-card">
              <p>Change:</p>
              <h4>+ 1.2% <span className="up">▲</span></h4>
            </div>

            <div className="mini-card">
              <p>↻ AAPL</p>
              <h2>$192.45 <span className="up">▲</span></h2>
            </div>
          </div>

          <div className="column">
            <div className="card small-card">
              <div className="icon green">📈</div>
              <div>
                <h3>Market</h3>
                <p className="positive">Positive</p>
              </div>
            </div>

            <div className="card small-card center-card">
              <h3>Risk</h3>
              <p className="medium">Medium</p>
            </div>
          </div>

          <div className="column">
            <div className="card small-card">
              <div className="icon gold">🛡</div>
              <div>
                <h3>Risk</h3>
                <p className="medium">Medium</p>
              </div>
            </div>

            <div className="card small-card center-card">
              <h3>Recommendation</h3>
              <p>Invest moderately</p>
            </div>
          </div>
        </div>

        <div className="decision-box">
          <h2>Final Decision:</h2>
          <h1>Invest moderately in AAPL</h1>
        </div>
      </main>

      
    </div>
  );
}

export default App;
