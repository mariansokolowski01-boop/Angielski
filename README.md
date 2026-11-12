# 🦊 Lisek wraca do domu – Edukacyjna Przygoda dla Zuzi

Piękna, ciepła aplikacja edukacyjna w klimacie leśnej akwareli, stworzona specjalnie dla dziewczynki o imieniu **Zuzia** do radosnej nauki języka angielskiego.

---

## 🌟 Główne Funkcje

1. **Ekran Powitalny**:
   - Ciepła historia o spotkaniu Zuzi z małym, rudym liskiem w zielonym szaliku przy starej furtce ogrodu.
   - Możliwość odsłuchania lektora (z pliku lub za pomocą Web Speech API).
   - Duży przycisk „Ruszamy na szlak!”.

2. **Leśna Mapa Przygody**:
   - Kręta leśna ścieżka ze śladami lisich łapek.
   - 6 etapów (po 5 słówek każdy):
     - **Etap 1: Spotkanie przy furtce** (*fox, tree, bird, frog, bear*)
     - **Etap 2: Leśna polana** (*flower, sun, grass, butterfly, rock*)
     - **Etap 3: Nad strumykiem** (*water, fish, bridge, duck, boat*)
     - **Etap 4: Piknik w lesie** (*apple, bread, milk, honey, berry*)
     - **Etap 5: Zwierzęta nocy** (*owl, moon, star, rabbit, squirrel*)
     - **Etap 6: Dom Liska** (*house, door, window, bed, family*)
   - Kolejne etapy odblokowują się po zaliczeniu poprzednich.
   - Wskaźnik zdobytych gwiazdek (0–3) przy każdym etapie.

3. **3 Kroki w Każdym Etapie**:
   - **Krok A (Nauka słówek)**: Duże karty z fonetyką, polskim znaczeniem, przyciskami wymowy (normalne tempo i wolne tempo 🐢 dla dziecka) oraz opisanymi ramkami na ilustracje.
   - **Krok B (Szybki sprawdzian)**: Słuchanie wymowy angielskiego słówka i wskazywanie właściwego obrazka z natychmiastową pochwałą i łagodną informacją zwrotną.
   - **Krok C (Nagroda i Strona Książeczki)**: Przyznanie gwiazdek, konfetti i odblokowanie nowego rozdziału bajki z interaktywnymi słówkami do odsłuchania!

4. **Książeczka Zuzi**:
   - Zbiór wszystkich odblokowanych rozdziałów bajki, które można czytać i odsłuchiwać jak prawdziwą książkę do snu.

5. **Kącik Rodzica**:
   - Podgląd postępów Zuzi, regulacja tempa głosu lektora, opcja zresetowania stanu gry i odtworzenia wstępu.

---

## 🚀 Jak uruchomić grę?

### Najprostszy sposób (1 kliknięcie w Windows):
Kliknij dwukrotnie w plik:
👉 `Uruchom_Gre.bat`

Gra automatycznie uruchomi lokalny serwer i otworzy Twoją przeglądarkę pod adresem:
`http://localhost:3000`

---

## 🎨 Wstawianie własnych ilustracji i nagrań audio

Wszystkie miejsca na ilustracje i nagrania mają gotowe placeholdery:
- Ilustracje wrzucaj do folderu: `public/images/` (szczegóły w pliku `public/images/README.txt`)
- Nagrania dźwiękowe wrzucaj do folderu: `public/audio/` (szczegóły w pliku `public/audio/README.txt`)

Jeśli nie dodasz plików, aplikacja automatycznie używa ślicznych ikon wektorowych oraz wbudowanego syntezatora mowy!
