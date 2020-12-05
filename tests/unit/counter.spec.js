import Counter from "../../src/components/Counter";
import { mount } from "@vue/test-utils";

describe('Counter', () => {
    it('defaults to a count 0', () => {
        const wrapper = mount(Counter)
        expect(wrapper.vm.count).toBe(0)
    })

    it('shows the current count', () => {
        const wrapper = mount(Counter)
        console.log(wrapper.html())
        expect(wrapper.html()).toContain(0)
    })

    it('increments the count on increment button click', () => {
        const wrapper = mount(Counter)
        wrapper.find('#increment').trigger('click')
        expect(wrapper.vm.count).toBe(1)
    })
})
