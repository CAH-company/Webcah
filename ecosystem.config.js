module.exports = {
  apps: [
    {
      name:  'webcah-production',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: '/var/www/Webcah',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env_file: './. env',  // 👈 Załaduj zmienne z .env
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm: ss Z',
      merge_logs: true,
    },
  ],
};
