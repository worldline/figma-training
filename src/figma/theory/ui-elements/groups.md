# Groupes

Afin de créer des éléments d'interface plus complexes il est possible de grouper des élements. 

Pour l'exemple nous allons créer une barre de statut (que l'on peut retrouver sur beaucoup d'appli mobiles).

::: tip 🎯 Objectif : créer la Status bar
![status bar preview](../../../assets/img/figma/theory/ui-components/groups/status-bar-preview.png)
:::

Pour celà, commencez par positionner le texte au milieu du rectangle.

## Superposition des calques
Comme le rectangle a été créé en dernier, il apparait au dessus du texte dans le `Panneau des calques` à gauche. Il faut donc changer l'ordre de superposition des calques.

Plusieurs façons de faire :
- Clique droit sur le texte, puis sélectionnez l'option _Bring to front_
- Clique droit le rectangle et, clique droit puis sélectionnez l'option _Send to back_

::: details Tutoriel 🎥
![send to back](../../../assets/img/figma/theory/ui-components/groups/send-to-back.gif)
:::

- Dans le `Panneau des calques` à gauche, faites glisser le texte au dessus du rectangle ou bien l'inverse.

::: details Tutoriel 🎥
![drag to front](../../../assets/img/figma/theory/ui-components/groups/drag-to-front.gif)
:::


## Positionnement
Pour centrer des éléments les uns par rapport aux autres, il existe plusieurs solutions :
- Sélectionnez tous les éléments (avec <kbd>Shift</kbd> OU en trançant un rectangle autour avec l'outil de sélection <img height="32px" alt="select tool icon" src="../../../assets/img/figma/theory/ui-components/groups/select-tool-icon.png">) puis utilisez les boutons d'alignement dans le `Design panel` à gauche en haut <img height="32px" alt="alignment buttons" src="../../../assets/img/figma/theory/ui-components/groups/alignment-buttons.png">

::: details Tutoriel 🎥
![elements alignment](../../../assets/img/figma/theory/ui-components/groups/elements-alignment.gif)
:::

- Sélectionnez directement le texte au centre du rectangle avec les aides visuels de Figma

::: details Tutoriel 🎥
![elements positioning](../../../assets/img/figma/theory/ui-components/groups/elements-positioning.gif)
:::

Une fois positionnés, sélectionnez le texte et le rectangle (par exemple avec <kbd>Shift</kbd>) puis faites <kbd>Ctrl</kbd> + <kbd>G</kbd> pour grouper.

> **Remarque :** Vous pouvez voir qu'un nouvel élément (calque de type groupe) est apparu dans le `Layers panel` à gauche. Il contient le texte et le rectangle.

Veuillez renommer les calques pour une meilleure organisation de votre design.

::: details Tutoriel 🎥
![elements group](../../../assets/img/figma/theory/ui-components/groups/elements-group.gif)
:::

Vous disposez maintenant d'un élément `Status bar` (bare de statut) utilisable dans vos futurs écrans ! 👏