export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🌡️ India Weather Temperature Analysis & Prediction</h1>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Overview</h2>
        <p>
          Analysis of India&apos;s monthly average temperatures from 1901 to present,
          with EDA visualizations and a machine learning prediction model.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Tech Stack</h2>
        <ul>
          <li>Python, Pandas, NumPy</li>
          <li>Plotly (interactive visualizations)</li>
          <li>Scikit-learn (Decision Tree Regressor)</li>
          <li>Next.js for web interface</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Results</h2>
        <p>Achieved R² score of 0.957 on test data</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Data Analysis</h2>
        <p>
          The analysis is available in the Jupyter notebook <code>weather forcast.ipynb</code>.
          The dataset includes monthly temperature data from 1901 to present.
        </p>
      </section>
    </main>
  )
}
