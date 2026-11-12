import asyncio
import os
import edge_tts

VOICE_EN = "en-GB-SoniaNeural"
VOICE_PL = "pl-PL-ZofiaNeural"

WORDS = [
    # Etap 1
    "fox", "tree", "bird", "frog", "bear",
    # Etap 2
    "flower", "sun", "grass", "butterfly", "rock",
    # Etap 3
    "water", "fish", "bridge", "duck", "boat",
    # Etap 4
    "apple", "bread", "milk", "honey", "berry",
    # Etap 5
    "owl", "moon", "star", "rabbit", "squirrel",
    # Etap 6
    "sea", "sand", "crab", "seal", "shell",
    # Etap 7
    "house", "door", "window", "bed", "family"
]

INTRO_TEXT = """Pewnego słonecznego poranka Zuzia podeszła do starej, drewnianej furtki na skraju ogrodu. Tuż za nią siedział mały, rudy lisek w ciepłym, zielonym szaliku. Miał wielkie, ciekawe oczka, ale wyglądał na troszkę zagubionego.

Cześć Zuziu! – pisnął cichutko lisek. Zgubiłem drogę powrotną do mojej norki w głębi lasu. Słyszałem, że jesteś bardzo mądra i potrafisz uczyć się magicznych słów w języku angielskim! Czy pomożesz mi przejść przez leśne krainy i wrócić do mojej rodziny?

Zasady naszej wspólnej przygody są proste:
W każdym z siedmiu rozdziałów poznasz pięć magicznych słówek.
Zagrasz w grę pamięciową Magiczne Pary.
Zdobędziesz złote gwiazdki w sprawdzianie słuchowym.
A na koniec zakręcisz Kołem Fortuny, zbierzesz piękne naklejki do Albumu i odblokujesz kolejne strony naszej bajki!
Ruszajmy na szlak, mała odkrywczyni!"""

async def generate_word(word: str, output_dir: str):
    out_path = os.path.join(output_dir, f"{word}.mp3")
    communicate = edge_tts.Communicate(word, VOICE_EN, rate="-5%")
    await communicate.save(out_path)
    print(f"[OK] Słówko: {word} -> {out_path}")

async def generate_intro(output_path: str):
    print(f"Generowanie wstępu bajki głosem {VOICE_PL}...")
    communicate = edge_tts.Communicate(INTRO_TEXT, VOICE_PL, rate="-4%")
    await communicate.save(output_path)
    print(f"[OK] Wstęp bajki zapisany -> {output_path}")

async def main():
    words_dir = os.path.join("public", "audio", "words")
    os.makedirs(words_dir, exist_ok=True)
    
    # 1. Generuj słówka po angielsku
    print(f"--- Generowanie 35 angielskich słówek głosem {VOICE_EN} ---")
    for word in WORDS:
        await generate_word(word, words_dir)
        await asyncio.sleep(0.1)

    # 2. Generuj intro po polsku
    print(f"\n--- Generowanie wstępu bajki ---")
    intro_path = os.path.join("public", "audio", "intro.mp3")
    await generate_intro(intro_path)

    print("\n Wszystkie nagrania MP3 zostały pomyślnie wygenerowane!")

if __name__ == "__main__":
    asyncio.run(main())
