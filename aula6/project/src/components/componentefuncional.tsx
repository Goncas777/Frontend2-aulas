"use client";
import {useMemo, useState ,useEffect, useRef, createContext, useContext, ReactNode} from 'react';

type TemaContextType = {
    tema: string;
    setTema: (tema: string) => void;
};

const TemaContext = createContext<TemaContextType | null>(null);

const TemaProvider = ({children}: {children: ReactNode}) => {
    const [tema, setTema] = useState('claro');
    return (
        <TemaContext.Provider value={{tema, setTema}}>
            {children}
        </TemaContext.Provider>
    );
}

function MeuComponente() {
    useEffect(() => {
        console.log('Componente montado');
        return () => {
            console.log('Componente desmontado');
        };
    }, []);
    return <div>Ola,React!</div>
}

const InputFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={() => inputRef.current?.focus()}>Focar Input</button>
        </div>
    );
};

const Exemplo = () => {
    const [contador, setContador] = useState(0);

    const valorMemorizado = useMemo(() => {
        console.log('Calculando valor memorizado');
        return contador * 2;
    }, [contador]);

    return (
        <div>
            <p>Contador: {contador}</p>
            <p>Valor memorizado: {valorMemorizado}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}


const BotaoTema = () => {
  const context = useContext(TemaContext);
  if (!context) return null;
  const {tema, setTema} = context;
  return (
    <button onClick={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}>
      Mudar para tema {tema === 'claro' ? 'escuro' : 'claro'}
    </button>
  );
}


export {MeuComponente, Exemplo, InputFocus, TemaProvider, BotaoTema};