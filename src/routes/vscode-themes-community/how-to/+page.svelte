<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import HowToSidebar from '$lib/components/vscode/how-to/HowToSidebar.svelte';
</script>

<svelte:head>
  <title>How to use the VSCode theme generator</title>
  <meta
    name="description"
    content="Learn how to use the VSCode theme generator to create your own themes."
  />
</svelte:head>

<Sidebar.Provider>
  <HowToSidebar />
  <section class="linedPaper py-16">
    <Sidebar.Trigger />
    <div class="flex min-h-[calc(100vh-2rem)] flex-col items-center justify-center px-10 pl-32">
      <div class="flex flex-col gap-4">
        <h1 class="pt-10 text-xl font-black md:text-4xl">How to use the VSCode theme generator</h1>
        <p class="text-sm text-gray-500">
          This guide is a work in progress, but you can still use it as a reference.
        </p>
        <div class="prose">
          <h2 id="introduction" class="pt-16 text-lg font-black md:text-xl">
            Color Theory, Color Schemes and Sacred Geometry Patterns
          </h2>
          <p class="mt-4">
            I've always been fascinated by Sacred Geometry and its patterns, the way it was used in
            several ancient structures and moreover how Sacred Geometry can be applied to almost
            everywhere around us, in nature, in the human body, in music, in the stock market, etc.
          </p>
          <p class="mt-4">
            How every time some Sacred Geometry Pattern is used or identified on something, it
            pleasures the eyes and the mind.
          </p>
          <p class="mt-4">
            Color themes for VSCode is all about using colors to highlight the code in both
            informative and pleasing way so us developers can easly identify and understand the code
            we are reading or working on while also pleasing the eyes and the mind.
          </p>
          <p class="mt-4">
            By looking at how the Color Theory traditional color schemes are calculated using a base
            color and depending on the color scheme it shows one, two or more mathing colors using
            its pattern on top of the color whell i though, what if there was a way to use some
            Sacred Geometry patterns in top of the color whell to identify and derive matching
            colors?
          </p>
          <p class="mt-4">
            After some research and a lot of testing, I've identified some Sacred Geometry Patterns
            that can be used as color schemes if combined with color theory. In the same traditional
            way, with a base color, or in the case of this algorithm a base hue, using a Sacred
            Geometry pattern on top of the color whell it is possible to derive a set of matching
            colors. The number of matching colors generated depends on the pattern used.
          </p>
          <p class="mt-4">
            I've identified more than 30 different Sacred Geometry Patterns and implemented most of
            them in his VSCode theme generator. The results, at least for me, are surprisingly good
            most of the times. The colors generated combining the base hues extracted from each
            pattern with some small random variations using some pre-determinated saturation and
            lightness values, added/subtracted or multiplied by some small random numbers or
            fractions are usually very pleasing to the eye while enabling almost infinite colors
            combinations.
          </p>
          <p class="mt-4">
            I encourage you to try it out and see the results for yourself, by selecting each of the
            available Sacred Geometry Patterns and generating the color sets a few times using the
            Generate button until you find some that pleases your eyes. In case you want to have a
            more guided approach, there is a small resume of what to expect from each of the
            available patterns.
          </p>
        </div>
        <div class="prose">
          <h2 id="how-to" class="pt-16 text-lg font-black md:text-xl">How to generate a theme</h2>
          <ul class="mt-4 space-y-2">
            <li>
              <p class="">
                <span class="font-bold">1.</span> Go to the
                <a href="/vscode-themes-community/theme-generator">create a theme</a> page.
              </p>
            </li>
            <li>
              <p>
                <span class="font-bold">2.</span> Select if the theme will be dark or light by adjusting
                the Switch control.
              </p>
            </li>
            <li class="mt-4">
              <p>
                <span class="font-bold">3.</span> Then you have two options:
              </p>
            </li>
            <li class="ml-4 mt-4">
              <p>
                <span class="font-bold">3.1.</span> <strong>Randomize a new theme</strong> by
                selecting the button Randomize or pressing
                <code>Crtl + r</code> - all available options will be randomized and the colors will
                be generated accordingly to the randomized options.
              </p>
            </li>
            <li class="ml-4 mt-4">
              <p>
                <span class="font-bold">3.2.</span> Manually select the desired options and
                <strong>Generate the theme</strong>
              </p>
              <ul class="ml-8 mt-4 list-disc space-y-2">
                <li>
                  <p>
                    <span class="font-bold">a.</span> After setting the dark or light switch, select
                    one of the available color schemes. There are the color schemes from the conventional
                    color theory and the innovative, created by RLabs Inc., color schemes based on Sacred
                    Geometry Patterns.
                  </p>
                </li>
                <li>
                  <p>
                    <span class="font-bold">b.</span> After selecting the color scheme, you can ajust
                    the base hue slider to select the base color for the to be generated theme, this
                    color will be used as AC1 (Accent 1) color and will be the input for the calculations
                    of the other base hues generated by the selected color scheme.
                  </p>
                </li>
                <li>
                  <p>
                    <span class="font-bold">d.</span> You can now click the
                    <strong>Generate</strong>
                    button or press
                    <code>Crtl + g</code>
                    to generate the theme.
                  </p>
                </li>
              </ul>
            </li>
          </ul>

          <p class="ml-4 mt-4">
            In both cases, pressing the <strong>Generate</strong> button or the
            <code>Crtl + g</code> shortcut will re-generate new colors based on the current selected
            options.
          </p>
          <h3 id="use-fewer-colors" class="mt-4 pt-16 text-lg font-black md:text-xl">
            Use fewer colors
          </h3>
          <p class="mt-4">
            For both Randomize and Generate options, you can select the use fewer colors option.
          </p>
          <p class="mt-4">
            When the colors are generated, first, the algorithm generates a set of scheme hues that
            are derived from the selected color scheme and base hue. Using these set of scheme hues
            the ui colors are generated, among the ui colors there are the AC1 and AC2 colors, if
            this option is not selected, the algorithm then generates two additional sets of scheme
            hues using the selected color scheme but this time in combination with both the AC1 and
            AC2 recently generated colors, the new sets are added to the initial set of scheme hues
            and only then the set of syntax colors is generated derived of this larger set of scheme
            hues.
          </p>
          <p class="mt-4">
            With this option selected, all colors are derived from the initial set of scheme hues
            generated using only the selected color scheme and base hue. The result is less
            variation in the generated colors.
          </p>

          <h3 id="editing-colors" class="mt-4 pt-16 text-lg font-black md:text-xl">
            Individually changing colors
          </h3>
          <p class="mt-4">
            You can also individually change the colors by clicking on the color you want to change,
            a color picker with the color of the selected item will be displayed, you can change it
            to any color of your preference. The result will be displayed immediately.
          </p>

          <h3 id="locking-colors" class="mt-4 pt-16 text-lg font-black md:text-xl">
            Locking one or more colors
          </h3>
          <p class="mt-4">
            During the whole process, at any time, you can click the locker icon displayed next to
            each color, by doing so, the color will be locked and won't be randomized when using
            both the Randomize and Generate options to generate a new set of colors.
          </p>
          <p class="mt-4">
            TIP: <italic
              >You can, for example, lock the BG1 (Background color for the editor) and then
              Randomize or Generate all the remaining colors for your theme with the selected
              background color.</italic
            >
          </p>

          <h3 id="save-theme" class="mt-4 pt-16 text-lg font-black md:text-xl">Saving a theme</h3>

          <p class="mt-4">
            When logged in, once you're happy with the generated theme, you can give it a name and
            click the <strong>Save</strong> button to save the theme to your collection. Each theme in
            your collection must have an unique name.
          </p>
          <p class="mt-4">
            Once saved, you can continue to fine-tune the theme colors, re-generate the colors with
            the same options or select new options and generate the all unlocked colors again.
          </p>
          <p class="mt-4">
            At anytime you can click on the update button to save any changes you want to keep.
          </p>

          <h3 id="load-theme" class="mt-4 pt-16 text-lg font-black md:text-xl">Loading a theme</h3>
          <p class="mt-4">
            You can load any theme to edit by clicking the <strong>Edit</strong> button on the Saved
            Themes page or by selecting the theme name from the list on the create theme page.
          </p>
          <p class="mt-4">
            If you have a recently saved or loaded a theme in the generator page, by clicking the <strong
              >Generate</strong
            >
            button new colors will be generated for the active theme with the current selected options
            allowing you to update it. The <strong>Randomize</strong>
            button, will be unload the current theme, all options will be randomized and the colors will
            be generated allowing you to save a new theme.
          </p>

          <h3 id="delete-theme" class="mt-4 pt-16 text-lg font-black md:text-xl">
            Deleting a theme
          </h3>
          <p class="mt-4">
            You can delete a theme by clicking the <strong>Delete</strong> button on your saved themes
            page.
          </p>

          <h3 id="public-and-private-themes" class="mt-4 pt-16 text-lg font-black md:text-xl">
            Public and private themes
          </h3>
          <p class="mt-4">
            You can set the theme as public by checking the <strong>Public Theme</strong>
            checkbox.
          </p>
          <p class="mt-4">
            A public theme will be displayed in the
            <a href="/vscode-themes-community/discover">Discover</a>
            page and in your <a href="/vscode-themes-community/saved-themes">saved themes</a> page, a
            private theme will only be displayed in the later one.
          </p>
        </div>

        <h3 id="theme-preview" class="mt-4 pt-16 text-lg font-black md:text-xl">Theme preview</h3>
        <p class="mt-4">
          Every time a new set of colors is generated, the saturation sliders are updated or a
          individual color is changed the VSCode mock will instantly update the colors to reflect
          the changes.
        </p>
        <p class="mt-4">
          By changing the selectd file on the sidebar, you can preview how will the syntax and
          semantic highlight behave for different languages. The example files tries to cover most
          of the language specific tokens used by the theme.
        </p>
        <p class="mt-4">
          With a right click on the editor area, you can select the <strong>Command Pallete</strong>
          option to preview how the colors will be applied using a fully functional example.
        </p>
        <p class="mt-4">
          The VSCode mock is made of a Monaco Editor instance with the Shiki highlighter plugin
          configured to use VSCode themes and some elements around to mimic the VSCode UI, while it
          still needs a lot of improvements to accuratedly display 100% of the colors settings and
          tokens used in the final generated theme, it is close enough to exclude any disapointing
          surprises when using the theme in the real VSCode editor.
        </p>
        <p class="mt-4">
          Because of limitations of the Monaco Editor, even using Shiki highlighter, the syntax and
          semantic highlighting preview will not be exactly as it will be when used in VSCode,
          instead it is as close as possible.
        </p>
        <p class="mt-4">
          <strong
            >Due to these limitations, once the theme is downloaded and installed in the real VSCode
            editor the syntax highlighting will be more granular, highlighting some very specific
            additional syntax and semantic tokens that are not highlighted in the preview.</strong
          >
        </p>

        <div class="prose">
          <h2 id="installing-a-theme" class="pt-16 text-lg font-black md:text-xl">
            How install a theme in VSCode
          </h2>
          <p class="mt-4">
            Download the theme from the Discover or Saved themes page. It will be a .vsix file.
          </p>
          <p class="mt-4">
            Open VSCode and press <code>Ctrl+Shift+P</code> or <code>Cmd+Shift+P</code> to open the Command
            Palette.
          </p>
          <p>
            Type <code>Extensions: Install from VSIX</code> and press <code>Enter</code>.
          </p>
          <p>
            Select the .vsix file you downloaded and press <code>Enter</code>.
          </p>
          <p>
            Go to Settings -> Themes -> Color Theme or press <code>Crtl/Cmd + k + t</code> and select
            the newly installed theme.
          </p>
          <p>or</p>
          <p>
            Go to the extensions view by clicking on the Extensions icon in the Activity Bar on the
            side of the window or by pressing <code>Ctrl/Cmd+Shift+X</code>.
          </p>
          <p>Select the theme in the list of installed extensions.</p>
          <p>
            Set the theme as the active theme by clicking on the <code>Set Color Theme</code> button.
          </p>
        </div>
        <div class="prose">
          <h2
            id="variables-used-in-the-theme-generator"
            class="pt-16 text-lg font-black md:text-xl"
          >
            Variables used in the theme generator
          </h2>
          <p class="mt-4">The theme is generated using the following variables:</p>
          <h3 id="ui-colors" class="mt-4 pt-16 font-black md:text-lg">UI Colors</h3>
          <ul class="ml-8 mt-4 list-disc space-y-2">
            <li>
              <p>
                <code class="font-bold">BG1</code> - Background color for the editor, terminal, primary
                sidebar, inactive tabs, inputs, combo boxes, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">BG2</code> - Background color for the activities bar, topbar,
                active file tab, breadcrumbs, panel header (that contains the tabs), etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">BG3</code> - Background color for the editor group, editor group
                header.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">FG1</code> - Foreground color for the editor, source code, strings,
                terminal, active tab, active actions sidebar button, active panel tab, icon buttons,
                inputs, combo boxes, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">FG2</code> - Foreground color for the side bar, side bar section
                header, side bar activity bar top, side bar sticky scroll, minimap, editor group, editor
                group border, editor group drop background, editor group empty background, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">FG3</code> - Contrast foreground color for the elements that
                uses colors oposed to the theme type (dark or light). For example, color used in the
                status bar foreground if the theme is dark and the generated color used in the status
                bar background if the theme is light and vice versa. Or the foreground color used in
                the buttons if the theme is dark and the generated color used in the buttons background
                if the theme is light and vice versa. It is a support foreground color to maintain contrast
                in elements with colors different than the background color.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">AC1</code> - Accent 1 color, used, for the active tab,
                selected button in the actions sidebar, terminal panel and active input borders, and
                as background for the secondary buttons, as foreground to the active line number and
                cursor color in the editor. If left unmodified it have the same hue as the selected
                base hue for the theme, also, its hue was used to generate the colors for functions
                and function calls in the syntax higlighting section. This color is also used to
                generate a new set of base hues using the selected color scheme to increase the
                color variations when generating the syntax colors when the
                <strong>use fewer colors</strong> option is not selected.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">AC2</code> - Accent 2 color, this color is used as
                background for the status bar, badges and buttons as foreground to links in text.
                Initially, it's hue was used to generate the colors for storage keywords in the
                syntax highlighting color set. It is also used, with an alpha factor, to highlight
                the selected file and the hovered files in the sidebar and items in combo boxes.
                This color is also used to generate a new set of base hues using the selected color
                scheme to increase the color variations when generating the syntax colors when the
                <strong>use fewer colors</strong> option is not selected.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">BORDER</code> - Border color for the used borders in the theme.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">INFO</code> - This color is used as foreground for info messages,
                links, as inserted line indicator in the diff editor and editor gutter.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">WARNING</code> - This color is used as foreground for warning
                messages, as warning icon in the notification center and as warning border in the diff
                editor.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">ERROR</code> - This color is used as foreground for error messages,
                as error icon in the notification center and as removed border in the diff editor, for
                the underline of errors in the editor and to indicate deleted lines in the diff editor,
                editor gutter, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">SUCCESS</code> - This color is used as foreground for success
                messages, as success icon in the notification center and as inserted border in the diff
                editor, inserted lines in the editor gutter, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Line Highlight</code> - This color is used as background multi-cursor
                line highlight, folded lines, white-spaces, indent-guide.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Selection</code> - This color is used as background for the selected
                text in the editor, terminal, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Find Match</code> - This color is used as background for the
                current search match.
              </p>
            </li>
          </ul>
          <h3 id="syntax-colors" class="mt-4 pt-16 font-black md:text-lg">Syntax Colors</h3>
          <ul class="ml-8 mt-4 list-disc space-y-2">
            <li>
              <p>
                <code class="font-bold">Comment</code> - This color is used as foreground for comments
                and as foreground for all inactive elements in the UI.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Keyword</code> - This color is used as foreground for generic
                keywords.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Storage</code> - This color is used as foreground for
                storage keywords such as
                <code>let</code>, <code>const</code>, <code>var</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Other</code> - This color is used as foreground for other syntax
                elements such as .
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Language</code> - This color is used as foreground for
                language specific syntax elements such as laguage specific constants like
                <code>true</code>,
                <code>false</code>,
                <code>null</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Operator</code> - This color is used as foreground for operators
                such as +, -, *, /, =, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Control</code> - This color is used as foreground for control
                keywords such as .
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Control flow</code> - This color is used as foreground for
                control flow keywords such as <code>return</code>, <code>throw</code>,
                <code>break</code>,
                <code>continue</code>, <code>if</code>, <code>else</code>, <code>for</code>,
                <code>while</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Control import</code> - This color is used as foreground for
                control import keywords such as <code>import</code>, <code>from</code>,
                <code>export</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Support</code> - This color is used as foreground for library
                and language support generic keywords.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Support function</code> - This color is used as foreground
                for library and language support functions such as <code>map</code>,
                <code>filter</code>,
                <code>reduce</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Support method</code> - This color is used as foreground for
                library and language support methods such as <code>toString</code>,
                <code>slice</code>,
                <code>forEach</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Support variable</code> - This color is used as foreground
                for library and language support variables such as <code>event</code>,
                <code>this</code>,
                <code>console</code> etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Support property</code> - This color is used as foreground
                for library and language support properties such as <code>length</code>,
                <code>prototype</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Function</code> - This color is used as foreground for function
                names.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Function call</code> - This color is used as foreground for function
                calls.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Methods</code> - This color is used as foreground for methods.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Method call</code> - This color is used as foreground for method
                calls.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Selector</code> - This color is used as foreground for
                selectors such as
                <code>:hover</code>, <code>:active</code>, <code>:focus</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold"> Parameter </code> - This color is used as foreground for parameters.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Variable</code> - This color is used as foreground for variables.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Variable read-only</code> - This color is used as foreground
                for read-only variables.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Variable declaration</code> - This color is used as foreground
                for variable declarations.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Variable property</code> - This color is used as foreground for
                variable properties.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Property</code> - This color is used as foreground for properties.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Property declaration</code> - This color is used as foreground
                for property declarations.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Class</code> - This color is used as foreground for class names.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Types</code> - This color is used as foreground for types.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Type parameter</code> - This color is used as foreground for
                type parameters.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Tag</code> - This color is used as foreground for tags.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold"> Attribute </code> - This color is used as foreground for attributes.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Constant</code> - This color is used as foreground for constants
                such as numbers, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Unit</code> - This color is used as foreground for units
                indicators such as
                <code>px</code>, <code>%</code>, <code>em</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Datetime</code> - This color is used as foreground for
                datetime such as
                <code>now</code>, <code>today</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Punctuation</code> - This color is used as foreground for general
                punctuation.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Tag punctuation</code> - This color is used as foreground
                for tag punctuation such as
                <code>&lt;</code>, <code>&gt;</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Punctuation quote</code> - This color is used as foreground
                for punctuation quotes such as <code>"</code>, <code>'</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Punctuation brace</code> - This color is used as foreground
                for punctuation braces such as
                <code>[</code> <code>]</code>, <code>(</code><code>)</code>, etc.
              </p>
            </li>
            <li>
              <p>
                <code class="font-bold">Punctuation separator</code> - This color is used as
                foreground for punctuation separators such as
                <code>,</code>, <code>;</code>, etc.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</Sidebar.Provider>
