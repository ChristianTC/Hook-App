import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HookApp />
  // <CounterApp />
  // <CounterWithCustomHook />
  // <SimpleForm />
  // <FormWithCustomHook />
  // <MultipleCustomHooks />
  // <FocusScreen />
  // <Layout />
  <Memorize />
);
