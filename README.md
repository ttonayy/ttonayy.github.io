<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sevgililer Günü Sürprizi</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="container">
        <h1>Ronya & Tonay</h1>
        <div class="heart">❤</div>
        <p>Yalnızca bir tane cevap hakkın var aşkım iyi şanslar <B </p>
        <form id="quiz-form">
            <label for="answer">İstanbul'da Resmî kayıtlarda fazla geçmese de, özellikle Rum ve Ermeni topluluklarının kendi bağlarından elde ettikleri üzümlerle küçük çaplı ama kaliteli şaraplar ürettiği ve 'Makriyakavalnespatriciaköy' olarak da bilinen II. Abdülhamid döneminde önemli siyasi entrikalara ev sahipliği yapan ilçemiz nedir?</label>
            <input type="text" id="answer" name="answer" required>
            <button type="submit">Cevapla</button>
        </form>
        <p class="hint">İpucu: Kutunun içine işine yarayacak bir bilgi bırakmış olabilirim.</p>
        <div id="result"></div>
    </div>
    <script>
        document.getElementById('quiz-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const answer = document.getElementById('answer').value.toLowerCase();
            const resultDiv = document.getElementById('result');
            if (answer === 'bakırköy') {
                resultDiv.innerHTML = '<div class="animation">Bravo!</div>';
                resultDiv.style.color = 'green';
                document.body.style.backgroundColor = 'green';
                setTimeout(() => {
                    document.body.style.backgroundColor = '#f0f0f0';
                }, 500);
            } else {
                resultDiv.innerHTML = 'Yanlış cevap, tekrar dene!';
                resultDiv.style.color = 'red';
            }
        });
    </script>
</body>
</html>,

