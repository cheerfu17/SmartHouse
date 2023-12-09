import http from 'http';
import fs from 'fs';

// Функция для получения глобального IP-адреса
function getGlobalIp() {
  return new Promise((resolve, reject) => {
    http.get('http://ipinfo.io', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const ip = JSON.parse(data).ip;
        resolve(ip);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Вызываем функцию для получения глобального IP-адреса
getGlobalIp()
  .then((ip) => {
    fs.writeFile('global_ip.js', `export const IP = "http://${ip}:5050/"`, (err) => {
      if (err) {
        console.error('Ошибка при записи в файл:', err);
      } else {
        console.log('Глобальный IP-адрес успешно записан в файл global_ip.js');
      }
    });
  })
  .catch((err) => {
    console.error('Ошибка при получении глобального IP-адреса:', err);
  });