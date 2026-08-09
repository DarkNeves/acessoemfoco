export const FIREBASE_CONFIG = {
  apiKey: "SEU_FIREBASE_API_KEY",
  authDomain: "SEU_FIREBASE_PROJECT_ID.firebaseapp.com",
  projectId: "SEU_FIREBASE_PROJECT_ID",
  storageBucket: "SEU_FIREBASE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_FIREBASE_APP_ID",
};

const SDK_VERSION = "12.16.0";

export const isFirebaseConfigured = () =>
  Object.values(FIREBASE_CONFIG).every((value) => value && !value.startsWith("SEU_"));

export async function connectFirebase() {
  if (!isFirebaseConfigured()) return null;

  try {
    const [appModule, firestoreModule] = await Promise.all([
      import(`https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-app.js`),
      import(`https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-firestore.js`),
    ]);
    const app = appModule.initializeApp(FIREBASE_CONFIG);
    const db = firestoreModule.getFirestore(app);
    return { db, ...firestoreModule };
  } catch (error) {
    console.error("Não foi possível iniciar o Firebase. Confira js/firebase-config.js e a conexão.", error);
    return null;
  }
}

