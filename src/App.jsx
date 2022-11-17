import logo from './logo.svg';
import styles from './App.module.css';
import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';

function App() {
  Sentry.init({
    dsn: "https://e02e3d4cc365492ab0efbf817f7748e0@o4504176326279168.ingest.sentry.io/4504176332570624",
    integrations: [new BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <p>Will this be a failure?</p>
      </header>
    </div>
  );
}
export default App;
