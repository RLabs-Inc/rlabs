export const exampleFiles = [
  {
    name: 'typescript.ts',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    language: 'typescript',
    displayName: 'Typescript',
    snippet: `import { wcagLuminance } from 'culori';

import type { TokenColors, VSCodeTheme } from '$lib/types/vscode/theme';
import type { UIColors, SyntaxColors, AnsiColors } from '$lib/types/vscode/color';
import { getAllTokenColors } from './export-theme';
import { getSemanticTokenColors } from './export-theme/semantic';

export function generateSemanticThemeJSON(
  name: string = 'Generated Color Theme',
  colors: UIColors,
  syntaxColors: SyntaxColors,
  ansiColors: AnsiColors
): { themeJSON: string; themeObject: VSCodeTheme } {
  const tokenColors: TokenColors = { colors, syntaxColors, ansiColors };

  const getAC1Foreground = () => {
    if (wcagLuminance(colors.BG1) < 0.5) {
      return wcagLuminance(colors.AC1) < 0.5 ? colors.FG1 : colors.FG3;
    } else {
      return wcagLuminance(colors.AC1) < 0.5 ? colors.FG3 : colors.FG1;
    }
  };
  const getColorWithOpacity = (color: string, opacity: string) => {
    if (color.length > 7) {
      return color.slice(0, -2) + opacity;
    } else {
      return color + opacity;
    }
  };

  const theme = {
    name: name,
    type:
      wcagLuminance(colors.BG1) < 0.5
        ? ('dark' as 'dark' | 'light')
        : ('light' as 'dark' | 'light'),
    semanticClass: 'theme.rlabs',
    semanticHighlighting: true,
    colors: {
      // # Integrated Terminal Colors
      'terminal.background': colors.BG1,
      'terminal.foreground': colors.FG1,
      'terminal.border': colors.BORDER,
      'terminal.ansiBrightBlack': ansiColors.BrightBlack,
      'terminal.ansiBrightRed': ansiColors.BrightRed,
      'terminal.ansiBrightGreen': ansiColors.BrightGreen,
      'terminal.ansiBrightYellow': ansiColors.BrightYellow,
      'terminal.ansiBrightBlue': ansiColors.BrightBlue,
      'terminal.ansiBrightMagenta': ansiColors.BrightMagenta,
      'terminal.ansiBrightCyan': ansiColors.BrightCyan,
      'terminal.ansiBrightWhite': ansiColors.BrightWhite,
      'terminal.ansiBlack': ansiColors.Black,
      'terminal.ansiRed': ansiColors.Red,
      'terminal.ansiGreen': ansiColors.Green,
      'terminal.ansiYellow': ansiColors.Yellow,
      'terminal.ansiBlue': ansiColors.Blue,
      'terminal.ansiMagenta': ansiColors.Magenta,
      'terminal.ansiCyan': ansiColors.Cyan,
      'terminal.ansiWhite': ansiColors.White,
      'terminal.selectionBackground': colors.selection,
      // "terminal.selectionForeground": colors.FG1,
      'terminal.inactiveSelectionBackground': colors.selection,
      // # Base Colors
      focusBorder: colors.BORDER, // Overall border color for focused elements. This color is only used if not overridden by a component
      foreground: colors.FG1, // Overall foreground color. This color is only used if not overridden by a component
      disabledForeground: syntaxColors.comment, // Overall foreground for disabled elements. This color is only used if not overridden by a component.
  },
    tokenColors: getSemanticTokenColors(tokenColors, getAC1Foreground, getAC2Foreground, getINFOForeground, getWARNINGForeground, getERRORForeground),
    semanticTokenColors: getSemanticTokenColors(tokenColors, getAC1Foreground, getAC2Foreground, getINFOForeground, getWARNINGForeground, getERRORForeground),
  }

  const themeJSON = JSON.stringify(theme, null, 2);
  return { themeJSON, themeObject: theme };
}

// Next.js API route example
import { type NextApiRequest, type NextApiResponse } from 'next';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { rateLimit } from '@/lib/rate-limit';
import { validateToken } from '@/lib/auth';
import type { 
  ApiResponse, 
  UserProfile, 
  ErrorResponse 
} from '@/types/api';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500
});

// Request validation schema
const UpdateProfileSchema = z.object({
  displayName: z.string().min(2).max(50),
  bio: z.string().max(160).optional(),
  socialLinks: z.array(z.object({
    platform: z.enum(['twitter', 'github', 'linkedin']),
    url: z.string().url()
  })).max(3)
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<UserProfile> | ErrorResponse>
) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      code: 'METHOD_NOT_ALLOWED' 
    });
  }

  try {
    // Rate limiting
    await limiter.check(res, 10, 'UPDATE_PROFILE');

    // Auth validation
    const user = await validateToken(req);
    if (!user) {
      return res.status(401).json({ 
        error: 'Unauthorized',
        code: 'UNAUTHORIZED' 
      });
    }

    // Input validation
    const result = UpdateProfileSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Invalid request body',
        code: 'INVALID_INPUT',
        details: result.error.issues
      });
    }

    // Update profile in database
    const updatedProfile = await prisma.userProfile.update({
      where: { userId: user.id },
      data: {
        displayName: result.data.displayName,
        bio: result.data.bio,
        socialLinks: {
          deleteMany: {},
          create: result.data.socialLinks
        },
        updatedAt: new Date()
      },
      include: {
        socialLinks: true,
        preferences: true
      }
    });

    // Cache invalidation
    await Promise.all([
      redis.del(\`user:profile:\${user.id}\`),
      redis.del(\`user:social:\${user.id}\`)
    ]);

    return res.status(200).json({
      data: updatedProfile,
      message: 'Profile updated successfully'
    });

  } catch (error) {
    console.error('[API] Profile update error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      code: 'INTERNAL_SERVER_ERROR' 
    });
  }
}
    `
  },
  {
    name: 'javascript.js',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    language: 'javascript',
    displayName: 'Javascript',
    snippet: `// StateManager.js
const createStateManager = (initialState = {}) => {
  const subscribers = new Set();
  const dependencyMap = new WeakMap();
  let currentEffect = null;
  
  const state = new Proxy(initialState, {
    get(target, property) {
      if (currentEffect) {
        if (!dependencyMap.has(target)) {
          dependencyMap.set(target, new Map());
        }
        const deps = dependencyMap.get(target);
        if (!deps.has(property)) {
          deps.set(property, new Set());
        }
        deps.get(property).add(currentEffect);
      }
      return target[property];
    },
    
    set(target, property, value) {
      if (target[property] === value) return true;
      target[property] = value;
      
      const deps = dependencyMap.get(target);
      if (deps?.has(property)) {
        const effects = deps.get(property);
        effects.forEach(effect => {
          if (subscribers.has(effect)) {
            queueMicrotask(() => effect());
          }
        });
      }
      return true;
    }
  });

  const watch = (deps, callback) => {
    const effect = () => {
      currentEffect = effect;
      try {
        callback(deps.map(dep => state[dep]));
      } finally {
        currentEffect = null;
      }
    };
    
    subscribers.add(effect);
    effect();
    
    return () => {
      subscribers.delete(effect);
      for (const [target, depsMap] of dependencyMap) {
        for (const [_, effects] of depsMap) {
          effects.delete(effect);
        }
      }
    };
  };

  const computed = (getter) => {
    let value;
    let dirty = true;
    
    const effect = () => {
      if (!dirty) return value;
      currentEffect = computedEffect;
      try {
        value = getter();
        dirty = false;
        return value;
      } finally {
        currentEffect = null;
      }
    };
    
    const computedEffect = () => {
      dirty = true;
      subscribers.forEach(subscriber => {
        if (dependencyMap.get(state)?.get('computed')?.has(subscriber)) {
          subscriber();
        }
      });
    };
    
    subscribers.add(effect);
    return () => effect();
  };

  return { state, watch, computed };
};

// Usage example
const { state, watch, computed } = createStateManager({
  count: 0,
  multiplier: 2,
  items: ['apple', 'banana']
});

// Computed value
const doubledCount = computed(() => state.count * state.multiplier);

// Watch for changes
const unsubscribe = watch(['count', 'multiplier'], ([count, multiplier]) => {
  console.log(\`Count: \${count}, Multiplier: \${multiplier}\`);
  console.log(\`Doubled count: \${doubledCount()}\`);
});

// Event handler
const handleIncrement = () => {
  state.count++;
};

// Async data fetching
async function fetchItems() {
  try {
    const response = await fetch('https://api.example.com/items');
    const data = await response.json();
    state.items = data;
  } catch (error) {
    console.error('Failed to fetch items:', error);
  }
}

// Cleanup
window.addEventListener('beforeunload', () => {
  unsubscribe();
});

export { createStateManager };`
  },
  {
    name: 'html.html',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    language: 'html',
    displayName: 'HTML',
    snippet: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Product card component with dynamic features">
    <title>Product Card Component</title>
    <link rel="stylesheet" href="./styles/product-card.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
</head>
<body>
    <main class="container">
        <article class="product-card" itemscope itemtype="https://schema.org/Product">
            <div class="product-card__image-container">
                <img src="/images/product-1.jpg" 
                     alt="Premium Wireless Headphones" 
                     loading="lazy"
                     width="400"
                     height="400"
                     itemprop="image">
                <span class="product-card__badge" aria-label="New Release">New</span>
            </div>

            <div class="product-card__content">
                <header>
                    <h1 class="product-card__title" itemprop="name">Premium Wireless Headphones</h1>
                    <data class="product-card__price" value="299.99" itemprop="price">$299.99</data>
                </header>

                <p class="product-card__description" itemprop="description">
                    Experience crystal-clear sound with our premium wireless headphones,
                    featuring active noise cancellation &amp; 30-hour battery life.
                </p>

                <form class="product-card__form" action="/api/cart" method="POST">
                    <fieldset class="product-card__options">
                        <legend>Available Colors</legend>
                        <div class="product-card__color-options">
                            <input type="radio" 
                                   name="color" 
                                   id="color-black" 
                                   value="black" 
                                   checked>
                            <label for="color-black">Midnight Black</label>

                            <input type="radio" 
                                   name="color" 
                                   id="color-white" 
                                   value="white">
                            <label for="color-white">Pearl White</label>
                        </div>
                    </fieldset>

                    <div class="product-card__quantity">
                        <label for="quantity">Quantity:</label>
                        <select name="quantity" id="quantity" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <button type="submit" 
                            class="product-card__add-to-cart"
                            aria-label="Add Premium Wireless Headphones to cart">
                        Add to Cart
                    </button>
                </form>

                <footer class="product-card__footer">
                    <dl class="product-card__details">
                        <dt>Availability:</dt>
                        <dd>In Stock</dd>
                        <dt>Shipping:</dt>
                        <dd>Free 2-day shipping</dd>
                    </dl>
                </footer>
            </div>
        </article>
    </main>

    <script src="./js/product-card.js" defer></script>
</body>
</html>
    `
  },
  {
    name: 'css.css',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    language: 'css',
    displayName: 'CSS',
    snippet: `/* Product Card Component Styles */
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

:root {
  --card-radius: 12px;
  --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --card-background: #ffffff;
  --card-hover-transform: translateY(-4px);
  
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --border-color: #e5e7eb;
}

/* Base Card Styles */
.product-card {
  position: relative;
  background-color: var(--card-background);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.product-card:hover {
  transform: var(--card-hover-transform);
}

.product-card:focus-within {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Image Container */
.product-card__image-container {
  position: relative;
  padding-bottom: calc(4 / 3 * 100%);
}

.product-card__image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;
}

.product-card__image-container img:hover {
  transform: scale(1.05);
}

/* Content Area */
.product-card__content {
  padding: 1.5rem;
}

.product-card__title {
  margin: 0 0 0.5rem;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.product-card__price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.product-card__price::before {
  content: '$';
}

/* Form Elements */
.product-card__form {
  display: grid;
  gap: 1rem;
}

.product-card__options {
  border: none;
  padding: 0;
  margin: 0;
}

.product-card__options legend {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.product-card__color-options {
  display: flex;
  gap: 0.5rem;
}

.product-card__color-options input[type="radio"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.product-card__color-options label {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 200ms ease;
}

.product-card__color-options input[type="radio"]:checked + label {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.product-card__color-options input[type="radio"]:focus + label {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Quantity Selector */
.product-card__quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.product-card__quantity select {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background-color: transparent;
  cursor: pointer;
}

/* Add to Cart Button */
.product-card__add-to-cart {
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 200ms ease;
}

.product-card__add-to-cart:hover {
  background-color: var(--primary-hover);
}

.product-card__add-to-cart:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .product-card,
  .product-card__image-container img {
    transition: none;
  }
} 
  `
  },
  {
    name: 'scss.scss',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    language: 'scss',
    displayName: 'SCSS',
    snippet: `@use 'sass:math';
@use 'sass:color';
@import '../styles/variables';
@import '../styles/mixins';

// Custom properties for theming
:root {
  --product-card-radius: 0.75rem;
  --product-card-shadow: #{$shadow-lg};
  --product-card-hover-transform: translateY(-4px);
}

// Mixins for responsive design
@mixin aspect-ratio($width, $height) {
  position: relative;
  &::before {
    content: '';
    display: block;
    padding-bottom: math.div($height, $width) * 100%;
  }
}

// Animation keyframes
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.product-card {
  $self: &;
  position: relative;
  background-color: var(--color-background);
  border-radius: var(--product-card-radius);
  box-shadow: var(--product-card-shadow);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @include respond-to('medium') {
    max-width: calc(50% - #{$spacing-md});
  }

  &:hover {
    transform: var(--product-card-hover-transform);
    
    #{$self}__badge {
      animation: fadeIn 0.2s ease-out forwards;
    }
  }

  // Image container with aspect ratio
  &__image-container {
    @include aspect-ratio(4, 5);
    overflow: hidden;
    border-radius: var(--product-card-radius) var(--product-card-radius) 0 0;

    img {
      @include absolute-fill;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  // Product information
  &__content {
    padding: $spacing-lg;
    display: grid;
    gap: $spacing-sm;
  }

  &__title {
    @include typography('heading-sm');
    color: var(--color-text-primary);
    margin: 0;
  }

  &__price {
    display: flex;
    align-items: baseline;
    gap: $spacing-xs;

    &--current {
      @include typography('price-lg');
      color: var(--color-text-primary);
    }

    &--original {
      @include typography('price-sm');
      color: var(--color-text-secondary);
      text-decoration: line-through;
    }
  }

  // Badge styling
  &__badge {
    position: absolute;
    top: $spacing-md;
    right: $spacing-md;
    padding: $spacing-xs $spacing-sm;
    background-color: var(--color-accent);
    color: var(--color-white);
    border-radius: $radius-sm;
    opacity: 0;
    transform: scale(0.95);
    z-index: 1;
  }

  // Out of stock overlay
  &__out-of-stock {
    @include absolute-fill;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color-black, 0.5);
    color: var(--color-white);
    font-weight: $font-weight-semibold;
    backdrop-filter: blur(4px);
  }

  // Size selector
  &__sizes {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;

    button {
      @include reset-button;
      padding: $spacing-xs $spacing-sm;
      border-radius: $radius-sm;
      font-size: $font-size-sm;
      font-weight: $font-weight-medium;
      transition: all 0.2s ease;

      &[data-selected="true"] {
        background-color: var(--color-primary);
        color: var(--color-white);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  // Quantity selector
  &__quantity {
    display: inline-flex;
    border: 1px solid var(--color-border);
    border-radius: $radius-sm;

    button {
      @include reset-button;
      padding: $spacing-xs $spacing-sm;
      color: var(--color-text-secondary);

      &:hover:not(:disabled) {
        color: var(--color-text-primary);
      }
    }

    span {
      padding: $spacing-xs $spacing-sm;
      min-width: 3ch;
      text-align: center;
      color: var(--color-text-primary);
    }
  }
}`
  },
  {
    name: 'vue.vue',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    language: 'vue',
    displayName: 'Vue',
    snippet: `<script setup lang="ts">
import { ref, computed, onMounted, watch, type Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import type { DataPoint, ChartConfig, ThemeMode } from '@/types'
import BaseChart from '@/components/BaseChart.vue'
import DataTable from '@/components/DataTable.vue'
import { formatDate, aggregateData } from '@/utils/data'

interface Props {
  initialData?: DataPoint[]
  chartType?: 'line' | 'bar' | 'scatter'
  refreshInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialData: () => [],
  chartType: 'line',
  refreshInterval: 30000
})

const emit = defineEmits<{
  (e: 'dataUpdated', data: DataPoint[]): void
  (e: 'error', message: string): void
}>()

// State
const chartData: Ref<DataPoint[]> = ref(props.initialData)
const isLoading = ref(false)
const error = ref<string | null>(null)
const chartRef = ref<InstanceType<typeof BaseChart> | null>(null)

// Store
const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

// Router
const router = useRouter()
const route = useRoute()

// Computed
const chartConfig = computed<ChartConfig>(() => ({
  type: props.chartType,
  data: aggregateData(chartData.value),
  options: {
    responsive: true,
    maintainAspectRatio: false,
    theme: currentTheme.value === 'dark' ? 'dark' : 'light',
    animations: {
      tension: {
        duration: 1000,
        easing: 'easeInOutCubic',
      }
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        position: 'top',
      }
    }
  }
}))

const tableData = computed(() => 
  chartData.value.map(point => ({
    ...point,
    timestamp: formatDate(point.timestamp),
    value: point.value.toFixed(2)
  }))
)

// Methods
async function fetchData() {
  try {
    isLoading.value = true
    error.value = null
    
    const response = await fetch(\`/api/data?type=\${props.chartType}\`)
    if (!response.ok) throw new Error('Failed to fetch data')
    
    const data: DataPoint[] = await response.json()
    chartData.value = data
    emit('dataUpdated', data)
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Unknown error'
    emit('error', error.value)
  } finally {
    isLoading.value = false
  }
}

// Lifecycle & Watchers
onMounted(() => {
  fetchData()
  const interval = setInterval(fetchData, props.refreshInterval)
  onUnmounted(() => clearInterval(interval))
})

watch(() => props.chartType, () => {
  router.push({ 
    query: { ...route.query, type: props.chartType }
  })
  fetchData()
})

// Template refs
defineExpose({
  refresh: fetchData,
  chartInstance: chartRef
})
</script>

<template>
  <div class="data-visualization" :class="{ 'theme-dark': currentTheme === 'dark' }">
    <header class="visualization-header">
      <h2>{{ $t('dataVisualization.title') }}</h2>
      <div class="controls">
        <select v-model="props.chartType">
          <option value="line">{{ $t('charts.line') }}</option>
          <option value="bar">{{ $t('charts.bar') }}</option>
          <option value="scatter">{{ $t('charts.scatter') }}</option>
        </select>
        <button 
          @click="fetchData" 
          :disabled="isLoading"
          class="refresh-btn"
        >
          <i class="fas fa-sync" :class="{ 'fa-spin': isLoading }" />
          {{ $t('actions.refresh') }}
        </button>
      </div>
    </header>

    <div class="visualization-content">
      <Transition name="fade" mode="out-in">
        <div v-if="error" class="error-message">
          <i class="fas fa-exclamation-triangle" />
          {{ error }}
        </div>
        <div v-else class="chart-container">
          <BaseChart
            ref="chartRef"
            v-bind="chartConfig"
            @chart:click="handleChartClick"
          />
        </div>
      </Transition>

      <DataTable 
        :data="tableData"
        :loading="isLoading"
        :page-size="10"
        class="data-table"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-visualization {
  --header-height: 4rem;
  --padding: 1.5rem;
  --border-radius: 0.5rem;
  
  display: grid;
  grid-template-rows: var(--header-height) 1fr;
  gap: var(--padding);
  height: 100%;
  background: var(--bg-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  
  &.theme-dark {
    --bg-color: var(--color-gray-900);
    --text-color: var(--color-gray-100);
    --border-color: var(--color-gray-700);
    
    .visualization-header {
      background: var(--color-gray-800);
    }
  }
  
  .visualization-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--padding);
    background: var(--color-gray-100);
    border-bottom: 1px solid var(--border-color);
    
    .controls {
      display: flex;
      gap: 1rem;
      
      select {
        min-width: 120px;
      }
    }
  }
  
  .visualization-content {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: var(--padding);
    padding: var(--padding);
    overflow: auto;
    
    .chart-container {
      position: relative;
      height: 100%;
      min-height: 300px;
    }
    
    .data-table {
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
    }
  }
  
  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    color: var(--color-error);
    background: var(--color-error-bg);
    border: 1px solid var(--color-error-border);
    border-radius: var(--border-radius);
  }
}

// Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Responsive
@media (max-width: 768px) {
  .data-visualization {
    --padding: 1rem;
    
    .visualization-header {
      flex-direction: column;
      gap: 1rem;
      height: auto;
      padding: var(--padding);
      
      .controls {
        width: 100%;
        
        select {
          flex: 1;
        }
      }
    }
  }
}
</style>`
  },
  {
    name: 'svelte.svelte',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
    language: 'svelte',
    displayName: 'Svelte',
    snippet: `<script lang="ts">
  import { onMount, createEventDispatcher, tick } from 'svelte';
  import { fade, slide, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { writable, derived } from 'svelte/store';
  import type { Task, TaskPriority, TaskStatus } from '$lib/types';
  
  // Props
  export let initialTasks: Task[] = [];
  export let showCompleted = false;
  export let theme: 'light' | 'dark' = 'light';
  
  // Types
  type FilterOption = 'all' | 'active' | 'completed';
  type SortOption = 'priority' | 'dueDate' | 'title';
  
  // Stores
  const tasks = writable<Task[]>(initialTasks);
  const filterBy = writable<FilterOption>('all');
  const sortBy = writable<SortOption>('priority');
  
  // Derived stores
  const filteredTasks = derived(
    [tasks, filterBy, sortBy],
    ([$tasks, $filterBy, $sortBy]) => {
      let filtered = [...$tasks];
      
      // Apply filters
      if ($filterBy !== 'all') {
        filtered = filtered.filter(task => 
          $filterBy === 'completed' ? task.completed : !task.completed
        );
      }
      
      // Apply sorting
      filtered.sort((a, b) => {
        switch ($sortBy) {
          case 'priority':
            return b.priority - a.priority;
          case 'dueDate':
            return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
          default:
            return a.title.localeCompare(b.title);
        }
      });
      
      return filtered;
    }
  );

  // Event dispatcher
  const dispatch = createEventDispatcher<{
    taskUpdate: { task: Task; action: 'add' | 'update' | 'delete' };
    filterChange: FilterOption;
  }>();

  // Methods
  async function handleAddTask(event: CustomEvent<Omit<Task, 'id'>>) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...event.detail,
      createdAt: new Date().toISOString()
    };
    
    tasks.update(t => [...t, newTask]);
    await tick();
    dispatch('taskUpdate', { task: newTask, action: 'add' });
  }

  function handleDragStart(event: DragEvent, task: Task) {
    if (!event.dataTransfer) return;
    event.dataTransfer.setData('text/plain', task.id);
    event.dataTransfer.effectAllowed = 'move';
  }

  let dragTarget: HTMLElement | null = null;

  $: tasksByStatus = $filteredTasks.reduce((acc, task) => {
    const status = task.status || 'todo';
    acc[status] = [...(acc[status] || []), task];
    return acc;
  }, {} as Record<TaskStatus, Task[]>);
</script>

<div 
  class="kanban-board"
  class:dark={theme === 'dark'}
  role="application"
  aria-label="Task Management Board"
>
  <header>
    <h1>Task Management</h1>
    <div class="controls">
      <select bind:value={$filterBy} on:change={() => dispatch('filterChange', $filterBy)}>
        <option value="all">All Tasks</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      
      <select bind:value={$sortBy}>
        <option value="priority">Priority</option>
        <option value="dueDate">Due Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  </header>

  <div class="board-columns">
    {#each Object.entries(tasksByStatus) as [status, statusTasks]}
      <div
        class="column"
        data-status={status}
        on:dragover|preventDefault
        on:drop|preventDefault={e => handleDrop(e, status)}
      >
        <h2>{status}</h2>
        
        {#each statusTasks as task (task.id)}
          <div
            class="task-card"
            class:high-priority={task.priority >= 8}
            class:completed={task.completed}
            draggable="true"
            on:dragstart={e => handleDragStart(e, task)}
            in:fade={{ duration: 300 }}
            out:slide={{ duration: 300, easing: quintOut }}
            animate:flip={{ duration: 300 }}
          >
            <div class="task-header">
              <h3>{task.title}</h3>
              <span class="priority" style="--priority: {task.priority}">
                {task.priority}
              </span>
            </div>
            
            <p>{task.description}</p>
            
            {#if task.dueDate}
              <time datetime={task.dueDate}>
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </time>
            {/if}
            
            <div class="task-footer">
              <button
                on:click={() => toggleTaskCompletion(task)}
                aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
              >
                {#if task.completed}
                  <span class="check" transition:scale>✓</span>
                {:else}
                  <span class="circle"></span>
                {/if}
              </button>
              
              <button
                on:click={() => deleteTask(task.id)}
                class="delete"
                aria-label="Delete task"
              >
                ×
              </button>
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .kanban-board {
    --column-width: 300px;
    --column-gap: 1rem;
    --card-padding: 1rem;
    
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    background: var(--bg-color, #f5f5f5);
    color: var(--text-color, #333);
    
    &.dark {
      --bg-color: #1a1a1a;
      --text-color: #fff;
      --card-bg: #2d2d2d;
      --card-border: #404040;
    }
    
    header {
      padding: 1rem;
      background: var(--primary-color, #2196f3);
      color: white;
      
      .controls {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        
        select {
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          
          &:focus {
            outline: 2px solid rgba(255, 255, 255, 0.5);
          }
        }
      }
    }
    
    .board-columns {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: var(--column-width);
      gap: var(--column-gap);
      padding: var(--column-gap);
      overflow-x: auto;
      
      .column {
        background: var(--column-bg, rgba(0, 0, 0, 0.05));
        border-radius: 8px;
        padding: var(--card-padding);
        
        h2 {
          margin: 0 0 1rem;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
          color: var(--text-color-secondary, #666);
        }
      }
    }
    
    .task-card {
      background: var(--card-bg, white);
      border: 1px solid var(--card-border, #e0e0e0);
      border-radius: 6px;
      padding: var(--card-padding);
      margin-bottom: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      &.high-priority {
        border-left: 3px solid var(--error-color, #f44336);
      }
      
      &.completed {
        opacity: 0.7;
        text-decoration: line-through;
      }
      
      .priority {
        --size: 24px;
        width: var(--size);
        height: var(--size);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: hsl(calc(120deg - (var(--priority) * 12deg)), 70%, 60%);
        color: white;
        font-size: 0.75rem;
        font-weight: bold;
      }
    }
  }
</style>`
  },
  {
    name: 'react.tsx',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    language: 'tsx',
    displayName: 'React',
    snippet: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product, CartItem } from '@/types/shop';
import { formatCurrency } from '@/utils/currency';

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
  inStock?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart,
  inStock = true 
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    onAddToCart({
      productId: product.id,
      size: selectedSize,
      quantity,
      price: product.price
    });
  };

  return (
    <motion.div
      className="relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative pb-[125%]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {formatCurrency(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatCurrency(product.compareAtPrice)}
            </span>
          )}
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={\`px-3 py-1 rounded-md text-sm font-medium \${
                  selectedSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }\`}
                type="button"
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center border rounded-md">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-gray-600 hover:text-gray-800"
                aria-label="Decrease quantity"
              >
                &minus;
              </button>
              <span className="px-3 py-1 text-gray-800">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-gray-600 hover:text-gray-800"
                aria-label="Increase quantity"
              >
                &#43;
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!inStock || !selectedSize}
            className={\`w-full py-2 px-4 rounded-md font-medium text-white \${
              !inStock || !selectedSize
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }\`}
          >
            {!inStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && product.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md"
          >
            {product.badge}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
    `
  },
  {
    name: 'ruby.rb',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg',
    language: 'ruby',
    displayName: 'Ruby',
    snippet: `# frozen_string_literal: true

require 'singleton'
require 'forwardable'
require 'logger'
require 'json'

module ApiBuilder
  class ValidationError < StandardError; end
  class ConfigurationError < StandardError; end

  # DSL for building REST API endpoints with middleware support
  class Router
    include Singleton
    extend Forwardable

    def_delegators :@middleware_chain, :use, :build

    attr_reader :routes, :logger

    def initialize
      @routes = {}
      @middleware_chain = MiddlewareChain.new
      @logger = Logger.new($stdout)
      setup_default_middleware
    end

    class << self
      def define(&block)
        instance.instance_eval(&block)
      end

      def draw(&block)
        instance.instance_eval(&block)
      end
    end

    %i[get post put patch delete].each do |http_method|
      define_method(http_method) do |path, **options, &block|
        register_route(http_method, path, options, block)
      end
    end

    def namespace(path, &block)
      current_namespace = @current_namespace
      @current_namespace = current_namespace ? File.join(current_namespace, path) : path
      instance_eval(&block)
    ensure
      @current_namespace = current_namespace
    end

    private

    def setup_default_middleware
      use Middleware::RequestLogger
      use Middleware::JsonParser
      use Middleware::Authentication
      use Middleware::RateLimiter
    end

    def register_route(method, path, options, handler)
      full_path = @current_namespace ? File.join(@current_namespace, path) : path
      route_key = "#{method.upcase} #{full_path}"

      @routes[route_key] = Route.new(
        method: method,
        path: full_path,
        handler: handler,
        options: options
      )

      logger.info "Registered route: #{route_key}"
    end
  end

  class Route
    attr_reader :method, :path, :handler, :options

    def initialize(method:, path:, handler:, options: {})
      @method = method
      @path = path
      @handler = handler
      @options = default_options.merge(options)
      validate!
    end

    def call(env)
      Context.new(env, options).tap do |ctx|
        begin
          handler.call(ctx)
        rescue => e
          handle_error(ctx, e)
        end
      end
    end

    private

    def default_options
      {
        auth_required: true,
        rate_limit: true,
        cors: true
      }
    end

    def validate!
      raise ValidationError, "Invalid path: #{path}" unless valid_path?
      raise ValidationError, "Handler must be callable" unless handler.respond_to?(:call)
    end

    def valid_path?
      path.start_with?('/') && !path.include?('?')
    end

    def handle_error(ctx, error)
      ctx.status = case error
                  when ValidationError then 400
                  when AuthenticationError then 401
                  when RateLimitExceeded then 429
                  else 500
                  end
      
      ctx.json(
        error: {
          type: error.class.name,
          message: error.message
        }
      )
    end
  end

  # Example usage:
  Router.define do
    namespace '/api/v1' do
      get '/users', auth_required: true do |ctx|
        users = UserRepository.all
        ctx.json(users: users)
      end

      post '/users', rate_limit: true do |ctx|
        user = UserRepository.create(ctx.params)
        ctx.status = 201
        ctx.json(user: user)
      end

      namespace '/admin' do
        before_action :require_admin

        get '/stats' do |ctx|
          stats = StatsCollector.gather
          ctx.json(stats: stats)
        end
      end
    end
  end
end`
  },
  {
    name: 'php.php',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    language: 'php',
    displayName: 'PHP',
    snippet: `
<?php
// A simple PHP program demonstrating various features

// Class definition
class Person {
    private $name;
    private $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function introduce() {
        echo "Hello, my name is {$this->name} and I'm {$this->age} years old.";
    }

    public static function createFromArray($data) {
        return new self($data['name'], $data['age']);
    }
}

// Interface definition
interface Greetable {
    public function greet();
}

// Class inheritance and interface implementation
class Employee extends Person implements Greetable {
    private $position;

    public function __construct($name, $age, $position) {
        parent::__construct($name, $age);
        $this->position = $position;
    }

    public function introduce() {
        parent::introduce();
        echo "I work as a {$this->position}.";
    }

    public function greet() {
        echo "Hello, {$this->name}!";
    }
}

// Create instances
$person = new Person("Alice", 30);
$employee = new Employee("Bob", 35, "Developer");

// Method calls
$person->introduce();
$employee->introduce();
$employee->greet();

// Array and iteration
$people = [
    ['name' => "Charlie", 'age' => 25],
    ['name' => "David", 'age' => 40],
    ['name' => "Eve", 'age' => 22]
];

foreach ($people as $personData) {
    $person = Person::createFromArray($personData);
    $person->introduce();
}

// Array manipulation
$scores = ['alice' => 95, 'bob' => 80, 'charlie' => 90];
$highScores = array_filter($scores, function($score) {
    return $score >= 90;
});
echo "High scores: " . print_r($highScores, true);

// Exception handling
function divide($a, $b) {
    try {
        if ($b == 0) {
            throw new Exception("Division by zero");
        }
        $result = $a / $b;
        return $result;
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
        return null;
    } finally {
        echo "Division attempt completed.";
    }
}

echo divide(10, 2);
echo divide(10, 0);

// File I/O
$file = fopen("example.txt", "w");
fwrite($file, "This is a sample text.");
fwrite($file, "Written by PHP.");
fclose($file);

$content = file_get_contents("example.txt");
echo "File content:$content";

// Remove the file
unlink("example.txt");

// Namespace and use statement
namespace MyApp;

use DateTime;

$date = new DateTime();
echo "Current date and time: " . $date->format('Y-m-d H:i:s') . "\n";
?>
    `
  },
  {
    name: 'go.go',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
    language: 'go',
    displayName: 'Go',
    snippet: `package ecs

import (
    "fmt"
    "sync"
    "time"

    "github.com/google/uuid"
)

//go:generate stringer -type=ComponentType
type ComponentType int

const (
    TransformComponent ComponentType = iota
    PhysicsComponent
    RenderComponent
    CollisionComponent
    AIComponent
)

// Component represents a basic game object component
type Component interface {
    Type() ComponentType
    EntityID() uuid.UUID
}

// Transform holds position, rotation, and scale data
type Transform struct {
    entityID uuid.UUID
    Position Vector3
    Rotation Quaternion
    Scale    Vector3
    Parent   *Transform
    Children []*Transform
    dirty    bool
    mutex    sync.RWMutex
}

func (t *Transform) Type() ComponentType { return TransformComponent }
func (t *Transform) EntityID() uuid.UUID { return t.entityID }

// UpdateWorldMatrix recalculates the world transformation matrix
func (t *Transform) UpdateWorldMatrix() Matrix4 {
    t.mutex.Lock()
    defer t.mutex.Unlock()

    if !t.dirty && t.Parent == nil {
        return Matrix4Identity()
    }

    matrix := NewMatrix4FromTRS(t.Position, t.Rotation, t.Scale)
    if t.Parent != nil {
        parentMatrix := t.Parent.UpdateWorldMatrix()
        matrix = parentMatrix.Multiply(matrix)
    }

    t.dirty = false
    return matrix
}

// World represents the game world and manages all entities
type World struct {
    entities    map[uuid.UUID]map[ComponentType]Component
    systems     []System
    entityLock  sync.RWMutex
    systemLock  sync.RWMutex
    deltaTime   float32
    lastUpdate  time.Time
}

// NewWorld creates a new game world instance
func NewWorld() *World {
    return &World{
        entities:   make(map[uuid.UUID]map[ComponentType]Component),
        systems:    make([]System, 0),
        lastUpdate: time.Now(),
    }
}

// AddEntity creates a new entity and returns its ID
func (w *World) AddEntity() uuid.UUID {
    w.entityLock.Lock()
    defer w.entityLock.Unlock()

    id := uuid.New()
    w.entities[id] = make(map[ComponentType]Component)
    return id
}

// AddComponent adds a component to an entity
func (w *World) AddComponent(entityID uuid.UUID, component Component) error {
    w.entityLock.Lock()
    defer w.entityLock.Unlock()

    if _, exists := w.entities[entityID]; !exists {
        return fmt.Errorf("entity %v does not exist", entityID)
    }

    w.entities[entityID][component.Type()] = component
    return nil
}

// Update updates all systems in the world
func (w *World) Update() {
    currentTime := time.Now()
    w.deltaTime = float32(currentTime.Sub(w.lastUpdate).Seconds())
    w.lastUpdate = currentTime

    w.systemLock.RLock()
    defer w.systemLock.RUnlock()

    for _, system := range w.systems {
        system.Update(w)
    }
}

// Query returns all entities that have the specified component types
func (w *World) Query(types ...ComponentType) []uuid.UUID {
    w.entityLock.RLock()
    defer w.entityLock.RUnlock()

    var matches []uuid.UUID
    for entityID, components := range w.entities {
        hasAll := true
        for _, t := range types {
            if _, has := components[t]; !has {
                hasAll = false
                break
            }
        }
        if hasAll {
            matches = append(matches, entityID)
        }
    }
    return matches
}

// GetComponent returns a specific component for an entity
func (w *World) GetComponent(entityID uuid.UUID, componentType ComponentType) (Component, error) {
    w.entityLock.RLock()
    defer w.entityLock.RUnlock()

    if components, exists := w.entities[entityID]; exists {
        if component, has := components[componentType]; has {
            return component, nil
        }
        return nil, fmt.Errorf("entity %v does not have component type %v", entityID, componentType)
    }
    return nil, fmt.Errorf("entity %v does not exist", entityID)
}
\`\`\`
`
  },
  {
    name: 'java.java',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    language: 'java',
    displayName: 'Java',
    snippet: `import java.util.*;
import java.io.*;
import java.util.stream.*;

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void introduce() {
        System.out.printf("Hello, my name is %s and I'm %d years old.%n", name, age);
    }

    public static Person createFromMap(Map<String, Object> data) {
        return new Person((String) data.get("name"), (Integer) data.get("age"));
    }
}

interface Greetable {
    void greet();
}

class Employee extends Person implements Greetable {
    private String position;

    public Employee(String name, int age, String position) {
        super(name, age);
        this.position = position;
    }

    @Override
    public void introduce() {
        super.introduce();
        System.out.printf("I work as a %s.%n", position);
    }

    @Override
    public void greet() {
        System.out.printf("Hello, %s!%n", name);
    }
}

public class Main {
    public static void main(String[] args) {
        // Create instances
        Person person = new Person("Alice", 30);
        Employee employee = new Employee("Bob", 35, "Developer");

        // Method calls
        person.introduce();
        employee.introduce();
        employee.greet();

        // List and iteration
        List<Map<String, Object>> people = Arrays.asList(
            Map.of("name", "Charlie", "age", 25),
            Map.of("name", "David", "age", 40),
            Map.of("name", "Eve", "age", 22)
        );

        people.stream()
        .map(Person::createFromMap)
        .forEach(Person::introduce);

    // Map manipulation
    Map<String, Integer> scores = Map.of("alice", 95, "bob", 80, "charlie", 90);
    Map<String, Integer> highScores = scores.entrySet().stream()
        .filter(entry -> entry.getValue() >= 90)
        .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
    System.out.println("High scores: " + highScores);

    // Exception handling
    try {
        System.out.println(divide(10, 2));
        System.out.println(divide(10, 0));
    } catch (ArithmeticException e) {
        System.out.println("Error: " + e.getMessage());
    } finally {
        System.out.println("Division attempt completed.");
    }

    // File I/O
    try {
        FileWriter writer = new FileWriter("example.txt");
        writer.write("This is a sample text.\n");
        writer.write("Written by Java.");
        writer.close();

        BufferedReader reader = new BufferedReader(new FileReader("example.txt"));
        System.out.println("File content:");
        reader.lines().forEach(System.out::println);
        reader.close();

        // Remove the file
        new File("example.txt").delete();
    } catch (IOException e) {
        System.out.println("An error occurred: " + e.getMessage());
    }

    // Multithreading
    Runnable task = () -> {
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + " is running");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(threadName + " finished");
    };

    for (int i = 0; i < 3; i++) {
        new Thread(task).start();
    }
}

public static double divide(int a, int b) {
    if (b == 0) {
        throw new ArithmeticException("Division by zero");
    }
    return (double) a / b;
}
} 
`
  },
  {
    name: 'csharp.cs',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    language: 'csharp',
    displayName: 'C#',
    snippet: `using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace Trading.Infrastructure.Cache
{
    /// <summary>
    /// Provides a thread-safe, distributed caching mechanism with support for 
    /// automatic expiration and custom eviction policies.
    /// </summary>
    /// <typeparam name="TKey">The type of the cache key.</typeparam>
    /// <typeparam name="TValue">The type of the cached value.</typeparam>
    public sealed class DistributedCache<TKey, TValue> : IDisposable where TKey : notnull
    {
        private readonly ILogger<DistributedCache<TKey, TValue>> _logger;
        private readonly ConcurrentDictionary<TKey, CacheEntry<TValue>> _cache;
        private readonly CancellationTokenSource _cleanupTokenSource;
        private readonly Task _cleanupTask;
        private readonly TimeSpan _defaultExpiration;
        private readonly int _maxSize;

        public DistributedCache(
            ILogger<DistributedCache<TKey, TValue>> logger,
            TimeSpan? defaultExpiration = null,
            int maxSize = 1000)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _cache = new ConcurrentDictionary<TKey, CacheEntry<TValue>>();
            _cleanupTokenSource = new CancellationTokenSource();
            _defaultExpiration = defaultExpiration ?? TimeSpan.FromHours(1);
            _maxSize = maxSize;

            _cleanupTask = Task.Run(async () => await CleanupLoop(_cleanupTokenSource.Token));
        }

        public async Task<TValue?> GetOrAddAsync(
            TKey key,
            Func<Task<TValue>> valueFactory,
            TimeSpan? expiration = null)
        {
            if (_cache.TryGetValue(key, out var entry) && !entry.IsExpired)
            {
                _logger.LogDebug("Cache hit for key: {Key}", key);
                return entry.Value;
            }

            _logger.LogDebug("Cache miss for key: {Key}", key);
            var value = await valueFactory();
            await SetAsync(key, value, expiration);
            return value;
        }

        public async Task SetAsync(TKey key, TValue value, TimeSpan? expiration = null)
        {
            var entry = new CacheEntry<TValue>
            {
                Value = value,
                ExpiresAt = DateTimeOffset.UtcNow.Add(expiration ?? _defaultExpiration)
            };

            if (_cache.Count >= _maxSize)
            {
                await EvictOldestEntryAsync();
            }

            _cache.AddOrUpdate(key, entry, (_, _) => entry);
            _logger.LogDebug("Added/updated cache entry for key: {Key}", key);
        }

        private async Task CleanupLoop(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    var expiredKeys = _cache
                        .Where(kvp => kvp.Value.IsExpired)
                        .Select(kvp => kvp.Key)
                        .ToList();

                    foreach (var key in expiredKeys)
                    {
                        _cache.TryRemove(key, out _);
                        _logger.LogDebug("Removed expired cache entry for key: {Key}", key);
                    }

                    await Task.Delay(TimeSpan.FromMinutes(1), cancellationToken);
                }
                catch (OperationCanceledException)
                {
                    break;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error during cache cleanup");
                }
            }
        }

        private async Task EvictOldestEntryAsync()
        {
            var oldestEntry = _cache
                .OrderBy(kvp => kvp.Value.ExpiresAt)
                .FirstOrDefault();

            if (oldestEntry.Key != null)
            {
                _cache.TryRemove(oldestEntry.Key, out _);
                _logger.LogDebug("Evicted oldest cache entry for key: {Key}", oldestEntry.Key);
            }

            await Task.CompletedTask;
        }

        public void Dispose()
        {
            _cleanupTokenSource.Cancel();
            try
            {
                _cleanupTask.Wait(TimeSpan.FromSeconds(5));
            }
            catch (AggregateException ex) when (ex.InnerException is OperationCanceledException)
            {
                // Expected when canceling the cleanup task
            }
            _cleanupTokenSource.Dispose();
        }
    }

    public class CacheEntry<T>
    {
        public required T Value { get; init; }
        public required DateTimeOffset ExpiresAt { get; init; }
        public bool IsExpired => DateTimeOffset.UtcNow >= ExpiresAt;
    }
}`
  },
  {
    name: 'python.py',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    language: 'python',
    displayName: 'Python',
    snippet: `from __future__ import annotations
from typing import TypeVar, Generic, Optional, Dict, List, Tuple, AsyncIterator
from dataclasses import dataclass, field
from datetime import datetime, timezone
import asyncio
import logging
import functools
from abc import ABC, abstractmethod

T = TypeVar('T')
K = TypeVar('K')
V = TypeVar('V')

logger = logging.getLogger(__name__)

class CacheException(Exception):
    """Base exception for cache-related errors."""
    pass

class InvalidKeyError(CacheException):
    """Raised when a cache key is invalid."""
    pass

@dataclass
class CacheStats:
    hits: int = 0
    misses: int = 0
    evictions: int = 0
    total_items: int = 0
    last_eviction: Optional[datetime] = None

    @property
    def hit_rate(self) -> float:
        total = self.hits + self.misses
        return self.hits / total if total > 0 else 0.0

class CachePolicy(ABC):
    @abstractmethod
    async def should_evict(self, key: K, value: V) -> bool:
        """Determine if an item should be evicted."""
        pass

class TTLPolicy(CachePolicy, Generic[K, V]):
    def __init__(self, ttl_seconds: int) -> None:
        self.ttl_seconds = ttl_seconds
        self._access_times: Dict[K, datetime] = {}

    async def should_evict(self, key: K, value: V) -> bool:
        last_access = self._access_times.get(key)
        if last_access is None:
            return False
        
        now = datetime.now(timezone.utc)
        return (now - last_access).total_seconds() > self.ttl_seconds

    def update_access(self, key: K) -> None:
        self._access_times[key] = datetime.now(timezone.utc)

class DistributedCache(Generic[K, V]):
    def __init__(
        self,
        max_size: int = 1000,
        policy: Optional[CachePolicy[K, V]] = None
    ) -> None:
        self._cache: Dict[K, V] = {}
        self._max_size = max_size
        self._policy = policy or TTLPolicy(ttl_seconds=3600)
        self._stats = CacheStats()
        self._lock = asyncio.Lock()
        self._background_task: Optional[asyncio.Task] = None

    @property
    def stats(self) -> CacheStats:
        return self._stats

    async def __aenter__(self) -> DistributedCache[K, V]:
        self._background_task = asyncio.create_task(self._maintenance_loop())
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb) -> None:
        if self._background_task:
            self._background_task.cancel()
            try:
                await self._background_task
            except asyncio.CancelledError:
                pass

    def __len__(self) -> int:
        return len(self._cache)

    async def _maintenance_loop(self) -> None:
        while True:
            try:
                await self._evict_expired()
                await asyncio.sleep(60)  # Run maintenance every minute
            except asyncio.CancelledError:
                break
            except Exception as e:
                logger.error(f"Error in maintenance loop: {e}", exc_info=True)
                await asyncio.sleep(5)  # Back off on error

    async def _evict_expired(self) -> None:
        async with self._lock:
            keys_to_evict = []
            for key, value in self._cache.items():
                if await self._policy.should_evict(key, value):
                    keys_to_evict.append(key)
            
            for key in keys_to_evict:
                del self._cache[key]
                self._stats.evictions += 1
                self._stats.total_items -= 1
                self._stats.last_eviction = datetime.now(timezone.utc)

    async def get(self, key: K) -> Optional[V]:
        if not isinstance(key, (str, int, float, bool)):
            raise InvalidKeyError(f"Invalid key type: {type(key)}")

        async with self._lock:
            if key in self._cache:
                self._stats.hits += 1
                if isinstance(self._policy, TTLPolicy):
                    self._policy.update_access(key)
                return self._cache[key]
            
            self._stats.misses += 1
            return None

    async def put(self, key: K, value: V) -> None:
        async with self._lock:
            if len(self._cache) >= self._max_size:
                # Evict oldest item if we're at capacity
                oldest_key = min(
                    self._cache.keys(),
                    key=lambda k: self._policy._access_times.get(k, datetime.min.replace(tzinfo=timezone.utc))
                    if isinstance(self._policy, TTLPolicy) else 0
                )
                del self._cache[oldest_key]
                self._stats.evictions += 1
                self._stats.total_items -= 1
                self._stats.last_eviction = datetime.now(timezone.utc)

            self._cache[key] = value
            self._stats.total_items += 1
            if isinstance(self._policy, TTLPolicy):
                self._policy.update_access(key)

    async def items(self) -> AsyncIterator[Tuple[K, V]]:
        async with self._lock:
            for key, value in self._cache.items():
                if not await self._policy.should_evict(key, value):
                    yield key, value

def cache_decorator(
    ttl_seconds: int = 3600,
    max_size: int = 1000
) -> callable:
    def decorator(func):
        cache = DistributedCache(max_size=max_size, policy=TTLPolicy(ttl_seconds))
        
        @functools.wraps(func)
        async def wrapper(*args, **kwargs):
            # Create a cache key from the function arguments
            key = f"{func.__name__}:{hash(str(args) + str(kwargs))}"
            
            # Try to get the cached result
            result = await cache.get(key)
            if result is not None:
                return result
            
            # Compute and cache the result
            result = await func(*args, **kwargs)
            await cache.put(key, result)
            return result
            
        return wrapper
    return decorator

# Example usage
@cache_decorator(ttl_seconds=300, max_size=100)
async def fetch_user_data(user_id: int) -> Dict[str, any]:
    # Simulate API call
    await asyncio.sleep(1)
    return {
        "id": user_id,
        "name": f"User {user_id}",
        "last_active": datetime.now(timezone.utc)
    }`
  },
  {
    name: 'rust.rs',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
    language: 'rust',
    displayName: 'Rust',
    snippet: `#![allow(unused_imports)]
#![feature(generic_associated_types)]

use std::{
    collections::{HashMap, HashSet},
    sync::{Arc, Mutex},
    time::{Duration, SystemTime},
};

use serde::{Deserialize, Serialize};
use tokio::sync::RwLock;
use uuid::Uuid;

/// Represents the status of an order in the e-commerce system
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum OrderStatus {
    Pending,
    Confirmed,
    Processing,
    Shipped,
    Delivered,
    Cancelled,
}

/// Configuration for the inventory management system
#[derive(Debug, Serialize, Deserialize)]
pub struct InventoryConfig {
    pub low_stock_threshold: u32,
    pub reorder_point: u32,
    pub max_stock_level: u32,
}

/// Represents a product in the e-commerce system
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Product {
    id: Uuid,
    name: String,
    description: Option<String>,
    price: Decimal,
    stock: i32,
    categories: HashSet<String>,
    attributes: HashMap<String, String>,
    created_at: SystemTime,
    updated_at: SystemTime,
}

impl Product {
    pub fn new<S: Into<String>>(name: S, price: Decimal) -> Self {
        let now = SystemTime::now();
        Self {
            id: Uuid::new_v4(),
            name: name.into(),
            description: None,
            price,
            stock: 0,
            categories: HashSet::new(),
            attributes: HashMap::new(),
            created_at: now,
            updated_at: now,
        }
    }

    pub fn with_stock(mut self, stock: i32) -> Self {
        self.stock = stock;
        self
    }

    pub fn add_category<S: Into<String>>(&mut self, category: S) -> bool {
        self.categories.insert(category.into())
    }

    pub fn set_attribute<K, V>(&mut self, key: K, value: V) -> Option<String>
    where
        K: Into<String>,
        V: Into<String>,
    {
        self.attributes.insert(key.into(), value.into())
    }
}

/// Trait for inventory management operations
#[async_trait::async_trait]
pub trait InventoryManager: Send + Sync + 'static {
    type Error: std::error::Error + Send + Sync + 'static;

    async fn get_stock_level(&self, product_id: Uuid) -> Result<i32, Self::Error>;
    async fn update_stock(&self, product_id: Uuid, quantity: i32) -> Result<(), Self::Error>;
    async fn reserve_stock(&self, product_id: Uuid, quantity: i32) -> Result<bool, Self::Error>;
}

/// Implementation of the inventory manager using a database
pub struct DatabaseInventoryManager<DB> {
    db: Arc<DB>,
    config: Arc<InventoryConfig>,
    cache: Arc<RwLock<HashMap<Uuid, i32>>>,
}

impl<DB> DatabaseInventoryManager<DB>
where
    DB: Database + Send + Sync + 'static,
{
    pub fn new(db: DB, config: InventoryConfig) -> Self {
        Self {
            db: Arc::new(db),
            config: Arc::new(config),
            cache: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    async fn refresh_cache(&self, product_id: Uuid) -> Result<(), DB::Error> {
        let stock = self.db.get_product_stock(product_id).await?;
        let mut cache = self.cache.write().await;
        cache.insert(product_id, stock);
        Ok(())
    }
}

#[async_trait::async_trait]
impl<DB> InventoryManager for DatabaseInventoryManager<DB>
where
    DB: Database + Send + Sync + 'static,
{
    type Error = DB::Error;

    async fn get_stock_level(&self, product_id: Uuid) -> Result<i32, Self::Error> {
        let cache = self.cache.read().await;
        match cache.get(&product_id) {
            Some(&stock) => Ok(stock),
            None => {
                drop(cache);
                self.refresh_cache(product_id).await?;
                Ok(self.cache.read().await.get(&product_id).copied().unwrap_or(0))
            }
        }
    }

    async fn update_stock(&self, product_id: Uuid, quantity: i32) -> Result<(), Self::Error> {
        self.db.update_product_stock(product_id, quantity).await?;
        self.refresh_cache(product_id).await
    }

    async fn reserve_stock(&self, product_id: Uuid, quantity: i32) -> Result<bool, Self::Error> {
        let current_stock = self.get_stock_level(product_id).await?;
        if current_stock >= quantity {
            self.update_stock(product_id, current_stock - quantity).await?;
            Ok(true)
        } else {
            Ok(false)
        }
    }
}`
  },
  {
    name: 'swift.swift',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
    language: 'swift',
    displayName: 'Swift',
    snippet: `import Foundation
import Combine
import SwiftUI

// MARK: - Product Domain Models
@frozen public enum ProductCategory: String, Codable, CaseIterable {
    case electronics = "Electronics"
    case clothing = "Clothing"
    case books = "Books"
    case homeAndGarden = "Home & Garden"
    
    var taxRate: Decimal {
        switch self {
        case .electronics: return 0.08
        case .clothing: return 0.05
        case .books: return 0.0
        case .homeAndGarden: return 0.06
        }
    }
}

public protocol InventoryManaging: AnyObject {
    associatedtype Error: Swift.Error
    
    func getStockLevel(for productId: UUID) async throws -> Int
    func updateStock(productId: UUID, quantity: Int) async throws
    func reserveStock(productId: UUID, quantity: Int) async throws -> Bool
}

actor InventoryManager: InventoryManaging {
    typealias Error = InventoryError
    
    private let database: Database
    private let cache: NSCache<NSString, NSNumber>
    private var lowStockPublisher: PassthroughSubject<UUID, Never>
    
    init(database: Database) {
        self.database = database
        self.cache = NSCache<NSString, NSNumber>()
        self.lowStockPublisher = PassthroughSubject<UUID, Never>()
    }
    
    func getStockLevel(for productId: UUID) async throws -> Int {
        if let cached = cache.object(forKey: productId.uuidString as NSString) {
            return cached.intValue
        }
        
        let stock = try await database.getProductStock(productId: productId)
        cache.setObject(NSNumber(value: stock), forKey: productId.uuidString as NSString)
        return stock
    }
    
    @discardableResult
    func updateStock(productId: UUID, quantity: Int) async throws -> Int {
        guard quantity >= 0 else {
            throw InventoryError.invalidQuantity(quantity)
        }
        
        let newStock = try await database.updateProductStock(
            productId: productId,
            quantity: quantity
        )
        
        cache.setObject(NSNumber(value: newStock), forKey: productId.uuidString as NSString)
        
        if newStock < Constants.lowStockThreshold {
            lowStockPublisher.send(productId)
        }
        
        return newStock
    }
    
    func reserveStock(productId: UUID, quantity: Int) async throws -> Bool {
        guard quantity > 0 else {
            throw InventoryError.invalidQuantity(quantity)
        }
        
        let currentStock = try await getStockLevel(for: productId)
        guard currentStock >= quantity else { return false }
        
        try await updateStock(productId: productId, quantity: currentStock - quantity)
        return true
    }
}

// MARK: - View Models
@MainActor final class ProductViewModel: ObservableObject {
    @Published private(set) var product: Product
    @Published private(set) var stockLevel: Int?
    @Published private(set) var isLoading = false
    @Published private(set) var error: Error?
    
    private let inventoryManager: any InventoryManaging
    private var cancellables = Set<AnyCancellable>()
    
    init(product: Product, inventoryManager: any InventoryManaging) {
        self.product = product
        self.inventoryManager = inventoryManager
        
        Task { await loadStockLevel() }
    }
    
    func loadStockLevel() async {
        isLoading = true
        defer { isLoading = false }
        
        do {
            stockLevel = try await inventoryManager.getStockLevel(for: product.id)
        } catch {
            self.error = error
        }
    }
}

// MARK: - Views
struct ProductDetailView: View {
    @StateObject private var viewModel: ProductViewModel
    @Environment(\\.colorScheme) private var colorScheme
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                AsyncImage(url: viewModel.product.imageURL) { image in
                    image
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                } placeholder: {
                    ProgressView()
                }
                .frame(maxHeight: 300)
                
                Group {
                    Text(viewModel.product.name)
                        .font(.title)
                        .fontWeight(.bold)
                    
                    Text(viewModel.product.formattedPrice)
                        .font(.title2)
                        .foregroundColor(.accentColor)
                    
                    if let stockLevel = viewModel.stockLevel {
                        StockLevelView(level: stockLevel)
                    }
                }
                .padding(.horizontal)
            }
        }
        .navigationTitle("Product Details")
        .alert("Error", isPresented: .constant(viewModel.error != nil)) {
            Button("OK") {
                viewModel.error = nil
            }
        } message: {
            Text(viewModel.error?.localizedDescription ?? "")
        }
    }
} `
  },
  //   {
  //     name: 'cpp.cpp',
  //     isFolder: false,
  //     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  //     language: 'cpp',
  //     displayName: 'C++',
  //     snippet: `#include <memory>
  // #include <variant>
  // #include <optional>
  // #include <string_view>
  // #include <unordered_map>

  // namespace trading::engine {

  // template<typename T>
  // class ThreadSafeOrderBook {
  // private:
  //     struct OrderInfo {
  //         std::string_view client_id;
  //         double price;
  //         size_t quantity;
  //         std::chrono::system_clock::time_point timestamp;
  //         bool is_buy;
  //     };

  //     using OrderId = uint64_t;
  //     using OrderPtr = std::shared_ptr<OrderInfo>;

  //     struct OrderComparator {
  //         bool operator()(const OrderPtr& lhs, const OrderPtr& rhs) const {
  //             return lhs->price < rhs->price ||
  //                    (lhs->price == rhs->price &&
  //                     lhs->timestamp < rhs->timestamp);
  //         }
  //     };

  //     mutable std::shared_mutex book_mutex;
  //     std::map<OrderId, OrderPtr> orders;
  //     std::multiset<OrderPtr, OrderComparator> buy_orders;
  //     std::multiset<OrderPtr, OrderComparator> sell_orders;

  // public:
  //     extern "C++" OrderId submit_order(
  //         std::string_view client_id,
  //         double price,
  //         size_t quantity,
  //         bool is_buy
  //     ) {
  //         auto order = std::make_shared<OrderInfo>(
  //             OrderInfo{client_id, price, quantity,
  //                      std::chrono::system_clock::now(), is_buy}
  //         );

  //         std::unique_lock<std::shared_mutex> lock(book_mutex);
  //         OrderId order_id = generate_order_id();
  //         orders[order_id] = order;

  //         if (is_buy) {
  //             buy_orders.insert(order);
  //             match_buy_order(order);
  //         } else {
  //             sell_orders.insert(order);
  //             match_sell_order(order);
  //         }

  //         return order_id;
  //     }

  //     std::optional<T> cancel_order(OrderId order_id) {
  //         std::unique_lock<std::shared_mutex> lock(book_mutex);
  //         auto it = orders.find(order_id);
  //         if (it == orders.end()) return std::nullopt;

  //         auto order = it->second;
  //         if (order->is_buy) {
  //             buy_orders.erase(order);
  //         } else {
  //             sell_orders.erase(order);
  //         }

  //         orders.erase(it);
  //         return T{order->price, order->quantity};
  //     }

  // private:
  //     void match_buy_order(const OrderPtr& buy_order) {
  //         auto sell_it = sell_orders.begin();
  //         while (sell_it != sell_orders.end() &&
  //                (*sell_it)->price <= buy_order->price) {
  //             // Match logic here
  //             execute_trade(buy_order, *sell_it);
  //             sell_it = sell_orders.erase(sell_it);
  //         }
  //     }

  //     void match_sell_order(const OrderPtr& sell_order) {
  //         auto buy_it = buy_orders.rbegin();
  //         while (buy_it != buy_orders.rend() &&
  //                (*buy_it)->price >= sell_order->price) {
  //             // Match logic here
  //             execute_trade(*buy_it, sell_order);
  //             buy_it = std::make_reverse_iterator(
  //                 buy_orders.erase(std::next(buy_it).base())
  //             );
  //         }
  //     }

  //     void execute_trade(const OrderPtr& buy_order,
  //                       const OrderPtr& sell_order) {
  //         // Trade execution logic
  //     }

  //     static OrderId generate_order_id() {
  //         static std::atomic<OrderId> next_id{1};
  //         return next_id++;
  //     }
  // };

  // } // namespace trading::engine`
  //   },
  {
    name: 'c.c',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    language: 'c',
    displayName: 'C',
    snippet: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <errno.h>
#include <pthread.h>
#include <sys/mman.h>
#include <unistd.h>

#define MAX_BUFFER_SIZE 4096
#define ERROR_CHECK(x) do { 
    if (!(x)) { 
        fprintf(stderr, "Error at %s:%d\n", __FILE__, __LINE__); 
        exit(EXIT_FAILURE); 
    } 
} while (0)

typedef struct {
    size_t size;
    size_t capacity;
    pthread_mutex_t lock;
    void* data;
} SharedMemoryBuffer;

typedef struct {
    char* key;
    void* value;
    size_t value_size;
} CacheEntry;

extern void memory_barrier(void);

static SharedMemoryBuffer* create_shared_buffer(size_t initial_capacity) {
    SharedMemoryBuffer* buffer = mmap(
        NULL,
        sizeof(SharedMemoryBuffer) + initial_capacity,
        PROT_READ | PROT_WRITE,
        MAP_SHARED | MAP_ANONYMOUS,
        -1,
        0
    );
    
    if (buffer == MAP_FAILED) {
        perror("mmap failed");
        return NULL;
    }

    pthread_mutexattr_t attr;
    pthread_mutexattr_init(&attr);
    pthread_mutexattr_setpshared(&attr, PTHREAD_PROCESS_SHARED);
    pthread_mutex_init(&buffer->lock, &attr);
    pthread_mutexattr_destroy(&attr);

    buffer->size = 0;
    buffer->capacity = initial_capacity;
    buffer->data = (void*)(buffer + 1);

    return buffer;
}

static int resize_buffer(SharedMemoryBuffer* buffer, size_t new_capacity) {
    void* new_mapping = mremap(
        buffer,
        sizeof(SharedMemoryBuffer) + buffer->capacity,
        sizeof(SharedMemoryBuffer) + new_capacity,
        MREMAP_MAYMOVE
    );

    if (new_mapping == MAP_FAILED) {
        return -1;
    }

    buffer = new_mapping;
    buffer->capacity = new_capacity;
    buffer->data = (void*)(buffer + 1);
    return 0;
}

void* allocate_from_buffer(SharedMemoryBuffer* buffer, size_t size) {
    pthread_mutex_lock(&buffer->lock);

    if (buffer->size + size > buffer->capacity) {
        size_t new_capacity = buffer->capacity * 2;
        while (buffer->size + size > new_capacity) {
            new_capacity *= 2;
        }
        
        if (resize_buffer(buffer, new_capacity) != 0) {
            pthread_mutex_unlock(&buffer->lock);
            return NULL;
        }
    }

    void* ptr = (char*)buffer->data + buffer->size;
    buffer->size += size;
    
    memory_barrier();
    pthread_mutex_unlock(&buffer->lock);
    
    return ptr;
}

int main(void) {
    SharedMemoryBuffer* buffer = create_shared_buffer(MAX_BUFFER_SIZE);
    ERROR_CHECK(buffer != NULL);

    pid_t pid = fork();
    ERROR_CHECK(pid != -1);

    if (pid == 0) {
        // Child process
        CacheEntry* entry = allocate_from_buffer(buffer, sizeof(CacheEntry));
        ERROR_CHECK(entry != NULL);

        entry->key = "example_key";
        entry->value = "example_value";
        entry->value_size = strlen(entry->value) + 1;

        exit(EXIT_SUCCESS);
    } else {
        // Parent process
        int status;
        waitpid(pid, &status, 0);
        
        if (WIFEXITED(status) && WEXITSTATUS(status) == EXIT_SUCCESS) {
            CacheEntry* entry = buffer->data;
            printf("Key: %s, Value: %s\n", entry->key, (char*)entry->value);
        }

        munmap(buffer, sizeof(SharedMemoryBuffer) + buffer->capacity);
    }

    return EXIT_SUCCESS;
}`
  },
  {
    name: 'lua.lua',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg',
    language: 'lua',
    displayName: 'Lua',
    snippet: `-- Neovim Plugin: Advanced Buffer Manager
local api = vim.api
local fn = vim.fn
local cmd = vim.cmd
local opt = vim.opt

---@class BufferConfig
---@field auto_hide boolean
---@field pinned_buffers table<number, boolean>
---@field excluded_filetypes string[]
---@field sort_mode "mru" | "name" | "directory"
local default_config = {
    auto_hide = true,
    pinned_buffers = {},
    excluded_filetypes = { "NvimTree", "qf", "help" },
    sort_mode = "mru"
}

---@class BufferManager
---@field private config BufferConfig
---@field private mru_list number[]
---@field private is_visible boolean
local BufferManager = {}
BufferManager.__index = BufferManager

function BufferManager.new(user_config)
    local self = setmetatable({}, BufferManager)
    self.config = vim.tbl_deep_extend("force", default_config, user_config or {})
    self.mru_list = {}
    self.is_visible = false
    return self
end

function BufferManager:setup()
    -- Create autocommands for buffer tracking
    local augroup = api.nvim_create_augroup("BufferManager", { clear = true })
    
    api.nvim_create_autocmd("BufEnter", {
        group = augroup,
        callback = function(args)
            self:update_mru(args.buf)
        end
    })

    api.nvim_create_autocmd("BufDelete", {
        group = augroup,
        callback = function(args)
            self:remove_from_mru(args.buf)
        end
    })

    -- Register buffer management commands
    api.nvim_create_user_command("BufferToggle", function()
        self:toggle_visibility()
    end, {})

    api.nvim_create_user_command("BufferPin", function()
        self:pin_current_buffer()
    end, {})
end

function BufferManager:update_mru(bufnr)
    -- Remove buffer from current position
    self.mru_list = vim.tbl_filter(function(buf)
        return buf ~= bufnr
    end, self.mru_list)
    
    -- Add to front if it's a valid buffer
    if api.nvim_buf_is_valid(bufnr) and self:is_manageable_buffer(bufnr) then
        table.insert(self.mru_list, 1, bufnr)
    end
end

function BufferManager:is_manageable_buffer(bufnr)
    local ft = api.nvim_buf_get_option(bufnr, "filetype")
    return not vim.tbl_contains(self.config.excluded_filetypes, ft)
end

function BufferManager:create_buffer_list()
    local buffers = {}
    
    for _, bufnr in ipairs(self:get_sorted_buffers()) do
        if api.nvim_buf_is_valid(bufnr) then
            local name = api.nvim_buf_get_name(bufnr)
            local modified = api.nvim_buf_get_option(bufnr, "modified")
            local icon = self.config.pinned_buffers[bufnr] and "📌" or " "
            
            table.insert(buffers, {
                id = bufnr,
                name = fn.fnamemodify(name, ":t"),
                path = fn.fnamemodify(name, ":~:."),
                modified = modified,
                icon = icon
            })
        end
    end
    
    return buffers
end

function BufferManager:get_sorted_buffers()
    if self.config.sort_mode == "mru" then
        return self.mru_list
    end
    
    local buffers = vim.tbl_filter(function(bufnr)
        return api.nvim_buf_is_valid(bufnr) and self:is_manageable_buffer(bufnr)
    end, api.nvim_list_bufs())
    
    if self.config.sort_mode == "name" then
        table.sort(buffers, function(a, b)
            return api.nvim_buf_get_name(a) < api.nvim_buf_get_name(b)
        end)
    end
    
    return buffers
end

return BufferManager`
  },
  {
    name: 'sql.sql',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    language: 'sql',
    displayName: 'SQL',
    snippet: `
-- Create tables
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    department_id INT,
    salary DECIMAL(10, 2)
);

CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    location VARCHAR(50)
);

-- Insert sample data
INSERT INTO departments (id, name, location) VALUES
(1, 'HR', 'New York'),
(2, 'IT', 'San Francisco'),
(3, 'Finance', 'Chicago');

INSERT INTO employees (id, name, age, department_id, salary) VALUES
(1, 'John Doe', 30, 2, 75000.00),
(2, 'Jane Smith', 35, 1, 65000.00),
(3, 'Bob Johnson', 28, 2, 80000.00),
(4, 'Alice Brown', 40, 3, 90000.00),
(5, 'Charlie Davis', 45, 1, 70000.00);

-- Basic SELECT query
SELECT * FROM employees;

-- JOIN query
SELECT e.name, e.age, d.name AS department, d.location
FROM employees e
JOIN departments d ON e.department_id = d.id;

-- Aggregate functions and GROUP BY
SELECT d.name AS department, AVG(e.salary) AS avg_salary, COUNT(*) AS employee_count
FROM employees e
JOIN departments d ON e.department_id = d.id
GROUP BY d.name;

-- Subquery
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- UPDATE statement
UPDATE employees
SET salary = salary * 1.1
WHERE department_id = (SELECT id FROM departments WHERE name = 'IT');

-- DELETE statement
DELETE FROM employees
WHERE age > 50;

-- CREATE VIEW
CREATE VIEW employee_details AS
SELECT e.id, e.name, e.age, d.name AS department, e.salary
FROM employees e
JOIN departments d ON e.department_id = d.id;

-- Query the view
SELECT * FROM employee_details;

-- CREATE PROCEDURE
DELIMITER //
CREATE PROCEDURE give_raise(IN dept_name VARCHAR(50), IN raise_percentage DECIMAL(5,2))
BEGIN
    UPDATE employees e
    JOIN departments d ON e.department_id = d.id
    SET e.salary = e.salary * (1 + raise_percentage / 100)
    WHERE d.name = dept_name;
END //
DELIMITER ;

-- Call the procedure
CALL give_raise('IT', 5.00);

-- CREATE TRIGGER
DELIMITER //
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.age < 18 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Employee must be at least 18 years old';
    END IF;
END //
DELIMITER ;

-- This INSERT will fail due to the trigger
INSERT INTO employees (id, name, age, department_id, salary)
VALUES (6, 'Young Employee', 16, 1, 30000.00);

-- Advanced SQL Example: E-commerce Analytics System

-- Create a materialized view for real-time sales analytics
CREATE MATERIALIZED VIEW sales_analytics
REFRESH ON COMMIT
AS
WITH daily_sales AS (
    SELECT 
        DATE_TRUNC('day', o.created_at) AS sale_date,
        p.category_id,
        p.supplier_id,
        SUM(oi.quantity) AS units_sold,
        SUM(oi.quantity * oi.unit_price) AS gross_revenue,
        SUM(oi.quantity * oi.unit_price * (1 - COALESCE(oi.discount, 0))) AS net_revenue
    FROM orders o
    INNER JOIN order_items oi ON o.order_id = oi.order_id
    INNER JOIN products p ON oi.product_id = p.product_id
    WHERE o.status = 'completed'
    GROUP BY DATE_TRUNC('day', o.created_at), p.category_id, p.supplier_id
),
supplier_metrics AS (
    SELECT 
        s.supplier_id,
        s.supplier_name,
        COUNT(DISTINCT p.product_id) AS active_products,
        AVG(p.stock_level) AS avg_stock_level,
        PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY p.price) AS median_price
    FROM suppliers s
    LEFT JOIN products p ON s.supplier_id = p.supplier_id
    WHERE p.status = 'active'
    GROUP BY s.supplier_id, s.supplier_name
)
SELECT 
    ds.sale_date,
    c.category_name,
    sm.supplier_name,
    ds.units_sold,
    ds.gross_revenue,
    ds.net_revenue,
    ROUND(((ds.gross_revenue - ds.net_revenue) / NULLIF(ds.gross_revenue, 0)) * 100, 2) AS discount_percentage,
    sm.active_products,
    sm.avg_stock_level,
    sm.median_price,
    LAG(ds.net_revenue) OVER (
        PARTITION BY c.category_id, sm.supplier_id 
        ORDER BY ds.sale_date
    ) AS prev_day_revenue,
    ROUND(
        (ds.net_revenue - LAG(ds.net_revenue) OVER (
            PARTITION BY c.category_id, sm.supplier_id 
            ORDER BY ds.sale_date
        )) / NULLIF(LAG(ds.net_revenue) OVER (
            PARTITION BY c.category_id, sm.supplier_id 
            ORDER BY ds.sale_date
        ), 0) * 100,
        2
    ) AS revenue_growth_percent
FROM daily_sales ds
INNER JOIN categories c ON ds.category_id = c.category_id
INNER JOIN supplier_metrics sm ON ds.supplier_id = sm.supplier_id;

-- Create an index to optimize the materialized view refresh
CREATE INDEX idx_sales_analytics_composite 
ON sales_analytics (sale_date, category_name, supplier_name);

-- Create a function to analyze customer purchasing patterns
CREATE OR REPLACE FUNCTION analyze_customer_patterns(
    p_start_date DATE,
    p_end_date DATE,
    p_min_purchases INTEGER DEFAULT 3
)
RETURNS TABLE (
    customer_id INTEGER,
    customer_name TEXT,
    total_purchases NUMERIC,
    avg_order_value NUMERIC,
    favorite_category TEXT,
    purchase_frequency INTERVAL,
    churn_risk_score NUMERIC
) 
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    WITH customer_purchases AS (
        SELECT 
            c.customer_id,
            c.customer_name,
            COUNT(DISTINCT o.order_id) as purchase_count,
            AVG(o.total_amount) as avg_purchase,
            MAX(o.created_at) - MIN(o.created_at) as customer_lifetime,
            MAX(o.created_at) as last_purchase_date,
            MODE() WITHIN GROUP (ORDER BY cat.category_name) as top_category
        FROM customers c
        INNER JOIN orders o ON c.customer_id = o.customer_id
        INNER JOIN order_items oi ON o.order_id = oi.order_id
        INNER JOIN products p ON oi.product_id = p.product_id
        INNER JOIN categories cat ON p.category_id = cat.category_id
        WHERE o.created_at BETWEEN p_start_date AND p_end_date
        GROUP BY c.customer_id, c.customer_name
        HAVING COUNT(DISTINCT o.order_id) >= p_min_purchases
    )
    SELECT 
        cp.customer_id,
        cp.customer_name,
        cp.purchase_count,
        cp.avg_purchase,
        cp.top_category,
        cp.customer_lifetime / cp.purchase_count as avg_time_between_purchases,
        CASE 
            WHEN NOW() - cp.last_purchase_date > (cp.customer_lifetime / cp.purchase_count) * 2 THEN 0.8
            WHEN cp.purchase_count < 5 THEN 0.6
            WHEN cp.avg_purchase < (SELECT AVG(total_amount) FROM orders) THEN 0.4
            ELSE 0.2
        END as churn_probability
    FROM customer_purchases cp
    ORDER BY churn_probability DESC;
END;
$$;

-- Create a trigger to maintain audit logs
CREATE OR REPLACE FUNCTION audit_changes()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO audit_log (
        table_name,
        action,
        record_id,
        old_data,
        new_data,
        changed_by,
        changed_at
    ) VALUES (
        TG_TABLE_NAME,
        TG_OP,
        COALESCE(NEW.id, OLD.id),
        CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN row_to_json(OLD) ELSE NULL END,
        CASE WHEN TG_OP IN ('UPDATE', 'INSERT') THEN row_to_json(NEW) ELSE NULL END,
        current_user,
        current_timestamp
    );
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;
    `
  },
  {
    name: 'yaml.yaml',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg',
    language: 'yaml',
    displayName: 'YAML',
    snippet: `
# E-commerce Platform Configuration
---
version: 2.0.0
last_updated: 2024-03-20T15:30:00Z
environment: &env_config
  name: production
  region: us-west-2
  debug: false

# System-wide defaults
defaults: &default_settings
  currency: USD
  date_format: "YYYY-MM-DD"
  timezone: "UTC"
  cache_ttl: 3600

# Database configurations
databases:
  primary: &primary_db
    host: postgres-primary.internal
    port: 5432
    database: ecommerce
    pool:
      min_connections: 5
      max_connections: 20
      idle_timeout: 10000
    replicas:
      - <<: *primary_db
        host: postgres-replica-1.internal
        readonly: true
      - <<: *primary_db
        host: postgres-replica-2.internal
        readonly: true

# Product catalog settings
catalog:
  categories: &product_categories
    electronics:
      name: Electronics
      tax_rate: 0.08
      shipping_rules:
        domestic:
          service: express
          estimated_days: 2-3
        international:
          service: priority
          estimated_days: 5-7
    clothing:
      name: Clothing
      tax_rate: 0.05
      size_chart: &size_chart
        units: ["XS", "S", "M", "L", "XL"]
        measurements:
          chest: [86, 91, 96, 101, 106]
          waist: [71, 76, 81, 86, 91]
          hips: [89, 94, 99, 104, 109]

# Notification service configuration
notifications:
  providers:
    email:
      service: sendgrid
      settings: &email_config
        api_key: \${SENDGRID_API_KEY}
        from_email: noreply@example.com
        templates:
          order_confirmation: d-123456789
          shipping_update: d-987654321
    sms:
      service: twilio
      settings:
        account_sid: \${TWILIO_ACCOUNT_SID}
        auth_token: \${TWILIO_AUTH_TOKEN}
        from_number: "+1234567890"

# Feature flags and experiments
features:
  recommendations:
    enabled: true
    algorithm: collaborative-filtering
    weights: &algo_weights
      purchase_history: 0.5
      browsing_history: 0.3
      similar_items: 0.2
  a_b_tests:
    checkout_flow:
      enabled: true
      variants:
        - name: control
          weight: 0.5
        - name: new_design
          weight: 0.5


# Company Configuration
company:
  name: Acme Corporation
  founded: 1985
  location:
    city: New York
    country: USA

# Employee Information
employees:
  - id: 1
    name: John Doe
    position: Software Engineer
    department: Engineering
    skills:
      - Python
      - JavaScript
      - Docker
    projects:
      - name: Project A
        role: Lead Developer
      - name: Project B
        role: Contributor
  - id: 2
    name: Jane Smith
    position: Product Manager
    department: Product
    skills:
      - Agile Methodologies
      - User Research
      - Data Analysis
    projects:
      - name: Project C
        role: Project Manager

# Department Structure
departments:
  Engineering:
    head: Alice Johnson
    budget: 1000000
    teams:
      - Frontend
      - Backend
      - DevOps
  Product:
    head: Bob Williams
    budget: 750000
    teams:
      - User Experience
      - Market Research
  Marketing:
    head: Carol Brown
    budget: 500000
    teams:
      - Digital Marketing
      - Content Creation

# Project Information
projects:
  - name: Project A
    description: Develop a new mobile app
    start_date: 2023-01-15
    end_date: 2023-06-30
    status: In Progress
    team_members:
      - John Doe
      - Jane Smith
  - name: Project B
    description: Upgrade server infrastructure
    start_date: 2023-03-01
    end_date: 2023-08-31
    status: Planning
    team_members:
      - John Doe
      - Alice Johnson

# Configuration Settings
settings:
  theme:
    primary_color: '#007bff'
    secondary_color: '#6c757d'
  features:
    enable_dark_mode: true
    enable_notifications: true
  security:
    two_factor_auth: required
    password_policy:
      min_length: 12
      require_special_chars: true

# Environment Variables
env_vars: !include env.yaml

# Complex Data Types
complex_data:
  ? - key1
    - key2
  : value
  ? - key3
    - key4
  : nested_key1: nested_value1
    nested_key2: nested_value2

# Anchors and Aliases
defaults: &defaults
  adapter: postgres
  host: localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  <<: *defaults

# Multi-line Strings
description: |
  This is a long description
  that spans multiple lines.
  It can include special characters: !@#$%^&*()
  and preserve formatting.

# Custom Tags
!!python/object/apply:datetime.datetime args: [2023, 4, 26, 12, 0, 0]

    `
  },
  {
    name: 'json.json',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg',
    language: 'json',
    displayName: 'JSON',
    snippet: `{
  "name": "Product Catalog",
  "version": "2.0.0",
  "description": "E-commerce product configuration",
  "categories": {
    "electronics": {
      "name": "Electronics",
      "tax_rate": 0.08,
      "featured": true,
      "subcategories": {
        "audio": {
          "name": "Audio Equipment",
          "products": {
            "headphones": {
              "name": "Premium Wireless Headphones",
              "sku": "HDPH-001",
              "price": 299.99,
              "stock": 150,
              "specifications": {
                "battery": "30 hours",
                "connectivity": ["Bluetooth 5.0", "3.5mm jack"],
                "features": {
                  "noise_cancellation": true,
                  "water_resistant": true,
                  "foldable": true
                }
              }
            }
          }
        }
      }
    }
  },
  "settings": {
    "currency": "USD",
    "tax_included": false,
    "inventory_threshold": 10,
    "notifications": {
      "low_stock": true,
      "order_confirmation": true
    }
  }
}`
  },
  {
    name: 'bash.sh',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
    language: 'bash',
    displayName: 'Bash',
    snippet: `#!/bin/bash

# Security Audit and Monitoring Tool
# Author: Security Team
# Version: 1.0.0

set -euo pipefail
IFS=$'\n\t'

# Configuration
readonly LOG_DIR="/var/log/security-audit"
readonly REPORT_DIR="/var/reports/security"
readonly BACKUP_DIR="/var/backups/security"
readonly CONFIG_FILE="\${HOME}/.config/security-audit.conf"
readonly SLACK_WEBHOOK_URL="\${SLACK_WEBHOOK:-}"

# Color definitions
declare -r RED='\\033[0;31m'
declare -r GREEN='\\033[0;32m'
declare -r YELLOW='\\033[1;33m'
declare -r BLUE='\\033[0;34m'
declare -r NC='\\033[0m' # No Color

# Log levels
declare -r LOG_INFO="INFO"
declare -r LOG_WARN="WARN"
declare -r LOG_ERROR="ERROR"

# Function to handle script termination
cleanup() {
    local exit_code=$?
    log "$LOG_INFO" "Cleaning up temporary files..."
    rm -f /tmp/security-scan-*
    exit \${exit_code}
}

trap cleanup EXIT
trap 'trap - EXIT; cleanup; exit -1' INT TERM

# Logging function
log() {
    local level=$1
    local message=$2
    local timestamp
    timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case \${level} in
        "$LOG_INFO")  local color=$GREEN ;;
        "$LOG_WARN")  local color=$YELLOW ;;
        "$LOG_ERROR") local color=$RED ;;
        *)           local color=$NC ;;
    esac

    echo -e "\${color}[\${timestamp}] [\${level}] \${message}\${NC}" | tee -a "\${LOG_DIR}/audit.log"
}

# Function to check for root privileges
check_root() {
    if [[ \${EUID} -ne 0 ]]; then
        log "$LOG_ERROR" "This script must be run as root"
        exit 1
    fi
}

# Function to scan for known vulnerabilities
scan_vulnerabilities() {
    local target=$1
    local scan_output
    
    log "$LOG_INFO" "Starting vulnerability scan for \${target}"

    if command -v nmap &> /dev/null; then
        scan_output=$(nmap -sV --script vuln "$target" 2>&1)
        echo "\${scan_output}" > "\${REPORT_DIR}/vuln_scan_\\$(date +%Y%m%d).txt"
    else
        log "$LOG_ERROR" "nmap is not installed"
        return 1
    fi
}

# Function to monitor system logs for suspicious activity
monitor_logs() {
    local patterns=(
        "Failed password for .* from"
        "Invalid user .* from"
        "POSSIBLE BREAK-IN ATTEMPT"
        "Connection closed by authenticating user"
    )
    
    log "$LOG_INFO" "Starting log monitoring..."
    
    for pattern in "\${patterns[@]}"; do
        grep -E "\${pattern}" /var/log/auth.log | while read -r line; do
            local ip
            ip=$(echo "\${line}" | grep -oE "\b([0-9]{1,3}\\.){3}[0-9]{1,3}\b")
            if [[ -n \${ip} ]]; then
                check_ip "\${ip}"
            fi
        done
    done
}

# Function to check IP reputation
check_ip() {
    local ip=$1
    local api_key="\${ABUSEIPDB_API_KEY:-}"
    
    if [[ -z \${api_key} ]]; then
        log "$LOG_WARN" "AbuseIPDB API key not configured"
        return
    }
    
    local response
    response=$(curl -s -G https://api.abuseipdb.com/api/v2/check \
        --data-urlencode "ipAddress=\${ip}" \
        -H "Key: \${api_key}" \
        -H "Accept: application/json")
    
    local abuse_score
    abuse_score=$(echo "\${response}" | jq -r '.data.abuseConfidenceScore')
    
    if [[ \${abuse_score} -gt 80 ]]; then
        log "$LOG_ERROR" "High-risk IP detected: \${ip} (Score: \${abuse_score})"
        block_ip "\${ip}"
    fi
}

# Function to block malicious IPs
block_ip() {
    local ip=$1
    
    if ! iptables -C INPUT -s "$ip" -j DROP 2>/dev/null; then
        iptables -A INPUT -s "$ip" -j DROP
        log "$LOG_INFO" "Blocked malicious IP: \${ip}"
        
        # Send notification if Slack webhook is configured
        if [[ -n \${SLACK_WEBHOOK_URL:-} ]]; then
            notify_slack "🚫 Blocked malicious IP: \${ip}"
        fi
    fi
}

# Function to send Slack notifications
notify_slack() {
    local message=$1
    
    curl -s -X POST -H 'Content-type: application/json' \
        --data "{\\"text\\":\\"\${message}\\"}" \
        "\${SLACK_WEBHOOK_URL}"
}

# Main function
main() {
    check_root
    
    # Create necessary directories
    mkdir -p "$LOG_DIR" "$REPORT_DIR" "$BACKUP_DIR"
    
    # Load configuration if exists
    if [[ -f $CONFIG_FILE ]]; then
        source "$CONFIG_FILE"
    fi
    
    # Start monitoring in background
    monitor_logs &
    
    # Perform initial vulnerability scan
    local targets=()
    if [[ -n \${SCAN_TARGETS:-} ]]; then
        IFS=',' read -ra targets <<< "\${SCAN_TARGETS}"
    else
        # Default to scanning localhost
        targets=("localhost")
    fi
    
    for target in "\${targets[@]}"; do
        scan_vulnerabilities "\${target}"
    done
    
    # Keep script running
    while true; do
        sleep 60
    done
}

main "$@"`
  },
  {
    name: 'markdown.md',
    isFolder: false,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg',
    language: 'markdown',
    displayName: 'Markdown',
    snippet: `# E-commerce Platform Documentation
> Last updated: 2024-03-20

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture](#architecture)
3. [API Reference](#api-reference)

## Introduction

This document describes the **E-commerce Platform** architecture and implementation details. The platform is built using a _microservices architecture_ with ~~monolithic~~ distributed components.

### Key Features

* **High Availability**

  - Multi-region deployment
  - Automatic failover
  - Load balancing
* **Scalability**

  - Horizontal scaling
  - Auto-scaling groups
  - Elastic resources

#### Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Frontend | React | 18.2.0 |
| Backend | Node.js | 20.11.1 |
| Database | PostgreSQL | 16.2 |

##### Infrastructure Components
1. **API Gateway**
   \`\`\`typescript
   interface GatewayConfig {
     port: number;
     rateLimits: {
       window: string;
       max: number;
     };
   }
   \`\`\`

###### Security Considerations

* Authentication using [JWT](https://jwt.io)
* Rate limiting: \`10 requests/second\`
* [OWASP Top 10](https://owasp.org/Top10) compliance

### Code Examples

  \`\`\`rust
  #[derive(Debug, Serialize)]
  pub struct Product {
    id: Uuid,
    name: String,
    price: Decimal,
    stock: i32,
  }
  impl Product {
    pub fn new(name: String, price: Decimal) -> Self {
      Self {
        id: Uuid::new_v4(),
        name,
        price,
        stock: 0,
      }
    }
  }
  \`\`\`

### API Endpoints

The following endpoints are available:

  \`\`\`http
  GET /api/v1/products
  POST /api/v1/products
  PUT /api/v1/products/:id
  DELETE /api/v1/products/:id
  \`\`\`

### Configuration

Use the following environment variables:

  \`\`\`yaml
  DATABASE_URL: postgresql://user:pass@localhost:5432/db
  REDIS_URL: redis://localhost:6379
  JWT_SECRET: your-secret-key
  \`\`\`

---

> **Note**: For more information, please refer to the [official documentation](https://docs.example.com).


# Project Documentation

## Table of Contents

- [Project Documentation](#project-documentation)
	- [Table of Contents](#table-of-contents)
	- [Introduction](#introduction)
		- [Key Features](#key-features)
	- [Installation](#installation)
	- [Usage](#usage)
	- [API Reference](#api-reference)
		- [\`doSomething(input: string): string\`](#dosomethinginput-string-string)
	- [Contributing](#contributing)
	- [License](#license)

## Introduction

Welcome to our project! This documentation will guide you through the installation process, basic usage, and how to contribute to the project.

### Key Features

- **Feature 1**: Description of feature 1
- **Feature 2**: Description of feature 2
- **Feature 3**: Description of feature 3

## Installation

To install the project, follow these steps:

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/username/project.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd project
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Usage

Here's a quick example of how to use the main functionality of the project:

\`\`\`javascript
const project = require('project');

const result = project.doSomething('Hello, World!');
console.log(result);
\`\`\`

For more detailed usage instructions, please refer to the [User Guide](docs/user-guide.md).

## API Reference

### \`doSomething(input: string): string\`

Performs the main operation of the project.

**Parameters:**

- \`input\`: A string to process

**Returns:**
A processed string

**Example:**
\`\`\`javascript
const result = project.doSomething('Hello');
// result: "Processed: Hello"
\`\`\`

For a complete API reference, see the [API Documentation](docs/api.md).

## Contributing

We welcome contributions to this project! Here's how you can help:

1. Fork the repository
2. Create a new branch (\`git checkout -b feature/AmazingFeature\`)
3. Make your changes
4. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
5. Push to the branch (\`git push origin feature/AmazingFeature\`)
6. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

![Project Logo](https://example.com/project-logo.png)

[![Build Status](https://travis-ci.org/username/project.svg?branch=master)](https://travis-ci.org/username/project)
[![npm version](https://badge.fury.io/js/project.svg)](https://badge.fury.io/js/project)
[![Coverage Status](https://coveralls.io/repos/github/username/project/badge.svg?branch=master)](https://coveralls.io/github/username/project?branch=master)

    `
  }
];
