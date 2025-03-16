const {useState, createContext} = React;

const CountContext = createContext(null);

function CountContextProvider({children}) {
  const [count, setCount] = useState(0);
  const [countRestar, setCountRestar] = useState(0);
  return (
    <CountContext.Provider value={{count, setCount, countRestar, setCountRestar}}>
      {children}
    </CountContext.Provider>
  );
}

window.CountContext = CountContext;
window.CountContextProvider = CountContextProvider;