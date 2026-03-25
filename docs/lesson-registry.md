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

- tous les modules exposent 15 leçons et 12 `exerciseSlots` par leçon ;
- 6e (`6e-m1` à `6e-m4`) : `contentStatus: tested` ;
- 5e : `5e-m1` en `contentStatus: tested`, `5e-m2` à `5e-m4` en `contentStatus: authored` ;
- 4e (`4e-m1` à `4e-m4`) : `contentStatus: authored` ;
- 3e (`3e-m1` à `3e-m5`) : `contentStatus: authored` ;
- `3e-m5` est authored pour un entraînement DNB guidé (pas une simulation complète d’épreuve).
