const JoinQuizSection = () => {
    return (
        <div className="max-w-8/12 mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4 sm:px-6 gap-4 md:gap-6">
            {/* Join Quiz Input */}
            <div className="w-full md:flex-[2]">
                <div className="bg-white flex flex-col justify-center items-center p-4 sm:p-6 space-y-4 h-[180px] sm:h-[200px] shadow-md rounded-2xl">
                    <div className="flex flex-col items-center border-2 border-gray-300 p-2 rounded-2xl bg-gray-50">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <input
                                type="text"
                                placeholder="Enter a join code"
                                className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-[var(--background-primary)]"
                            />
                            <button className="bg-[var(--background-primary)] text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-[var(--background-primary)]/80 transition duration-300">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Greeting and Coins */}
            <div className="w-full md:flex-[1] flex items-center space-x-3 sm:space-x-4 bg-gradient-to-br from-[#d5baf3] to-[#f6ebff] shadow-md rounded-2xl h-[180px] sm:h-[200px] p-4 sm:p-6">
                <div className="flex-1 flex flex-col justify-center space-y-1">
                    <div className="text-base sm:text-lg font-semibold text-gray-800">Hello hàii,</div>
                    <div className="flex space-x-2 sm:space-x-3">
                        <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm sm:text-base">10 Coins</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm sm:text-base">500 Coins</span>
                        </div>
                    </div>
                </div>
                {/* Avatar Container */}
                <div className="relative flex justify-center items-center">
                    <div className="transition-all" style={{ width: "140px", height: "160px", maxHeight: "160px", overflow: "hidden" }}>
                        <div className="h-full w-full relative">
                            <div className="absolute top-0">
                                {/* Avatar Body */}
                                <svg
                                    width="140"
                                    height="160"
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
                                    width="140"
                                    height="160"
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
                                    style={{ height: "160px", width: "140px" }}
                                />
                            </div>
                            <div className="absolute top-0">
                                <img
                                    src="https://quizizz.com/_media/avatar-assets/footwear/g_sports_shoes.svg"
                                    alt="footwear"
                                    className="transition-all"
                                    style={{ height: "160px", width: "140px" }}
                                />
                            </div>
                            <div className="absolute top-0">
                                <img
                                    src="https://quizizz.com/_media/avatar-assets/bottomwear/gr_bermuda.svg"
                                    alt="bottomwear"
                                    className="transition-all"
                                    style={{ height: "160px", width: "140px" }}
                                />
                            </div>
                            <div className="absolute top-0">
                                <img
                                    src="https://quizizz.com/_media/avatar-assets/topwear/one_fb_jersey.svg"
                                    alt="topwear"
                                    className="transition-all"
                                    style={{ height: "160px", width: "140px" }}
                                />
                            </div>
                            <div className="absolute top-0">
                                <img
                                    src="https://quizizz.com/_media/avatar-assets/accessory/o_scarf.svg"
                                    alt="body-accessory"
                                    className="transition-all"
                                    style={{ height: "160px", width: "140px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinQuizSection;