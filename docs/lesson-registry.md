# Registre des leçons

Le registre opérationnel est généré dans `assets/js/lessonRegistry.js`
à partir de `assets/js/data/curriculumBlueprint.js`.

## Répartition canonique

- 6e : modules `6e-m1` à `6e-m4`
- 5e : modules `5e-m1` à `5e-m4`
- 4e : modules `4e-m1` à `4e-m4`
- 3e : modules `3e-m1` à `3e-m5`
  (`3e-m5` = Révisions DNB)

## Convention d’identifiants

- module : `<niveau>-m<ordre>`
- leçon : `<module>-l<ordre sur 2 chiffres>`

Exemples :

- `6e-m1`
- `6e-m1-l01`
- `3e-m5-l15`

## Statut actuel

- chaque module expose 15 leçons scaffoldées ;
- chaque leçon expose 12 `exerciseSlots` ;
- les contenus d’exercices réels restent à rédiger,
  en commençant par la 6e.
