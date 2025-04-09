import React from "react";

const AppInt = () => {



    const appItem = [
        {img :'https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/cardImages/slack.png' ,
         title : 'Slack',
         dec : 'Alert people in Slack about new, upcoming, and overdue Rise training, or about training that needs to be published to your Rise library.',
         last : 'Learn more'
        },
        {img :'https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/cardImages/zapier.png' ,
         title : 'Zapier',
         dec : 'Connect Rise with more than 2,000 web apps using our Zapier integration, and build workflows that invite people to Rise. Soon, you’ll be able to use this integration to manage groups and trigger actions in other apps when users start, complete, or have overdue training, and more.',
         last:'Learn More'
        },
        {img :'https://riseusercontent.com/assets/rise/assets/marketing-images/integrations/cardImages/msteams.png' ,
         title : 'Microsoft Teams',
         dec : 'As with Slack, you can alert people in Microsoft Teams about new, upcoming, and overdue Rise training, or about training that needs to be published to your Rise library.',
         last : 'Learn more'
        },
    ]
  return (
    <div className="bg-gray-100 py-9">
      <div className="flex flex-col justify-center items-center">
        <span>
          <svg fill="none" viewBox="0 0 76 44" className="w-16 h-20">
            <g clip-path="url(#integrations-devices_svg__integrations-devices_svg__clip0)">
              <path
                fill="#BFBFBF"
                d="M45.266 41.27c-3.176-.703-5.638-3.121-6.353-6.242-3.812.078-7.703-.39-11.356-.078-.715 3.12-3.256 5.617-6.433 6.32a2.426 2.426 0 00-1.906 2.34V44h27.954v-.39c-.08-1.092-.794-2.106-1.906-2.34z"
              ></path>
              <path
                fill="#8D8D8E"
                d="M41.137 39.085a8.666 8.666 0 01-2.303-4.057c-3.812.078-7.703-.39-11.357-.078-.238.936-.555 1.795-1.111 2.497l14.77 1.638z"
                opacity="0.45"
              ></path>
              <path
                stroke="#393633"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2.25"
                d="M6.274 19.27V.858h53.605v9.05M50.11 34.716H13.58"
              ></path>
              <path
                stroke="#393633"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2.25"
                d="M72.903 42.674H52.652c-1.191 0-2.144-.936-2.144-2.107V12.092c0-1.17.953-2.106 2.144-2.106h20.25c1.192 0 2.145.936 2.145 2.106v28.475c.08 1.17-.874 2.107-2.144 2.107zm-60.435 0H1.985c-.635 0-1.111-.468-1.111-1.093V20.674c0-.624.476-1.093 1.111-1.093h10.483c.635 0 1.112.469 1.112 1.093V41.58c0 .625-.477 1.093-1.112 1.093zM1.985 22.624h10.483M1.985 39.787h10.483"
              ></path>
              <path
                fill="#FF6602"
                d="M45.584 14.199c0 6.787-5.638 12.326-12.547 12.326-6.91 0-12.627-5.461-12.627-12.326M69.409 25.51c0 3.59-2.939 6.554-6.671 6.554-3.653 0-6.671-2.887-6.671-6.553m-45.425 3.9c0 1.873-1.51 3.433-3.495 3.433s-3.494-1.482-3.494-3.433"
              ></path>
            </g>
            <defs>
              <clipPath id="integrations-devices_svg__integrations-devices_svg__clip0">
                <path fill="#fff" d="M0 0h76v44H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </span>
        <p className="lg:text-6xl text-4xl   font-semibold">App Integrations</p>
        <p className="text-base py-6 px-4">
          Effortlessly integrate Rise with your favorite apps
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 md:px-32 px-4  py-6 ">
        {appItem.map((item , index )  =>(
            <div className="flex flex-col justify-start  items-center  ">
            <img
                src={item.img}
                alt=""
                className="w-80 rounded-2xl  "
            />
            <div  className="py-7 lg:px-14   px-4  " >
                <p className="text-xl font-semibold text-start ">{item.title}</p>
                <p className="py-3 ">{item.dec}</p>
                <p  className="underline underline-offset-8  text-orange-600  ">{item.last}</p>
                </div>
            </div>
        ))

        }
  
      </div>
    </div>
  );
};

export default AppInt;
