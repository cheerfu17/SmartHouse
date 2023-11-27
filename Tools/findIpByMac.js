import { exec } from 'child_process';

async function findIpByMac(macAddress) {
    return new Promise((resolve, reject) => {
      const command = `arp -a | find "${macAddress}"`;
  
      exec(command, (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
  
        const regex = /(?:[0-9]{1,3}\.){3}[0-9]{1,3}/;
        const match = regex.exec(stdout);
  
        if (match) {
          resolve(match[0]);
        } else {
          resolve(null); // Если IP-адрес не найден
        }
      });
    });
  }

  export default async function findIp(macAddress) {
    try {
      const ip = await findIpByMac(macAddress.toLowerCase());
      if (ip) {
        console.log(`IP-адрес устройства с MAC-адресом ${macAddress}: ${ip}`);
        return ip;
      } else {
        console.log(`Устройство с MAC-адресом ${macAddress} не найдено`);
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }