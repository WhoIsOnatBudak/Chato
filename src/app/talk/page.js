'use client';

import React from "react";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css'; // Ensure PrimeReact styles are loaded
import 'primeicons/primeicons.css'; // Import PrimeIcons for the account icon

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Talk() {
  return (
    <div className="h-screen flex flex-column" style={{ fontFamily: "'Geist Mono VF', monospace" }}>
      {/* Top Navigation */}
      <div className="flex justify-content-end p-4">
        <i className="pi pi-user text-2xl cursor-pointer" title="Account"></i> {/* PrimeIcons user icon */}
      </div>

      {/* Main Content */}
      <div className="flex flex-grow-1">
        {/* Left Side - 1/6 of the width */}
        <div className="w-2 flex align-items-center justify-content-center bg-gray-200">
          {/* Add content for the left side here */}
          <p>Left Side Content</p>
        </div>

        {/* Right Side - Remaining space */}
        <div className="flex-grow-1 flex flex-column">
          <div className="flex flex-grow-1"></div> {/* Empty space to push content to the bottom */}
          <div className="flex flex-row justify-content-center mb-4">
            <div className="relative w-8">
              <InputText className="p-3 border-round-2xl w-full" placeholder="Type here" style={{ fontFamily: "'Geist Mono VF', monospace" }}></InputText>
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
    </div>
  );
}
  