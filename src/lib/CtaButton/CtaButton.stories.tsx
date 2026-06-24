import type { Meta, StoryObj } from '@storybook/react-vite'
import { CtaButton } from './CtaButton'

const meta = {
  title: 'Componentes/CtaButton',
  component: CtaButton,
  args: { children: 'Entrar no grupo' },
} satisfies Meta<typeof CtaButton>

export default meta
type Story = StoryObj<typeof meta>

export const Padrao: Story = {}

export const ComoLink: Story = {
  args: { href: '#' },
}
