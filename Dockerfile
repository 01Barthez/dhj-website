# Étape de build avec Bun
FROM oven/bun:1.1.13-alpine AS build

WORKDIR /app

# Copie des fichiers nécessaires pour l'installation
COPY package.json bun.lockb ./

# Installation des dépendances en mode production avec le lockfile
RUN bun install --frozen-lockfile

# Copie du code source
COPY . .

# Construction de l'application (adapté si bun build est bien configuré)
RUN bun run build

# Étape finale de production avec Nginx
FROM nginx:1.27.5-alpine3.21 AS production

WORKDIR /usr/share/nginx/html

# Copie des fichiers générés depuis la phase de build
COPY --from=build /app/dist ./

# Remplacement de la configuration par défaut de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposition du port
EXPOSE 80

# Lancement de Nginx en mode "foreground"
CMD ["nginx", "-g", "daemon off;"]
