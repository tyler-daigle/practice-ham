export default function Screen({ children, currentScreen }) {
  return (
    <div>
      <h2>You have chosen {currentScreen}</h2>
      {children}
    </div>
  );
}
