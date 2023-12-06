# Styles & Variables

## Definition

Styles in Figma allow you to define the color, text, and effects applied to objects or define the structure and appearance of layout grids.

There are 4 types of styles: **Colors, Texts, Effects, and Grids**

These styles can be applied to your elements and help maintain a consistent design resembling a style guide.

🎯 **Goal: Create and apply various styles to our elements**

## Creating a Style

We’ll create the `Primary` style, which corresponds to the main color of our mockup:
- Click on the icon ![plus icon](../../assets/img/figma/advanced-features/styles-variables/plus-icon.png) in the `local styles` section.
- Select the `color` style.
- Define the characteristics of the style.
- Confirm.

Congratulations, you’ve created your first style!

This process is the same for creating text, effect, and grid styles.

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/create-new-style.gif"></p>
:::

::: tip Tips
The styles created are automatically displayed in the `design panel` when no element is selected.
:::

### Applying Styles

Now that the "Primary" style is created, it needs to be applied to our mockup.

Select the green banner, its color is the same as the style created but is referenced by its HEX code in the `fill` section.
By clicking on ![style library](../../assets/img/figma/advanced-features/styles-variables/bibliotheque-style.png), you access the color style library and then select the previously created "Primary" style to apply it.

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/apply-color-style-fill.gif"></p>
:::

::: tip Tip
Selecting an object (group, frame, etc.) gives access to the `selection colors` menu at the bottom of the design panel, listing all the colors used in the selection.

This way, you can easily modify or replace colors, either manually or by selecting styles via ![style library](../../assets/img/figma/advanced-features/styles-variables/bibliotheque-style.png)

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/apply-color-style-from-frame-selection.gif"></p>
:::

## Creating Styles from Your Elements

Now, we’ll create styles from the elements of our mockup. During design, we chose colors, typography, and effects, but they have not been created as styles yet.

Select the card to create the style for its white background color: `#FFFFFF`.
In the `fill` section, by clicking on ![style library](../../assets/img/figma/advanced-features/styles-variables/bibliotheque-style.png) and then ![plus icon](../../assets/img/figma/advanced-features/styles-variables/plus-icon.png), you access the color style creation.

You can now name the existing color and provide a description.

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/create-color-style-from-selection.gif"></p>
:::

You are now able to create the remaining color styles, as well as do the same for **typographies, effects, and grids**.

## Modifying Styles

You can edit your styles at any time from the design panel. Modifications apply to all elements where you have applied your styles.

When selecting an object with a style, you have the option to `detach` a style via the icon ![detach icon](../../assets/img/figma/advanced-features/styles-variables/detach-icon.png).

Style modifications will no longer apply to that element even if the characteristics are the same. See the example below.

## Local Styles and Libraries

Styles you create in a file are automatically saved on that Figma file and are accessible to all members with edit rights.

You can also `publish` your styles to share them with members of the `Team library`.
This way, you and your team members can reuse these styles across multiple Figma files, which is particularly useful when creating a design system with many elements.

To publish a style library, click on ![figma icon](../../assets/img/figma/advanced-features/styles-variables/figma-icon.png) then select `libraries` and publish the chosen library.

<p align="center"><img src="../../assets/img/figma/advanced-features/styles-variables/publish-libraries.png"></p>

## An Introduction to Variables

The `Local variables` feature in Figma, still in beta, allows you to define characteristics that can then be applied to your elements; these are `variables`.

::: warning Attention
The `variables` feature is only available with Figma's paid version.
:::

Variables and styles appear similar on the surface:
- They can be published to team libraries for reuse across all design projects.
- They enable efficient management of `design systems` because updates to a variable or style will propagate to all design systems that use them.

However, variables offer greater complexity: they can be used to set other variables and styles, whereas styles cannot define either.

Variables allow for the creation of **text, number, color, and boolean values**.
You can define and modify these values from a dedicated variable collection space, which, for instance, allows you to easily adjust themes (dark mode or light mode), text, or manage your spacing and corner radii.

They also provide the ability to do advanced prototyping of your mockups.
For a better understanding of this feature, we recommend watching this
[presentation video on variables](https://www.youtube.com/watch?v=1ONxxlJnvdM&t=344s&ab_channel=Figma).