This menu is an implementation of the <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#menu">W3C design pattern for an accessible main menu nav bar with drop-down link lists</a>.
<section>
    <h2>Acccessibility Features</h2>
    <ol>
        <li>Since the menubar presents a site navigation system, it is wrapped in a navigation regions implemented with a <code>nav</code> element that has an <code>aria-label</code> that mateches the label on the menubar.</li>
        <li>The dwon arrow and eright arrow icons are made compatible with high contrast mode and hidden from screen readers by using the CSS <code>content</code> property to render images.</li>
    </ol>
</section>
<section>
    <h2 id="kbd_label">Keyboard Support</h2>
    <h3 id="kbd1_label">Menubar</h3>
    <table aria-labelledby="kbd1_label kbd_label" class="def">
      <thead>
        <tr>
          <th>Key</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="menubar-space-or-enter">
          <th>
            <kbd>Space</kbd><br><kbd>Enter</kbd>
          </th>
          <td>Opens submenu and moves focus to first item in the submenu.</td>
        </tr>
        <tr data-test-id="menubar-right-arrow">
          <th>
            <kbd>Right Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to the next item in the menubar.</li>
              <li>If focus is on the last item, moves focus to the first item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="menubar-left-arrow">
          <th>
            <kbd>Left Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to the previous item in the menubar.</li>
              <li>If focus is on the first item, moves focus to the last item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="menubar-down-arrow">
          <th>
            <kbd>Down Arrow</kbd>
          </th>
          <td>Opens submenu and moves focus to first item in the submenu.</td>
        </tr>
        <tr data-test-id="menubar-up-arrow">
          <th>
            <kbd>Up Arrow</kbd>
          </th>
          <td>Opens submenu and moves focus to last item in the submenu.</td>
        </tr>
        <tr data-test-id="menubar-home">
          <th>
            <kbd>Home</kbd>
          </th>
          <td>Moves focus to first item in the menubar.</td>
        </tr>
        <tr data-test-id="menubar-end">
          <th>
            <kbd>End</kbd>
          </th>
          <td>Moves focus to last item in the menubar.</td>
        </tr>
        <tr data-test-id="menubar-character">
          <th>
            <kbd>Character</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to next item in the menubar having a name that starts with the typed character.</li>
              <li>If none of the items have a name starting with the typed character, focus does not move.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <h3 id="kbd2_label">Submenu</h3>
    <table aria-labelledby="kbd2_label kbd_label" class="def">
      <thead>
        <tr>
          <th>Key</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="submenu-space-or-enter">
          <th>
            <kbd>Space</kbd><br><kbd>Enter</kbd>
          </th>
          <td>
            <ul>
              <li>Activates menu item, causing the link to be activated.</li>
              <li>NOTE: the links go to dummy pages; use the browser go-back function to return to this menubar example page.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-escape">
          <th>
            <kbd>Escape</kbd>
          </th>
          <td>
            <ul>
              <li>Closes submenu.</li>
              <li>Moves focus to parent menubar item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-right-arrow">
          <th>
            <kbd>Right Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>If focus is on an item with a submenu, opens the submenu and places focus on the first item. </li>
              <li>If focus is on an item that does not have a submenu:
                <ul>
                  <li> Closes submenu.</li>
                  <li>Moves focus to next item in the menubar.</li>
                  <li>Opens submenu of newly focused menubar item, keeping focus on that parent menubar item.</li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-left-arrow">
          <th>
            <kbd>Left Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Closes submenu and moves focus to parent menu item.</li>
              <li>If parent menu item is in the menubar, also:
                <ul>
                  <li>moves focus to previous item in the menubar.</li>
                  <li>Opens submenu of newly focused menubar item, keeping focus on that parent menubar item.</li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-down-arrow">
          <th>
            <kbd>Down Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to the next item in the submenu.</li>
              <li>If focus is on the last item, moves focus to the first item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-up-arrow">
          <th>
            <kbd>Up Arrow</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to previous item in the submenu.</li>
              <li>If focus is on the first item, moves focus to the last item.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="submenu-home">
          <th>
            <kbd>Home</kbd>
          </th>
          <td>Moves focus to the first item in the submenu.</td>
        </tr>
        <tr data-test-id="submenu-end">
          <th>
            <kbd>End</kbd>
          </th>
          <td>Moves focus to the last item in the submenu.</td>
        </tr>
        <tr data-test-id="submenu-character">
          <th>
            <kbd>Character</kbd>
          </th>
          <td>
            <ul>
              <li>Moves focus to the next item having a name that starts with the typed character.</li>
              <li>If none of the items have a name starting with the typed character, focus does not move.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2 id="rps_label">Role, Property, State, and Tabindex Attributes</h2>
    <h3 id="rps1_label">Menubar</h3>
    <table aria-labelledby="rps1_label rps_label" class="data attributes">
      <thead>
        <tr>
          <th>Role</th>
          <th>Attribute</th>
          <th>Element</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="menubar-role">
          <th>
            <code>menubar</code>
          </th>
          <td></td>
          <td>
            <code>ul</code>
          </td>
          <td>
            <ul>
              <li>Identifies the element as a <code>menubar</code> container for a set of <code>menuitem</code> elements.</li>
              <li>Is not focusable because focus is managed using <a href="../../../#kbd_roving_tabindex">roving tabindex.</a></li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="menubar-aria-label">
          <td></td>
          <th>
            <code>aria-label="<em>string</em>"
            </code>
          </th>
          <td>
            <code>ul</code>
          </td>
          <td>
            <ul>
              <li>
                Defines an accessible name for the <code>menubar</code>.
              </li>
              <li>Helps assistive technology users understand the purpose of the menubar and
                distinguish it from any other menubars or similar elements on the page.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="menuitem-role">
          <th>
            <code>menuitem</code>
          </th>
          <td></td>
          <td>
            <code>a</code>
          </td>
          <td>
            <ul>
              <li>Identifies the element as a menu item.</li>
              <li> The accessible name is calculated from the text content of the <code>a</code> element.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="menuitem-tabindex">
          <td></td>
          <th>
            <code>tabindex="-1"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>
            Makes the <code>a</code> element keyboard focusable, but <strong>not</strong> part of the tab sequence.
          </td>
        </tr>
        <tr data-test-id="menuitem-tabindex">
          <td></td>
          <th>
            <code>tabindex="0"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>
            <ul>
              <li>Includes the element in the <kbd>Tab</kbd> sequence.</li>
              <li>Only one menubar item has <code>tabindex="0"</code>.</li>
              <li>On page load, the first menubar item has <code>tabindex="0"</code>.</li>
              <li>Focus is managed using <a href="../../../#kbd_roving_tabindex">roving tabindex</a>.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="menuitem-aria-haspopup">
          <td></td>
          <th>
            <code>aria-haspopup="true"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>Indicates the menuitem has a submenu.</td>
        </tr>
        <tr data-test-id="menuitem-aria-expanded">
          <td></td>
          <th>
            <code>aria-expanded="true"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>Indicates the submenu is open.</td>
        </tr>
        <tr data-test-id="menuitem-aria-expanded">
          <td></td>
          <th>
            <code>aria-expanded="false"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>Indicates the submenu is closed.</td>
        </tr>
        <tr data-test-id="none-role">
          <th>
            <code>none</code>
          </th>
          <td></td>
          <td>
            <code>li</code>
          </td>
          <td>
            <ul>
              <li>Removes the implied <code>listitem</code> role of the <code>li</code> element.</li>
              <li>Necessary because the parent <code>ul</code> is serving as a <code>menu</code> so the <code>li</code> elements are not in their required list context.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <h3 id="rps2_label">Submenu</h3>
    <table aria-labelledby="rps2_label rps_label" class="data attributes">
      <thead>
        <tr>
          <th>Role</th>
          <th>Attribute</th>
          <th>Element</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="menu-role">
          <th>
            <code>menu</code>
          </th>
          <td></td>
          <td>
            <code>ul</code>
          </td>
          <td>Identifies the element as a menu container for a set of menu items.</td>
        </tr>
        <tr data-test-id="menu-aria-label">
          <td></td>
          <th>
            <code>aria-label="<em>string</em>"
            </code>
          </th>
          <td>
            <code>ul</code>
          </td>
          <td>
            <ul>
              <li>
                Defines an accessible name for the <code>menu</code>.
              </li>
              <li>Helps assistive technology users understand the purpose of the menu and
                distinguish it from any other menu or similar elements (e.g. menubar) on the page.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="sub-menuitem-role">
          <th>
            <code>menuitem</code>
          </th>
          <td></td>
          <td>
            <code>a</code>
          </td>
          <td>
            <ul>
              <li>Identifies the element as a menu item.</li>
              <li>The accessible name is calculated from the text content of the <code>a</code> element.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="sub-menuitem-tabindex">
          <td></td>
          <th>
            <code>tabindex="-1"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>Keeps the <code>a</code> element focusable but removes it from the <kbd>Tab</kbd> sequence.</td>
        </tr>
        <tr data-test-id="sub-menuitem-aria-haspopup">
          <td></td>
          <th>
            <code>aria-haspopup="true"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>Indicates the menu item has a submenu.</td>
        </tr>
        <tr data-test-id="sub-menuitem-aria-expanded">
          <td></td>
          <th>
            <code>aria-expanded="true"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>Indicates the submenu is open.</td>
        </tr>
        <tr data-test-id="sub-menuitem-aria-expanded">
          <td></td>
          <th>
            <code>aria-expanded="false"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>Indicates the submenu is closed.</td>
        </tr>
        <tr data-test-id="sub-none-role">
          <th>
            <code>none</code>
          </th>
          <td></td>
          <td>
            <code>li</code>
          </td>
          <td>
            <ul>
              <li>Removes the implied <code>listitem</code> role of the <code>li</code> element.</li>
              <li>Necessary because the parent <code>ul</code> is serving as a <code>menu</code> so the <code>li</code> elements are not in their required list context.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </section>