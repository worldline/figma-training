# Alignements

## Alignements les éléments d'un autolayout

Dans une `Frame`avec `Autolayout`, l'alignement des éléments se fait de manière groupée ! Vous ne pouvez pas controler l'alignement de chaque élément individuellement (contrairement aux `Frames`classiques). 

C'est pour cette raison que l'alignement se règle depuis l'autolayout et pas sur chaque éléments !

Utilisez la boite d'alignement dans le `Design panel`à droite dans la propriété `Autolayout` pour changer l'alignement des éléments à l'intérieur de votre `Frame`.

::: details Démo 🎥
![alignment options](../../../assets/img/figma/advanced-features/autolayout/alignment/alignment-options.gif)
:::

> **Remarque :** La `Direction`et le `Gap`de votre autolayout vont déterminer quelle option d'alignement est possible à l'interieur de celui-ci.

**Exercice :** Tester l'alignement
- Agrandissez la `Frame`qui contient vos cercles
- Essayez de changer l'alignement dans la boite d'alignement de votre `Autolayout`
- Changer la direction (Horizontal, Vertical, Wrap) puis testez à nouveau les différents alignements
- Faites de même en changeant le `Gap` <img class="figma-button align-text" height="24px" alt="spacing button" src="../../../assets/img/figma/common/spacing-button.svg"> ("Auto" ou bien une valeur en pixel !)

::: details Tuto 🎥
![alignment box](../../../assets/img/figma/advanced-features/autolayout/alignment/alignment-box.gif)
:::