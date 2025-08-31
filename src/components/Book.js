"use client";
import HTMLFlipBook from "react-pageflip";
import React, { useState, useRef } from "react";
import "../app/globals.css";

const Book = () => {
  const [position, setPosition] = useState("front-closed");
  const bookRef = useRef(null);

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
    <div className="flex justify-center items-center">
      <HTMLFlipBook
        ref={bookRef}
        width={470}
        height={500}
        showCover={true}
        drawShadow={true}
        maxShadowOpacity={0.5}
        flippingTime={1000} // match transition in CSS
        usePortrait={false}
        startPage={0}
        onFlip={handleFlip}
        className={`flip-book shadow-2xl ${position}`}
      >
        {/* Front cover */}
        <div className="book-page cover">
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
        <div className="book-page backcover">
          <div className="lastpage-content">
            <img
              src="https://cdn.pizap.com/pizapfiles/images/thank_you_card_maker_app01.jpg"
              alt="thank"
              className="thank-pic"
            />
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;


//current problems
//1. need to readjust page when flipped to last page (use book-page backcover)
//2. need to readjust page when flipped BACK to first page (use book-page cover)
//3. need shadow under book
//4. need the adjustment to happen beFORE the page is turned!!!
//5. need to add the tassle next to the book!! (with its own shadow)
//6. need images and text on pages
//7. need button for music and page sound effects!
//
