const https = require('https');

console.log("Executando tarefa de pagamento...");

https.get('https://lojadanacao.com/wp-cron.php?doing_cron=true', (resp) => {
  let data = '';
  
  resp.on('data', (chunk) => {
    data += chunk;
  });
  
  resp.on('end', () => {
    console.log("Tarefa concluída com sucesso.");
    process.exit(0); // Garante que o processo termine
  });
}).on('error', (err) => {
  console.error("Erro ao executar tarefa:", err.message);
  process.exit(1); // Sai com erro se falhar
});
