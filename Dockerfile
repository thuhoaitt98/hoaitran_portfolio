FROM node:20-alpine AS builder
WORKDIR /app

ARG RESEND_API_KEY
ENV RESEND_API_KEY=${RESEND_API_KEY}


COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force

COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ARG RESEND_API_KEY
ENV RESEND_API_KEY=${RESEND_API_KEY}

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
