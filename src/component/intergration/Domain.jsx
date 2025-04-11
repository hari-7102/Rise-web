import React from "react";

// import video from '../../assets/video-domain.mp4'

import education from "../../assets/vid.mp4";

const Domain = () => {
  const navbar = [
    { no: 1, name: " Sign up" },
    { no: 2, name: " Inviate People" },
    { no: 3, name: " Create Traning" },
    { no: 4, name: "Publish & Enroll " },
    { no: 5, name: " Discover & Learn" },
    { no: 6, name: " Analyse " },
    { no: 7, name: " Integrations" },
  ];
  return (
    <div className="py-20  flex ">
      <div className="w-1/3 sticky top-24 h-fit flex flex-col justify-start gap-14 px-36">
        {navbar.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <>
              <p className="rounded-full px-2.5 py-0.5 text-gray-800 bg-gray-300 text-center">
                {item.no}
              </p>
              <p className="text-gray-500 font-nunito">{item.name}</p>
            </>
          </div>
        ))}
      </div>

      <div className="w-px h-[33rem] bg-gray-300 sticky top-20"></div>

      <div className="w-2/3 px-12">
        <div className="mb-32">
          <div className="flex justify-start  items-start gap-8">
            <span>
              <svg viewBox="0 0 57 57" className="w-14 h-14">
                <g fill="none">
                  <path
                    fill="#F16622"
                    d="M19.7 27.6h16.5c2.6 0 4.7 2.1 4.7 4.7S38.8 37 36.2 37H19.7c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7z"
                  ></path>
                  <path
                    fill="#8C8D8E"
                    d="M27.5 34.6v13.3h5.4z"
                    opacity="0.45"
                  ></path>
                  <path
                    fill="#383632"
                    d="M55.2 49.1H1.9c-.6 0-1.1-.5-1.1-1.1V9c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v37.9h51v-38c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v39c.1.7-.4 1.2-1 1.2z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M49.6 41l-20.2-7c-.6-.2-1.2.4-1 1l7.1 20.2c.2.6 1.1.7 1.4.1l2.4-5c.2-.5.9-.6 1.2-.2l4.4 4.4c.3.3.8.3 1.1 0l2.8-2.8c.3-.3.3-.8 0-1.1l-4.4-4.4c-.4-.4-.3-1 .2-1.2l5-2.4c.7-.4.7-1.3 0-1.6z"
                  ></path>
                  <path
                    fill="#383632"
                    d="M51.3 41.7c0-.8-.5-1.4-1.3-1.7l-20.2-7.1c-.7-.2-1.4-.1-2 .5-.5.5-.7 1.3-.4 2l7.1 20.2c.3.7.9 1.2 1.7 1.3h.1c.7 0 1.4-.4 1.7-1.1l2.2-4.6 4.1 4.1c.7.7 1.9.7 2.7 0l2.8-2.8c.4-.4.6-.8.6-1.3s-.2-1-.6-1.3l-4.1-4.1 4.6-2.2c.6-.5 1-1.2 1-1.9zm-7.1 2.2c-.5.3-.9.8-1 1.4-.1.6.1 1.2.5 1.7l4.2 4.2-2.3 2.3-4.2-4.2c-.4-.4-1.1-.6-1.7-.5-.6.1-1.1.5-1.4 1l-2 4.2-6.6-18.7 18.7 6.6-4.2 2z"
                  ></path>
                  <path
                    fill="#BFBFBF"
                    d="M43.8 17.5H12c-1.7 0-3 1.4-3 3 0 1.7 1.4 3 3 3h31.9c1.7 0 3-1.4 3-3s-1.4-3-3.1-3zM53.7.2H3.4C2 .2.8 1.3.8 2.8V9h55.4V2.8c.1-1.5-1.1-2.6-2.5-2.6z"
                  ></path>
                  <g fill="#FFF" transform="translate(5 3)">
                    <circle cx="1.8" cy="2.1" r="1.2"></circle>
                    <circle cx="5.5" cy="2.1" r="1.2"></circle>
                    <circle cx="9.2" cy="2.1" r="1.2"></circle>
                  </g>
                </g>
              </svg>
            </span>
            <p className="text-5xl text-gray-700  font-nunito ">
              Create Your Domain
            </p>
          </div>
          <p className="px-24 text-gray-500 py-9">
            Claim your .rise domain to get started. For example, if you work at
            Glivy, set up your Rise account as glivy.rise.com.
          </p>
          <img
            src="https://riseusercontent.com/assets/rise/assets/marketing-images/how/ui-1@3x.png"
            alt=""
            className="w-[51rem]"
          />
        </div>
        <div className="mb-32">
          <div className="flex justify-start items-center  gap-8">
            <span>
              <svg viewBox="0 0 60 53" className="w-14 h-14 ">
                <g fill="none">
                  <g transform="translate(4 5)">
                    <path
                      fill="#8D8E8E"
                      d="M31.4 28.6c0 4.7-4.1 6.1-9.2 6.1S13 33.4 13 28.6c0-4.7 4.1-13.5 9.2-13.5s9.2 8.7 9.2 13.5z"
                    ></path>
                    <circle cx="22.3" cy="9.1" r="8.2" fill="#BFBFBF"></circle>
                    <path
                      fill="#BFBFBF"
                      d="M14.1 8.4s-1.6-4.2-5.4-3.7c-3.8.6-4.2 8.3-7.8 8.8 0 .1 9.1 8 13.2-5.1z"
                    ></path>
                  </g>
                  <path
                    fill="#383632"
                    d="M49.3 45.2h-48c-.6 0-1.1-.5-1.1-1.1V1.5C.2.9.7.4 1.3.4h48c.6 0 1.1.5 1.1 1.1v42.6c.1.6-.4 1.1-1.1 1.1zM2.4 43h45.8V2.6H2.4V43z"
                  ></path>
                  <circle cx="44.3" cy="37.6" r="14.8" fill="#F16622"></circle>
                  <path
                    fill="#FFF"
                    d="M53 35.6h-6.6V29h-4v6.6h-6.6v4h6.6v6.6h4v-6.6H53z"
                  ></path>
                </g>
              </svg>
            </span>
            <p className="text-5xl text-gray-700 font-nunito">
              Invite people to Rise
            </p>
          </div>

          <p className="px-24 text-gray-500 py-9">
            Add admins, content creators, reporters, and learners, then set
            their permissions. You can do this step at any time.
          </p>
          <img
            src="https://riseusercontent.com/assets/rise/assets/marketing-images/how/ui-2@3x.jpg"
            alt=""
            className="w-[51rem]"
          />
        </div>
        <div className="mb-32">
          <div className="flex justify-start items-center  gap-8">
            <span>
              <svg viewBox="0 0 71 48" className="w-14 h-14 ">
                <g fill="none">
                  <path
                    fill="#BFBFBF"
                    d="M50.3 19c-7.7 0-14.3 4.4-17.6 10.7-1.6-1-3.6-1.6-5.6-1.6-5.9 0-10.7 4.8-10.7 10.7h53.8c-.1-10.9-9-19.8-19.9-19.8z"
                  ></path>
                  <path
                    fill="#383632"
                    d="M59.4 41.4c-.6 0-1.1.5-1.1 1.1v2.9h-2.9c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h4c.6 0 1.1-.5 1.1-1.1v-4c.1-.5-.4-1.1-1.1-1.1zm-30.3 4h-8.8c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h8.8c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm17.6 0h-8.8c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h8.8c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm-35.2 0H8.6v-2.9c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v4c0 .6.5 1.1 1.1 1.1h4c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm-4-8.2c.6 0 1.1-.5 1.1-1.1v-6.5c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v6.5c0 .6.5 1.1 1.1 1.1zm0-13c.6 0 1.1-.5 1.1-1.1v-6.5c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v6.5c0 .6.5 1.1 1.1 1.1zm4-19.1h-4c-.6 0-1.1.5-1.1 1.1v4c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1V7.3h2.9c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm35.2 0h-8.8c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h8.8c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm-17.6 0h-8.8c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h8.8c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm30.3 0h-4c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h2.9v2.9c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-4c.1-.6-.4-1.1-1.1-1.1zm0 23.4c-.6 0-1.1.5-1.1 1.1v6.5c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-6.5c.1-.6-.4-1.1-1.1-1.1zm0-13c-.6 0-1.1.5-1.1 1.1v6.5c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-6.5c.1-.6-.4-1.1-1.1-1.1z"
                  ></path>
                  <circle cx="13.1" cy="13.4" r="13" fill="#F16622"></circle>
                </g>
              </svg>
            </span>
            <p className="text-5xl text-gray-700 font-nunito">
              Build from scratch
            </p>
          </div>

          <p className="px-24 text-gray-500 py-9">
            Create unique lessons by stacking modular media, text, and
            interactive blocks in any order you want. Then customize them with
            your own content.
          </p>
          <div>
            <video
              src={education}
              className="rounded-2xl w-100% h-100%"
              preload="auto"
              loop
              // playsInline
              // webkit-playsinline="true"
              // x5Playsinline="true"
              autoPlay
            ></video>
          </div>
        </div>
        <div className="mb-32">
          <div className="flex justify-start items-center  gap-8">
            <span>
              <svg fill="none" viewBox="0 0 76 54" className="w-14 h-14 ">
                <path
                  fill="#FF6602"
                  d="M24.443 37.479h-8.63v7.15h8.63v-7.15z"
                ></path>
                <path
                  fill="#BFBFBF"
                  d="M36.023 37.479h-8.63v7.15h8.63v-7.15zm11.57 0h-8.63v7.15h8.63v-7.15z"
                ></path>
                <path
                  fill="#FF6602"
                  d="M59.173 37.479h-8.63v7.15h8.63v-7.15zm-34.73-19h-8.63v7.15h8.63v-7.15z"
                ></path>
                <path
                  fill="#BFBFBF"
                  d="M24.443 27.759h-8.63v7.15h8.63v-7.15zm11.58-9.28h-8.63v7.15h8.63v-7.15zm0 9.28h-8.63v7.15h8.63v-7.15zm11.57-9.28h-8.63v7.15h8.63v-7.15z"
                ></path>
                <path
                  fill="#FF6602"
                  d="M47.593 27.759h-8.63v7.15h8.63v-7.15z"
                ></path>
                <path
                  fill="#BFBFBF"
                  d="M59.173 18.479h-8.63v7.15h8.63v-7.15z"
                ></path>
                <path
                  fill="#8D8D8E"
                  d="M59.173 27.759h-8.63v7.15h8.63v-7.15z"
                  opacity="0.45"
                ></path>
                <path
                  fill="#393633"
                  d="M10.953 48.659v-5.92c0-4.24.033-8.487.1-12.74v-15.51c0 .32 0-.08.1-.19a.6.6 0 01.5-.27c.61-.06 1.25 0 1.86 0h17.27c7.333 0 14.666-.034 22-.1l6.31-.08 3.29-.05a3.25 3.25 0 011.13 0 .72.72 0 01.3.32 6.575 6.575 0 010 1.83v28.61a22.636 22.636 0 00.09 3.19v.32c0 .11.1.67 0 .1v.06a1.13 1.13 0 002.25 0v.1c.03-.142.05-.286.06-.43.077-.56.113-1.125.11-1.69v-31.85a3.13 3.13 0 00-.78-2.11 3.39 3.39 0 00-2.74-1.05l-3.31.06c-8 .12-15.967.186-23.9.2h-22.61a8.743 8.743 0 00-2.17.12 3.069 3.069 0 00-2 1.67 6.5 6.5 0 00-.29 2.78v10.21c0 4.46.08 8.92.11 13.38v8.99a1.13 1.13 0 002.25 0l.07.05z"
                ></path>
                <path
                  fill="#393633"
                  d="M5.163 53.629l1.4.18-.52-.16a2.6 2.6 0 001.39.21h62.72a5.32 5.32 0 004.37-3.17c.33-.74 1-1.7.47-2.48a1.33 1.33 0 00-1.15-.6H1.513a1.34 1.34 0 00-1.25 1 2.09 2.09 0 00.31 1.39 7.629 7.629 0 001.24 2.16 4.94 4.94 0 003.49 1.84c1.44.06 1.44-2.19 0-2.25a3.2 3.2 0 01-2.29-1.73 7.637 7.637 0 01-.35-.83c-.08-.17-.15-.34-.22-.51-.07-.17-.08-.37 0-.07l-.12.87.06-.1-.68.52c-.16.06-.24 0-.06 0h72.16c.19 0 .09.06-.07 0l-.67-.52v.1l-.11-.87c.07-.31 0 0 0 .07s-.14.33-.22.49c-.102.279-.22.553-.35.82a3.22 3.22 0 01-2.23 1.66h-56.09a54.566 54.566 0 00-8.77.26h-.12a.88.88 0 00-.01 1.72z"
                ></path>
                <path
                  fill="#FF6602"
                  d="M64 22.009c6.075 0 11-4.925 11-11 0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.075 4.924 11 11 11z"
                ></path>
                <path
                  fill="#fff"
                  d="M58.444 8.954l-2.056 2.055 6.19 6.19 2.056-2.056-6.19-6.19z"
                ></path>
                <path
                  fill="#fff"
                  d="M60.545 15.136l2.056 2.055 9.04-9.04-2.056-2.055-9.04 9.04z"
                ></path>
              </svg>
            </span>
            <p className="text-5xl text-gray-700 font-nunito">
              Opt in to the Rise course catalog
            </p>
          </div>

          <p className="px-24 text-gray-500 py-9">
            Claim your .rise domain to get started. For example, if you work at
            Glivy, set up your Rise account as glivy.rise.com.
          </p>
          <img
            src="https://riseusercontent.com/assets/rise/assets/marketing-images/how/opt-in-1@3x.png"
            alt=""
            className="w-[51rem]"
          />
        </div>
        <div className="mb-32">
          <div className="flex justify-start items-center  gap-8">
            <span><svg viewBox="0 0 67 63"  className="w-14 h-14 "><path fill="#C1C0C0" d="M64 21.5h-3.7c-.6 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2h2.5v2c0 .6.5 1.2 1.2 1.2.6 0 1.2-.5 1.2-1.2v-3.2c0-.7-.5-1.2-1.2-1.2zm0 20.3c-.6 0-1.2.5-1.2 1.2v5.7c0 .6.5 1.2 1.2 1.2.6 0 1.2-.5 1.2-1.2V43c0-.7-.5-1.2-1.2-1.2zm0-11.5c-.6 0-1.2.5-1.2 1.2v5.7c0 .6.5 1.2 1.2 1.2.6 0 1.2-.5 1.2-1.2v-5.7c0-.6-.5-1.2-1.2-1.2zm0 22.9c-.6 0-1.2.5-1.2 1.2v2h-2c-.6 0-1.2.5-1.2 1.2 0 .6.5 1.2 1.2 1.2H64c.6 0 1.2-.5 1.2-1.2v-3.2c0-.7-.5-1.2-1.2-1.2zm-31 3.1h-5.6c-.6 0-1.2.5-1.2 1.2 0 .6.5 1.2 1.2 1.2H33c.7 0 1.2-.5 1.2-1.2-.1-.6-.6-1.2-1.2-1.2zm22.3 0h-5.6c-.6 0-1.2.5-1.2 1.2 0 .6.5 1.2 1.2 1.2h5.6c.6 0 1.2-.5 1.2-1.2-.1-.6-.6-1.2-1.2-1.2zm-11.1 0h-5.6c-.6 0-1.2.5-1.2 1.2 0 .6.5 1.2 1.2 1.2h5.6c.6 0 1.2-.5 1.2-1.2-.1-.6-.6-1.2-1.2-1.2zm-22.3 0h-2v-2c0-.6-.5-1.2-1.2-1.2-.6 0-1.2.5-1.2 1.2v3.2c0 .6.5 1.2 1.2 1.2h3.2c.6 0 1.2-.5 1.2-1.2-.1-.6-.6-1.2-1.2-1.2z"></path><path fill="C1C0C0" d="M18.7 50.5c.6 0 1.2-.5 1.2-1.2v-3.2c0-.6-.5-1.2-1.2-1.2-.6 0-1.2.5-1.2 1.2v3.2c.1.7.6 1.2 1.2 1.2z"></path><g fill="#333"><path d="M56.1 7.5H31.5l-7.1-5.7c-.2-.2-.4-.3-.7-.3H8c-.7 0-1.2.5-1.2 1.2v4.9H2.7c-.7-.1-1.2.5-1.2 1.1v37c0 .6.5 1.2 1.2 1.2h53.4c.6 0 1.2-.5 1.2-1.2v-37c0-.6-.6-1.2-1.2-1.2zm-1.3 37h-51V9.9H8c.6 0 1.2-.5 1.2-1.2V3.8h14.1l7.1 5.7c.2.2.4.3.7.3h23.7v34.7z"></path><path d="M20.4 27.8c-.2-.1-.4-.2-.6-.2-.2 0-.4 0-.6.2-.1.2-.2.4-.2.6 0 .2.1.4.2.6.2.1.4.2.6.2.2 0 .4 0 .6-.2.2-.2.3-.4.3-.6 0-.2-.1-.5-.3-.6zm1.3-4.4v1h3l-3.1 4.7h5v-.9h-3.1l3.1-4.8zm6.2 0H29v5.7h-1.1zm.5-3.1c-.2 0-.4.1-.6.3-.1.2-.2.4-.2.6 0 .3.1.5.2.6.2.1.4.2.6.2.2 0 .4 0 .6-.2.2-.2.3-.4.3-.6 0-.2-.1-.4-.3-.6-.2-.2-.4-.3-.6-.3zm3.6 2.9h-1.1v8.9H32V28c.2.3.5.6.8.8.3.2.7.3 1.2.3.4 0 .8 0 1.2-.2.4-.1.7-.3 1-.6.3-.3.5-.5.6-1 .1-.4.2-.7.2-1.2 0-.4-.1-.8-.2-1.2-.2-.3-.4-.6-.6-1-.3-.2-.6-.4-1-.6-.3-.1-.7-.2-1.2-.2-.4 0-.8.1-1.2.3-.4.2-.6.5-.8.8v-1zm.1 2.3c.1-.2.2-.4.4-.6.2-.2.4-.3.6-.4.3-.1.5-.2.8-.2.3 0 .5 0 .7.2.3.1.4.2.6.4.2.2.3.4.4.6.1.2.1.4.1.7 0 .2 0 .5-.1.7-.1.2-.2.4-.4.6-.2.2-.4.3-.6.4-.2.1-.4.2-.7.2-.3 0-.6-.1-.8-.2-.2-.1-.4-.2-.6-.4-.2-.2-.3-.4-.4-.6-.1-.1-.1-.3-.1-.6 0-.2 0-.5.1-.8z"></path></g><circle cx="43.5" cy="43.8" r="7.4" fill="#F26722"></circle><path fill="#FFF" d="M42.491 46.601l4.172-4.171 1.414 1.414-4.172 4.172z"></path><path fill="#FFF" d="M42.484 40.985l1.415-1.414 4.171 4.172-1.414 1.414z"></path><path fill="#FFF" d="M39.8 42.8h5.9v2h-5.9z"></path></svg></span>
            <p className="text-5xl text-gray-700 font-nunito">
              Use prebuilt content
            </p>
          </div>

          <p className="px-24 text-gray-500 py-9">
            Start from a template, tweak our sample courses, or choose from
            hundreds of ready-to-go, customizable lessons on practical business
            topics.
          </p>
          <img
            src="https://riseusercontent.com/assets/rise/assets/marketing-images/how/opt-in-1@3x.png"
            alt=""
            className="w-[51rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Domain;
