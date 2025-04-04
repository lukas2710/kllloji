<?php
// Activer l'affichage des erreurs pour débogage
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil - Yamonfilm</title>
    
    <!-- Lien vers Google Fonts pour la police -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    
    <!-- Lien vers le fichier CSS -->
    <link rel="stylesheet" href="style ac.css">
</head>
<body>

  <!-- En-tête avec logo et titre -->
  <div class="header">
    <img src="img/logo.png" alt="Yamonfilm Logo">
    <div class="main-title">
      <h1>Yamonfilm</h1>
    </div>
  </div>

  <!-- Section Films récents -->
  <div class="container">
    <h2>Films Récemment Ajoutés</h2>
    <div class="recent-movies">
      <?php
        // Dossier contenant les films
        $directory = __DIR__ . '/film'; 
        $recentFiles = [];

        // Vérifie si le dossier 'film' existe
        if (is_dir($directory)) {
            // Récupère tous les fichiers .html
            $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory));
            foreach ($rii as $file) {
                // Vérifie que c'est un fichier .html
                if (!$file->isDir() && pathinfo($file, PATHINFO_EXTENSION) === 'html') {
                    $recentFiles[] = $file;
                }
            }

            // Trie les fichiers par date de modification (les plus récents en premier)
            usort($recentFiles, function($a, $b) {
                return filemtime($b) - filemtime($a);
            });

            // Affiche les 10 derniers films ajoutés
            $recentFiles = array_slice($recentFiles, 0, 10);

            foreach ($recentFiles as $file) {
                // Obtenir le nom et le chemin relatif du fichier
                $relativePath = str_replace(__DIR__ . '/', '', $file->getPathname()); 
                $filename = basename($file, '.html');
                // Afficher chaque film sous forme de carte avec une image placeholder
                echo "
                <div class='movie-card' onclick=\"window.location.href='$relativePath'\">
                    <img src='https://via.placeholder.com/200x300?text=" . urlencode($filename) . "' alt='$filename'>
                </div>";
            }
        } else {
            echo "<p>⚠️ Le dossier 'film/' est introuvable.</p>";
        }
      ?>
    </div>
    <div class="button-container">
      <button class="button" onclick="window.location.href='film.html'">Explorer les films</button>
    </div>
  </div>

  <!-- Lien vers le fichier JavaScript -->
  <script src="script.js"></script>

</body>
</html>
