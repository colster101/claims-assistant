import ClaimsApp from './ClaimsApp.jsx';

export default function App() {
  const path = window.location.pathname;
  if (path.startsWith('/claims')) return <ClaimsApp />;
  // Future routes: if (path.startsWith('/uw')) return <UWApp />;
  return <ClaimsApp />; // default to claims for this project
}
