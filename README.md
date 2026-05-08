# 🌡️ India Weather Temperature Analysis & Prediction

## Overview
Analysis of India's monthly average temperatures from 1901 to present,
with EDA visualizations and a machine learning prediction model.

## Tech Stack
- **Analysis:** Python, Pandas, NumPy
- **Visualizations:** Plotly (interactive visualizations)
- **ML Model:** Scikit-learn (Decision Tree Regressor)
- **Web App:** Next.js 14 with TypeScript
- **Analytics:** Vercel Web Analytics

## Results
- Achieved R² score of 0.957 on test data

## How to Run

### Jupyter Notebook Analysis
1. Open the notebook in Google Colab
2. Upload Weather.csv to /content/sample_data/
3. Run all cells

### Web Application
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Deployment
This project is configured for deployment on Vercel with Web Analytics enabled.

To deploy:
1. Push your code to GitHub
2. Import the project in Vercel
3. Enable Web Analytics in your Vercel dashboard (Analytics → Enable)
4. Deploy

The Analytics component is already integrated in `app/layout.tsx`.
