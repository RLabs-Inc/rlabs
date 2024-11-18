<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
</script>

<Sidebar.Root>
  <Sidebar.Content>
    <div class="py-16">
      <Sidebar.Group>
        <Sidebar.GroupLabel>Introduction</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <a href="#introduction">Color Theory and Sacred Geometry</a>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
      <Sidebar.Group>
        <Sidebar.GroupLabel>Theme Generator</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <a href="#how-to">How to create a theme</a>
              </Sidebar.MenuButton>
              <Sidebar.MenuSub>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#how-to">Theme generator</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#use-fewer-colors">Use fewer colors</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#editing-colors">Editing colors</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#locking-colors">Locking colors</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
              </Sidebar.MenuSub>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <a href="#save-theme">Managing themes</a>
              </Sidebar.MenuButton>
              <Sidebar.MenuSub>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#save-theme">Save theme</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#load-theme">Load theme</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#delete-theme">Delete theme</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#public-and-private-themes">Public and private themes</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
              </Sidebar.MenuSub>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <a href="#theme-preview">Theme preview</a>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <a href="#installing-a-theme">Installing a theme</a>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
      <Sidebar.Group>
        <Sidebar.GroupContent>
          <Sidebar.GroupLabel>Color variables reference</Sidebar.GroupLabel>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <a href="#variables-used-in-the-theme-generator"
                  >Variables used in the theme generator</a
                >
              </Sidebar.MenuButton>
              <Sidebar.MenuSub>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#ui-colors">UI Colors</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#syntax-colors">Syntax Colors</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    <a href="#ansi-colors">Ansi Colors</a>
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
              </Sidebar.MenuSub>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </div>
  </Sidebar.Content>
</Sidebar.Root>
