var list_of_questions = [
    {
        'id': '1',
        'weight': 0,
        'type': 'radio',
        'question': _t('How was this survey performed?'),
        'choices': [
            { 'label': _t('Online'), 'points': 0 },
            { 'label': _t('by Phone'), 'points': 0 }
        ],
        'image_url': 'images/fever.svg'
    },
    {
        'id': '2',
        'weight': 2,
        'type': 'radio',
        'question': _t('What is your age?'),
        'choices': [
            { 'code': 'M01', 'label': _t('Under 1 year old'), 'points': 3 },
            { 'code': 'OK01', 'label': _t('1-5 years old'), 'points': 0 },
            { 'code': 'OK01', 'label': _t('6-11 years old'), 'points': 0 },
            { 'code': 'OK01', 'label': _t('12-24 years old'), 'points': 0 },
            { 'code': 'OK01', 'label': _t('25-35 years old'), 'points': 0 },
            { 'code': 'M02', 'label': _t('36-50 years old'), 'points': 1 },
            { 'code': 'M03', 'label': _t('51-65 years old'), 'points': 3 },
            { 'code': 'M03', 'label': _t('older than 65'), 'points': 3 },
        ],
        'image_url': 'images/cough.svg'
    },
    {
        'id': '3',
        'weight': 10,
        'type': 'checkbox',
        'question': _t('Right now, are you experiencing symptoms associated with Coronavirus infection?'),
        'choices': [
            { 'code': 'OK02', 'label': _t('I do not have symptoms'), 'points': 0 },
            { 'code': 'M04', 'label': _t('Fever'), 'points': 3 },
            { 'code': 'M04', 'label': _t('Chills'), 'points': 2 },
            { 'code': 'M04', 'label': _t('Cough'), 'points': 4 },
            { 'code': 'M04', 'label': _t('Fatigue'), 'points': 1 },
            { 'code': 'M04', 'label': _t('Diarrhea'), 'points': 1 },
            { 'code': 'E01', 'label': _t('Difficulty Breathing'), 'points': 6 },
            { 'code': 'E02', 'label': _t('Chest Pain'), 'points': 6 },
        ],
        'image_url': 'images/cough.svg'
    },
    {
        'id': '4',
        'weight': 10,
        'type': 'checkbox',
        'question': _t('Do you suffer from any of the following?'),
        'choices': [
            { 'code': 'OK03', 'label': _t('I have none of the below conditions'), 'points': 0 },
            { 'code': 'M05', 'label': _t('High blood pressure'), 'points': 5 },
            { 'code': 'M05', 'label': _t('Diabetes'), 'points': 5 },
            { 'code': 'M05', 'label': _t('Heart disease or prior heart attack'), 'points': 5 },
            { 'code': 'M05', 'label': _t('Asthma'), 'points': 1 },
            { 'code': 'M05', 'label': _t('COPD/emphysema'), 'points': 3 },
            { 'code': 'M05', 'label': _t('Chronic bronchitis'), 'points': 2 },
            { 'code': 'M05', 'label': _t('Kidney disease or require dialysis'), 'points': 5 },
            {
                'code': 'M05', 'label': _t('Compromised immune system (eg. taking steroids, immunosuppressants, sickle cell disease, cancer, HIV / AIDS)'), 'points': 2
            },
            { 'code': 'MH01', 'label': _t('psychiatric illness'), 'points': 4 },
        ],
    },
    {
        'id': '5',
        'weight': 10,
        'type': 'radio',
        'question': 'Do you have a primary care physician?',
        'choices': [
            { 'code': 'OK04', 'label': _t('Yes, and I CAN get in touch with them'), 'points': 0 },
            { 'code': 'M06', 'label': _t('Yes, but I CAN NOT get in touch with them'), 'points': 1 },
            { 'code': 'M07', 'label': _t('No'), 'points': 2 },
        ]
    },
    {
        'id': '6',
        'weight': 10,
        'type': 'checkbox',
        'question': 'Do you require any essential medications or routine treatments?',
        'choices': [
            { 'code': 'OK05', 'label': _t('None required'), 'points': 0 },
            { 'code': 'M08', 'label': _t('Oxygen'), 'points': 3 },
            { 'code': 'M08', 'label': _t('Breathing machine or breathing treatments'), 'points': 2 },
            { 'code': 'M08', 'label': _t('Insulin'), 'points': 3 },
            { 'code': 'M08', 'label': _t('Dialysis'), 'points': 3 },
            { 'code': 'M08', 'label': _t('Blood thinners'), 'points': 2 },
            { 'code': 'M09', 'label': _t('Yes, other'), 'points': 1 },
        ]
    },
    {
        'id': '6a',
        'weight': 10,
        'type': 'radio',
        'question': 'If yes to #6, do you have enough supply and access to this medicine or treatment?',
        'choices': [
            { 'code': 'OK06', 'label': _t('I HAVE enough supply and access'), 'points': 0 },
            { 'code': 'M10', 'label': _t('I DO NOT HAVE enough supply and access'), 'points': 1 },
        ]
    },
    {
        'id': '7',
        'weight': 3,
        'question': _t('Do you require access to a healthcare facility in the next three weeks?'),
        'type': 'radio',
        'choices': [
            { 'code': 'M11', 'label': _t('Yes'), 'points': 1 },
            { 'code': 'OK07', 'label': _t('No'), 'points': 0 },
        ]
    },
    {
        'id': '8',
        'weight': 1,
        'question': _t('Does anyone in your household require disability assistance, such as a wheelchair ?'),
        'type': 'radio',
        'choices': [
            { 'code': 'M12', 'label': _t('Yes'), 'points': 1 },
            { 'code': 'OK08', 'label': _t('No'), 'points': 0 }
        ]
    },
    {
        'id': '9',
        'weight': 1,
        'question': _t('This is a chaotic time which can feel overwhelming and anxious. Do you feel speaking to a counselor would be helpful?'),
        'type': 'radio',
        'choices': [
            { 'code': 'MH02', 'label': _t('Yes'), 'points': 1 },
            { 'code': 'OK09', 'label': _t('No'), 'points': 0 },
        ]
    },
    {
        'id': '10',
        'weight': 0,
        'question': _t('What is your zipcode?'),
        'type': 'text',
    },


];