// CORS configuration for all environment URLs
const corsOrigins = [
  // Local development
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  
  // Production (prod-main)
  'https://prashanth-app-beerstore.onrender.com',
  
  // Staging (stg-release)
  'https://prashanth-app-beerstore-stg.onrender.com',
  
  // QA (qa1-qa)
  'https://prashanth-app-beerstore-qa1.onrender.com',
  
  // Dev (dev1-develop)
  'https://prashanth-app-beerstore-dev1.onrender.com'
];

module.exports = {
  corsOrigins,
  corsOptions: {
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      if (corsOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
};
