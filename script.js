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
    const button = $('<button>').text(status);
    switch (status) {
        case 'новые':
            button.addClass('btn btn-success');
            break;
        case 'на чеке':
            button.addClass('btn btn-warning');
            break;
        case 'невалид':
            button.addClass('btn btn-danger');
            break;
        default:
            button.addClass('btn btn-secondary');
    }
    return button.prop('outerHTML'); // Возвращаем HTML-код кнопки
}

// Функция для добавления сгенерированных данных в таблицу
function addDataToTable(data) {
    const tableBody = $('.table-full tbody');
    $.each(data, function (index, row) {
        const tr = $('<tr>').append(
            $('<th>').attr('scope', 'row').text(index + 1),
            $('<td>').text(row.link),
            $('<td>').text(row.login),
            $('<td>').text(row.pass),
            $('<td>').text(row.comment),
            $('<td>').text(row.zoominfo),
            $('<td>').text(row.revenue),
            $('<td>').text(row.industry1),
            $('<td>').text(row.industry2),
            $('<td>').html(createStatusButton(row.status)),
            $('<td>').text(row.inWork),
            $('<td>').text(row.conditions)
        );
        tableBody.append(tr);
    });
}

// Генерация и добавление данных при загрузке страницы
$(document).ready(function () {
    const meaningfulRandomData = generateMeaningfulRandomData();
    addDataToTable(meaningfulRandomData);
});

$(document).ready(function () {
    var table = $('#example').DataTable({
        dom: 'Brtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });

    // Добавление кнопок в фиксированное положение внизу страницы
    table.buttons().container()
        .appendTo($('.export-buttons'));
});