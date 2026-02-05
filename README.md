## Test My Knowledge – Frontend

A Next.js (App Router) frontend for quiz generation/playback and PDF-based document chat, with Clerk authentication.

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

- Default URL: `http://localhost:3000`

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Run linter (optional)

```bash
npm run lint
```

---

## Core Routes & Features

### `/` – Landing Page

- Marketing/landing page composed of sections like Hero, Features, Pricing, and Testimonials.
- Entry point that typically links to **Quiz**, **Document Chat**, and **Auth** flows.

---

### `/quiz` – Quiz Generation & Player

Implemented in `app/quiz`.

**Flow (via Zustand `quizStore`):**

- **`setup` phase** – `QuizSetup`  
  - User configures quiz settings (e.g., topic, difficulty, etc.).

- **`loading` phase** – (currently reuses `QuizSetup` in code)  
  - Can be adapted to show loading UI while questions are being prepared.

- **`playing` phase** – `QuizPlayer`  
  - User answers questions in an interactive quiz UI.

- **`result` phase** – `QuizResult`  
  - Displays quiz results (score, correct/incorrect answers, etc.).
  - Uses `Chart.tsx` (Recharts) to visualize performance with charts/graphs.

**Key Quiz Features:**

- Multi-phase quiz experience: setup → play → result.
- Visual result analytics using Recharts.
- Clean separation of components: `QuizSetup`, `QuizPlayer`, `QuizResult`, `Chart`, and `quizStore`.

---

### `/documentChat` – Document Chat (PDF + AI Chat)

Implemented in `app/documentChat` with a modular structure (components, hooks, store, services, utils).

**Main UI Components:**

- **`DocumentUploader`** – Upload PDF documents.
- **`DocumentViewer`** – Render uploaded PDFs using `react-pdf` / `pdfjs-dist` and `usePdfViewer`/`pdfHelpers`.
- **`ChatWindow`** – Displays the chat conversation.
- **`ChatMessage`** – Renders individual messages (user + AI).
- **`ChatInput`** – Input box to send questions about the document.
- **`ChatSideBar`** – Can show previous chats/sessions or document metadata.
- **`DocumentToolbar`** – Controls like zoom, page navigation, etc.
- **`DocumentWithChat`** – Layout component that combines viewer + chat into a single experience.

**State & API:**

- **`documentChatStore.ts`** (Zustand)  
  - Manages chat state, current document, messages, and loading flags.

- **`documentChatApi.ts`**  
  - Service layer for calling backend APIs (uploading documents, getting AI responses, etc.).

**Key Document Chat Features:**

- Upload and view PDFs directly in the browser.
- Ask questions about the document and get AI responses (backed by your API).
- Integrated layout: PDF viewer and chat side-by-side with toolbar and sidebar.

---

### `/checkjwt` – JWT & Backend Call Demo

A small demo route showing how to call the backend with a Clerk-issued JWT token.

- Uses `useAuth` from `@clerk/clerk-react` to get a JWT:

  ```ts
  const { getToken } = useAuth();
  const token = await getToken({ template: "Postman" });
  ```

- Sends a `POST` request to:

  - `http://127.0.0.1:8000/api/video_to_quiz/generate`

- Includes the JWT in the `Authorization: Bearer <token>` header and logs the response.

**Use Case:**  
Developer testing / debugging of the auth + backend integration.

---

### Auth Routes (Clerk)

From the folder structure:

- `app/(auth)/login/[[...login]]/page.tsx` → typically exposed as **`/login`**
- `app/(auth)/signup/[[...signup]]/page.tsx` → typically exposed as **`/signup`**

**Features:**

- Clerk-based authentication (email/password and/or OAuth depending on Clerk config).
- Once logged in, protected flows (e.g., `/quiz`, `/documentChat`, backend calls) can use Clerk JWT.

---

## Tech Stack (Overview)

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript + React 19
- **Styling**: Tailwind CSS 4, custom UI components
- **State Management**: Zustand (`quizStore`, `documentChatStore`)
- **Auth**: Clerk (`@clerk/nextjs`, `@clerk/clerk-react`)
- **Charts**: Recharts (`Chart.tsx` in the Quiz module)
- **PDF Handling**: `react-pdf`, `pdfjs-dist`, custom `usePdfViewer` hook and `pdfHelpers`
- **HTTP/API**: `axios` and native `fetch`

---

## Quick Start

1. `npm install`  
2. `npm run dev`  
3. Open in browser:
   - `http://localhost:3000/quiz` – Quiz flow and results with charts  
   - `http://localhost:3000/documentChat` – PDF upload + document chat  
   - `http://localhost:3000/checkjwt` – JWT + backend API test (for developers)  
   - `http://localhost:3000/login` / `signup` – Clerk auth screens

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
