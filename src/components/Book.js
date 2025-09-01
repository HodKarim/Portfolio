"use client";
import HTMLFlipBook from "react-pageflip"; //for the page flipping library!
import React, { useState, useRef } from "react";
import "../app/globals.css";

const Book = () => {
  const [position, setPosition] = useState("front-closed");
  const bookRef = useRef(null);

  const flippingTime = 1000; // ms (sync with CSS)
  const slideTime = 1000; //slide before

  const handleClickNext = () => {
  // Step 1: trigger slide first
  setPosition("opened"); // or back-closed if at end
    
  // Step 2: wait for slide to finish, then flip
  setTimeout(() => {
    //bookRef.current.pageFlip().flipNext();
    }, slideTime);
  };

  const handleFlip = (e) => {
    const page = e.data;
    const totalPages = bookRef.current.pageFlip().getPageCount() - 1;

    if (page === 0) {
      setPosition("front-closed");
    } else if (page === totalPages) {
      setPosition("back-closed");
    } else {
      setPosition("opened");
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ "--flip-time": `${flippingTime}ms` }} // inject flip time
    >
      <HTMLFlipBook
        ref={bookRef}
        width={470}
        height={500}
        showCover={true}
        drawShadow={true}
        autoSize={false}
        maxShadowOpacity={0.5}
        flippingTime={flippingTime}
        clickEvent={false}
        usePortrait={false}
        startPage={0}
        onFlip={handleFlip}
        className={`flip-book shadow-2xl ${position}`}
      >
        {/* Front cover */}
        <div className="book-page cover" onClick={handleClickNext}>
          <div className="page-content">
            <img
              src="https://i.pinimg.com/736x/b0/d5/c2/b0d5c27b7b65784d06cbf8055a051057.jpg"
              alt="garf pic"
              className="garf-logo"
            />
          </div>
        </div>

        <div className="book-page"></div>
        <div className="book-page">About</div>
        <div className="book-page"></div>
        <div className="book-page">Skills</div>
        <div className="book-page"></div>
        <div className="book-page">Projects</div>
        <div className="book-page"></div>
        <div className="book-page">Gallery</div>
        <div className="book-page"></div>
        <div className="book-page">Contact</div>

        {/* Back cover */}
        <div className="book-page backcover" onClick={handleClickNext}>
        
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;


//current problems
//1. need to readjust page when flipped to last page (use book-page backcover) ✅ DONE
//2. need to readjust page when flipped BACK to first page (use book-page cover) ✅ DONE
//3. need shadow under book || NEEDS WORK!!!
//4. need the adjustment to happen beFORE the page is turned!!! ✅ DONE
//5. need to add the tassle next to the book!! (with its own shadow)
//6. need images and text on pages
//7. need button for music and page sound effects!
//
