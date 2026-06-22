#!/bin/bash
set -e

APP_DIR="/var/www/Webcah"
PM2_APP="webcah-production"

echo "→ Pulling latest code..."
cd "$APP_DIR"
git pull origin main

mkdir -p logs

echo "→ Installing dependencies..."
npm ci

echo "→ Building..."
npm run build

echo "→ Restarting PM2..."
pm2 restart "$PM2_APP" || pm2 start ecosystem.config.js

echo "✓ Deploy complete — $(date)"
