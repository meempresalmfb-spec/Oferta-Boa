import type { Meta, StoryObj } from '@storybook/react-vite'
import { Scene } from './Scene'
import { PriceComparatorCard } from '../PriceComparatorCard/PriceComparatorCard'

const meta = {
  title: 'Componentes/Scene',
  component: Scene,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Scene>

export default meta
type Story = StoryObj<typeof meta>

export const MediaDireita: Story = {
  args: {
    eyebrow: 'comparador de preço',
    titulo: 'A gente confere o preço antes de indicar',
    children: 'Só entra no grupo o que está mesmo no menor preço.',
    media: <PriceComparatorCard />,
    lado: 'dir',
  },
}

export const MediaEsquerda: Story = {
  args: { ...MediaDireita.args, lado: 'esq' },
}
