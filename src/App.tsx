import React, { useEffect, useState } from 'react';

function App(): ReturnType<React.FC> {
  const [count, setCount] = useState(0);

  useEffect(() => setCount(2), []);
  
  return (
    <div className='text-center text-2xl w-screen h-screen font-primary bg-sky-500 tablet:bg-green-500 desktop:bg-gray-500 largeDesktop:bg-red-500'>
      <h1>Here is the count: {count}</h1>
    </div>
  );
}

export default App;
