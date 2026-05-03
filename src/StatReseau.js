function StatReseau({ lignes }) {
  // 1. Nombre total de lignes
  const totalLignes = lignes.length;

  // 2. Nombre total d'arrêts (somme de tous les arrêts)
  // acc démarre à 0, on additionne chaque l.arrets
// 14 + 18 + 12 + 10 + 16 + 11 = 81
  const totalArrets = lignes.reduce((acc, l) => acc + l.arrets, 0);

  // 3. Ligne avec le plus d'arrêts
  const ligneMax = lignes.reduce((max, l) =>
    l.arrets > max.arrets ? l : max
  );

  return (
    <div className="stat-reseau">
      <h3> Statistiques du réseau</h3>
      <p> Total lignes : <strong>{totalLignes}</strong></p>
      <p> Total arrêts : <strong>{totalArrets}</strong></p>
      <p> Ligne la plus longue : <strong>
        Ligne {ligneMax.numero} ({ligneMax.arrets} arrêts)
      </strong></p>
    </div>
  );
}

export default StatReseau;