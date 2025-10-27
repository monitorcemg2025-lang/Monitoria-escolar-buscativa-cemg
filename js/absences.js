async function saveAbsence(absence) {
    try {
        const absences = JSON.parse(localStorage.getItem('absences')) || [];
        if (absences.length >= 1000) {
            throw new Error('Limite de 1000 faltas atingido.');
        }
        absences.push(absence);
        localStorage.setItem('absences', JSON.stringify(absences));
        return absences;
    } catch (error) {
        console.error('Erro ao salvar falta:', error);
        return [];
    }
}

async function getAbsences() {
    try {
        return JSON.parse(localStorage.getItem('absences')) || [];
    } catch (error) {
        console.error('Erro ao obter faltas:', error);
        return [];
    }
}

async function renderAbsences() {
    const tbody = document.querySelector('#absences-table tbody');
    if (tbody) {
        tbody.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const absences = await getAbsences();
        absences.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${item.name}</td><td>${item.grade}</td><td>${item.date}</td><td>${item.reason}</td>`;
            fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
    }
}

document.getElementById('absence-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('student-name').value.trim();
    const grade = document.getElementById('grade').value.trim();
    const date = document.getElementById('absence-date').value;
    const reason = document.getElementById('reason').value.trim();
    
    await saveAbsence({ name, grade, date, reason });
    await renderAbsences();
    e.target.reset();
});

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Carregando página de faltas...');
    await renderAbsences();
});
