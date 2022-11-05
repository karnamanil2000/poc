import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     props: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })

  it('renders h1 tag', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find("h1").text()).toEqual("Random Dog Images")
  })

  it('button has correct text rendered', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('#myCounter').text()).toEqual("Increase font size")
  })
})
