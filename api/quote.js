const { initializeApp, getApps, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Initialize Firebase securely using the modern v12+ modular syntax
if (!getApps().length) {
    initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            // Replace handles the newline characters in the private key correctly
            privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
        })
    });
}

const db = getFirestore();

export default async function handler(req, res) {
    // Set CORS headers so your frontend can call this later if needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const quotesRef = db.collection('quotes');
        const snapshot = await quotesRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ error: 'No quotes found in the database.' });
        }

        const quotes = [];
        snapshot.forEach(doc => {
            quotes.push({ id: doc.id, ...doc.data() });
        });

        // Generate a random index to select a random quote
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        // Return the payload in JSON format
        res.status(200).json(randomQuote);
        
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ error: 'Failed to fetch quote from the server.' });
    }
}