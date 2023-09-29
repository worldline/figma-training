# Autres propriétés

Nous allons maintenant créer une liste de contacts. 

::: tip 🎯 Objectif : créer la Card de contact 
![contact-card-frame](../../../assets/img/figma/theory/ui-components/properties/contact-card-frame.png)
:::

## Conteneur

- Changez la couleur de fond de l'écran `Contacts screen` (ex: vert clair - #ECFFF4)
- Créez une frame (raccourci clavier <kbd>F</kbd>) blanche à l'intérieure de l'écran (renommez la en `Card`)

::: details Tutoriel 🎥
![create-card-frame](../../../assets/img/figma/theory/ui-components/properties/create-card-frame.gif)
:::

- Appliquez à cette `Card` une ombre portée (Panneau de droite > Effects ![create-card-frame](../../../assets/img/figma/theory/ui-components/properties/design-panel-effects-section.png) > Bouton Ajouter ![create-card-frame](../../../assets/img/figma/theory/ui-components/properties/design-panel-add-button.png) > `Drop Shadow`)

> **Remarque :** Vous pouvez changer les propriétés de cette ombre en cliquant sur ![effect-properties-button](../../../assets/img/figma/theory/ui-components/properties/effect-properties-button.png)

- Ajoutez une bordure (`Stroke`) à cette card
- Modifiez les propriétés de la bordure :
    - elle ne doit apparaître qu'à gauche de la frame (utilisez ![stroke-side-selection](../../../assets/img/figma/theory/ui-components/properties/stroke-side-selection.png))
    - elle doit être de couleur verte (utilisez ![stroke-color-selection.png](../../../assets/img/figma/theory/ui-components/properties/stroke-color-selection.png))
    - elle doit faire 4px d'épaisseur (utilisez ![stroke-weight-selection.png](../../../assets/img/figma/theory/ui-components/properties/stroke-weight-selection.png))

- Changez les arrondies des angles (`Corner radius`) de la `Card` (ex: 4px)

::: details Tutoriel 🎥
![properties-card-frame](../../../assets/img/figma/theory/ui-components/properties/properties-card-frame.gif)
:::

## Contenu


- Ajoutez 2 textes dans la `Card` :
    - un pour le prénom et le nom
    - un autre pour le numéro de téléphone

- Changez les propriétés des textes comme suit :
    - **Prénom/nom** : `16px` de taille de texte, `24px` de hauteur de ligne (`line-height`), police `Roboto`, épaisseur `semi-bold`, couleur noire foncée `#333333`
    - **Numéro** : taille de texte `14px`, hauteur de ligne `21px` police `Roboto`, épaisseur `regular`, couleur grise `#999999`

- Alignez les textes sur la gauche, et positionnez-les l'un en dessous de l'autre :

![create-card-name-number](../../../assets/img/figma/theory/ui-components/properties/create-card-name-number.png)