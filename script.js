const workoutPrograms = {
    push: {
        name: 'Push (صدر وكتف وتراي)',
        exercises: [
            'Bench Press - 4 مجموعات × 8-10 تكرار',
            'Incline Dumbbell Press - 4 × 10-12',
            'Shoulder Press - 4 × 8-10',
            'Lateral Raises - 3 × 12-15',
            'Tricep Dips - 3 × 10-12',
            'Overhead Tricep Extension - 3 × 12-15',
            'Cable Flyes - 3 × 12-15'
        ]
    },
    pull: {
        name: 'Pull (ظهر وباي)',
        exercises: [
            'Deadlift - 4 مجموعات × 6-8 تكرار',
            'Pull-ups - 4 × 8-10',
            'Barbell Rows - 4 × 8-10',
            'Lat Pulldown - 3 × 10-12',
            'Face Pulls - 3 × 15',
            'Barbell Curl - 3 × 10-12',
            'Hammer Curls - 3 × 12-15'
        ]
    },
    legs: {
        name: 'Legs (رجل)',
        exercises: [
            'Squats - 4 مجموعات × 8-10 تكرار',
            'Romanian Deadlift - 4 × 10-12',
            'Leg Press - 4 × 12-15',
            'Leg Curls - 3 × 12-15',
            'Leg Extensions - 3 × 12-15',
            'Walking Lunges - 3 × 12 كل رجل',
            'Calf Raises - 4 × 15-20'
        ]
    },
    arnold: {
        name: 'Arnold Split',
        info: 'برنامج أرنولد الكلاسيكي - 6 أيام تدريب',
        exercises: [
            'اليوم الأول: صدر + ظهر',
            '- Bench Press, Incline Press, Flyes',
            '- Deadlift, Barbell Rows, Pull-ups',
            '',
            'اليوم الثاني: كتف + ذراع',
            '- Military Press, Lateral Raises, Front Raises',
            '- Barbell Curl, Dumbbell Curl, Tricep Dips',
            '',
            'اليوم الثالث: رجل',
            '- Squats, Leg Press, Lunges',
            '- Leg Curls, Extensions, Calf Raises',
            '',
            'ثم تكرار نفس الثلاث أيام'
        ]
    },
    ppl: {
        name: 'PPL (Push Pull Legs)',
        info: 'برنامج 6 أيام - Push, Pull, Legs يتكرروا مرتين في الأسبوع',
        exercises: [
            'Push Day: صدر، كتف، تراي',
            'Pull Day: ظهر، باي',
            'Leg Day: رجل كاملة',
            '',
            'يتكرر البرنامج مرتين في الأسبوع',
            'راحة يوم واحد في الأسبوع'
        ]
    },
    upperLower: {
        name: 'Upper/Lower Split',
        info: 'برنامج 4 أيام - الجزء العلوي والسفلي',
        exercises: [
            'Upper Day 1: صدر، ظهر، كتف، ذراع (تمارين ثقيلة)',
            '- Bench Press, Barbell Rows, Shoulder Press',
            '',
            'Lower Day 1: رجل كاملة (تمارين ثقيلة)',
            '- Squats, Romanian Deadlift, Leg Press',
            '',
            'Upper Day 2: صدر، ظهر، كتف، ذراع (تمارين متوسطة)',
            '- Incline Press, Pull-ups, Lateral Raises',
            '',
            'Lower Day 2: رجل كاملة (تمارين متوسطة)',
            '- Front Squats, Leg Curls, Lunges'
        ]
    },
    fullBody: {
        name: 'Full Body',
        info: 'تمرين كامل للجسم - 3 أيام في الأسبوع',
        exercises: [
            'Squats - 4 × 8-10',
            'Bench Press - 4 × 8-10',
            'Barbell Rows - 4 × 8-10',
            'Shoulder Press - 3 × 10-12',
            'Romanian Deadlift - 3 × 10-12',
            'Pull-ups - 3 × max reps',
            'Planks - 3 × 60 ثانية'
        ]
    },
    brosplit: {
        name: 'Bro Split',
        info: 'برنامج 5 أيام - كل يوم عضلة',
        exercises: [
            'الإثنين: صدر',
            'الثلاثاء: ظهر',
            'الأربعاء: راحة أو كارديو',
            'الخميس: كتف',
            'الجمعة: ذراع (باي وتراي)',
            'السبت: رجل',
            'الأحد: راحة'
        ]
    }
};

const dietPlans = {
    bulking: {
        name: 'نظام التضخيم (Bulking)',
        calories: '3000-3500 سعر حراري يومياً',
        info: 'لبناء العضلات وزيادة الوزن',
        meals: [
            'الإفطار (7 صباحاً): 6 بيضات، كوب شوفان، موز، حفنة مكسرات',
            'سناك 1 (10 صباحاً): شيك بروتين، 2 ملعقة زبدة فول سوداني',
            'الغداء (1 ظهراً): 300 جرام أرز، 250 جرام دجاج، خضار مشكل',
            'سناك 2 (4 عصراً): علبة تونة، خبز أسمر، أفوكادو',
            'ما قبل التمرين (6 مساءً): موز، قهوة',
            'بعد التمرين (8 مساءً): شيك بروتين، عصير',
            'العشاء (9 مساءً): 200 جرام لحم أحمر، بطاطا حلوة، سلطة كبيرة',
            'قبل النوم: كازين بروتين أو زبادي يوناني'
        ]
    },
    cutting: {
        name: 'نظام التنشيف (Cutting)',
        calories: '1800-2200 سعر حراري يومياً',
        info: 'لحرق الدهون والحفاظ على العضلات',
        meals: [
            'الإفطار (7 صباحاً): 4 بيضات بياض، نصف كوب شوفان',
            'سناك 1 (10 صباحاً): شيك بروتين واي',
            'الغداء (1 ظهراً): 150 جرام أرز بني، 200 جرام دجاج، خضار كثير',
            'سناك 2 (4 عصراً): تفاح، قليل من اللوز',
            'ما قبل التمرين (6 مساءً): قهوة سوداء، موزة صغيرة',
            'بعد التمرين (8 مساءً): شيك بروتين',
            'العشاء (9 مساءً): 200 جرام سمك أو صدور دجاج، خضار مشوي',
            'قبل النوم: كازين بروتين أو زبادي يوناني 0% دسم'
        ]
    },
    maintenance: {
        name: 'نظام الحفاظ (Maintenance)',
        calories: '2400-2800 سعر حراري يومياً',
        info: 'للحفاظ على الوزن الحالي والأداء',
        meals: [
            'الإفطار: 5 بيضات، كوب شوفان، فواكه',
            'سناك 1: شيك بروتين، موز',
            'الغداء: 200 جرام أرز، 200 جرام بروتين (دجاج/سمك/لحم)، خضار',
            'سناك 2: مكسرات، فواكه مجففة',
            'ما قبل التمرين: قهوة، تفاح',
            'بعد التمرين: شيك بروتين',
            'العشاء: بروتين 200 جرام، نشويات معتدلة، سلطة كبيرة',
            'قبل النوم: زبادي يوناني مع عسل'
        ]
    },
    keto: {
        name: 'نظام الكيتو',
        calories: '2000-2400 سعر حراري يومياً',
        info: 'نظام قليل الكربوهيدرات عالي الدهون',
        meals: [
            'الإفطار: بيض مقلي بالزبدة، أفوكادو، جبنة',
            'سناك 1: مكسرات مشكلة',
            'الغداء: لحم أو دجاج، خضار ورقي، زيت زيتون',
            'سناك 2: زبادي كامل الدسم، جبنة',
            'العشاء: سمك سلمون، بروكلي بالزبدة، سلطة',
            'قبل النوم: جبنة قريش',
            '',
            'تجنب: أرز، خبز، بطاطس، سكريات'
        ]
    },
    vegan: {
        name: 'نظام نباتي رياضي',
        calories: '2200-2600 سعر حراري يومياً',
        info: 'نظام نباتي كامل لبناء العضلات',
        meals: [
            'الإفطار: شوفان، بروتين نباتي، فواكه، بذور شيا',
            'سناك 1: حمص، خبز أسمر',
            'الغداء: أرز بني، فول، عدس، خضار مشكل',
            'سناك 2: مكسرات، تمر',
            'ما قبل التمرين: موز، زبدة لوز',
            'بعد التمرين: شيك بروتين نباتي',
            'العشاء: كينوا، توفو، خضار مشوي',
            'قبل النوم: بروتين نباتي'
        ]
    },
    paleo: {
        name: 'نظام باليو',
        calories: '2200-2600 سعر حراري يومياً',
        info: 'نظام يعتمد على الأطعمة الطبيعية غير المصنعة',
        meals: [
            'الإفطار: بيض، خضار، بطاطا حلوة',
            'سناك 1: فواكه طازجة، مكسرات نيئة',
            'الغداء: لحم بقري، خضار مشوي، أفوكادو',
            'سناك 2: موز، زبدة لوز طبيعية',
            'العشاء: سمك، بطاطا حلوة، سلطة',
            'قبل النوم: بيض مسلوق',
            '',
            'تجنب: حبوب، منتجات ألبان، سكر مصنع'
        ]
    }
};

function showHome() {
    hideAllPages();
    document.getElementById('homePage').classList.add('active');
}

function showWorkouts() {
    hideAllPages();
    const page = document.getElementById('workoutsPage');
    page.classList.add('active');

    const list = document.getElementById('workoutsList');
    list.innerHTML = '';
    list.style.display = 'grid';

    document.getElementById('workoutDetail').classList.remove('active');

    for (let key in workoutPrograms) {
        const card = createWorkoutCard(key, workoutPrograms[key].name);
        list.appendChild(card);
    }
}

function showDiet() {
    hideAllPages();
    const page = document.getElementById('dietPage');
    page.classList.add('active');

    const list = document.getElementById('dietList');
    list.innerHTML = '';
    list.style.display = 'grid';

    document.getElementById('dietDetail').classList.remove('active');

    for (let key in dietPlans) {
        const card = createDietCard(key, dietPlans[key].name);
        list.appendChild(card);
    }
}

function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
}


function createWorkoutCard(id, name) {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => showWorkoutDetail(id);

    card.innerHTML = `
        <div class="card-header">
            <div class="card-title">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6.5 6.5l11 11M6.5 17.5l11-11M3 12h3M18 12h3M12 3v3M12 18v3"/>
                </svg>
                <h3>${name}</h3>
            </div>
            <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"/>
            </svg>
        </div>
    `;

    return card;
}

function createDietCard(id, name) {
    const card = document.createElement('div');
    card.className = 'card diet-card-item';
    card.onclick = () => showDietDetail(id);

    card.innerHTML = `
        <div class="card-header">
            <div class="card-title">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z"/>
                </svg>
                <h3>${name}</h3>
            </div>
            <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"/>
            </svg>
        </div>
    `;

    return card;
}


function showWorkoutDetail(id) {
    const workout = workoutPrograms[id];
    const list = document.getElementById('workoutsList');
    const detail = document.getElementById('workoutDetail');

    list.style.display = 'none';
    detail.classList.add('active');

    let exercisesHTML = '';
    workout.exercises.forEach(exercise => {
        exercisesHTML += `<div class="exercise-item">${exercise}</div>`;
    });

    detail.innerHTML = `
        <button class="back-btn" onclick="showWorkouts()">← رجوع للبرامج</button>
        <div class="detail-card">
            <h2 class="detail-title">${workout.name}</h2>
            ${workout.info ? `<p class="detail-info">${workout.info}</p>` : ''}
            <div class="exercise-list">
                ${exercisesHTML}
            </div>
        </div>
    `;
}


function showDietDetail(id) {
    const diet = dietPlans[id];
    const list = document.getElementById('dietList');
    const detail = document.getElementById('dietDetail');

    list.style.display = 'none';
    detail.classList.add('active');

    let mealsHTML = '';
    diet.meals.forEach(meal => {
        mealsHTML += `<div class="meal-item">${meal}</div>`;
    });

    detail.innerHTML = `
        <button class="back-btn" onclick="showDiet()">← رجوع للأنظمة</button>
        <div class="detail-card">
            <h2 class="detail-title" style="color: #22c55e;">${diet.name}</h2>
            <p class="detail-info">السعرات: ${diet.calories}</p>
            ${diet.info ? `<p class="detail-info">${diet.info}</p>` : ''}
            <div class="meal-list">
                ${mealsHTML}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    showHome();

});
