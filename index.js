const i18Obj ={
    'en': {
        'about-me': 'About me',
        'about-me-content-1':'My name is Yaroslav, I am 24 years old, I am junior frontend developer. My personal qualities are ability to achieve goals, effective time planning, perseverance, ability to easily maintain business and professional relationships, desire for professional development. At this moment I do not have enough work experience, but my active life position and purposefulness makes me the kind of person you want to get to know and cooperate in future.',
        'about-me-content-2':'At first, I worked at catering industry: I graduated from college with a degree in catering technologist, then finished two years with specialty milky production technologist, I have been a chef for four years at Moscow restaurants. ',
        'about-me-content-3':'I decided to change my specialty when I saw my friend working as a programmer. I was interested to try something unknown, my new job quickly took over, now I plan to develop in this direction. ',
        'about-me-content-4':'When I work at every task, I learn something new, I am not afraid to ask for help and advice. It is important for me to complete the task quickly and effectively. It is important for me not only to gain experience, but also to take my place in a team where I can be useful, with which I can move into the future, contributing to the common deal.',
        'courses':'Courses',
        'my-projects':'My pet projects',
        'code-example':'Code example',
        'contacts':'Contacts',
        'personal-information': 'Personal information',
        'location':'Location: Russia, Anapa',
        'moving':'Moving: possible',
        'birthday':'Date of birth: 01.07.1997',
        'salary':'Desired salary: 50.000 R',
        'employment':'Employment: full time',
        'skills':'Skills',
        'languages':'Languages',
        'russian':'Russian - Native',
        'engilsh':'English - A2 (in progress)',
    },
    'ru':{
        'about-me': 'Обо мне',
        'about-me-content-1':'Меня зовут Ярослав, мне 24 года, я начинающий frontend разработчик. Своими сильными качествами считаю умение добиваться поставленных целей, эффективное планирование времени, усидчивость,  умение легко поддерживать деловые и профессиональные контакты, стремление к профессиональному развитию.  В настоящий момент у меня нет опыта работы в сфере программирования, так как я пришёл в неё недавно, однако активная жизненная позиция и целеустремлённость делают меня тем человеком, с которым вам захочется познакомиться и сотрудничать в дальнейшем.',
        'about-me-content-2':'Изначально я работал в сфере общественного питания: окончил колледж по специальности технолог общественного питания, окончил два курса в институте по специальности технолог молочных производств, четыре года работал поваром и шеф-поваром в ресторанах Москвы.',
        'about-me-content-3':'Сменить специальность меня вдохновил мой друг-программист, за чьей работой я наблюдал. Мне стало интересно опробовать для себя нечто ранее незнакомое, и новая работа быстро меня захватила, теперь я планирую развиваться в этой сфере.',
        'about-me-content-4':'Работая над каждым таском, я учусь чему-то новому, не стесняясь спрашивать помощи и советов. Для меня главное качественно и оперативно выполнить задание. На предстоящей должности для меня важно не только набраться опыта, но и занять своё место в команде, где я смогу пригодиться, с которой я смогу двигаться в будущее, внося свой вклад в общее дело.',
        'courses':'Курсы',
        'my-projects':'Мои проекты',
        'code-example':'Пример кода',
        'contacts':'Контакты',
        'personal-information': 'Личная информация',
        'location':'Город проживания: Россия, Анапа',
        'moving':'Переезд: возможен',
        'birthday':'Дата рождения: 01.07.1997',
        'salary':'Желаемая зарплата: 50.000 Р',
        'employment':'Занятость: полная',
        'skills':'Навыки',
        'languages':'Языки',
        'russian':'Русский - Родной',
        'engilsh':'Английский - А2(в процессе обучения)',
    }
}

const enLang = document.querySelector('.eng')
const ruLang = document.querySelector('.rus')

enLang.addEventListener('click',  () => getTranslate('en'));
ruLang.addEventListener('click',  () => getTranslate('ru'));

function getTranslate (lang = 'ru') {
    const textForTranslate = document.querySelectorAll('[data-i18n]');
    textForTranslate.forEach((elem) => {
        elem.textContent =  i18Obj[lang][elem.dataset.i18n]
    })
}

const switchContainer = document.querySelector('.switch-container');

const languages = document.querySelectorAll('.language');
function change(event) {
    if(event.target.classList.contains('language')) {

        languages.forEach((btn) => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
}

switchContainer.addEventListener('click', change);


