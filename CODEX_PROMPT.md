# CODEX_PROMPT.md

Copier-coller ce prompt dans Codex à la racine du dépôt.

```text
Lis d’abord AGENTS.md, README.md, docs/architecture.md et le registre des leçons.

Je veux que tu travailles dans ce dépôt ATRIUM-Français comme sur une base de production statique, sans framework lourd et sans casser l’architecture existante.

Contexte produit :
- application d’apprentissage spiralaire du français au collège ;
- 6e : 4 modules ;
- 5e : 4 modules ;
- 4e : 4 modules ;
- 3e : 4 modules + 1 module Révisions DNB ;
- 15 leçons par module ;
- 12 exercices par leçon ;
- priorité actuelle : stabiliser le scaffold collège et préparer la rédaction industrialisable des contenus.

Ce que j’attends de toi dans cette session :
1. auditer l’état réel du dépôt ;
2. vérifier la cohérence des imports, routes, vues, registres et blueprints multi-niveaux ;
3. corriger seulement ce qui est nécessaire pour rendre le scaffold propre, cohérent et testable ;
4. ne pas rédiger encore les 3060 exercices, mais préparer un terrain impeccable pour les rédiger ;
5. ajouter ou corriger les tests de cohérence sur tous les niveaux ;
6. me rendre un bilan final précis des changements effectués, des points encore fragiles et de la prochaine tâche optimale.

Contraintes fortes :
- ne pas introduire React, Vue, Svelte ou autre framework ;
- ne pas changer les IDs de modules et de leçons sans nécessité absolue ;
- ne pas supprimer les `officialRefs` ;
- ne pas remplacer le scaffold actuel par une autre architecture ;
- toute modification doit être lisible, minimale, robuste ;
- garder GitHub Pages comme cible naturelle de déploiement ;
- toute fonction nouvelle doit rester simple, modulaire et testable.

Méthode :
- commence par lire les fichiers structurants ;
- dresse un mini-plan ;
- applique les changements de plus haute confiance d’abord ;
- exécute les tests ;
- si un point reste incertain, fais la solution la plus conservative ;
- à la fin, résume clairement ce qui a été vérifié, corrigé et ce qui reste à produire.

Définition du succès pour cette session :
- scaffold multi-niveaux propre ;
- dashboard et routes cohérents ;
- registre collège cohérent ;
- tests de validation utiles et passants ;
- dépôt prêt pour la rédaction module par module, en commençant par la 6e.
```
