<script lang="ts">
  import { Share, LoaderPinwheel, Link } from 'lucide-svelte';
  import Facebook from '$lib/components/icons/facebook.svelte';
  import Linkedin from '$lib/components/icons/linkedin.svelte';
  import X from '$lib/components/icons/x.svelte';
  import Instagram from '$lib/components/icons/instagram.svelte';

  import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
  import { toast } from 'svelte-sonner';
  import Separator from '$lib/components/ui/separator/separator.svelte';
  import { Button } from '$lib/components/ui/button';

  type Props = {
    shareTheme: () => Promise<void>;
    isSharing: boolean;
    count: number;
    fg1: string;
    ac1: string;
    theme: {
      id: number;
      name: string;
    };
  };

  const { shareTheme, isSharing, count, fg1, ac1, theme }: Props = $props();

  let styleVars = $derived(`
    --color-foreground: ${fg1};
    --color-hover: ${ac1};
  `);

  async function handleShare() {}

  async function copyToClipboard(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      toast.error('Failed to copy link');
    }
  }

  function shareToSocial(platform: string, url: string) {
    const text = encodeURIComponent(`Check out this awesome VSCode theme: ${theme.name}`);
    const shareUrl = encodeURIComponent(url);
    let socialUrl = '';

    switch (platform) {
      case 'twitter':
        socialUrl = `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`;
        break;
      case 'facebook':
        socialUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case 'linkedin':
        socialUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
        break;
    }

    window.open(socialUrl, '_blank', 'width=600,height=400');
  }
</script>

<div class="share-btn flex items-center gap-1 transition-colors" style={styleVars}>
  <!-- <Popover> -->
  <!-- <PopoverTrigger> -->
  <button
    data-umami-event={`Share Button ${theme.name}`}
    onclick={handleShare}
    class="cursor-pointer"
    disabled={isSharing}
  >
    {#if isSharing}
      <LoaderPinwheel class="h-4 w-4 animate-spin" />
    {:else}
      <Share class="h-4 w-4" />
    {/if}
    <span class="sr-only">Share theme</span>
  </button>
  <!-- </PopoverTrigger>
    <PopoverContent>
      <h1>Share Theme</h1>
      <Separator />
      <Button onclick={() => handleShare().then((url) => url && copyToClipboard(url))}>
        <Link class="mr-2 h-4 w-4" />
        Copy Link
      </Button>
      <Button onclick={() => handleShare().then((url) => url && shareToSocial('twitter', url))}>
        <div class="mr-2 h-4 w-4">
          <X />
        </div>
        Share on X/Twitter
      </Button>
      <Button onclick={() => handleShare().then((url) => url && shareToSocial('facebook', url))}>
        <div class="mr-2 h-4 w-4">
          <Facebook />
        </div>
        Share on Facebook
      </Button>
      <Button onclick={() => handleShare().then((url) => url && shareToSocial('linkedin', url))}>
        <div class="mr-2 h-4 w-4">
          <Linkedin />
        </div>
        Share on LinkedIn
      </Button>
    </PopoverContent>
  </Popover>
  <span class="text-sm">{count}</span> -->
</div>

<style>
  .share-btn :global(button) {
    color: var(--color-foreground);
  }
  .share-btn :global(button:hover) {
    color: var(--color-hover);
  }
</style>
