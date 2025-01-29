import React from "react";

function CorporateInfo() {
  return (
    <div className="bg-black text-white">
      <div className="text-5xl font-bold p-8 ml-40">
        <h1>Corporate Info</h1>
      </div>

      <div className="p-8 text-xl ml-32 max-w-4xl leading-relaxed">
        <p className="whitespace-pre-line">
          {`
          The Rockstar Games label was founded in 1998 to create the most
          innovative and progressive interactive entertainment. It is a wholly
          owned subsidiary of Take-Two Interactive Software, Inc.
          
          PLEASE NOTE:
          Rockstar Games welcomes input from the gaming community. However, any
          submissions to Rockstar Games of any nature whatsoever, whether
          through this site or otherwise, and whether via electronic or other
          means, become the sole and exclusive property of Rockstar Games, which
          shall have full right, title, and interest thereto, including under
          copyright, in all media now existing or hereafter created, and without
          any obligation to account or make any payment to the submitter for any
          use thereof. No purported reservation of rights incorporated in or
          accompanying any submission shall have any force or effect. By making
          a submission to Rockstar Games, you hereby agree to all of the
          foregoing. 
          
          ©2016 Take-Two Interactive Software, Inc. All Rights
          Reserved.
          `}
        </p>
      </div>
    </div>
  );
}

export default CorporateInfo;
