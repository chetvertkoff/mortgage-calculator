import { mount } from '@vue/test-utils'
import ChartHeader from '@/App/components/ChartHeader.vue'

describe('ChartHeader', () => {
  test('является экземпляром Vue', () => {
    const wrapper = mount(ChartHeader)
    expect(wrapper)
  })
})
