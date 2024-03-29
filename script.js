// Функция для генерации случайных данных
function generateRandomData() {
    // Функция для генерации случайного числа в заданном диапазоне
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Функция для генерации случайного статуса и соответствующей кнопки
    function getRandomStatus() {
        const statuses = ['новые', 'на чеке', 'в работе', 'невалид'];
        const status = statuses[getRandomInt(0, statuses.length - 1)];
        const button = document.createElement('button');
        button.textContent = status;
        switch (status) {
            case 'новые':
                button.className = 'btn btn-success';
                break;
            case 'на чеке':
                button.className = 'btn btn-warning';
                break;
            case 'невалид':
                button.className = 'btn btn-danger';
                break;
            default:
                button.className = 'btn btn-secondary';
        }
        return button.outerHTML; // Возвращаем HTML-код кнопки
    }

    // Функция для генерации случайной строки
    function getRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Генерация 50 строк случайных данных
    const rows = [];
    for (let i = 1; i <= 50; i++) {
        rows.push({
            link: `http://example.com/${getRandomString(5)}`,
            login: getRandomString(7),
            pass: getRandomString(10),
            comment: `Комментарий ${i}`,
            zoominfo: `ZoomInfo ${getRandomString(5)}`,
            revenue: getRandomInt(1000, 5000),
            industry1: `Индустрия ${getRandomInt(1, 5)}`,
            industry2: `Индустрия ${getRandomInt(6, 10)}`,
            status: getRandomStatus(), // Используем функцию для создания кнопки
            inWork: `Сотрудник ${getRandomString(5)}`,
            conditions: `Условия ${i}`
        });
    }
    return rows;
}

// Функция для добавления сгенерированных данных в таблицу
function addDataToTable(data) {
    const tableBody = document.querySelector('.table-full tbody');
    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${row.link}</td>
        <td>${row.login}</td>
        <td>${row.pass}</td>
        <td>${row.comment}</td>
        <td>${row.zoominfo}</td>
        <td>${row.revenue}</td>
        <td>${row.industry1}</td>
        <td>${row.industry2}</td>
        <td>${row.status}</td> <!-- Статус теперь в виде кнопки -->
        <td>${row.inWork}</td>
        <td>${row.conditions}</td>
      `;
        tableBody.appendChild(tr);
    });
}

// Генерация и добавление данных при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const randomData = generateRandomData();
    addDataToTable(randomData);
});
