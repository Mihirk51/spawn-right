import React from 'react';

export const TrustedPartners = () => {
//remove these logos later for obvious copyright reasons
  return (
    <div className="mt-20">
      <h3 className="text-white text-xl mb-8">We are trusted by -</h3>
      <div className="flex items-center justify-between">
        <img src="https://img-cdn.hltv.org/eventlogo/PocIgc9NQuXVubxA88zyEa.svg?ixlib=java-2.1.0&s=911e6cb16ddb42a8bbbca5b84497aa6d" 
             alt="Blast" 
             className="h-20 opacity-100" />
        <img src="https://img-cdn.hltv.org/eventlogo/ZMmU3y7hAV248CmzgxsohP.png?ixlib=java-2.1.0&w=50&s=fac3655d6c2a1abf92dfb3ef80cfc504" 
             alt="ESL" 
             className="h-20 opacity-100" />
        <img src="https://img-cdn.hltv.org/teamlogo/yeXBldn9w8LZCgdElAenPs.png?ixlib=java-2.1.0&w=50&s=15eaba0b75250065d20162d2cb05e3e6" 
             alt="vita" 
             className="h-20 opacity-100" />
        <img src="https://img-cdn.hltv.org/teamlogo/zbcwVqDX-cVjB7EidzNoPd.png?ixlib=java-2.1.0&w=100&s=5d6488f42991807e0d921d0290c711ab 2x" 
             alt="faze" 
             className="h-20 opacity-100" />
      </div>
    </div>
  );
};