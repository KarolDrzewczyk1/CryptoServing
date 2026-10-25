# CryptoServing — Karol Drzewczyk

Gotowa, responsywna strona w języku polskim. Działa bez instalacji, bibliotek, kont i zewnętrznych czcionek.

## Uruchomienie
Rozpakuj ZIP. Otwórz `index.html` w przeglądarce. Zachowaj wszystkie pliki w jednym folderze.

## Podmień dane przed publikacją
- `dane.js`: imię i nazwisko, opis oraz prawdziwy adres e-mail. Pusty adres ukrywa przyciski kontaktu. Po jego wpisaniu przycisk otwiera program pocztowy odwiedzającego; strona sama nie wysyła ani nie zapisuje wiadomości.
- `index.html`: teksty sekcji, nagłówki, materiały i opinie. Przy zmianie nazwiska zmień również tytuł strony, opis oraz statyczną wersję nazwiska w HTML (widoczną bez JavaScript).
- `style.css`: kolory na początku pliku, w sekcji `:root`.
- Opinie są pokazane na górze strony jako karty z gwiazdkami. Wypowiedzi Mileny i Pawła pochodzą z treści przekazanej przez właściciela strony, ale przed publikacją potwierdź, że są autentyczne i że autorzy zgodzili się na publikację. Trzy pozostałe karty to przykłady w ramach symulacji projektu, oznaczone jako „SYMULACJA PROJEKTU”. Zastąp je prawdziwymi opiniami za zgodą autorów albo usuń. Nie podano stażu, wyników ani uprawnień Karola, ponieważ nie zostały potwierdzone. Sprawdź i zatwierdź opis jego zainteresowań i działalności.
- „Materiały” prowadzą do rzeczywistych materiałów Ethereum. Możesz zastąpić je własnymi projektami po dodaniu prawdziwych linków i opisów.

## Darmowa publikacja: GitHub Pages
1. Załóż konto na https://github.com lub zaloguj się.
2. Wybierz **New repository**, nazwij repozytorium `cryptoserving`, ustaw **Public** i utwórz je. GitHub Free obsługuje Pages dla publicznych repozytoriów.
3. Wybierz **Add file → Upload files** (w pustym repozytorium użyj linku do przesłania istniejących plików). Prześlij `index.html`, `style.css`, `dane.js` i `script.js` BEZPOŚREDNIO do głównego katalogu repozytorium. Nie przesyłaj ZIP-a ani nadrzędnego folderu.
4. Zapisz pliki przyciskiem **Commit changes**.
5. Otwórz **Settings → Pages → Build and deployment**.
6. W **Source** wybierz **Deploy from a branch**, poniżej gałąź **main** i folder **/(root)**. Kliknij **Save**.
7. Gdy wdrożenie się zakończy, adres pojawi się w zakładce Pages. Zwykle ma postać `https://TWOJ-LOGIN.github.io/cryptoserving/`.
8. Kolejne zmiany plików w tej gałęzi aktualizują stronę automatycznie. Sprawdź wynik po publikacji na telefonie oraz przetestuj kontakt.

Oficjalna instrukcja: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Zakres i treści
Strona ma przyjazny ciemnozielony styl, sekcje start, o mnie, Ethereum, materiały/projekty, opinie, FAQ i kontakt; mobilne menu, obsługę klawiatury i ograniczenie ruchu zgodne z ustawieniem urządzenia. Nie zbiera danych, nie ma analityki ani formularza przesyłającego wiadomości na serwer.

Materiały edukacyjne: https://ethereum.org/pl/what-is-ethereum/ , https://ethereum.org/what-is-ether/ , https://ethereum.org/staking/ .

Nie opublikowano oferty zarządzania cudzymi pieniędzmi ani obietnic zarobku. Jeśli taka usługa ma się pojawić, najpierw uzupełnij jej rzeczywisty zakres, warunki, uprawnienia i ryzyko. Projekt jest szablonem informacyjnym, a nie potwierdzeniem kwalifikacji lub wyników właściciela.
