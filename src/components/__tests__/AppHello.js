import { describe, expect, it } from "vitest"

import { mount } from "@vue/test-utils"
import HelloWorld from "../HelloWorld.vue"

describe("AppHello", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vue" } })
    expect(wrapper.text()).toContain("Hello Vue")
  })
})
