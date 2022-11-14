import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
// import FakeChatBot from "../components/fakeChatBot";

// <!-- Animacje-->
import Typed from "typed.js";
import Script from "next/script";

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["your startup", "your company", "your self"],
      typeSpeed: 70,
      backSpeed: 100,
      loop: true,
    };
    // typed.current = new Typed(el.current, options);
    const loader = document.getElementById("loader-wrapper");
    if (loader) {
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 300);
    }

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      // typed.current.destroy();
    };
  }, []);
  const assistentName = "Janusz Asystent";

  return (
    <>
      <Head></Head>
      <div id="loader-wrapper">
        <div className="load">
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      </div>
      <div className="upbutton">
        <a href="#home"></a>
      </div>

      <nav className="bg-dart">
        <div className="nav_logo">
          <h4>MDX</h4>
        </div>
        <ul className="nav_links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#anchorpoint">O nas</a>
          </li>
          <li>
            <a href="#anchorpoint2">Projekty</a>
          </li>
          <li>
            <a href="#anchorpoint3">Team</a>
          </li>
          <li>
            <a href="#anchorpoint4">Kontakt</a>
          </li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>

      <section>
        <div
          id="home"
          className="flex flex-col xl:flex-row h-screen w-screen  hello"
        >
          <div className="welcometext">
            <p className="bigger-text">
              Next Gen Software is now availiable<br></br>
              <span ref={el}></span>
            </p>
            {/* <p className="smaler-text">
              Fill the form and
          
            </p> */}

            {/* <div className="welcomebuttons mt-2">
              <a className="btn-hello btn-first mx-3" href="#anchorpoint">
                Odkryj
              </a>
              <a className="btn-hello btn-second" href="#kontakt">
                Kontakt
              </a>
            </div> */}
          </div>
          <div className="bg-white  rounded-md pb-8 w-[360px]">
            <div className="bg-cyan-300 flex rounded-md items-center py-2 px-2 mb-2">
              <div className="avatar w-4 h-4 bg-orange-800 rounded-full mr-2"></div>
              <div className="user-name">{assistentName}</div>
              <div className="icon ml-auto cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
            </div>
            <div className="chat-body text-black px-4">
              <span className="text-xs text-center">Today 23:49</span>
              <div className="msg assitant-msg flex  text-left items-end w-80">
                <div className="avatar w-6 h-6 bg-orange-800 rounded-full mr-2"></div>
                <div className="msg-content w-72 ">
                  <span className="text-xs">{assistentName}</span>
                  <div className="msg-body bg-sky-100 rounded-md mt-2 p-2 w-60">
                    <span className="text-sm">
                      Hey there👋Which path would you like to take in order to
                      receive a project estimation?
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 msg assitant-msg flex  text-left items-end w-80 ml-auto">
                <div className="msg-content ml-auto  text-white">
                  <div className="msg-body bg-cyan-300 rounded-md mt-2 p-2">
                    <span className="text-sm">
                      I want to answer a few questions
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 msg assitant-msg flex  text-left items-end">
                <div className="avatar w-6 h-6 bg-orange-800 rounded-full mr-2"></div>
                <div className="msg-content w-80 ">
                  <span className="text-xs">{assistentName}</span>
                  <div className="msg-body bg-sky-100 rounded-md mt-2 p-2 w-60">
                    <span className="text-sm">
                      Great! You have my attention!
                    </span>
                  </div>
                  <div className="msg-body bg-sky-100 rounded-md mt-2 p-2 w-60">
                    <span className="text-sm">
                      First things first, what’s your role?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container col-12">
          <div className="fotter">
            Wszystkie prawa zastrzeżone
            <br />
            Realizacja: Krzysztof Mirek
          </div>
        </div>
      </section>
      {/* <Script  src="./utils/animations.js"/> */}

      {/* <!-- Zmiana koloru on SCROLL --> */}
      {/* <Script  src="./utils/color_on_scroll.js"/> */}
      <Script src="./utils/app.js" />
    </>
  );
}
