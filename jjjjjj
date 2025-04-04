<?php
// Activation de l'affichage des erreurs PHP pour faciliter le débogage
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accueil - Yamonfilm</title>

  <!-- Lien vers Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  
  <!-- Lien vers le fichier CSS externe -->
  <link rel="stylesheet" href="style ac.css">
</head>
<body>

  <!-- En-tête avec logo, titre et barre de recherche -->
  <div class="header">
    <img src="img/logo.png" alt="Yamonfilm Logo">
    <div class="main-title">
      <h1>Yamonfilm</h1>
    </div>
    <!-- Barre de recherche -->
    <div class="search-bar">
      <input type="text" id="search-input" placeholder="Rechercher un film..." oninput="showSuggestions()">
      <button onclick="searchMovie()">Rechercher</button>
      <div id="suggestions-list" class="suggestions"></div>
    </div>
  </div>

  <!-- Section Films Récemment Ajoutés -->
  <div class="container">
    <h2>Films Récemment Ajoutés</h2>
    <div class="recent-movies">
      <?php
      // Spécifie le chemin vers le dossier film
      $directory = __DIR__ . '/film'; // Dossier relatif à index.php
      $baseURL = 'film/'; // URL pour rediriger vers les films
      $recentFiles = [];

      // Vérifie si le dossier existe
      if (is_dir($directory)) {
          // Récupère tous les fichiers .html dans le dossier film
          $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory));

          foreach ($rii as $file) {
              // On ignore les dossiers et on sélectionne uniquement les fichiers .html
              if (!$file->isDir() && pathinfo($file, PATHINFO_EXTENSION) === 'html') {
                  $recentFiles[] = $file;
              }
          }

          // Trie les fichiers par date de modification (les plus récents en premier)
          usort($recentFiles, function($a, $b) {
              return filemtime($b) - filemtime($a);
          });

          // Prend uniquement les 10 premiers fichiers (les 10 derniers films ajoutés)
          $recentFiles = array_slice($recentFiles, 0, 10);

          // Affiche les films en créant une carte pour chaque fichier
          foreach ($recentFiles as $file) {
              $fullPath = $file->getPathname();
              $relativePath = str_replace(__DIR__ . '/', '', $fullPath); // Conversion en chemin relatif
              $relativePath = str_replace('\\', '/', $relativePath); // Correction pour Windows
              $filename = basename($file, '.html');

              // Affiche l'image de placeholder et le lien vers chaque film
              echo "
              <div class='movie-card' onclick=\"window.location.href='$relativePath'\">
                <img src='https://via.placeholder.com/200x300?text=" . urlencode($filename) . "' alt='" . htmlspecialchars($filename) . "'>
              </div>";
          }
      } else {
          // Affiche un message si le dossier 'film/' est introuvable
          echo "<p>⚠️ Le dossier 'film/' est introuvable.</p>";
      }
      ?>
    </div>

    <!-- Bouton pour explorer tous les films -->
    <div class="button-container">
      <button class="button" onclick="window.location.href='film.html'">Explorer les films</button>
    </div>
  </div>

  <!-- Section Séries Populaires -->
  <div class="container">
    <h2>Séries Populaires</h2>
    <div class="recent-series">
      <div class="series-card" onclick="window.location.href='series1.html'">
        <img src="https://via.placeholder.com/200x300" alt="Série 1">
      </div>
      <div class="series-card" onclick="window.location.href='series2.html'">
        <img src="https://via.placeholder.com/200x300" alt="Série 2">
      </div>
      <div class="series-card" onclick="window.location.href='series3.html'">
        <img src="https://via.placeholder.com/200x300" alt="Série 3">
      </div>
    </div>

    <div class="button-container">
      <button class="button" onclick="window.location.href='explore-series.html'">Explorer les séries</button>
    </div>
  </div>

  <!-- Lien vers le fichier JavaScript externe -->
  <script src="script.js"></script>
</body>
</html>
