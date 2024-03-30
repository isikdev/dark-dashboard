// Функция для генерации случайных данных
function generateMeaningfulRandomData() {
    // Функция для генерации случайного элемента из массива
    function getRandomFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Массивы с данными для генерации
    const links = ['example.com', 'testsite.com', 'mysite.org'];
    const logins = ['user1', 'user2', 'user3'];
    const passwords = ['pass123', 'qwerty', 'abc123'];
    const comments = ['Нужно обновить', 'Проверить данные', 'Ожидает подтверждения'];
    const zoomInfos = ['Zoom Meeting ID 12345', 'Zoom Room 67890', 'Zoom Event 54321'];
    const revenues = ['50000', '75000', '100000'];
    const industries = ['Технологии', 'Финансы', 'Маркетинг'];
    const statuses = ['новые', 'на чеке', 'в работе', 'невалид'];
    const workers = ['Иван Иванов', 'Петр Петров', 'Сергей Сергеев'];
    const conditions = ['Оплата после доставки', 'Предоплата 50%', 'Оплата при получении'];

    // Генерация 50 строк случайных данных
    const rows = [];
    for (let i = 1; i <= 50; i++) {
        rows.push({
            link: getRandomFromArray(links),
            login: getRandomFromArray(logins),
            pass: getRandomFromArray(passwords),
            comment: getRandomFromArray(comments),
            zoominfo: getRandomFromArray(zoomInfos),
            revenue: getRandomFromArray(revenues),
            industry1: getRandomFromArray(industries),
            industry2: getRandomFromArray(industries),
            status: getRandomFromArray(statuses),
            inWork: getRandomFromArray(workers),
            conditions: getRandomFromArray(conditions)
        });
    }
    return rows;
}

// Функция для создания кнопки статуса
function createStatusButton(status) {
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
        <td>${createStatusButton(row.status)}</td> <!-- Статус теперь в виде кнопки -->
        <td>${row.inWork}</td>
        <td>${row.conditions}</td>
      `;
        tableBody.appendChild(tr);
    });
}

// Генерация и добавление данных при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const meaningfulRandomData = generateMeaningfulRandomData();
    addDataToTable(meaningfulRandomData);
});
