import type { Meta, StoryObj } from '@storybook/react-vite'
import { WhyFreeCard } from './WhyFreeCard'
import { CtaButton } from '../CtaButton/CtaButton'

const meta = {
  title: 'Componentes/WhyFreeCard',
  component: WhyFreeCard,
} satisfies Meta<typeof WhyFreeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Padrao: Story = {}

export const ComCta: Story = {
  render: (args) => (
    <WhyFreeCard {...args}>
      <CtaButton href="#">Entrar grátis</CtaButton>
    </WhyFreeCard>
  ),
}
