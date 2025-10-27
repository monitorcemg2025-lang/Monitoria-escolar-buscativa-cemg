// Lista de 101 alunos reais fornecidos
const students = [
    // 1º Ano (45 alunos)
    { name: "ADRIAN EZEQUIEL BARRETO SANTOS", grade: "1º Ano" },
    { name: "ADRYELLE DE JESUS CUNHA", grade: "1º Ano" },
    { name: "ANA PAULA DE JESUS SANTOS", grade: "1º Ano" },
    { name: "ANNA LYVIA DOS SANTOS", grade: "1º Ano" },
    { name: "CARLOS PEDRO SILVA SANTOS", grade: "1º Ano" },
    { name: "CLÉCIO DANTAS SANTOS", grade: "1º Ano" },
    { name: "EMYLEE FONSECA DANTAS", grade: "1º Ano" },
    { name: "ENZO GABRIEL DE JESUS SANTOS", grade: "1º Ano" },
    { name: "EVELEN VITÓRIA DAS G. SANTOS", grade: "1º Ano" },
    { name: "FABIANA SANTANA SANTOS", grade: "1º Ano" },
    { name: "FELIPE CONCEIÇÃO DOS SANTOS", grade: "1º Ano" },
    { name: "GEOVANIO DE JESUS SANTOS", grade: "1º Ano" },
    { name: "GUSTAVO DAS GRACAS DE JESUS", grade: "1º Ano" },
    { name: "IRIS SANTOS DA SILVA", grade: "1º Ano" },
    { name: "ISABELA SANTANA DE OLIVEIRA", grade: "1º Ano" },
    { name: "ISABELA SANTOS DE JESUS", grade: "1º Ano" },
    { name: "ISABELE OLIVEIRA COSTA", grade: "1º Ano" },
    { name: "ISABELLY SOPHIA S. DOS SANTOS", grade: "1º Ano" },
    { name: "ISADORA SANTANA DOS SANTOS", grade: "1º Ano" },
    { name: "ISIS GABRIELLE SOUZA GOES", grade: "1º Ano" },
    { name: "JONATAS DIAS VIEIRA", grade: "1º Ano" },
    { name: "JOSE LUCAS BRITO VASCONCELOS", grade: "1º Ano" },
    { name: "JOSE PHABLO PEREIRA SANTOS", grade: "1º Ano" },
    { name: "JUAN DA SILVA VENTURA", grade: "1º Ano" },
    { name: "KAMILA SANTOS DE JESUS", grade: "1º Ano" },
    { name: "KATHERY MARIA DOS SANTOS", grade: "1º Ano" },
    { name: "LARISA MENDONÇA DE SOUZA", grade: "1º Ano" },
    { name: "LAUANE MENDONÇA DE SOUZA", grade: "1º Ano" },
    { name: "LUCAS DA SILVA MENEZES", grade: "1º Ano" },
    { name: "LUCAS SANTOS DA MOTA", grade: "1º Ano" },
    { name: "LUCIANA MENDONÇA DOS S. BARRETO", grade: "1º Ano" },
    { name: "MAIRA DO NASCIMENTO REZENDE", grade: "1º Ano" },
    { name: "MARCELA BARBOZA DOS SANTOS", grade: "1º Ano" },
    { name: "MARIA CLARA SILVA SANTOS", grade: "1º Ano" },
    { name: "MARIA ISABELLA DE JESUS BARRETO", grade: "1º Ano" },
    { name: "MARIA JUARINA BATISTA DIAS", grade: "1º Ano" },
    { name: "MATEUS COSTA MENEZES", grade: "1º Ano" },
    { name: "MAYSA DIAS DOS SANTOS", grade: "1º Ano" },
    { name: "MICAEL SANTOS LIMA", grade: "1º Ano" },
    { name: "NATALI DOS SANTOS", grade: "1º Ano" },
    { name: "NICOLAS GABRIEL DA SILVA SOUZA", grade: "1º Ano" },
    { name: "RAVY TALLYSON MELO SANTOS", grade: "1º Ano" },
    { name: "TALISSON PIETRO SANTOS SILVA", grade: "1º Ano" },
    { name: "YASMIM SANTOS", grade: "1º Ano" },
    { name: "YTALLO RUAN PEREIRA DE MELO", grade: "1º Ano" },
    // 2º Ano (35 alunos)
    { name: "ALEXANDRE FONSECA SOUZA", grade: "2º Ano" },
    { name: "ANA CLARA CAJUI SILVA", grade: "2º Ano" },
    { name: "ANALU ALVES DE JESUS", grade: "2º Ano" },
    { name: "ANA LUISA SILVA VASCONCELOS", grade: "2º Ano" },
    { name: "ANDREIA VITÓRIA C. DE ANDRADE", grade: "2º Ano" },
    { name: "ANDREZA DE JESUS MENEZES", grade: "2º Ano" },
    { name: "ANNA SOPHIA DA COSTA OLIVEIRA", grade: "2º Ano" },
    { name: "ANNE LAVINIA BORGES DOS SANTOS", grade: "2º Ano" },
    { name: "BARBARA VIEIRA DOS SANTOS SILVA", grade: "2º Ano" },
    { name: "BIANCA LARISSA DIAS FONTES", grade: "2º Ano" },
    { name: "BRENO DA COSTA ALVES", grade: "2º Ano" },
    { name: "CAIQUE DOS SANTOS SOUZA", grade: "2º Ano" },
    { name: "DANIELLE DOS SANTOS MOTA", grade: "2º Ano" },
    { name: "DOMINI SILVA OLIVEIRA", grade: "2º Ano" },
    { name: "EDUARDO INACIO ALVES FEITOSA", grade: "2º Ano" },
    { name: "EMYLE GABRIELLY O. MENEZES", grade: "2º Ano" },
    { name: "GEFERSON EDUARDO DE JESUS", grade: "2º Ano" },
    { name: "GENISSON JÚNIOR S. DOS SANTOS", grade: "2º Ano" },
    { name: "GLÓRIA MARIA DA SILVA LIMA", grade: "2º Ano" },
    { name: "ITALO RUAN DAS GRAÇAS SOUSA", grade: "2º Ano" },
    { name: "JULIANE ALVES SANTOS", grade: "2º Ano" },
    { name: "JÚNIO SILVA DE JESUS", grade: "2º Ano" },
    { name: "LARA SANTOS FONSECA", grade: "2º Ano" },
    { name: "LETICIA LIMA DE OLIVEIRA", grade: "2º Ano" },
    { name: "MARIA EUDOXIA DE JESUS", grade: "2º Ano" },
    { name: "MARIA ISABELA O. MENDONÇA", grade: "2º Ano" },
    { name: "MARIANA CORREIA ARAGÃO", grade: "2º Ano" },
    { name: "MARIANA MAYA LIMA SANTOS", grade: "2º Ano" },
    { name: "MISAEL LIMA DA FONSECA", grade: "2º Ano" },
    { name: "NILSON JOSÉ DOS SANTOS NETO", grade: "2º Ano" },
    { name: "PABLO GUSTAVO PEREIRA SANTOS", grade: "2º Ano" },
    { name: "PEDRO HENRIQUE DAMIÃO SANTOS", grade: "2º Ano" },
    { name: "VANESSA MOTA CORREIA", grade: "2º Ano" },
    { name: "VICTOR HUGO BATISTA SANTOS", grade: "2º Ano" },
    { name: "YASMIN LIMA CONCEIÇÃO", grade: "2º Ano" },
    // 3º Ano (21 alunos)
    { name: "AUGUSTO JOSÉ DOS SANTOS", grade: "3º Ano" },
    { name: "CLOVES SANTOS DE JESUS", grade: "3º Ano" },
    { name: "DANIEL DOS SANTOS", grade: "3º Ano" },
    { name: "DIOGO ALVES DE JESUS", grade: "3º Ano" },
    { name: "ISADORA SANTOS SILVA", grade: "3º Ano" },
    { name: "ISTEFANNY MOTA OLIVEIRA", grade: "3º Ano" },
    { name: "JAMILLE DOS SANTOS DE JESUS", grade: "3º Ano" },
    { name: "JHENIFER MENESES OLIVEIRA", grade: "3º Ano" },
    { name: "JOSÉ EDSON DOS SANTOS", grade: "3º Ano" },
    { name: "KAUA SILVA BATISTA", grade: "3º Ano" },
    { name: "KAYKY DOS SANTOS", grade: "3º Ano" },
    { name: "LENUZIA BARBOSA DOS SANTOS", grade: "3º Ano" },
    { name: "LUCIELLE SANTOS DE JESUS", grade: "3º Ano" },
    { name: "LUIS GUSTAVO DE JESUS SANTOS", grade: "3º Ano" },
    { name: "MAIARA DIAS FONSECA", grade: "3º Ano" },
    { name: "MAIARA DO NASCIMENTO REZENDE", grade: "3º Ano" },
    { name: "MARCOS HENRIQUE O. DE JESUS", grade: "3º Ano" },
    { name: "MAYNE ÉVILEN CARDOSO SANTOS", grade: "3º Ano" },
    { name: "MYLENA SANTOS VIEIRA", grade: "3º Ano" },
    { name: "POLLYANA SANTOS SOUZA", grade: "3º Ano" },
    { name: "TOMÁS OLIVEIRA COSTA", grade: "3º Ano" }
];

// Função para copiar o nome do aluno para a área de transferência
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert(`Nome "${text}" copiado para a área de transferência!`);
    } catch (error) {
        console.error('Erro ao copiar texto:', error);
        alert('Erro ao copiar o nome. Tente novamente.');
    }
}

// Função para renderizar a tabela de alunos
function renderStudents() {
    const tbody = document.querySelector('#student-table tbody');
    if (tbody) {
        tbody.innerHTML = '';
        const fragment = document.createDocumentFragment();
        students.forEach(student => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td><button class="copy-button" onclick="copyToClipboard('${student.name}')">Copiar</button></td>
            `;
            fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
    }
}

// Inicializar a tabela ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    console.log('Carregando página de alunos...');
    renderStudents();
});
