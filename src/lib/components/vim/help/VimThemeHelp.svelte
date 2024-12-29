<script lang="ts">
  import { marked } from 'marked';
  import { onMount } from 'svelte';
  import guideContent from '$lib/docs/vim-theme-guide.md?raw';

  // Process markdown content
  const htmlContent = marked(guideContent);

  // Generate table of contents
  function generateTOC() {
    const article = document.querySelector('article');
    const toc = document.querySelector('.toc-content');
    if (!article || !toc) return;

    const headings = article.querySelectorAll('h2, h3');
    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName[1]);
      const li = document.createElement('li');
      li.className = `toc-item level-${level}`;

      const a = document.createElement('a');
      a.href = `#${heading.id}`;
      a.textContent = heading.textContent || '';

      li.appendChild(a);
      tocList.appendChild(li);
    });

    // Add the TOC after the "Contents" heading
    const existingTOC = toc.querySelector('.toc-list');
    if (existingTOC) {
      toc.removeChild(existingTOC);
    }
    toc.appendChild(tocList);
  }

  // Initialize TOC on mount
  onMount(() => {
    generateTOC();
  });

  // Handle smooth scrolling for anchor links
  function handleAnchorClick(e: MouseEvent) {
    const target = e.target as HTMLAnchorElement;
    if (target.hash && target.host === window.location.host) {
      e.preventDefault();
      const element = document.querySelector(target.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', target.hash);
      }
    }
  }
</script>

<div class="help-container">
  <nav class="toc">
    <div class="toc-content">
      <h3>Contents</h3>
      <!-- Auto-generated table of contents will be inserted here -->
    </div>
  </nav>

  <main class="content">
    <article on:click={handleAnchorClick}>
      {@html htmlContent}
    </article>
  </main>
</div>

<style>
  .help-container {
    display: grid;
    grid-template-columns: minmax(250px, 1fr) minmax(0, 3fr);
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }

  .toc {
    position: sticky;
    top: 2rem;
    height: calc(100vh - 4rem);
    overflow-y: auto;
    padding-right: 1rem;
    border-right: 1px solid var(--border-color);
  }

  .toc-content {
    padding: 1rem;
  }

  .toc h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .content {
    min-width: 0;
    max-width: 900px;
    margin: 0 auto;
  }

  article {
    line-height: 1.6;
  }

  article :global(h1) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
  }

  article :global(h2) {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.3rem;
  }

  article :global(h3) {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  article :global(h4) {
    font-size: 1.2rem;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
  }

  article :global(pre) {
    background-color: var(--code-bg);
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  article :global(code) {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9em;
  }

  article :global(p) {
    margin: 1rem 0;
  }

  article :global(ul),
  article :global(ol) {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  article :global(li) {
    margin: 0.5rem 0;
  }

  article :global(a) {
    color: var(--link-color);
    text-decoration: none;
  }

  article :global(a:hover) {
    text-decoration: underline;
  }

  article :global(blockquote) {
    border-left: 4px solid var(--border-color);
    margin: 1.5rem 0;
    padding: 0.5rem 1rem;
    background-color: var(--blockquote-bg);
  }

  article :global(hr) {
    border: none;
    border-top: 1px solid var(--border-color);
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
    .help-container {
      grid-template-columns: 1fr;
    }

    .toc {
      display: none;
    }

    .content {
      padding: 0;
    }
  }
</style>
