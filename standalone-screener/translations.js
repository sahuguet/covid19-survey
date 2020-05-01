// default values MUST MATCH EXACTLY the values in the `list_of_questions`.
// I used Google Translate for 'es'.
// To add a new translation:
// - add a new entry for each question with a key that corresponds to the language.
// - make sure the language key is the one you tell people to use in the URL
// e.g. ?lang=fr or ?lang=es.
var TRANSLATIONS =
    [
        {
            'default': 'yes',
            'fr': 'oui',
            'es': 'sí',
            'hu': 'igen',
            'pl': 'tak',
            'kr': '예',
            'de': 'Ja',
            'vi': 'Có',
        },
        {
            'default': 'no',
            'fr': 'non',
            'es': 'no',
            'hu': 'nem',
            'pl': 'nie',
            'kr': '아니오',
            'de': 'Nein',
            'vi': 'Không',
        },
        {
            'default': 'Your score is below the threshold for COVID-19 pre-screening. However, if you have Difficulty Breathing, Chest Pain, Pressure, or Irregular Heartbeat, Bluish Lips, or Confusion, you should seek medical attention immediately.',
            'fr': 'Votre score est inférieur au seuil de présélection du COVID-19. Cependant, si vous avez des difficultés respiratoires, une douleur thoracique, une pression ou un rythme cardiaque irrégulier, des lèvres bleutées ou une confusion, vous devez consulter immédiatement un médecin.',
            'es': 'Su puntaje está por debajo del umbral para la detección previa de COVID-19. Sin embargo, si tiene dificultad para respirar, dolor en el pecho, presión o latidos cardíacos irregulares, labios azulados o confusión, debe buscar atención médica de inmediato.',
            'hu': 'Az Ön pontszáma azt jelzi, hogy azonnal forduljon orvoshoz.',
            'pl': 'Twój wynik jest poniżej progu wstępnego badania COVID-19. Jeśli jednak masz trudności z oddychaniem, ból w klatce piersiowej, ucisk lub nieregularne bicie serca, niebieskawe usta lub splątanie, natychmiast skontaktuj się z lekarzem.',
            'kr': '점수가 COVID-19 사전 선별 기준점 미만입니다. 그러나 호흡 곤란, 흉통, 압박 또는 불규칙한 심장 박동, 푸른 입술 또는 혼동이있는 경우 즉시 의사의 진료를 받아야합니다.',
            'de': 'Ihre Punktzahl liegt unter dem Schwellenwert für das COVID-19-Vorscreening. Wenn Sie jedoch Atembeschwerden, Brustschmerzen, Druck oder unregelmäßigen Herzschlag, bläuliche Lippen oder Verwirrtheit haben, sollten Sie sofort einen Arzt aufsuchen.',
            'vi': 'Điểm của bạn dưới ngưỡng sàng lọc trước COVID-19. Tuy nhiên, nếu bạn khó thở, đau ngực, áp lực hoặc nhịp tim không đều, môi hơi xanh hoặc nhầm lẫn, bạn nên đi khám ngay lập tức.',
        },
        {
            'default': 'Your score indicates that you should consult a doctor immediately.',
            'fr': 'Votre score indique que vous devez consulter immédiatement un médecin.',
            'es': 'Su puntaje indica que debe consultar a un médico de inmediato.',
            'hu': 'Pontszámod nem éri el a COVID-19 előszűrés küszöbértékét. Ha azonban nehéz légzés, mellkasi fájdalom, nyomás vagy szabálytalan szívverés, kékes ajkak vagy zavart van, akkor azonnal forduljon orvoshoz.',
            'pl': 'Twój wynik wskazuje, że należy natychmiast skonsultować się z lekarzem.',
            'kr': '결과는 즉시 의사와 상담해야한다는 것을 나타냅니다.',
            'de': 'Ihre Ergebnisse zeigen, dass Sie sofort einen Arzt konsultieren sollten.',
            'vi': 'Kết quả của bạn chỉ ra rằng bạn nên tham khảo ý kiến ​​bác sĩ ngay lập tức.',
        },
        {
            'default': 'Fever above 37.8C/100F in armpit or forehead?',
            'fr': 'Fièvre supérieure à 37.8C/100F sous le bras ou sur le front',
            'es': '¿Fiebre por encima de 37.8C / 100F en la axila o la frente?',
            'hu': '37.8C feletti láz?',
            'pl': 'Gorączka powyżej 37,8 ° C / 100 ° w pachach lub czole',
            'kr': '겨드랑이나 이마에서 재었을 때 37.8도 이상의 고열',
            'de': 'Fieber über 37,8 °C in Achselhöhle oder Stirn',
            'vi': 'Sốt hơn 37.8oC khi đo dưới nách hay trên trán',
        },
        {
            'default': 'Dry cough?',
            'fr': 'Toux sèche ?',
            'es': '¿Tos Seca?',
            'hu': 'Száraz köhögés?',
            'pl': 'Suchy kaszel',
            'kr': '마른 기침',
            'de': 'Trockener Husten',
            'vi': 'Ho khan',
        },
        {
            'default': 'Fatigue (feeling extra tired)?',
            'fr': 'Fatigue ?',
            'es': '¿ Fatiga ?',
            'hu': 'Fáradtság (extra fáradtság)?',
            'pl': 'Zmęczenie (dodatkowe zmęczenie)',
            'kr': '피로',
            'de': 'Müdigkeit (extra müde fühlen)',
            'vi': 'Đuối sức (cảm giác rất mệt mỏi)',
        },
        {
            'default': 'No appetite?',
            'fr': 'Pas d\'apétit ?',
            'es': '¿ Sin apetito?',
            'hu': 'Étvágytalanság?',
            'pl': 'Utrata apetytu',
            'kr': '식욕 잃음',
            'de': 'Verlust von Appetit',
            'vi': 'Không muốn ăn (chán ăn)',
        },
        {
            'default': 'Breathing difficulty?',
            'fr': 'Difficultés à respirer ?',
            'es': '¿ Dificultad respiratoria ?',
            'hu': 'Légzési nehézség?',
            'pl': 'Trudności w oddychaniu (duszność)',
            'kr': '호흡 곤란',
            'de': 'Atembeschwerden (Kurzatmigkeit)',
            'vi': 'Khó thở',
        },
        {
            'default': 'Sputum (spitting or coughing lung mucus)?',
            'fr': 'Expectorations',
            'es': '¿ Esputo ?',
            'hu': 'Köpetürítés / váladékos köhögés?',
            'pl': 'Plwocina (plucie lub kaszel śluz płucny)',
            'kr': '가래',
            'de': 'Sputum (Lungenschleim spucken oder husten)',
            'vi': 'Đàm (ho có đàm)',
        },
        {
            'default': 'Muscle or bone pain?',
            'fr': 'Douleur musculaire ou osseuse ?',
            'es': '¿ Dolor muscular o óseo ?',
            'hu': 'Izom- vagy csontfájdalom?',
            'pl': 'Ból mięśni lub kości',
            'kr': '근육통 또는 뼈의 통증',
            'de': 'Muskel- oder Knochenschmerzen',
            'vi': 'Đau cơ bắp hay đau trong xương',
        },
        {
            'default': 'Sore throat?',
            'fr': 'Gorge irritée ?',
            'es': '¿ Dolor de garganta ?',
            'hu': 'Torokfájás?',
            'pl': 'Ból gardła',
            'kr': '인후염 (목이 따가움)',
            'de': 'Halsentzündung',
            'vi': 'Đau cổ họng',
        },
        {
            'default': 'Headache or dizziness?',
            'fr': 'Maux de tête ou vertiges ?',
            'es': '¿ Dolor de cabeza o mareos?',
            'hu': 'Fejfájás vagy szédülés?',
            'pl': 'Ból głowy lub zawroty głowy',
            'kr': '두통 또는 어지러움',
            'de': 'Kopfschmerzen oder Schwindel',
            'vi': 'Nhức đầu hay chóng mặt',
        },
        {
            'default': 'Loss of consciousness(fainting)?',
            'fr': 'Confusion ?',
            'es': '¿ Confusión ?',
            'hu': 'Zavartság?',
            'pl': 'Dezorientacje',
            'kr': '혼동',
            'de': 'Verwechslung',
            'vi': 'Ngất xỉu',
        },
        {
            'default': 'Chills (cold or shivering)?',
            'fr': 'Frissons ?',
            'es': '¿ Resfriado ?',
            'hu': 'Hidegrázás?',
            'pl': 'Dreszcze (zimno lub dreszcze)',
            'kr': '오한 (추움)',
            'de': 'Schüttelfrost (kalt oder zitternd)',
            'vi': 'Bị ớn lạnh (cảm giác lạnh hay rùng mình)',
        },
        {
            'default': 'Nausea or vomiting or diarrhea?',
            'fr': 'Nausées ou vomissements ou diarrhée ?',
            'es': '¿ Náuseas o vómitos o diarrea ?',
            'hu': 'Hányinger/hányás vagy hasmenés?',
            'pl': 'Nudności lub wymioty lub biegunka',
            'kr': '메스꺼움 또는 구토 또는 설사',
            'de': 'Übelkeit oder Erbrechen oder Durchfall',
            'vi': 'Buồn nôn, ối hay tiêu chảy',
        },
        {
            'default': 'Chronic disease?',
            'fr': 'Maladie chronique ?',
            'es': '¿ Enfermedad crónica ?',
            'hu': 'Krónikus betegség?',
            'pl': 'Przewlekła choroba',
            'kr': '심장질환이나 폐질환등의 지병이 있는 경우',
            'de': 'Chronische Erkrankung',
            'vi': 'Bạn có bệnh mãng tính (ví dụ như tiểu đường, cao máu, tim mạch, bệnh phổi ...)',
        },
        {
            'default': 'Chest pain or chest pressure or irregular heartbeat?',
            'fr': 'Douleur thoracique ou pression thoracique ou rythme cardiaque irrégulier ?',
            'es': '¿ Dolor en el pecho o presión en el pecho o latidos cardíacos irregulares ?',
            'hu': 'Mellkasi fájdalom vagy mellkasi nyomás vagy szabálytalan szívverés?',
            'pl': 'Ból w klatce piersiowej lub ucisk w klatce piersiowej lub nieregularne bicie serca',
            'kr': '가슴의 통증 또는 가슴이 답답함 또는 불규칙적인 심장 박동',
            'de': 'Brustschmerzen oder Brustdruck oder unregelmäßiger Herzschlag',
            'vi': 'Đau tim hay cảm giác áp lực vùng ngực hay tim đập lộn nhịp',
        },
        {
            'default': 'Bluish lips or face?',
            'fr': 'Lèvres ou visage bleutés ?',
            'es': '¿ Labios o cara azulados ?',
            'hu': 'Kékes ajkak vagy az arc?',
            'pl': 'Niebieskawe usta lub twarz',
            'kr': '창백해진 입술이나 얼굴',
            'de': 'Bläuliche Lippen oder Gesicht',
            'vi': 'Mặt hay môi bị tím',
        },
        {
            'default': 'Loss of smell or taste?',
            'fr': 'perte d\'odeur ou de goût ?',
            'es': '¿ pérdida de olfato o sabor ?',
            'hu': 'szag vagy íz elvesztése?',
            'pl': 'utrata zapachu lub smaku',
            'kr': '후각 또는 미각을 잃음',
            'de': 'Geruchs- oder Geschmacksverlust',
            'vi': 'Mất khả năng ngửi mùi hoặc nếm mùi',
        },
        {
            'default': 'Older than 50 or younger than 5?',
            'fr': 'Plus de 60 ans ou moins de 5 ans?',
            'es': '¿ Mayor de 50 años o menor de 5 ?',
            'hu': 'Idősebb mint 50 vagy fiatalabb mint 5?',
            'pl': 'Starsze niż 50 lub młodsze niż 5 (z poważnymi chorobami podstawowymi)',
            'kr': '50세 이상 또는 5살 이하',
            'de': 'Älter als 50 oder jünger als 5',
            'vi': 'Bạn trên 50 tuổi hay nhỏ hơn 5 tuổi',
        }
    ];

var LANGUAGES = ['fr', 'es', 'hu', 'pl', 'kr', 'de', 'vi'];

var i18n = window.i18n({});


LANGUAGES.forEach(language => {
    var data = {};
    TRANSLATIONS.forEach(item => {
        if (language in item) {
            data[item['default']] = item[language];
        }
    });
    //console.log(data);
    i18n.setMessages('messages', language, data, 'nplurals=2; plural=n>1;');
});

const getQueryParams = (params, url, default_value) => {
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : default_value;
}; // source: https://dev.to/ganeshmani/how-to-get-query-string-parameters-in-javascript-2019-4dm2 .

// We extract the language; 'en' is the default one.
var lang = getQueryParams('lang', window.location, 'en');
console.log('Language set to ' + lang);
i18n.setLocale(lang); // We set language for the UI.

var _t = function (s) { return i18n.gettext(s); }