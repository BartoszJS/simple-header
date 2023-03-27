import React, { useState } from "react";

const Navbar = () => {
  const [showPlayers, setShowPlayers] = useState(true);
  const [showFastestPlayers, setShowFastestPlayers] = useState(false);
  const [showStrongestPlayers, setShowStrongestPlayers] = useState(true);
  const handleMouseOver = () => {
    setShowPlayers(true);
  };
  const handleMouseOut = () => {
    setShowPlayers(false);
  };
  const handleMouseOverFastest = () => {
    setShowFastestPlayers(true);
  };
  const handleMouseOutFastest = () => {
    setShowFastestPlayers(false);
  };
  const handleMouseOverStrongest = () => {
    setShowStrongestPlayers(true);
  };
  const handleMouseOutStrongest = () => {
    setShowStrongestPlayers(false);
  };

  return (
    <div className='border cursor-default'>
      <div className='h-20 flex max-w-7xl mx-auto justify-between'>
        <div className='flex justify-end items-center'>LOGO</div>
        <ul className='flex justify-end items-center gap-6'>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            Players
            {showPlayers && (
              <div className='absolute w-[200px] border'>
                <ul className='flex flex-col gap-2'>
                  <li
                    onMouseOver={handleMouseOverFastest}
                    onMouseOut={handleMouseOutFastest}
                  >
                    The fastest
                    {showFastestPlayers && (
                      <div className='absolute border right-[197px] top-0'>
                        <div className='absolute right-0 h-4 w-4 top-1 border-8 border-transparent border-r-black'></div>
                        <ul className='flex flex-col pr-3 gap-2'>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                          <li>Mbappe</li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseOver={handleMouseOverStrongest}
                    onMouseOut={handleMouseOutStrongest}
                  >
                    The strongest
                    {showStrongestPlayers && (
                      <div className='absolute border right-[197px] top-8'>
                        <div className='absolute right-0 h-4 w-4 top-1 border-8 border-transparent border-r-black'></div>
                        <ul className='flex flex-col pr-3 gap-2'>
                          <li>Benteke</li>
                          <li>Benteke</li>
                          <li>Benteke</li>
                          <li>Benteke</li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>Attackers</li>
                  <li>Midfielder</li>
                  <li>Defenders</li>
                  <li>Goalkeepers</li>
                </ul>
              </div>
            )}
          </li>
          <li>Teams</li>
          <li>Leagues</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
