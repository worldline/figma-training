# Styles & variables

## Définition

Les styles permettent de définir la couleur, le texte et les effets appliqués aux objets, ou de définir la structure et l'apparence des grilles de mise en page.

Il existe 4 types de styles dont chacun permet de définir les caractéristiques suivantes :
- **Couleurs :** couleur de remplissage, contours, arrière-plan
- **Textes :** famille de polices, taille, hauteur de ligne, espacement
- **Effets :** ombre portée, ombre interne, flou de calque, flou d'arrière-plan
- **Grilles :** ligne, colonne, grille

Les styles permettent une meilleur gestion de ces éléments dans votre projet et de définir une charte qui sera applicable facilement à vos écrans.

La fonction `local styles` se situe dans le `panneau de conception`.

Les bibliothèques de styles sont représentées par l'icône <img src="../../assets/img/figma/advanced-features/styles-variables/bibliotheque-style.png">

🎯 **Objectif : Créer et appliquer les différents styles à nos éléments**

## Créer un style 

Cliquer sur `local styles` permet de choisir le type de style à créer : **text, couleur, effet ou grille.**

<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/action-creation-local-styles.png"></p>


Afin de créer et appliquer nos différents styles, nous allons commencer par les **styles de couleurs** :

## Créer un style

### Créer un style de couleur

Nous allons créer le style `Primary` qui correspond à la couleur principale de notre maquette :
- Cliquer sur l'icône <img src="../../assets/img/figma/advanced-features/styles-variables/plus-icon.png"> de la section `local styles`
- Sélectionner `color`
- Indiquer le nom, la description et la couleur
- Valider en cliquant sur `Créer`

::: details Tutoriel 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/create-new-style.gif"></p>
:::

::: tip Astuces
Les styles créés sont automatiquement affichés dans le `panneau de conception` lorsqu'aucun élément n'est sélectionné.
(Insérer image)
:::

### Appliquer les styles

Le style "Primary" étant créé, il faut désormais l'appliquer à notre maquette.

Sélectionner le bandeau vert, sa couleur est la même que celle du style créé mais est référencée par son code #HEX dans la section `fill`.
En cliquant sur <img src="../../assets/img/figma/advanced-features/styles-variables/bibliotheque-style.png"> vous accédez à la bibliothèques de styles de couleurs, puis sélectionnez le style "Primary" précèdement créé pour l'appliquer.

::: details Tutoriel 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/apply-color-style-fill.gif"></p>
:::

::: tip Astuce
Sélectionner un objet (groupe, frame, etc) permet d'accéder au menu `selection colors` en bas du menu de conception, répertoriant toutes les couleurs utilisées de la sélection.

De cette manière vous pouvez aisément modifier ou remplacer les couleurs, manuellement ou en sélectionnant des styles via <img src="../../assets/img/figma/advanced-features/styles-variables/bibliotheque-style.png">

::: details Tutoriel 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/apply-color-style-from-frame-selection.gif"></p>
:::

## Créer les styles depuis vos éléments

Nous allons désormais créer des styles depuis les éléments de notre maquette. Durant sa conception nous avons choisi des couleurs, typographies et effets mais ceux-cis n'ont pas encore été créé en tant que styles.

Sélectionner la card afin de créer le style de couleur de son fond actuellement blanc : `#FFFFFF`.
Dans la section `fill`, en cliquant sur <img src="../../assets/img/figma/advanced-features/styles-variables/bibliotheque-style.png"> puis <img src="../../assets/img/figma/advanced-features/styles-variables/plus-icon.png"> on accède à la création de style de couleur.

On peut alors nommer, et donner une description à la couleur existante.

::: details Tutoriel 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/create-color-style-from-selection.gif"></p>
:::

Vous êtes désormais capables de créer les styles des couleurs restantes, mais aussi de faire de même pour les **typographies, effets et grilles**


## Modifier les styles

Vous pouvez éditer à tout moment vos style depuis le panneau de conception. Les modifications s'appliquent à tous les éléments auxquels vous avez appliqué vos styles.

Lorsque vous sélectionnez un objet avec un style, vous avez la possibilité de `détacher` un style via l'icône <img src="../../assets/img/figma/advanced-features/styles-variables/detach-icon.png"></p>.

Les modifications de style ne s'appliqueront plus à cet élément même si les caractéristiques sont les mêmes, voir exemple ci-dessous.

::: details Tutoriel 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/edit-style.gif"></p>
:::


## Local styles et libraries

Les styles que vous créez dans un fichier sont enregistrés dans une bibliothèque locale, ainsi uniquement les personnes travaillant sur le même fichier que vous peuvent utiliser ces styles et les composants créés dans ce fichier.

Pour pallier cela, vous pouvez `publier` vos styles pour les partager avec les membres de la `Team library`.
De cette manière vous et les membres de l'équipe pourrez réutiliser ces styles à travers plusieurs fichiers Figma, ce qui est particulièrement utile lors de la création d'un système si ce dernier comporte beaucoup d'éléments.

Pour publier une librairie de styles, cliquez sur <img src="../../assets/img/figma/advanced-features/styles-variables/figma-icon.png"></p> puis sélectionnez `libraries` et publiez la bibliothèque choisie.

<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/publish-libraries.png"></p>