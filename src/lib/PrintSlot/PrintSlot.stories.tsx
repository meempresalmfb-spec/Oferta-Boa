import type { Meta, StoryObj } from '@storybook/react-vite'
import { PrintSlot } from './PrintSlot'

const meta = {
  title: 'Componentes/PrintSlot',
  component: PrintSlot,
} satisfies Meta<typeof PrintSlot>

export default meta
type Story = StoryObj<typeof meta>

export const Placeholder: Story = {
  args: { legenda: 'exemplo do grupo' },
}
