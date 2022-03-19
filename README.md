## Развертывание приложения <br>

# База данных <br>
Создаём бд с именем "social" utf8mb4 general ci <br>
Пользователь root без пароля <br>
# Установка базовых компонентов
https://getcomposer.org/Composer-Setup.exe - composer, PHP 8 в OpenServer/modules/php/PHP_8.0 <br>
Нужно добавить в PATH PHP и Composer https://pcask.ru/os/kak-otredaktirovat-path-v-windows-7-8-i-windows-10/ <br>
Указываем путь к PHP 8.0 и composer PHP 8 в OpenServer/modules/php/PHP_8.0, <br> 
composer C:\Users\ВашПользователя\AppData\Roaming\Composer\vendor\bin<br>
Затем нужно перезагрузить винду<br>
# Установка компонентов Laravel + React<br>
Прописываем в папке composer install, затем npm install <br>

# ENV файл
Заходим в файл .env и ставим следующие переменные как: <br>

DB_DATABASE=social <br>
DB_USERNAME=root <br>
DB_PASSWORD= <br>

# Laravel<br>
php artisan key:generate <br>
php artisan migrate <br>

# Старт проекта <br>
Нужно открыть 2 консоли, в первой прописать php artisan serve, во второй npm run watch