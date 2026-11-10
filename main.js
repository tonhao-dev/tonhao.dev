var translations = {
    en: {
        pageTitle: 'Luis Antonio, Tonhao Dev, React',
        metaDescription: 'Author: Luis A. L. Santiago, personal portfolio',
        avatarAlt: 'Profile',
        emailCopied: 'Success! Email copied to your clipboard.',
        intro: 'Hi, my name is Luís Antônio (Tonhão Dev). I work as a frontend developer, <strong>React</strong> specialist, and I am passionate about <strong>software quality</strong> and <strong>automated testing</strong>',
        skillsTitle: 'Main Skills',
        skillsText: 'Skills, languages and tools I master and use daily.',
        experiencesTitle: 'Experience',
        roleReact: 'React.js Developer',
        roleFrontend: 'Frontend Developer',
        techbizText: 'Frontend development at TechBiz Forense Digital, focused on software quality and automated testing.',
        techbizDate: 'June 2025 - present',
        mbDate1: 'February 2025 - June 2025',
        btText: 'I worked on the B&amp;T currency exchange system, focused on quality and performance.',
        btBullet1: 'Reduced new bug reports by <strong>70%</strong> by implementing end-to-end tests with <strong>Cypress</strong>',
        btBullet2: 'Improved the currency pre-quote page performance by <strong>40%</strong>, using <strong>Clarity</strong> data about the user journey',
        btDate: 'September 2023 (via MB Labs) | June 2024 - January 2025',
        mbText: 'I worked on a white label application that helps mid-size and large companies raise investment through crowdfunding',
        cleanArch: 'Clean Architecture',
        autoTests: 'Automated testing',
        mbDate2: 'July 2023 - June 2024',
        usabitText: 'I worked on in-house products and products for external clients. I built web systems and hybrid mobile apps.',
        usabit1: 'Responsive website development',
        usabit2: 'Google Maps integration to build a worldwide DY map',
        usabit3: '<strong>Leadership</strong> of the company\'s first in-house product',
        usabit4: 'White label app development for beauty salons',
        usabitDate: 'July 2021 - June 2023',
        incicleText: 'Development of responsive websites to display management and sales reports.',
        incicle2: 'Gantt charts',
        incicle3: 'Interactive calendars',
        incicle4: '360 survey',
        incicleDate: 'August 2020 - July 2021',
        recolText: 'I built user interfaces (UI) that helped people from areas outside IT understand the organization\'s data, improve decision making and better understand their employees.',
        recol1: 'Interactive panels',
        recol2: 'Process automation',
        recol3: 'Business integrations',
        recolDate: 'April 2020 - March 2021',
        projectsTitle: 'Projects',
        algoBanner: 'Algorithms School banner',
        tagLogic: 'Logic',
        tagLeadership: 'Leadership',
        tagMentoring: 'Mentoring',
        algoText: 'Outreach project where I taught programming logic and data structures for programming competitions',
        viewProject: 'View project',
        prevenaTitle: 'Previna app',
        prevenaBanner: 'App banner',
        prevenaText: 'Built to bring together, in a single tool, all services offered by the state of Acre in the fight against COVID-19.',
        sgfaBanner: 'IFAC canteen',
        sgfaText: 'System built to make the distribution and validation of lunch vouchers easier.',
        eduTitle: 'Education',
        ufac: 'Federal University of Acre (UFAC)',
        masters: 'Master\'s, Computer Science',
        mastersAI: 'Artificial Intelligence',
        mastersIR: 'Information Retrieval',
        mastersOW: 'Open Weight models',
        mastersGraph: 'Graph Database',
        ifac: 'Federal Institute of Education, Science and Technology of Acre',
        os: 'Operating systems',
        technician: 'Technical Level, IT Technician',
        security: 'Security',
        graphicDesign: 'Graphic Design',
        madeBy: 'Made by Tonhão Dev'
    }
};

function isPortuguese() {
    var param = new URLSearchParams(window.location.search).get('lang');
    if (param) return param.toLowerCase().indexOf('pt') === 0;
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'pt'];
    return String(langs[0]).toLowerCase().indexOf('pt') === 0;
}

var currentLang = 'pt';

function applyTranslations() {
    if (isPortuguese()) return;
    var dict = translations.en;
    currentLang = 'en';
    document.documentElement.lang = 'en';
    document.title = dict.pageTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict.metaDescription);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-alt');
        if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
}

document.addEventListener('DOMContentLoaded', applyTranslations);

function copyEmail() {
    navigator.clipboard.writeText('luis.developer.ac@gmail.com');
    window.alert(currentLang === 'en'
        ? translations.en.emailCopied
        : 'Sucesso! Email copiado para sua área de transferência.');
}
