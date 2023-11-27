import fs from 'fs';

export default async function create_cfg_file()
{
    const filePath = 'deviceConfig.json';
    const content = {
    MAC: 'C8-2B-96-BF-4C-0C',
    IP: ''
    };

    await fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        // Файл не существует, создаем его
        fs.writeFile(filePath, JSON.stringify(content), (err) => {
        if (err) {
            console.error('Ошибка при создании файла:', err);
        } else {
            console.log('Файл успешно создан');
            
        }
        });
    } else {
        console.log('Файл уже существует');
    }
    });
}