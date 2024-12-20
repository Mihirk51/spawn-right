import React from 'react';

export function TrustedPartners() {
  return (
    <div className="mt-20">
      <h3 className="text-white text-xl mb-8">We are trusted by -</h3>
      <div className="flex items-center justify-between">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BLAST_logo.svg/2560px-BLAST_logo.svg.png" 
             alt="Blast" 
             className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/ESL_Logo_2019.svg/2560px-ESL_Logo_2019.svg.png" 
             alt="ESL" 
             className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Electronic_Arts_logo.svg/2560px-Electronic_Arts_logo.svg.png" 
             alt="EA" 
             className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png" 
             alt="Valorant" 
             className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}