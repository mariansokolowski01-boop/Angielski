import asyncio
import os
import edge_tts

VOICE_PL = "pl-PL-ZofiaNeural"

STAGES_TEXT = {
    1: "Zuzia ze skrzypnięciem pchnęła drewnianą furtkę ogrodu. Na miękkiej trawie siedział rudy lisek w zielonym szaliku, a obok przechodził potężny, ale łagodny niedźwiedź. W gałęziach śpiewał ptaszek, a z kępki mchu wyglądała żabka.",
    2: "Ścieżka wyprowadziła Zuzię i Liska na rozległą łąkę utkaną tysiącami barwnych kwiatów. Ciepłe słońce muskało ich policzki, a nad trawą tańczyły wesołe motyle.",
    3: "W oddali rozległ się szum wody. Zuzia i Lisek stanęli na starym drewnianym mostku, spoglądając w przejrzysty nurt rzeczki, gdzie pluskały się rybki i kaczuszki.",
    4: "Gdy brzuszek Liska zaczął głośno burczeć, Zuzia rozłożyła piknikowy kocyk. Wyciągnęła chrupiące jabłka, świeży chleb, dzbanek mleka i złoty miód, a w borówkach czekały pyszne jagody.",
    5: "Z nieba spadły pierwsze krople ciepłego deszczu. Zuzia i Lisek schowali się pod olbrzymim zielonym liściem, jak pod parasolem. Z gałęzi spoglądała na nich mądra sowa, a z norki wyjrzał puszysty zajączek.",
    6: "Las się rozstąpił i przed Zuzią i Liskiem ukazało się bezkresne morze! Ciepły piasek łaskotał w stópki, na kamieniu wygrzewał się mały krab, a z fal wychyliła się uśmiechnięta foka.",
    7: "I wreszcie, pośród korzeni prastarego dębu, ukazał się uroczy leśny domek! W oknie paliło się ciepłe światełko, a w progu stała cała rodzina Liska, witając podróżników z otwartymi ramionami."
}

async def generate_stage(num: int, text: str, output_dir: str):
    out_path = os.path.join(output_dir, f"etap{num}.mp3")
    print(f"Generowanie etapu {num} -> {out_path}...")
    communicate = edge_tts.Communicate(text, VOICE_PL, rate="-3%")
    await communicate.save(out_path)
    print(f"[OK] Etap {num} gotowy!")

async def main():
    audio_dir = os.path.join("public", "audio")
    os.makedirs(audio_dir, exist_ok=True)

    print("=== Generowanie audio etapów 1-7 głosem pl-PL-ZofiaNeural ===")
    for num, text in STAGES_TEXT.items():
        await generate_stage(num, text, audio_dir)
        await asyncio.sleep(0.2)

    print("\n Wszystkie nagrania etapów etap1.mp3 - etap7.mp3 zostały pomyślnie utworzone!")

if __name__ == "__main__":
    asyncio.run(main())
