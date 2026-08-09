export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAciupCRpG7eXcjf67P6LPrjnDKgPFHlxk",
  authDomain: "farol-da-acessibilidade.firebaseapp.com",
  projectId: "farol-da-acessibilidade",
  storageBucket: "farol-da-acessibilidade.firebasestorage.app",
  messagingSenderId: "608135377557",
  appId: "1:608135377557:web:e1677df9aae25ed925a19c",
  measurementId: "G-0Y4QN0CQQF"
};

const SDK_VERSION = "12.16.0";
const REQUIRED_CONFIG_FIELDS = ["apiKey", "authDomain", "projectId", "storageBucket", "messagingSenderId", "appId"];

export const isFirebaseConfigured = () =>
  FIREBASE_CONFIG.projectId === "farol-da-acessibilidade" &&
  REQUIRED_CONFIG_FIELDS.every((field) => typeof FIREBASE_CONFIG[field] === "string" && FIREBASE_CONFIG[field].trim());

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
