'use client';

import React from "react";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css'; // Ensure PrimeReact styles are loaded
import 'primeicons/primeicons.css'; // Import PrimeIcons for the send icon

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Talk() {
  return (
    <div className="h-screen flex">
      {/* Left Side - 1/6 of the width */}
      <div className="w-2 bg-gray-200">
        {/* Add content for the left side here */}
          <div className="m-2 flex flex-column">
            <p className="p-2">Ilk</p>
            <p className="p-2">Iki</p>
            <p className="p-2">Uc</p>
          </div>
      </div>

      {/* Right Side - Remaining space */}
      <div className="flex-grow-1 flex flex-column">
        <div className="flex flex-grow-1"></div> {/* Empty space to push content to the bottom */}
        <div className="flex flex-row justify-content-center mb-4">
          <div className="relative w-8">
            <InputText className="p-3 border-round-2xl w-full" placeholder="Type here"></InputText>
            <Button 
              className="absolute right-0 top-0 p-button-rounded p-button-text" 
              style={{ height: "100%", marginRight: "0.5rem" }}
            >
              <i className="pi pi-send"></i> {/* PrimeIcons send icon */}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
