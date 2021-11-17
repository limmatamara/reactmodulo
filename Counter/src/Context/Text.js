import { createContext , useState } from "react";

export const TextContext = createContext();

function TextProvider({children}) {
  const [name, setName] = useState('');

  return  (
    <TextContext.Provider value={{name, setName}}>
      {children}
    </TextContext.Provider>
  )
}

export default TextProvider;