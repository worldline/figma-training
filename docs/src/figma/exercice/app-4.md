# Segmented button

::: tip 🎯 Objectif : Créer le menu de sélection Covoiturage/Bus
![](../../assets/img/figma/exercice/app/segmented_control.png)
:::

Une bonne approche est de créer un composant pour un élément du menu. Ce composant aura une variante sélectionnée et une variante déselectionnée.

::: tip Astuce
Pour créer la barre horizontale de l'état sélectionné, vous pouvez mettre une `stroke bottom`
:::

Vous pouvez ensuite utiliser 3 instances de ce composant pour créer le menu.

Ce sera la frame d'auto-layout qui aura les bords blancs et arrondis des 2 côtes.

::: tip Astuce
Pensez à activer les `Nested instance` sur le composant pour pouvoir facilement modifier les 3 menus !
:::

Vous avez maintenant tous les éléments pour créer la partie principale de l'écran !