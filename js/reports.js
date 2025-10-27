// Função para carregar as bibliotecas de forma segura
function loadLibraries() {
    if (typeof window.jspdf === 'undefined') {
        console.error('jsPDF não está carregado. Verifique a conexão com o CDN.');
        alert('Erro: jsPDF não encontrada. Verifique a internet e recarregue a página.');
        return false;
    }
    if (typeof window.jspdf.autoTable === 'undefined') {
        console.error('jsPDF-AutoTable não está carregado. Verifique o CDN.');
        alert('Erro: jsPDF-AutoTable não encontrada. Recarregue a página.');
        return false;
    }
    return true;
}

// Função para obter faltas
async function getAbsences() {
    try {
        const absences = JSON.parse(localStorage.getItem('absences')) || [];
        console.log('Faltas carregadas do localStorage:', absences.length, 'registros');
        return absences;
    } catch (error) {
        console.error('Erro ao carregar faltas do localStorage:', error);
        return [];
    }
}

// Função para obter horários
async function getSchedules() {
    try {
        const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
        console.log('Horários carregados do localStorage:', schedules.length, 'registros');
        return schedules;
    } catch (error) {
        console.error('Erro ao carregar horários do localStorage:', error);
        return [];
    }
}

// Função para filtrar dados por período
function filterByPeriod(data, period) {
    const today = new Date();
    return data.filter(item => {
        if (!item.date) return false;
        const itemDate = new Date(item.date);
        switch (period) {
            case 'daily':
                return itemDate.toDateString() === today.toDateString();
            case 'weekly':
                const oneWeekAgo = new Date(today);
                oneWeekAgo.setDate(today.getDate() - 7);
                return itemDate >= oneWeekAgo && itemDate <= today;
            case 'monthly':
                const oneMonthAgo = new Date(today);
                oneMonthAgo.setMonth(today.getMonth() - 1);
                return itemDate >= oneMonthAgo && itemDate <= today;
            default:
                return true;
        }
    });
}

// Função para gerar PDF de faltas
async function generateAbsencesPDF(period) {
    console.log(`Gerando PDF de faltas para período: ${period}`);
    
    if (!loadLibraries()) return;

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const absences = filterByPeriod(await getAbsences(), period);
        console.log(`Faltas filtradas para ${period}:`, absences.length);

        // Título com nome da escola em texto normal, sem brasão
        doc.text('Centro de Excelência Miguel das Graças - Relatório de Faltas', 10, 10);
        
        if (absences.length === 0) {
            doc.text(`Nenhum registro encontrado para o período ${period}.`, 10, 20);
        } else {
            // Configuração da tabela sem brasão
            doc.autoTable({
                head: [['Aluno', 'Série', 'Data', 'Motivo']],
                body: absences.map(item => [
                    item.name || 'N/A',
                    item.grade || 'N/A',
                    item.date || 'N/A',
                    item.reason || 'N/A'
                ]),
                startY: 20,
                styles: { fontSize: 8, cellPadding: 3 },
                headStyles: { fillColor: [41, 128, 185] },
                theme: 'grid'
            });
        }
        
        // Salvar o PDF com tratamento de erro
        doc.save(`relatorio_faltas_${period}.pdf`);
        console.log(`PDF de faltas salvo com sucesso!`);
        alert('PDF gerado e baixado com sucesso!');
    } catch (error) {
        console.error('Erro completo ao gerar PDF de faltas:', error);
        alert('Erro ao gerar PDF: ' + error.message + '. Verifique o console.');
    }
}

// Função para gerar PDF de horários
async function generateSchedulesPDF(period) {
    console.log(`Gerando PDF de horários para período: ${period}`);
    
    if (!loadLibraries()) return;

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const schedules = filterByPeriod(await getSchedules(), period);
        console.log(`Horários filtrados para ${period}:`, schedules.length);

        // Título com nome da escola em texto normal, sem brasão
        doc.text('Centro de Excelência Miguel das Graças - Relatório de Horários', 10, 10);
        
        if (schedules.length === 0) {
            doc.text(`Nenhum registro encontrado para o período ${period}.`, 10, 20);
        } else {
            // Configuração da tabela sem brasão
            doc.autoTable({
                head: [['Monitor', 'Data', 'Entrada', 'Saída']],
                body: schedules.map(item => [
                    item.monitorName || 'N/A',
                    item.date || 'N/A',
                    item.entry || 'N/A',
                    item.exit || 'N/A'
                ]),
                startY: 20,
                styles: { fontSize: 8, cellPadding: 3 },
                headStyles: { fillColor: [41, 128, 185] },
                theme: 'grid'
            });
        }
        
        // Salvar o PDF com tratamento de erro
        doc.save(`relatorio_horarios_${period}.pdf`);
        console.log(`PDF de horários salvo com sucesso!`);
        alert('PDF gerado e baixado com sucesso!');
    } catch (error) {
        console.error('Erro completo ao gerar PDF de horários:', error);
        alert('Erro ao gerar PDF: ' + error.message + '. Verifique o console.');
    }
    }
