# Utiliza o Alpine Linux por ser uma imagem leve
FROM alpine:latest

# Instala o wget (para acessar a URL) e o cronie (daemon de cron leve)
RUN apk add --no-cache wget cronie

# Copia o arquivo de configuração do cron para o diretório padrão
COPY crontab /etc/crontabs/root

# Executa o daemon do cron em primeiro plano para manter o container ativo
CMD ["crond", "-f", "-l", "8"]
