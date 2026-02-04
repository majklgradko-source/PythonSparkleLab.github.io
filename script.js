// Данные для всех тем
const lessonsData = {
    basics: {
        title: "Основы Python",
        duration: "15 минут",
        difficulty: "Начальный",
        content: `
            <div class="lesson-section">
                <h2>Что такое Python?</h2>
                <p>Python — это интерпретируемый, высокоуровневый язык программирования общего назначения. Его философия дизайна подчеркивает читаемость кода с использованием значительных отступов.</p>
            </div>
            
            <div class="lesson-section">
                <h2>Первая программа</h2>
                <p>Традиционная первая программа на любом языке программирования — "Hello, World!". В Python это делается одной строкой:</p>
                <div class="lesson-code-block">
                    <pre><code># Это комментарий
print("Привет, мир!")</code></pre>
                </div>
            </div>
            
            <div class="lesson-section">
                <h2>Особенности синтаксиса</h2>
                <ul>
                    <li>Использует <strong>отступы</strong> для обозначения блоков кода</li>
                    <li>Не требует точки с запятой в конце строк</li>
                    <li>Динамическая типизация</li>
                    <li>Автоматическое управление памятью</li>
                </ul>
            </div>
        `
    },
    
    variables: {
        title: "Переменные в Python",
        duration: "20 минут",
        difficulty: "Начальный",
        content: `
            <div class="lesson-section">
                <h2>Что такое переменная?</h2>
                <p>Переменная — это именованная область памяти для хранения данных. В Python переменные создаются в момент присваивания значения.</p>
                <div class="lesson-code-block">
                    <pre><code># Создание переменных
name = "Анна"
age = 25
height = 1.75
is_student = True</code></pre>
                </div>
            </div>
            
            <div class="lesson-section">
                <h2>Правила именования</h2>
                <ul>
                    <li>Имя может содержать буквы, цифры и нижние подчеркивания</li>
                    <li>Не может начинаться с цифры</li>
                    <li>Регистр имеет значение (Age и age — разные переменные)</li>
                    <li>Нельзя использовать ключевые слова Python</li>
                </ul>
            </div>
            
            <div class="lesson-section">
                <h2>Основные типы данных</h2>
                <div class="lesson-code-block">
                    <pre><code># Строки (string)
text = "Привет, Python!"

# Целые числа (integer)
number = 42

# Числа с плавающей точкой (float)
price = 19.99

# Логический тип (boolean)
is_active = True

# Список (list)
colors = ["красный", "зеленый", "синий"]

# Словарь (dictionary)
person = {"name": "Иван", "age": 30}</code></pre>
                </div>
            </div>
        `
    },
    
    loops: {
        title: "Циклы в Python",
        duration: "25 минут",
        difficulty: "Средний",
        content: `
            <div class="lesson-section">
                <h2>Цикл for</h2>
                <p>Используется для перебора элементов последовательности (списка, строки, диапазона).</p>
                <div class="lesson-code-block">
                    <pre><code># Перебор списка
fruits = ["яблоко", "банан", "вишня"]
for fruit in fruits:
    print(fruit)

# Функция range()
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 6):  # 2, 3, 4, 5
    print(i)</code></pre>
                </div>
            </div>
            
            <div class="lesson-section">
                <h2>Цикл while</h2>
                <p>Выполняет блок кода, пока условие истинно.</p>
                <div class="lesson-code-block">
                    <pre><code># Простой цикл while
count = 0
while count < 5:
    print(count)
    count += 1  # Увеличиваем счетчик

# Цикл с break
while True:
    user_input = input("Введите 'выход' для завершения: ")
    if user_input == "выход":
        break
    print(f"Вы ввели: {user_input}")</code></pre>
                </div>
            </div>
        `
    },
    
    conditions: {
        title: "Условные операторы",
        duration: "20 минут",
        difficulty: "Начальный",
        content: `
            <div class="lesson-section">
                <h2>Оператор if</h2>
                <p>Выполняет код, если условие истинно.</p>
                <div class="lesson-code-block">
                    <pre><code>age = 18
if age >= 18:
    print("Вы совершеннолетний")

temperature = 25
if temperature > 30:
    print("Жарко")
else:
    print("Комфортная температура")</code></pre>
                </div>
            </div>
            
            <div class="lesson-section">
                <h2>Цепочки условий (elif)</h2>
                <div class="lesson-code-block">
                    <pre><code>score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Оценка: {grade}")</code></pre>
                </div>
            </div>
        `
    },
    
    modules: {
        title: "Модули в Python",
        duration: "18 минут",
        difficulty: "Средний",
        content: `
            <div class="lesson-section">
                <h2>Что такое модуль?</h2>
                <p>Модуль — это файл с расширением .py, содержащий определения и инструкции Python. Модули позволяют организовывать код в логические блоки.</p>
            </div>
            
            <div class="lesson-section">
                <h2>Импорт модулей</h2>
                <div class="lesson-code-block">
                    <pre><code># Импорт всего модуля
import math
print(math.sqrt(16))  # 4.0

# Импорт с псевдонимом
import numpy as np

# Импорт конкретных функций
from datetime import date
today = date.today()

# Импорт всего содержимого (не рекомендуется)
from random import *</code></pre>
                </div>
            </div>
        `
    },
    
    strings: {
        title: "Работа со строками",
        duration: "22 минуты",
        difficulty: "Начальный",
        content: `
            <div class="lesson-section">
                <h2>Создание строк</h2>
                <div class="lesson-code-block">
                    <pre><code># Одинарные кавычки
str1 = 'Привет'

# Двойные кавычки
str2 = "Мир"

# Многострочные строки
str3 = """Это
многострочная
строка"""

# Экранирование
str4 = "Он сказал: \"Привет\""</code></pre>
                </div>
            </div>
            
            <div class="lesson-section">
                <h2>Методы строк</h2>
                <div class="lesson-code-block">
                    <pre><code>text = " Python программирование "

# Удаление пробелов
print(text.strip())        # "Python программирование"

# Регистр
print(text.upper())        # " PYTHON ПРОГРАММИРОВАНИЕ "
print(text.lower())        # " python программирование "

# Замена
print(text.replace("Python", "Java"))

# Разделение
words = text.strip().split()
print(words)  # ['Python', 'программирование']

# Поиск
print("Python" in text)    # True</code></pre>
                </div>
            </div>
        `
    },
    
    files: {
        title: "Работа с файлами",
        duration: "30 минут",
        difficulty: "Средний",
        content: `
            <div class="lesson-section">
                <h2>Чтение файлов</h2>
                <div class="lesson-code-block">
                    <pre><code># Чтение всего файла
with open('example.txt', 'r', encoding='utf-8') as file:
    content = file.read()
    print(content)

# Чтение построчно
with open('example.txt', 'r', encoding='utf-8') as file:
    for line in file:
        print(line.strip())</code></pre>
                </div>
            </div>
            
            <div class="lesson-section">
                <h2>Запись в файлы</h2>
                <div class="lesson-code-block">
                    <pre><code># Запись строки
with open('output.txt', 'w', encoding='utf-8') as file:
    file.write("Первая строка\\n")
    file.write("Вторая строка\\n")

# Добавление в конец файла
with open('output.txt', 'a', encoding='utf-8') as file:
    file.write("Новая строка\\n")</code></pre>
                </div>
            </div>
        `
    }
};

// Переменные для управления модальными окнами
let currentTopic = null;

// Функция для открытия модального окна с темами
function openTopicsModal() {
    const modal = document.getElementById('topicsModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
}

// Функция для закрытия модального окна
function closeTopicsModal() {
    const modal = document.getElementById('topicsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
}

// Функция для открытия урока
function openLesson(topicId) {
    if (!lessonsData[topicId]) {
        alert('Урок не найден!');
        return;
    }
    
    const lesson = lessonsData[topicId];
    currentTopic = topicId;
    
    // Создаем HTML для урока
    const lessonHTML = `
        <div class="lesson-content">
            <div class="lesson-header">
                <h1>${lesson.title}</h1>
                <div class="lesson-meta">
                    <span><i class="far fa-clock"></i> ${lesson.duration}</span>
                    <span><i class="fas fa-signal"></i> ${lesson.difficulty}</span>
                </div>
            </div>
            
            <div class="lesson-body">
                ${lesson.content}
                
                <div class="lesson-actions">
                    <button onclick="closeLesson()" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i> Вернуться к темам
                    </button>
                    <button onclick="markAsCompleted('${topicId}')" class="btn btn-primary">
                        <i class="far fa-check-circle"></i> Отметить как пройденное
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Открываем модальное окно с уроком
    showLessonModal(lessonHTML);
}

// Функция для отображения модального окна с уроком
function showLessonModal(content) {
    // Закрываем окно с темами
    closeTopicsModal();
    
    // Создаем или обновляем модальное окно для урока
    let lessonModal = document.getElementById('lessonModal');
    
    if (!lessonModal) {
        lessonModal = document.createElement('div');
        lessonModal.id = 'lessonModal';
        lessonModal.className = 'modal';
        document.body.appendChild(lessonModal);
    }
    
    // HTML для модального окна урока с улучшенной структурой
    lessonModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="fas fa-book"></i> Урок</h2>
                <button class="close-modal" onclick="closeLesson()">&times;</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    lessonModal.style.display = 'block';
    
    // Добавляем обработчик закрытия по клику на фон
    lessonModal.addEventListener('click', function(e) {
        if (e.target === lessonModal) {
            closeLesson();
        }
    });
    
    // Добавляем функционал копирования кода
    setTimeout(() => {
        document.querySelectorAll('.lesson-code-block').forEach(block => {
            const code = block.querySelector('code');
            if (code && !block.querySelector('.copy-code-btn')) {
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-code-btn';
                copyBtn.innerHTML = '<i class="far fa-copy"></i> Копировать';
                copyBtn.onclick = () => copyLessonCode(code);
                block.appendChild(copyBtn);
            }
        });
    }, 100);
}

// Функция для копирования кода из урока
function copyLessonCode(codeElement) {
    const codeText = codeElement.innerText;
    
    navigator.clipboard.writeText(codeText)
        .then(() => {
            const button = codeElement.parentElement.querySelector('.copy-code-btn');
            if (button) {
                const originalHTML = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
                button.style.background = '#10b981';
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.style.background = '';
                }, 2000);
            }
        })
        .catch(err => {
            console.error('Ошибка при копировании:', err);
            alert('Не удалось скопировать код. Выделите текст вручную.');
        });
}

// Функция для закрытия урока
function closeLesson() {
    const lessonModal = document.getElementById('lessonModal');
    if (lessonModal) {
        lessonModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
    }
}

// Функция для закрытия урока
function closeLesson() {
    const lessonModal = document.getElementById('lessonModal');
    if (lessonModal) {
        lessonModal.style.display = 'none';
    }
    openTopicsModal(); // Возвращаемся к выбору тем
}

// Функция для отметки урока как пройденного
function markAsCompleted(topicId) {
    // Сохраняем в localStorage
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes(topicId)) {
        completed.push(topicId);
        localStorage.setItem('completedLessons', JSON.stringify(completed));
    }
    
    alert('Урок отмечен как пройденный!');
    closeLesson();
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    // Кнопка "Начать изучать" - открывает модальное окно с темами
    const startBtn = document.getElementById('startLearningBtn');
    if (startBtn) {
        startBtn.addEventListener('click', openTopicsModal);
    }
    
    // Кнопка закрытия модального окна с темами
    const closeBtn = document.querySelector('#topicsModal .close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTopicsModal);
    }
    
    // Клик по фону модального окна закрывает его
    const modal = document.getElementById('topicsModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeTopicsModal();
            }
        });
    }
    
    // Назначаем обработчики для карточек тем
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', function() {
            const topicId = this.getAttribute('data-topic');
            openLesson(topicId);
        });
    });
    
    // Добавляем стили для кнопок в уроках
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            padding: 12px 24px;
            border-radius: 8px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;
        }
        
        .btn-primary {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            color: white;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);
        }
        
        .btn-secondary {
            background: #f1f5f9;
            color: #64748b;
            border: 1px solid #e2e8f0;
        }
        
        .btn-secondary:hover {
            background: #e2e8f0;
        }
    `;
    document.head.appendChild(style);
});