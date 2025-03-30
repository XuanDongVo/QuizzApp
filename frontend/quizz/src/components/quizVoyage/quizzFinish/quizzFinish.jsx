'use client';
import React from "react";
import { useQuizContext } from "@/context/quizzContext";
const QuizzFinish = () => {
    const { answerCorrect, answerIncorrect, score } = useQuizContext();
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-900 to-purple-600"
            style={{
                backgroundImage: "url(https://cf.quizizz.com/themes/v2/classic/bg_image.jpg)",
            }}
        >
            {/* Main Container */}
            <div className="bg-gray-900 bg-opacity-90 rounded-lg p-6  w-[528px] text-white">
                {/* Header */}
                <div className="text-center">
                    <p className="text-sm text-gray-400">SUMMARY</p>
                    <h1 className="text-2xl font-bold mt-2">YOU NAILED IT, CHAMP!</h1>
                </div>

                {/* Quiz Info */}
                <div className="flex items-center justify-center mt-4">
                    <div className="h-full w-full">
                        <div className="overflow-hidden">
                            <div className="w-full p-3 bg-transparent"></div>
                            <div className="w-full h-full flex flex-row border border-black bg-black rounded-xl">
                                {/* Left Section (2/3 width) */}
                                <div className="w-2/3 h-full p-4">
                                    {/* Player Name */}
                                    <div className="mb-1.5 text-xl text-white overflow-hidden whitespace-nowrap text-ellipsis text-start flex items-center">
                                        <span
                                            data-testid="player-id-desktop"
                                            data-cy="player-name"
                                            className="inline-block w-64 whitespace-nowrap text-ellipsis text-xl font-bold mb-3"
                                        >
                                            hài gaming
                                        </span>
                                    </div>

                                    {/* Coin Reward and Button */}
                                    <div>
                                        <div className="flex flex-row justify-between items-center">
                                            {/* Coin Pill */}
                                            <div className="cursor-default pointer-events-none">
                                                <div className="flex flex-row items-center cursor-default">
                                                    {/* Coin Icon */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 28 27"
                                                        fill="none"
                                                        className="z-[1] w-8"
                                                    >
                                                        <path
                                                            d="M26.5484 13.5001C26.5484 20.4309 20.9308 26.0485 14 26.0485C7.06911 26.0485 1.45154 20.4309 1.45154 13.5001C1.45154 6.56923 7.06911 0.951659 14 0.951659C20.9308 0.951659 26.5484 6.56923 26.5484 13.5001Z"
                                                            fill="url(#paint0_linear_1354_9896)"
                                                            stroke="url(#paint1_linear_1354_9896)"
                                                            strokeWidth="1.56982"
                                                        />
                                                        <path
                                                            opacity="0.5"
                                                            d="M2.98011 20.7358C3.08745 20.9028 3.20075 21.0578 3.30808 21.2069L21.3224 2.36373C21.1554 2.2564 20.9765 2.1431 20.7917 2.02981C20.6068 1.91651 20.4279 1.81514 20.249 1.71973C14.3755 7.86165 8.50188 14.0036 2.6283 20.1455C2.73563 20.3363 2.84893 20.5331 2.98011 20.7358Z"
                                                            fill="#FFE7BB"
                                                        />
                                                        <path
                                                            opacity="0.5"
                                                            d="M5.91391 24.1174C6.58773 24.6302 7.2377 25.0178 7.79822 25.31C13.5883 19.1749 19.606 12.8614 25.4846 6.71729C25.1685 6.19255 24.769 5.59624 24.2502 4.98205C23.6778 4.2963 23.1113 3.7477 22.6044 3.31836C16.4685 9.73458 10.3385 16.1508 4.20251 22.567C4.64974 23.0441 5.21623 23.5867 5.91987 24.1174H5.91391Z"
                                                            fill="#FBE1BB"
                                                        />
                                                        <path
                                                            d="M13.9993 22.5123C18.9725 22.5123 22.9975 18.4813 22.9975 13.5141C22.9975 8.54688 18.9665 4.51587 13.9993 4.51587C9.03211 4.51587 5.0011 8.54688 5.0011 13.5141C5.0011 18.4813 9.03211 22.5123 13.9993 22.5123Z"
                                                            fill="url(#paint2_linear_1354_9896)"
                                                        />
                                                        <path
                                                            d="M11.4536 8.08584C11.4536 8.08584 11.4417 8.08584 11.4357 8.08584C11.4298 8.08584 11.4238 8.08584 11.4178 8.08584C8.74641 9.48715 7.69095 12.7787 9.06841 15.474C10.1239 17.5372 12.3004 18.6404 14.4709 18.4436C14.6081 18.4317 14.7273 18.3959 14.8406 18.3363C15.3177 18.0918 15.5502 17.4776 15.2819 16.9648C15.0911 16.5891 14.6975 16.3625 14.2741 16.3983C12.9205 16.5235 11.5669 15.8318 10.8991 14.5438C10.0344 12.8563 10.6963 10.799 12.3779 9.92842C14.0595 9.06974 16.1227 9.74356 16.9873 11.4192C17.6432 12.7012 17.4167 14.2099 16.5222 15.2415C16.2479 15.5575 16.2002 16.0167 16.397 16.3864C16.6653 16.9111 17.2914 17.0841 17.7685 16.8276C17.8818 16.768 17.9831 16.6965 18.0726 16.5891C19.5037 14.9493 19.8734 12.5343 18.818 10.4711C17.4405 7.78173 14.1489 6.71434 11.4536 8.07391V8.08584Z"
                                                            fill="url(#paint3_linear_1354_9896)"
                                                        />
                                                        <path
                                                            d="M17.0114 20.2171C17.7031 20.2171 18.2636 19.6566 18.2636 18.9649C18.2636 18.2732 17.7031 17.7126 17.0114 17.7126C16.3197 17.7126 15.7592 18.2732 15.7592 18.9649C15.7592 19.6566 16.3197 20.2171 17.0114 20.2171Z"
                                                            fill="#FEC35F"
                                                        />
                                                        <g opacity="0.4">
                                                            <path
                                                                d="M16.3965 18.1526C16.1461 18.2838 16.0149 18.5462 16.0924 18.7251C16.1759 18.892 16.4561 18.9159 16.7126 18.7668C16.957 18.6356 17.0703 18.409 16.9868 18.2361C16.9034 18.0691 16.641 18.0155 16.3965 18.1466V18.1526Z"
                                                                fill="#F8DBB7"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <linearGradient
                                                                id="paint0_linear_1354_9896"
                                                                x1="14"
                                                                y1="0.166748"
                                                                x2="14"
                                                                y2="26.8334"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#FFAC12" />
                                                                <stop offset="1" stopColor="#E07B00" />
                                                            </linearGradient>
                                                            <linearGradient
                                                                id="paint1_linear_1354_9896"
                                                                x1="14"
                                                                y1="0.166748"
                                                                x2="14"
                                                                y2="26.8334"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="white" />
                                                                <stop offset="1" stopColor="#E38209" stopOpacity="0" />
                                                            </linearGradient>
                                                            <linearGradient
                                                                id="paint2_linear_1354_9896"
                                                                x1="14.4504"
                                                                y1="23.0416"
                                                                x2="14.9276"
                                                                y2="4.43246"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#863D1D" />
                                                                <stop offset="1" stopColor="#B3530A" />
                                                            </linearGradient>
                                                            <linearGradient
                                                                id="paint3_linear_1354_9896"
                                                                x1="13.9438"
                                                                y1="7.48364"
                                                                x2="13.9438"
                                                                y2="18.4661"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop stopColor="#FECD7A" />
                                                                <stop offset="1" stopColor="#FFA82D" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    {/* Coin Amount */}
                                                    <div className="border font-bold flex items-center text-white text-lg pl-8 -ml-6 pr-2 rounded-full bg-gray-800">
                                                        <span>500 coins</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Go to Shop Button */}
                                            <div className="ml-3">
                                                <button
                                                    aria-label="Go to shop"
                                                    className="box-border select-none font-bold border text-center text-black bg-gray-300 border-gray-500 hover:bg-gray-200 active:bg-gray-100 px-3 py-1 sm:py-2 text-sm sm:text-base w-fit rounded cursor-pointer"
                                                    data-testid="go-to-shop-desktop"
                                                >
                                                    Go to shop
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Section (1/3 width) - Avatar */}
                                <div className="w-1/3 h-5/6 flex justify-center relative">
                                    <div className="absolute overflow-hidden -top-11">
                                        <div className="transition-all" style={{ overflow: "hidden", width: "150.966px", height: "250px" }}>
                                            <div className="h-full w-full">
                                                <div className="relative">
                                                    {/* Avatar Body */}
                                                    <div className="absolute top-0">
                                                        <svg
                                                            width="150.96618357487924"
                                                            height="250"
                                                            viewBox="0 0 230 380"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="transition-all"
                                                        >
                                                            <path
                                                                fill="#E6E6E6"
                                                                d="M178.471 269.902L171.047 221.043L163.871 191.479C163.135 188.44 161.92 185.595 160.32 183.025C160.292 182.988 160.274 182.952 160.246 182.915C158.562 180.253 156.456 177.885 154.018 175.921C153.972 175.884 153.926 175.847 153.88 175.81C153.484 175.498 153.079 175.186 152.665 174.893C152.656 174.893 152.647 174.893 152.638 174.893C134.596 179.243 100.648 184.365 76.2316 178.509C76.2224 178.537 76.204 178.573 76.1948 178.601C59.0092 216.784 49.616 257.639 47.546 268.663C47.1044 278.86 63.1492 280.292 69.8468 279.741C69.8468 291.297 67.8872 291.389 69.5432 327.342C69.7548 331.867 72.5056 335.888 76.6456 337.558C80.6108 339.174 84.8244 339.624 89.59 339.137C94.8616 338.595 99.0568 334.401 99.71 329.05C102.36 307.525 103.979 292.307 105.754 277.52C106.923 289.957 110.124 314.299 114.964 329.628C117.365 337.219 124.697 342.028 132.453 341.009C133.014 340.936 133.584 340.844 134.146 340.743C141.745 339.376 147.302 332.648 147.403 324.791C147.964 284.065 140.107 248.277 141.11 209.974C141.607 225.119 147.881 257.373 152.941 275.482C154.422 280.815 159.363 284.386 164.809 284.046C166.658 283.936 168.563 283.596 170.329 283.055C175.904 281.384 179.354 275.73 178.471 269.902Z"
                                                            />
                                                            <path
                                                                opacity="0.26"
                                                                fill="#202020"
                                                                d="M62.79 279.63C65.4856 279.915 68.0064 279.915 69.8464 279.759C69.3312 277.96 75.4492 222.896 76.9028 213.121C76.9028 213.121 66.2492 261.346 62.7992 279.639L62.79 279.63Z"
                                                            />
                                                            <path
                                                                opacity="0.26"
                                                                fill="#202020"
                                                                d="M160.319 183.033C160.319 183.033 160.273 182.96 160.246 182.923C158.562 180.261 156.455 177.902 154.017 175.929C153.971 175.892 153.925 175.856 153.879 175.819C153.474 175.498 153.051 175.204 152.637 174.91C134.596 179.261 100.648 184.383 76.2311 178.527C76.2219 178.554 76.2035 178.591 76.1943 178.618C99.2863 190.844 141.478 187.953 160.328 183.033H160.319Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    {/* Avatar Face */}
                                                    <div className="absolute top-0">
                                                        <svg
                                                            width="150.96618357487924"
                                                            height="250"
                                                            viewBox="0 0 230 380"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="transition-all"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M50.4778 106.45C44.6095 126.508 42.2065 157.657 57.5429 170.176H57.5967C83.7136 191.511 152.856 176.429 163.68 171.767C172.349 168.038 177.088 162.279 181.181 155.149C184.896 148.678 188.935 130.689 186.512 117.198C185.352 110.882 183.343 105.047 181.241 100.221C174.02 79.1462 152.65 62.3078 115.739 61.8042C88.1265 61.4253 66.6561 74.0293 56.0487 92.6234C55.6335 93.3223 55.2158 94.097 54.7991 94.9403C52.944 98.5848 51.4926 102.438 50.4778 106.45Z"
                                                                fill="#E6E6E6"
                                                            />
                                                            <path
                                                                d="M109.993 155.753C113.87 155.753 116.993 150.707 116.993 144.455C116.993 138.203 113.87 133.157 109.993 133.157C106.116 133.157 102.992 138.203 102.992 144.455C102.992 150.707 106.116 155.753 109.993 155.753Z"
                                                                fill="black"
                                                            />
                                                            <path
                                                                d="M64.4889 152.188C68.3661 152.188 71.4893 147.416 71.4893 141.493C71.4893 135.57 68.3661 130.799 64.4889 130.799C60.6118 130.799 57.4885 135.57 57.4885 141.493C57.4885 147.416 60.6118 152.188 64.4889 152.188Z"
                                                                fill="black"
                                                            />
                                                        </svg>
                                                    </div>
                                                    {/* Accessories */}

                                                    <div className="absolute top-0">
                                                        <img
                                                            src="https://quizizz.com/_media/avatar-assets/headgear/traffic_cone.svg"
                                                            alt="headgear"
                                                            className="transition-all"
                                                            style={{ height: "250px", width: "150.966px" }}
                                                        />
                                                    </div>
                                                    <div className="absolute top-0">
                                                        <img
                                                            src="https://quizizz.com/_media/avatar-assets/footwear/g_sports_shoes.svg"
                                                            alt="footwear"
                                                            className="transition-all"
                                                            style={{ height: "250px", width: "150.966px" }}
                                                        />
                                                    </div>
                                                    <div className="absolute top-0">
                                                        <img
                                                            src="https://quizizz.com/_media/avatar-assets/bottomwear/gr_bermuda.svg"
                                                            alt="bottomwear"
                                                            className="transition-all"
                                                            style={{ height: "250px", width: "150.966px" }}
                                                        />
                                                    </div>
                                                    <div className="absolute top-0">
                                                        <img
                                                            src="https://quizizz.com/_media/avatar-assets/topwear/one_fb_jersey.svg"
                                                            alt="topwear"
                                                            className="transition-all"
                                                            style={{ height: "250px", width: "150.966px" }}
                                                        />
                                                    </div>
                                                    <div className="absolute top-0">
                                                        <img
                                                            src="https://quizizz.com/_media/avatar-assets/accessory/o_scarf.svg"
                                                            alt="body-accessory"
                                                            className="transition-all"
                                                            style={{ height: "250px", width: "150.966px" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rank and Score */}
                <div className="flex justify-between mt-4 w-full">
                    <div className="w-full h-full flex flex-row gap-2 ">
                        <div className="w-1/2 border border-black bg-black rounded-xl p-4">
                            <div className="flex flex-row items-center gap-3">
                                <p className="text-sm text-gray-400">RANK</p>
                                <p className="text-lg font-semibold">16/21</p>
                            </div>
                        </div>
                        <div className="w-1/2 border border-black bg-black rounded-xl p-4">
                            <div className="flex flex-row items-center gap-3">
                                <p className="text-sm text-gray-400">SCORE</p>
                                <p className="text-lg font-semibold">{score}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 space-y-3">
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
                        Play again
                    </button>
                    <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200">
                        Home
                    </button>
                </div>

                {/* Performance Stats */}
                <div className="mt-6">
                    <h3 className="text-sm font-semibold">PERFORMANCE STATS</h3>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-800 p-3 rounded-lg text-center">
                            <p className="text-2xl font-bold text-green-400">{answerCorrect}</p>
                            <p className="text-xs text-gray-400">Correct</p>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-lg text-center">
                            <p className="text-2xl font-bold text-yellow-400">0</p>
                            <p className="text-xs text-gray-400">Partially correct</p>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-lg text-center">
                            <p className="text-2xl font-bold text-red-400">{answerIncorrect}</p>
                            <p className="text-xs text-gray-400">Incorrect</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-gray-800 p-3 rounded-lg text-center">
                            <p className="text-2xl font-bold">2s</p>
                            <p className="text-xs text-gray-400">Time/ques</p>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-lg text-center">
                            <p className="text-2xl font-bold text-orange-400">0</p>
                            <p className="text-xs text-gray-400">Streak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizzFinish;