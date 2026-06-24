import type { Preview, Decorator } from '@storybook/react-vite'
import type { CSSProperties } from 'react'
import '../src/styles.css'

const accents: Record<string, string> = {
  beleza: 'var(--accent-beleza)',
  pet: 'var(--accent-pet)',
  casa: 'var(--accent-casa)',
}

// Aplica o acento do nicho escolhido na toolbar — prova a fábrica cega:
// o mesmo componente, 3 acentos, só trocando --accent.
const withNiche: Decorator = (Story, context) => {
  const niche = (context.globals.niche as string) || 'beleza'
  return (
    <div style={{ '--accent': accents[niche], padding: 24 } as unknown as CSSProperties}>
      <Story />
    </div>
  )
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  globalTypes: {
    niche: {
      description: 'Acento do nicho',
      defaultValue: 'beleza',
      toolbar: {
        title: 'Nicho',
        icon: 'paintbrush',
        items: [
          { value: 'beleza', title: 'Beleza' },
          { value: 'pet', title: 'Pet' },
          { value: 'casa', title: 'Casa' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withNiche],
}

export default preview
