<div align="center">
    <h1>Quote API</h1>
    <img src="https://gdg.cvr.ac.in/_next/image?url=%2Flogo.png&w=3840&q=75" alt="Google Developer Groups" width="80" />
</div>

<div align="center">

## A serverless quote API built for GDG on Campus

<h2>Hi GDG on Campus recruiters!</h2>

This project is my Cloud Track submission: a lightweight backend that serves a random quote from Firestore through a serverless API hosted on Vercel.

[![Firebase](https://img.shields.io/badge/Database-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=111827)](https://firebase.google.com/docs/firestore)
[![Vercel](https://img.shields.io/badge/Hosted%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

**Live API:** [serverless-quote-api.vercel.app/api/quote](https://serverless-quote-api.vercel.app/api/quote/) 🚀

</div>

---

## Project Description

Quote API fetches quote documents from a Firestore `quotes` collection, selects one at random, and returns it as a JSON response.

### Features

- 🎲 Random quote selection from Firestore
- ☁️ Serverless backend with no server maintenance
- 🔐 Secure Firebase Admin configuration through environment variables
- 🌐 CORS support for frontend integration
- ✅ Clear success and error responses

## Technology Stack

| Technology | Used for |
| --- | --- |
| Node.js | Backend runtime |
| Firebase Admin SDK | Firestore authentication and access |
| Cloud Firestore | Quote storage |
| Vercel Functions | Serverless deployment |

## Challenges Faced & How I Solved Them

### 1. Firebase Admin SDK v12+ compatibility

**Challenge:** The latest SDK caused a runtime error with the older `admin.credential.cert()` pattern.

**Solution:** Updated the function to use the modern modular imports: `initializeApp`, `getApps`, `cert`, and `getFirestore`.

### 2. Multiline private key formatting

**Challenge:** Vercel environment variables flattened the Firebase private key newlines, breaking authentication.

**Solution:** Restored newline characters dynamically with `.replace(/\\n/g, '\n')` before initializing Firebase.

### 3. Re-initialization in warm serverless instances

**Challenge:** Re-initializing Firebase on every request could trigger duplicate app errors.

**Solution:** Added a singleton guard with `if (!getApps().length)` so the app initializes only when needed.

## Project Structure

```text
serverless-quote-api/
├── api/
│   └── quote.js
├── package.json
├── .gitignore
└── README.md
```

> Sensitive files such as `.env` and `serviceAccountKey.json` are excluded from Git.

## Connect With Me

I would love to connect with the GDG on Campus community at ABES Engineering College. 🤝

| Platform | Link |
| --- | --- |
| GitHub | [Add your GitHub profile](https://github.com/vedisvigourous) |
| LinkedIn | [Add your LinkedIn profile](https://linkedin.com/in/vadanta) |
| Email | `vadanta592007@hotmail.com` |

---

<div align="center">

**Built with curiosity, cloud, and a lot of quotes.**

Thank you for reviewing my work, GDG on Campus team! ✨
