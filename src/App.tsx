import React, { useEffect, useState } from 'react';

function App(): ReturnType<React.FC> {
  const [count, setCount] = useState(0);

  useEffect(() => setCount(2), []);
  
  return (
    <div className='text-center text-red-500 text-2xl'>
      <h1>`Here is the count: ${count}`</h1>
    </div>
  );
}

export default App;