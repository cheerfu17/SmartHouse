import net from "net"

export default async function sendSocketMessage(host, port, message) {
    const client = new net.Socket();

    client.connect(port, host, () => {
        console.log('Connected to server');
        client.write(message);
    });

    client.on('data', (data) => {
        console.log('Received data from server:', data.toString());
        client.destroy(); // закрываем соединение после получения ответа
    });

    client.on('close', () => {
        console.log('Connection closed');
    });

    client.on('error', (error) => {
        console.error('Error:', error.message);
    });
}