const listeners = new Set();

function interpolate(message, variables = {}) {
  return message.replace(/\{(\w+)\}/g, (_, key) => String(variables[key] ?? `{${key}}`));
}

const DYNAMIC_MESSAGES = {
  __text_size: "Tamanho do texto: {label}.",
  __setting_state: "{label} {state}.",
};

export function t(source, variables) {
  return interpolate(DYNAMIC_MESSAGES[source] ?? source, variables);
}

export function getLanguage() {
  return "pt-BR";
}

export function setLanguage() {
  document.documentElement.lang = "pt-BR";
}

export function onLanguageChange(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setupI18n() {
  document.documentElement.lang = "pt-BR";
  try {
    localStorage.removeItem("farolLanguage");
  } catch { }
  listeners.forEach((listener) => listener("pt-BR"));
}
