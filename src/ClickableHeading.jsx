import { useState } from 'react';


const NewComponent = () => (
  <div className="bg-green-100 p-4 rounded border border-green-500">
    <p>✅ This is Jan month data</p></div>);

function ClickableHeading() {
  const [isJanClicked, setIsJanClicked] = useState(false);

  return (
    <div className="p-6">
      {isJanClicked ? (
        
        <NewComponent />
      ) : (
        
        <h4 onClick={() => setIsJanClicked(true)} 
          className="text-xl font-bold cursor-pointer hover:text-blue-600">Jan</h4>
      )} </div>);}

export default ClickableHeading;