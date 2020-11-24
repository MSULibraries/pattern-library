Diclosure Design Pattern based on W3C WAI-ARIA Authoring Practices
https://www.w3.org/TR/wai-aria-practices-1.1/examples/disclosure/disclosure-navigation.html

# Accessibility Features
 1. Since this set of buttons controls visibility of navigation links for the library web site, the list that contains them is wrapped in a navigation landmark named "main-menu-lib". *(The "-lib" has been added to the element `ID` so the javascript and styles for the the default theme menu will not be triggered and cause conflicts.)*
 2. The semanitcs of the list structure communictates the hierarchy of the navigation system to assitive technology users. The top-level set of buttons is in a list, and the set of links controlled by each button is contained within a list nested inside the item with the controlling button.
 3. If a dropdown is open and focus is inside the navigation region, presing **ESC** will close the dropdown. Moving focus out of the navigation region also closes an open dropdown. (WCAG 2.1 1.4.13 Content on Hover or Focus)
 4. The visual indicator of the show/hide state is created using CSS `::after` pseudo element border styles so the caret is reliably renedered in hogh contrast mode of operating systems and browsers.
 5. Optional navigation keys (Arrow keys, **Home**, and **End**):
  1. Implementing the optiomnal arrow key support prevents the default pagee scroll behavior when focus is contained withing the navigation region.
  2. Optional navigation key support is primarily for the benefit of keyboard uers who are not running a screen reader. Screen readers that have both reading and interation modes intercept these navigation keys and do not pass them to the page whe the screen reader is in reader mode.
  3. The optional navigation keys supplement, but do not replace, tabbing among buttons and links. This is becasue the buttons and links are not contained by an element witha widget rold, such as `grid` that is expected to occupy only one stop in the page **Tab** sequence and amange focus for all its descendants.

## Keyboard Support

| *Key* | *Function* |
| ------------- | --------------------------------------------------------------- |
| Tab, Shift + Tab | Move keyboard focuss among top-level buttons,a nd if a dropdown is open, into and through links in the dropdown. |
| Space, Enter | If focus is on a deisclosure button, activates the button, which toggles the visibility of the dropdown. |
| Escape | If a dropdown is open, closes it and sets the focus on the button that controls that dropdown. |
| Down Arrow, Right Arrow | Moves focus to the next button or link. |
| Up Arrow, Left Arrow | Moves focus to the previous button or link. |
| Home | Moves focus to the first button or link. |
| End | MOves focus to the last button or link. |

## Role, Property, State, and Tabindex Attributes

| *Role* | *Attribute* | *Element* | *Usage* |
| ----------- | ----------- | ----------- | ----------- |
|  | `aria-controls="IDREF"` | `button` | The disclosure button controls visibility of the container identified by the `IDREF` value. |
|  | `aria-expanded="false"` | `button` | Indicates that the container controlled by the disclousre button is *hidden*. |
|  | `aria-expanded="true"` | `button` | Indicate that the container controlled by the disclosure button is *visible*. |
|  | `aria-current="page"` | `a` | Indicates that the page referenced by the link is currently displayed. |
