module.exports = {
  apps: [
    {
      name: 'webcah-production',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: '. /',
      instances: 1,              // ✅ TYLKO 1 instancja
      exec_mode: 'fork',         // ✅ Fork mode zamiast cluster
      autorestart: true,
      watch: false,
      max_memory_restart: '512M', // ✅ 512MB limit (zamiast 1GB)
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      
      // ✅ Niski priorytet CPU (opcjonalne)
      nice:  10, // Wyższy = niższy priorytet (-20 do 19)
    },
  ],
};