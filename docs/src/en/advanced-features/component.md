# Components

Components in Figma are reusable elements that help you maintain consistency across your designs.

A component consists of two key elements:

- A **Main Component** defines the properties of the component.
- An **Instance** is a copy of the component that can be reused in your designs. Instances are linked to the Main Component and receive all updates made to it.

🎯 **Goal: Transform our card into a component**

## Creating a Component

To turn the card into a component:
- Select the card
- Click on ![component button](../../assets/img/figma/advanced-features/components/component_button.png) in the middle of the toolbar.

Congratulations, you've just created your first component! You can see in the layers panel that the card is now purple with the component symbol.
<p align="center"><img src="../../assets/img/figma/advanced-features/components/layers_parent.png" /></p>

## Creating Component Instances

When you create a copy of a component, the copies automatically become instances of that component. Therefore, you can create instances of the card by copying and pasting, or by holding <kbd>alt</kbd> and dragging your component.

::: tip Tip
If you duplicate an instance, it will also be linked to the Main Component.
:::

Instances are also purple, but the symbol is different:
<p align="center"><img src="../../assets/img/figma/advanced-features/components/layers_instances.png" /></p>

::: warning Don't Mix the Main Component
It is strongly discouraged to use the Main Component in your design screens. A best practice is to place Main Components on a separate Figma page.

<p align="center"><img src="../../assets/img/figma/advanced-features/components/separate_parent.png" /></p>
:::

**To-Do:**
- Modify the Main Component (text, colors, positioning, etc.), and notice that the instances update automatically!
- Modify the first/last name for each card instance.
> **Note:** If you modify the same text in the Main Component, it will not affect the instances! This also applies to any property changes like colors, fonts, etc.

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/instances-override.gif" /></p>
:::

::: tip Resetting an Instance
- Right-click on an instance and select `Reset all changes` to revert an instance back to its Main Component.
- Right-click on an instance and select `Detach instance` to remove its link to the Main Component.
  :::

::: warning Position Adjustment
You may have noticed that it's not possible to change the positioning of elements in instances. It's also not possible to add elements.

This is normal; it's the way components work. We'll see later how to make our components more flexible.
:::

## Component Variants

Creating component variants allows you to represent different states of a component.

### Creating a Variant of a Component
**To-Do:** select the Main Component then click on the symbol ![variant button](../../assets/img/figma/advanced-features/components/variant_button.png) in the middle of the toolbar.

> You can even create multiple variants of the same component.

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/variants.gif" /></p>
:::

### Setting Up the Variant
We will create an error state for the card by changing its border color from green to red.

**To-Do:**
- Change the color of the border of the variant from green to red.
- Assign the name `State` to the variant type property.
- Give the names `Default` and `Error` to our 2 states.

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/variant-error.gif" /></p>
:::

### Combining Variants
It's possible to combine multiple variants for a single component.

We'll create 2 new variants for our cards for the `Disabled` state. The card will have an opacity of 38% when in a disabled state, which is the opacity used by Google for Material Design.

**To-Do:**
- Create a new variant property and name it `Disabled` with `False` as the default value.
- Duplicate the existing cards to create 2 new states.
- Set an opacity of 38% for these 2 new states.
- Change the value of the `Disabled` property on these 2 new states to `True`.

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/variant-combinaison.gif" /></p>
:::

::: tip Tip
You might have noticed that for the `Disabled` variant, Figma used a switch instead of a dropdown.

That's because we used the values `True` and `False`. It also works with `On` and `Off`.
:::

## Instance Swap

You can switch from one instance of a component to another by performing an `instance swap`.

Although this need may seem unusual, let's first understand how it works and then examine a practical use case.

### Exercise

To perform an `instance swap`, we need a second component. To quickly test this, we'll create a test component: a simple square.

**To-Do:**
- Create a square.
- Turn this square into a component.
- Create an instance of the component card.
- Perform an `instance swap` to transform this instance into a square via the button ![instance swap](../../assets/img/figma/advanced-features/components/instance-swap.png).

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/instance-swap.gif" /></p>
:::

### Practical Case: Icons

Now, how can this be useful? 🤔

A very practical use is to manage your icons with instance swaps.

**To-Do:**
- Import some icons into Figma.
  ::: tip 💡 Icon Import Plugin

The easiest way to import icons into Figma is to use a plugin. I recommend either `Material Symbols` to have consistent Material icons or `Iconify` for a wider choice of icons.

You can search for plugins from the toolbar:

![Material Symbols](../../assets/img/figma/advanced-features/components/material-symbols.png)

[More information about plugins here](../plugin.md)
:::
- Turn each icon into a component.
- Create an empty frame, name it `icons`.
- Place your icons inside.

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/icons-as-components.gif" /></p>
:::

Let's now test if it works well.

**To-Do:**
- Create an instance of one of your icons.
- Perform an `instance swap`: by default, Figma proposes the list of other components present in the same `frame`, i.e., the other icons.

This makes it very easy to change an icon in a design!

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/swap-icons.gif" /></p>
:::

## Other Component Properties

There are 3 other types of properties that can be applied to a component in a way similar to variants.

### Boolean

The `Boolean` property allows for toggling the visibility of an element.

We can use it to choose whether or not to display the icon in our card.

**To-Do:**
- Create a `Boolean` property type and name it `Icon Visibility`.
- Select one of the icons and press `Apply Property` ![apply property button](../../assets/img/figma/advanced-features/components/apply_property_button.png) from the `Layer` section.

> You can select all icons at once by holding down <kbd>Ctrl</kbd> + <kbd>Shift</kbd>.

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/boolean.gif" /></p>
:::

> The `Boolean` property functions in a similar way to a `True`/`False` variant but without the need to duplicate the component!

### Instance Swap (Property)

The `Instance Swap` property allows bringing up the ability to swap an instance of an embedded component within this component.

This is very useful for icons, as previously seen.

**To-Do:**
- Create a component for the icon present in your card.
- Use instances of this icon component in each variant of your card.
  ::: tip 💡 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>
  To replace the icon already present in your card with an instance of the component, you can:
- <kbd>Ctrl</kbd> + <kbd>C</kbd> on the component you’ve just created
- Select the icon in the card
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>
  :::
- Add an `Instance Swap` property to the card component.
- Select the icons and apply this new property to them.

You will then be able to easily change the icon of your card!

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/instance-swap-finale.gif" /></p>
:::

### Text

The `Text` property can help make modifiable texts of a component more prominent.

This can be useful to quickly understand which texts are editable within the component. However, the added value isn't as significant compared to an `Instance Swap` since it's easy to modify a text by directly clicking on it, even if it doesn't have a defined property.

**To-Do:**
- Create a component property of the text type
- Name it `Title` with the default value of your choice
- Select the titles of all variants of your card and assign them this new property

::: details Tutorial 🎥
<p align="center"><img src="../../assets/img/figma/advanced-features/components/text.gif" /></p>
:::

### Nested Instances

Finally, when you have nested components, you can bring up the properties of the nested components to the component that contains them.

We don't have a use case with our card, so I recommend not creating an example unnecessarily - you'll have a chance to practice in the practical section.

Below is an example of a use case. Here we have a navigation bar component that is itself composed of 5 components for the tabs.

Thanks to `nested instances`, it's possible to access the properties of all the nested components (the 5 tabs) simply by selecting the global component (the navigation bar).

<p align="center"><img src="../../assets/img/figma/advanced-features/components/bottom-navigation.png" /></p>