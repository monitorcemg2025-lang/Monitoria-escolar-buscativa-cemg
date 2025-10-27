async function saveSchedule(schedule) {
    try {
        const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
        if (schedules.length >= 1000) {
            throw new Error('Limite de 1000 horários atingido.');
        }
        schedules.push(schedule);
        localStorage.setItem('schedules', JSON.stringify(schedules));
        return schedules;
    } catch (error) {
        console.error('Erro ao salvar horário:', error);
        return [];
    }
}

async function getSchedules() {
    try {
        return JSON.parse(localStorage.getItem('schedules')) || [];
    } catch (error) {
        console.error('Erro ao obter horários:', error);
        return [];
    }
}

document.getElementById('schedule-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const monitorName = document.getElementById('monitor-name').value.trim();
    const date = document.getElementById('date').value;
    const entry = document.getElementById('entry-time').value;
    const exit = document.getElementById('exit-time').value;
    
    await saveSchedule({ monitorName, date, entry, exit });
    renderSchedules();
    e.target.reset();
});

async function renderSchedules() {
    const tbody = document.querySelector('#schedule-table tbody');
    if (tbody) {
        tbody.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const schedules = await getSchedules();
        schedules.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${item.monitorName}</td><td>${item.date}</td><td>${item.entry}</td><td>${item.exit}</td>`;
            fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Carregando página de horários...');
    await renderSchedules();
});
