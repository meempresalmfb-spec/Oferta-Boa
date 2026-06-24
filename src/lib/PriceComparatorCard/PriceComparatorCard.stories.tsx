import type { Meta, StoryObj } from '@storybook/react-vite'
import { PriceComparatorCard } from './PriceComparatorCard'

const meta = {
  title: 'Componentes/PriceComparatorCard',
  component: PriceComparatorCard,
} satisfies Meta<typeof PriceComparatorCard>

export default meta
type Story = StoryObj<typeof meta>

export const Padrao: Story = {}

export const OutroProduto: Story = {
  args: {
    produto: 'Ração Premium 15kg',
    precoHoje: 'R$ 119',
    maiorPreco: 'R$ 189',
    quedaPct: '-37% vs. histórico',
    menorDesde: 'menor preço desde jan/2025',
  },
}
