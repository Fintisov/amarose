# amarose-dev


shopify login --store store.myshopify.com

откроется браузер нужно будет залогинится, далее в терминале выбрать под каким из партнерских аккаунтов заходим.

shopify theme pull

Стягивает тему из стора, в терминале предложит какую именно

shopify theme init

Клонирует Dawn тему с официального репозитория

shopify theme serve

Запускает локальный эмулятор, создает скрытую development theme ссылки на превью темы в браузере и кастомайзер. Аналог theme watch с той разницей что файлы не заливаются в стор.

Из плюсов моментально обновляет страницу, без перезагрузки когда сохраняем файл.
Терминал не показывает какой файл обновился, но если есть ошибка выдаёт её.


shopify theme push

Пушит изменения в стор. Позволяет выбрать в какую тему, есть опции как именно зальёт.

shopify logout

Разлогиниваемся, заканчиваем работу со стором.
