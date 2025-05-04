
// WHITELIST_DOMAINS = ["http://localhost:3000", process.env.CLIENT_URL]
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin && process.env.BUILD_MODE === 'dev') {
//             return callback(null, true)
//         }
//         if (WHITELIST_DOMAINS.includes(origin)) {
//             return callback(null, true)
//         }
//         return callback(new Error('Not allowed by CORS'))
//     },
//     optionsSuccessStatus: 200,

//     credentials: true
// }


// module.exports = {
//     corsOptions
// };


const corsOptions = {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
};

module.exports = {
    corsOptions,
};
