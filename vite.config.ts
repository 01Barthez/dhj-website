import { defineConfig, UserConfigExport, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { config as loadEnvSafe } from "dotenv-safe";

// Load environment variables early
loadEnvSafe({
  allowEmptyValues: false, // Fait crash s'il manque une var => safe
  example: path.resolve(__dirname, '.env.example'), // Pour encore plus de sécurité
});

// Récupère PORT de l'env (et force le fallback en 8080 si VRAIMENT absent, mais log l'erreur)
const PORT = parseInt(process.env.VITE_PORT || "8080", 10);

export default defineConfig(({ mode }: ConfigEnv) => {
  const isDevelopment = mode === 'development';

  return {
    server: {
      host: true, // "::" = IPV6 only, 'true' accepte IPv4/IPv6
      port: PORT,
    },
    plugins: [
      react(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      sourcemap: isDevelopment, // Source maps que en dev
      outDir: "dist",
      emptyOutDir: true, // Clean dist avant chaque build
    },
  };
});
